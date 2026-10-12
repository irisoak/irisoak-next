import { expect, test } from "@playwright/test";
import { contactForm, fillValidEnquiry, mockEnquiries } from "./helpers";

test.describe("Homepage contact form", () => {
  test("required fields show validation and block submission", async ({ page }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/#contact");

    const form = contactForm(page);
    await form.submit.click();

    // The browser stops the submission and focuses the first missing field.
    await expect(form.name).toBeFocused();

    for (const field of [form.name, form.email, form.details]) {
      await expect(field).toHaveAttribute("required", "");
      expect(
        await field.evaluate(
          (element: HTMLInputElement | HTMLTextAreaElement) =>
            element.validity.valueMissing && element.validationMessage.length > 0
        )
      ).toBe(true);
    }

    // Business name is optional.
    await expect(form.business).not.toHaveAttribute("required", "");

    await form.name.fill("Test Person");
    await form.email.fill("not-an-email");
    await form.details.fill("Some details");
    await form.submit.click();

    await expect(form.email).toBeFocused();
    expect(
      await form.email.evaluate(
        (element: HTMLInputElement) =>
          element.validity.typeMismatch && element.validationMessage.length > 0
      )
    ).toBe(true);

    expect(requests).toHaveLength(0);
  });

  test("valid details submit and show the success message", async ({ page }) => {
    const requests = await mockEnquiries(page);
    await page.goto("/#contact");

    const form = await fillValidEnquiry(page);
    await form.submit.click();

    await expect(form.status).toHaveText(
      "Thank you, your enquiry has been sent. I'll reply within 3 working days."
    );
    await expect(form.name).toHaveValue("");

    expect(requests).toHaveLength(1);
    const body = requests[0].postData() ?? "";
    expect(body).toContain("Test Person");
    expect(body).toContain("test@example.com");
    expect(body).not.toContain('name="type"');
  });
});
