import { expect, type Locator, type Page, type Request } from "@playwright/test";

export const PHONE_VIEWPORT = { width: 390, height: 844 };

/*
  Public routes and the main heading each one should show.
*/
export const PUBLIC_PAGES = [
  { path: "/", heading: /Web Design & Development/ },
  { path: "/services", heading: /Digital services,\s*clearly scoped/ },
  { path: "/work", heading: /From the Studio/ },
  { path: "/care", heading: /A healthier website, without the admin/ },
  { path: "/privacy", heading: /Privacy Policy/ },
  {
    path: "/portfolio-partnership",
    heading: /A website for your business, a case study for mine/,
  },
] as const;

/*
  Intercepts enquiry submissions in the browser so tests never reach the
  real API route, Resend or any inbox. Returns the captured requests.
*/
export async function mockEnquiries(page: Page) {
  const requests: Request[] = [];

  await page.route("**/api/enquiries", async (route) => {
    requests.push(route.request());

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });

  return requests;
}

export function contactForm(page: Page) {
  const section = page.getByRole("region", { name: "Get in touch." });

  return {
    section,
    name: section.getByLabel("Your name"),
    business: section.getByLabel("Business name"),
    email: section.getByLabel("Email address"),
    details: section.getByLabel("Any details you'd like to share."),
    submit: section.getByRole("button", { name: /Send enquiry/ }),
    status: section.getByRole("status"),
  };
}

export async function fillValidEnquiry(page: Page) {
  const form = contactForm(page);

  await form.name.fill("Test Person");
  await form.business.fill("Test Business");
  await form.email.fill("test@example.com");
  await form.details.fill("I would like a new website for my business.");

  return form;
}

export async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;

    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth
    ) - viewportWidth;
  });

  expect(overflow, "page content is wider than the viewport").toBeLessThanOrEqual(0);
}

/*
  Checks an element is visible and sits fully inside the viewport width.
*/
export async function expectWithinViewport(page: Page, locator: Locator) {
  await expect(locator).toBeVisible();

  const box = await locator.boundingBox();
  const viewport = page.viewportSize();

  expect(box, "element has a layout box").not.toBeNull();
  expect(viewport).not.toBeNull();

  if (box && viewport) {
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
    expect(box.width).toBeGreaterThan(0);
    expect(box.height).toBeGreaterThan(0);
  }
}
