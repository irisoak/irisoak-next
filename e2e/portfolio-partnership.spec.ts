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
      "Thank you, your enquiry has been sent. I'll reply within 3 working days."
    );

    // The enquiry type is not shown in the form; it is sent with the request.
    expect(requests).toHaveLength(1);
    const body = requests[0].postData() ?? "";
    expect(body).toMatch(/name="type"\s+portfolio-partnership/);
    expect(body).toContain("Test Business");
  });

  test("final CTA also opens the partnership enquiry form", async ({ page }) => {
    await mockEnquiries(page);
    await page.goto("/portfolio-partnership");

    await page.getByRole("link", { name: "Apply for the partnership" }).click();

    await expectPartnershipEnquiryForm(page);
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
