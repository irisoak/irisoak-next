import { expect, test } from "@playwright/test";
import { contactForm } from "./helpers";

test.describe("Privacy links", () => {
  test("homepage form privacy link opens the Privacy page", async ({
    page,
    context,
  }) => {
    await page.goto("/#contact");

    const link = contactForm(page).section.getByRole("link", {
      name: "Privacy Policy",
    });
    await expect(link).toHaveAttribute("href", "/privacy");

    // The link opens in a new tab.
    const [privacyPage] = await Promise.all([
      context.waitForEvent("page"),
      link.click(),
    ]);

    await privacyPage.waitForLoadState();
    await expect(privacyPage).toHaveURL(/\/privacy$/);
    await expect(
      privacyPage.getByRole("heading", { level: 1 })
    ).toHaveText("Privacy Policy");
  });

  test("footer privacy link opens the Privacy page", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Privacy", exact: true })
      .click();

    await expect(page).toHaveURL("/privacy");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Privacy Policy"
    );
  });
});
