import { expect, test } from "@playwright/test";
import { PUBLIC_PAGES } from "./helpers";

test.describe("Public page smoke checks", () => {
  for (const { path, heading } of PUBLIC_PAGES) {
    test(`${path} loads and shows its main heading`, async ({ page }) => {
      const response = await page.goto(path);

      expect(response?.ok(), `${path} should return a successful status`).toBe(true);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    });
  }
});
