import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = [
  "privacy",
  "terms",
  "user-agreement",
  "delete-account",
  "support",
];

test("root opens Azerbaijani and language switch preserves legal routes", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/az$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Xərclərin aydın.",
  );
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Clear spending.",
  );
  await page.goto("/az/privacy");
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/privacy$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy policy",
  );
});

for (const lang of ["az", "en"]) {
  test(`${lang}: every document is readable and clearly marked as a draft`, async ({
    page,
  }) => {
    for (const slug of slugs) {
      const response = await page.goto(`/${lang}/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(
        page.getByText(lang === "az" ? "Qaralama" : "Draft", { exact: true }),
      ).toBeVisible();
      expect(
        await page.getByRole("heading", { level: 2 }).count(),
      ).toBeGreaterThanOrEqual(5);
      await expect(page.locator("form")).toHaveCount(0);
      await expect(
        page.locator(
          'a[href=""], a[href="#"], a[href*="example.com"], a[href*="mailto:"]',
        ),
      ).toHaveCount(0);
    }
  });
}

test("store availability is honest and FAQ expands with the keyboard", async ({
  page,
}) => {
  await page.goto("/az");
  await expect(
    page.locator('a[href*="apps.apple.com"],a[href*="play.google.com"]'),
  ).toHaveCount(0);
  await expect(page.getByText("Tezliklə", { exact: true })).toHaveCount(4);
  const question = page.locator("#faq summary").first();
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByText(
      "Hesab və ya kart adı əlavə etmək bank bağlantısı yaratmır.",
      { exact: false },
    ),
  ).toBeVisible();
});

test("mobile menu closes on navigation and Escape; all key widths fit", async ({
  page,
}) => {
  for (const width of [360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const lang of ["az", "en"]) {
      await page.goto(`/${lang}`);
      const layout = await page.evaluate(() => ({
        viewport: window.innerWidth,
        width: document.documentElement.scrollWidth,
        overflow: Array.from(document.querySelectorAll("body *"))
          .map((element) => ({
            name: element.tagName + "." + element.className,
            right: Math.round(element.getBoundingClientRect().right),
            left: Math.round(element.getBoundingClientRect().left),
          }))
          .filter(
            (element) =>
              element.right > window.innerWidth + 1 || element.left < -1,
          )
          .slice(0, 20),
      }));
      expect(
        layout.width,
        `${lang} ${width}px: ${JSON.stringify(layout)}`,
      ).toBeLessThanOrEqual(width);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/az");
  const menu = page.getByLabel("Menyunu aç");
  await menu.click();
  const nav = page.getByRole("navigation", { name: "Mobil naviqasiya" });
  await expect(nav).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(nav).not.toBeVisible();
  await menu.click();
  await nav.getByRole("link", { name: "İmkanlar", exact: true }).click();
  await expect(nav).not.toBeVisible();
  await expect(page).toHaveURL(/#features$/);
});

test("reduced motion disables parallax and core content works without JavaScript", async ({
  page,
  browser,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/en");
  await page.evaluate(() => window.scrollTo(0, 200));
  expect(
    await page
      .locator("[data-parallax-scene]")
      .evaluate((element) => element.style.getPropertyValue("--phone-y")),
  ).toBe("");
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const fallback = await context.newPage();
  await fallback.goto("http://127.0.0.1:3100/en");
  await expect(fallback.getByRole("heading", { level: 1 })).toContainText(
    "Clear spending.",
  );
  await fallback.getByLabel("Open menu").click();
  await expect(
    fallback.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await fallback.goto("http://127.0.0.1:3100/en/privacy");
  await expect(fallback.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy policy",
  );
  await context.close();
});

test("unknown routes return 404 and preview pages cannot be indexed", async ({
  page,
}) => {
  for (const path of ["/ru", "/az/unknown", "/en/privacy/unknown"]) {
    expect((await page.goto(path))?.status()).toBe(404);
  }
  await page.goto("/en");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
});

test("home and legal page have no serious accessibility violations or browser errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const path of ["/az", "/en", "/az/privacy"]) {
    await page.goto(path);
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(audit.violations).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test("phone mockup includes the full bottom navigation", async ({ page }) => {
  await page.goto("/az");
  const screen = await page
    .getByRole("img", { name: /Xercly tətbiqinin/ })
    .evaluate((element) => {
      const screen = element.firstElementChild!;
      return { height: screen.clientHeight, content: screen.scrollHeight };
    });
  expect(screen.content).toBeLessThanOrEqual(screen.height);
});

test("parallax responds to scroll and respects a changed motion preference", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/az");
  const scene = page.locator("[data-parallax-scene]");
  const offset = () =>
    scene.evaluate((element) => element.style.getPropertyValue("--phone-y"));
  await expect.poll(offset).not.toBe("");
  const initial = await offset();
  await page.evaluate(() => window.scrollTo({ top: 200, behavior: "instant" }));
  await expect.poll(offset).not.toBe(initial);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(offset).toBe("");
  await page.evaluate(() => window.scrollTo({ top: 250, behavior: "instant" }));
  await expect.poll(offset).toBe("");
});
