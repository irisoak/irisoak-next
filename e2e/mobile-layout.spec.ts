import { expect, test, type Page } from "@playwright/test";
import {
  PHONE_VIEWPORT,
  PUBLIC_PAGES,
  contactForm,
  expectNoHorizontalOverflow,
  expectWithinViewport,
  mockEnquiries,
} from "./helpers";

/*
  The main call to action on each page, found by its accessible name.
*/
const MAIN_ACTIONS: Record<string, (page: Page) => ReturnType<Page["getByRole"]>> = {
  "/": (page) => page.getByRole("link", { name: "Explore services" }),
  "/services": (page) =>
    page.getByRole("link", { name: "Get started" }).first(),
  "/work": (page) =>
    page.getByRole("main").getByRole("link", { name: "Get in touch" }),
  "/care": (page) => page.getByRole("link", { name: "Explore plans" }),
  "/privacy": (page) =>
    page.getByRole("button", { name: /(Disable|Enable) analytics/ }),
  "/portfolio-partnership": (page) =>
    page
      .getByRole("region", { name: /A website for your business/ })
      .getByRole("link", { name: "Tell me about your business" }),
};

test.describe("Mobile layout", () => {
  test.use({ viewport: PHONE_VIEWPORT });

  for (const { path } of PUBLIC_PAGES) {
    test(`${path} fits the phone width and its main action is usable`, async ({
      page,
    }) => {
      await page.goto(path);

      await expectNoHorizontalOverflow(page);
      await expectWithinViewport(page, page.getByRole("heading", { level: 1 }));

      const action = MAIN_ACTIONS[path](page);
      await action.scrollIntoViewIfNeeded();
      await expectWithinViewport(page, action);
      await expect(action).toBeEnabled();
    });
  }

  test("homepage form controls are visible and usable", async ({ page }) => {
    await mockEnquiries(page);
    await page.goto("/#contact");

    const form = contactForm(page);
    const fields = [form.name, form.business, form.email, form.details];

    for (const field of fields) {
      await field.scrollIntoViewIfNeeded();
      await expectWithinViewport(page, field);
      await expect(field).toBeEditable();
    }

    await form.name.fill("Test Person");
    await expect(form.name).toHaveValue("Test Person");

    await form.submit.scrollIntoViewIfNeeded();
    await expectWithinViewport(page, form.submit);
    await expect(form.submit).toBeEnabled();
  });
});
