import { expect, test, type Page } from "@playwright/test";
import { PHONE_VIEWPORT, expectWithinViewport, mockEnquiries } from "./helpers";

function careForm(page: Page) {
  const form = page.getByRole("form", { name: "Let’s make the next step easier." });

  return {
    form,
    name: form.getByLabel("Your name"),
    email: form.getByLabel("Email address"),
    website: form.getByLabel("Website URL"),
    help: form.getByLabel("What would you like help with?"),
    submit: form.getByRole("button", { name: /Send Care enquiry/ }),
    status: form.getByRole("status"),
  };
}

async function fillCareEnquiry(page: Page) {
  const form = careForm(page);
  await form.name.fill("Test Person");
  await form.email.fill("test@example.com");
  await form.website.fill("example.co.uk");
  await form.help.fill("Monthly updates and a speed check, please.");
  return form;
}

test.describe("Care enquiry form", () => {
  test("required fields block submission", async ({ page }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/care#care-enquiry");

    const form = careForm(page);
    await form.submit.click();

    await expect(form.name).toBeFocused();
    for (const field of [form.name, form.email, form.website, form.help]) {
      await expect(field).toHaveAttribute("required", "");
    }

    expect(requests).toHaveLength(0);
  });

  test("valid details send a Care enquiry and show success", async ({ page }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/care#care-enquiry");

    const form = await fillCareEnquiry(page);
    await form.submit.click();

    await expect(form.status).toContainText(
      "Thank you, your Care enquiry has been sent. I’ll reply within 3 working days."
    );
    await expect(
      form.status.getByText(
        "If you don’t see my reply, please check your spam or junk folder."
      )
    ).toBeVisible();
    await expect(form.name).toHaveValue("");

    expect(requests).toHaveLength(1);
    const body = requests[0].postData() ?? "";
    expect(body).toMatch(/name="service"\s+care/);
    expect(body).toMatch(/name="currentWebsiteUrl"\s+example\.co\.uk/);
    expect(body).toMatch(/name="project"\s+Monthly updates/);
    // The honeypot field is present but empty.
    expect(body).toMatch(/name="website"\s+-{2,}/);
  });

  test("an error from the route is shown", async ({ page }) => {
    await page.route("**/api/enquiries", (route) =>
      route.fulfill({
        status: 400,
        contentType: "application/json",
        body: JSON.stringify({ error: "Please enter a valid email address." }),
      })
    );
    await page.goto("/care#care-enquiry");

    const form = await fillCareEnquiry(page);
    await form.submit.click();

    await expect(form.status).toHaveText("Please enter a valid email address.");
    await expect(form.submit).toBeEnabled();
  });

  test("links to the Privacy Policy", async ({ page }) => {
    await page.goto("/care#care-enquiry");

    await expect(
      careForm(page).form.getByRole("link", { name: "Privacy Policy" })
    ).toHaveAttribute("href", "/privacy");
  });

  test.describe("on mobile", () => {
    test.use({ viewport: PHONE_VIEWPORT });

    test("fields and button are visible and usable", async ({ page }) => {
      await mockEnquiries(page);
      await page.goto("/care#care-enquiry");

      const form = careForm(page);
      for (const field of [form.name, form.email, form.website, form.help]) {
        await field.scrollIntoViewIfNeeded();
        await expectWithinViewport(page, field);
        await expect(field).toBeEditable();
      }

      await form.submit.scrollIntoViewIfNeeded();
      await expectWithinViewport(page, form.submit);
    });
  });
});
