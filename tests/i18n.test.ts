import test from "node:test";
import assert from "node:assert/strict";
import { isLocale, localizedPath } from "../src/lib/i18n";

test("only Azerbaijani and English are supported", () => {
  assert.equal(isLocale("az"), true);
  assert.equal(isLocale("en"), true);
  for (const value of ["ru", "AZ", "", "privacy", "../en"])
    assert.equal(isLocale(value), false);
});
test("language switching preserves each legal page", () => {
  for (const page of [
    "privacy",
    "terms",
    "user-agreement",
    "delete-account",
    "support",
  ]) {
    assert.equal(localizedPath("az", page), `/az/${page}`);
    assert.equal(localizedPath("en", page), `/en/${page}`);
  }
});
test("home links have no trailing empty segment", () => {
  assert.equal(localizedPath("az"), "/az");
  assert.equal(localizedPath("en"), "/en");
});
