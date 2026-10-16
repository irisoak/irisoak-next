import { expect, test } from "@playwright/test";
import { PHONE_VIEWPORT } from "./helpers";

const NAV_LINKS = [
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Care", path: "/care" },
];

test.describe("Site navigation on desktop", () => {
  test("shows the Iris & Oak / Digital Studio brand lockup", async ({ page }) => {
    await page.goto("/work");

    const brand = page
      .getByRole("banner")
      .getByRole("link", { name: "Iris & Oak Digital Studio home" });

    await expect(brand).toBeVisible();
    await expect(brand).toContainText("Iris & Oak");
    await expect(brand).toContainText("Digital Studio");

    await brand.click();
    await expect(page).toHaveURL("/");
  });

  test("primary navigation links reach their pages", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Primary navigation" });
    await expect(nav).toBeVisible();

    for (const { name, path } of NAV_LINKS) {
      await nav.getByRole("link", { name, exact: true }).click();
      await expect(page).toHaveURL(path);
      await expect(
        nav.getByRole("link", { name, exact: true })
      ).toHaveAttribute("aria-current", "page");
    }

    await expect(
      page.getByRole("banner").getByRole("link", { name: "Get in touch" })
    ).toHaveAttribute("href", "/#contact");
  });

  test("mobile menu is hidden on desktop", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeHidden();
  });
});

test.describe("Site navigation on mobile", () => {
  test.use({ viewport: PHONE_VIEWPORT });

  test("menu opens, closes and its links work", async ({ page }) => {
    await page.goto("/");

    const toggle = page
      .getByRole("banner")
      .getByRole("button", { name: "Navigation menu" });
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });

    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(toggle).toHaveAttribute("aria-controls", "mobile-navigation");

    await expect(
      page.getByRole("navigation", { name: "Primary navigation" })
    ).toBeHidden();
    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(menu).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    for (const { name } of NAV_LINKS) {
      await expect(menu.getByRole("link", { name, exact: true })).toBeVisible();
    }
    await expect(menu.getByRole("link", { name: "Get in touch" })).toBeVisible();

    await toggle.click();
    await expect(menu).toBeHidden();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    // Keyboard: Enter opens, Escape closes and returns focus to the toggle.
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(menu).toBeVisible();
    await page.keyboard.press("Tab");
    await expect(menu.getByRole("link", { name: "Work", exact: true })).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();
    await expect(toggle).toBeFocused();

    await toggle.click();
    await menu.getByRole("link", { name: "Services", exact: true }).click();
    await expect(page).toHaveURL("/services");
    await expect(menu).toBeHidden();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Digital services"
    );
  });

  test("Portfolio Partnership header menu opens, closes and its links work", async ({
    page,
  }) => {
    await page.goto("/portfolio-partnership");

    const toggle = page.getByLabel("Open navigation");
    const menu = page.getByRole("navigation", { name: "Mobile navigation" });

    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(menu).toBeVisible();
    await expect(
      menu.getByRole("link", { name: "Tell me about your business" })
    ).toBeVisible();

    await toggle.click();
    await expect(menu).toBeHidden();

    await toggle.click();
    await menu.getByRole("link", { name: "Work", exact: true }).click();
    await expect(page).toHaveURL("/work");
  });
});
