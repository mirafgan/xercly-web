# Xercly website — implementation record

User approved the desktop/mobile design and bilingual implementation plan in this chat.

Ruling: Use this new standalone xercly-web folder, as explicitly requested, instead of adding apps/web to the mobile monorepo. No changes to the mobile project are required.
Ruling: This user-created empty project directory is already isolated; no Git worktree is needed. No repository or commits are created implicitly.
Ruling: Local-only delivery; legal documents remain clearly marked drafts and account deletion does not pretend to submit a request.

- [x] Setup and locale routing — locale tests observed red, then green (3/3).
- [x] Editorial home page and artwork — local transparent WebP and CSS/HTML phone.
- [x] Parallax and native interactions — reduced-motion, native FAQ/menu.
- [x] Complete Azerbaijani and English content/legal pages — 12 public locale pages.
- [x] Browser verification, accessibility, build, review, documentation

Initial verification: ESLint, TypeScript, 3 unit tests and Next.js production build passed.

Browser verification first pass: 13 passed, 4 failed, 1 intentional WebKit capture skip. Failures identified real rotated botanical overflow and low-contrast step numbers. An added phone-layout regression test also reproduced 564px content inside a 540px screen.
Fixes: reduce mobile botanical width at the source, tighten phone's internal vertical rhythm by 36px, use existing accessible muted token for step numbers. Independent read-only reviewer found the same contrast issue and ambiguous provider wording; provider wording is now conditional on actual release activation.

Final browser result: 21 passed, 1 skipped (duplicate WebKit screenshot capture), 0 failed. Chromium 156 and WebKit 27.2 covered 12 locale pages, language-preserving routes, 360/390/768/1440 widths, keyboard menu/FAQ, JavaScript-disabled content, 404/noindex, full phone layout, parallax, runtime motion preference changes and axe WCAG A/AA checks. Screenshots saved in docs/previews.
Final independent read-only source review: provider wording and contrast findings addressed; no remaining material source findings reported. Visual fidelity and jurisdictional legal sufficiency were excluded by the reviewer; screenshot review was performed by the implementer and legal documents remain explicit drafts.

Delivery is local only; no deployment, account deletion service, financial backend, commit or push was performed. The mobile workspace was not modified during website implementation. Its native/export checks are not relevant to this separate project and were not re-run.
