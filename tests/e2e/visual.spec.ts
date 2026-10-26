import { test, expect } from "@playwright/test";

test("capture design previews", async ({ page }, info) => {
  test.skip(
    info.project.name !== "chromium",
    "One set of design artifacts is sufficient.",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const preview of [
    { name: "desktop-az", path: "/az", width: 1440, height: 1000 },
    { name: "mobile-az", path: "/az", width: 390, height: 844 },
    { name: "desktop-en", path: "/en", width: 1440, height: 1000 },
    { name: "mobile-en", path: "/en", width: 390, height: 844 },
    { name: "privacy-en", path: "/en/privacy", width: 1440, height: 1000 },
  ]) {
    await page.setViewportSize({
      width: preview.width,
      height: preview.height,
    });
    await page.goto(preview.path);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all(
        Array.from(document.images).map((image) =>
          image.decode().catch(() => {}),
        ),
      );
    });
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.screenshot({
      path: `docs/previews/${preview.name}.png`,
      fullPage: true,
    });
  }
});
