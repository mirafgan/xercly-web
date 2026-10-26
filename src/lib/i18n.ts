export type Locale = "az" | "en";
export const locales: readonly Locale[] = ["az", "en"];
export function isLocale(value: string): value is Locale {
  return value === "az" || value === "en";
}
export function localizedPath(locale: Locale, page = ""): string {
  return page ? `/${locale}/${page}` : `/${locale}`;
}
