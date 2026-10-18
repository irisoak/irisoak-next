import { expect, test, type Page } from "@playwright/test";
import { contactForm, fillValidEnquiry, mockEnquiries } from "./helpers";

const ENQUIRY_URL = "/?enquiry=portfolio-partnership#contact";

async function expectPartnershipEnquiryForm(page: Page) {
  await expect(page).toHaveURL(ENQUIRY_URL);

  const form = contactForm(page);
  await expect(form.section).toBeInViewport();
  await expect(form.name).toBeVisible();

  return form;
}

test.describe("Portfolio Partnership enquiry flow", () => {
  test("hero CTA opens the homepage form as a partnership enquiry", async ({
    page,
  }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/portfolio-partnership");

    await page
      .getByRole("region", { name: /A website for your business/ })
      .getByRole("link", { name: "Tell me about your business" })
      .click();

    await expectPartnershipEnquiryForm(page);

    const form = await fillValidEnquiry(page);
    await form.submit.click();

    await expect(form.status).toHaveText(
      "Thank you, your enquiry has been sent. I’ll reply within 3 working days."
    );

    // The enquiry type is not shown in the form; it is sent with the request.
    expect(requests).toHaveLength(1);
    const body = requests[0].postData() ?? "";
    expect(body).toMatch(/name="type"\s+portfolio-partnership/);
    expect(body).toContain("Test Business");
  });

  test("Apply opens the inline application form", async ({ page }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/portfolio-partnership");

    const apply = page.getByRole("button", { name: "Apply for the partnership" });
    const form = page.getByRole("form", { name: "Apply for the partnership" });

    await expect(apply).toHaveAttribute("aria-expanded", "false");
    await expect(apply).toHaveAttribute("aria-controls", "partnership-application");
    await expect(form).toBeHidden();

    // Keyboard: Enter on the focused button opens the form and moves focus to it.
    await apply.focus();
    await page.keyboard.press("Enter");

    await expect(apply).toHaveAttribute("aria-expanded", "true");
    await expect(form).toBeVisible();
    await expect(form).toBeInViewport();
    await expect(
      page.getByRole("heading", { name: "Apply for the partnership" })
    ).toBeFocused();
    await expect(page).toHaveURL("/portfolio-partnership");

    // Required fields block an empty submission.
    await form.getByRole("button", { name: /Send application/ }).click();
    await expect(form.getByLabel("Your name")).toBeFocused();
    for (const label of [
      "Your name",
      "Email address",
      "Business name",
      "Tell me about your business and your website goals",
    ]) {
      await expect(form.getByLabel(label)).toHaveAttribute("required", "");
    }
    await expect(form.getByLabel(/Website URL/)).not.toHaveAttribute(
      "required",
      ""
    );
    expect(requests).toHaveLength(0);

    // A valid application is sent as a Portfolio Partnership enquiry.
    await form.getByLabel("Your name").fill("Test Person");
    await form.getByLabel("Email address").fill("test@example.com");
    await form.getByLabel("Business name").fill("Test Business");
    await form.getByLabel(/Website URL/).fill("testbusiness.co.uk");
    await form
      .getByLabel("Tell me about your business and your website goals")
      .fill("A new five-page website for a local bakery.");
    await form.getByRole("button", { name: /Send application/ }).click();

    await expect(form.getByRole("status")).toHaveText(
      "Thank you, your application has been sent. I’ll reply within 3 working days."
    );

    expect(requests).toHaveLength(1);
    const body = requests[0].postData() ?? "";
    expect(body).toMatch(/name="type"\s+portfolio-partnership/);
    expect(body).toMatch(/name="organisation"\s+Test Business/);
    expect(body).toMatch(/name="currentWebsiteUrl"\s+testbusiness\.co\.uk/);
    expect(body).toMatch(/name="project"\s+A new five-page website/);
    expect(body).toMatch(/name="website"\s+-{2,}/);

    // The button closes the form again.
    await apply.click();
    await expect(apply).toHaveAttribute("aria-expanded", "false");
    await expect(form).toBeHidden();
  });

  test("Apply form shows an error from the route", async ({ page }) => {
    await page.route("**/api/enquiries", (route) =>
      route.fulfill({
        status: 400,
        contentType: "application/json",
        body: JSON.stringify({ error: "Please enter a valid email address." }),
      })
    );
    await page.goto("/portfolio-partnership");
    await page.getByRole("button", { name: "Apply for the partnership" }).click();

    const form = page.getByRole("form", { name: "Apply for the partnership" });
    await form.getByLabel("Your name").fill("Test Person");
    await form.getByLabel("Email address").fill("test@example.com");
    await form.getByLabel("Business name").fill("Test Business");
    await form
      .getByLabel("Tell me about your business and your website goals")
      .fill("Goals");
    await form.getByRole("button", { name: /Send application/ }).click();

    await expect(form.getByRole("status")).toHaveText(
      "Please enter a valid email address."
    );
    await expect(
      form.getByRole("button", { name: /Send application/ })
    ).toBeEnabled();
  });

  test("See recent work links to the Work page", async ({ page }) => {
    await page.goto("/portfolio-partnership");

    await page.getByRole("link", { name: "See recent work" }).click();

    await expect(page).toHaveURL("/work");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /From the Studio/
    );
  });
});
