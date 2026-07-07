# TotallyMath — Legal Risk Report

**Date:** July 6, 2026
**Scope:** A free, non-commercial hobby game site shared with friends, deployed on Vercel.
**Bottom line:** **Overall lawsuit risk is LOW.** The realistic bad outcomes are a *takedown email* or your *school blocking the site* — not an actual lawsuit. But two features (the proxy, and embedding commercial games) carry the most risk, and there are cheap fixes.

> ⚠️ I'm not a lawyer and this isn't legal advice — it's an engineer's honest risk read so you can make good decisions.

---

## Overall risk rating

| Concern | Likelihood of a lawsuit | Severity | Notes |
|---|---|---|---|
| Self-hosted open-source games | 🟢 Very low | Low | Now fixed — attribution + licenses kept |
| Embedding external commercial games | 🟡 Low–moderate | Low | Framing gray area; most block themselves |
| The Proxy / "unblocker" feature | 🟠 Moderate | Moderate | Biggest real risk — see fixes |
| Trademark (site name/branding) | 🟢 Low | Low | Avoid copying another site's logo/name |
| Privacy / COPPA (minors) | 🟢 Very low | Low | We collect ~nothing |
| Getting *sued* (any cause) | 🟢 **Low** | — | Small hobby site = not a lawsuit target |

**Translation:** For a hobby site you share with friends, nobody is realistically going to *sue* you. The thing that actually happens to sites like this is: (a) a copyright holder emails a takedown, or (b) your school IT blocks the domain. Both are survivable and non-legal.

**Risk goes UP a lot if you:** run ads / charge money (turns it commercial), host *pirated* commercial games (Retro Bowl, FNAF, etc.), or the site gets popular enough to get noticed.

---

## 1. Self-hosted open-source games — 🟢 Very low (now handled)

You host ~16 games' actual files on your domain. These are open-source (MIT, GPL-3.0, Unlicense, etc.). Open-source licenses **let you do this** — but almost all require **attribution** (keeping the author's name + license).

**What we did to make this compliant:**
- Added a **/credits page** listing every game's author, license, and source link.
- Added an attribution line on each game's page.
- Kept the original `LICENSE` files inside each game folder.

**One to watch — Hextris is GPL-3.0.** GPL is "copyleft": because you send its code to players' browsers, you're *distributing* it, so you must keep it open-source and provide the source. We link to the source and keep its license, which satisfies this. ✅ Fine as-is. (If you ever *modify* a GPL game, you must publish your changes too.)

---

## 2. Embedding external commercial games — 🟡 Low–moderate

Games like HexGL, Lichess, Cookie Clicker load from *their* servers inside an iframe or a new tab.

- **Linking** to another site: essentially always legal.
- **Framing** someone's site inside yours: a legal gray area (it can raise copyright/trademark arguments), but rarely litigated for a non-commercial hobby site. In practice, most of these sites send an `X-Frame-Options` header that *stops* the embed anyway.

**Fix (cheap):** Prefer "open in new tab" over iframe for external commercial games, and never present them as if *you* made them. Already partly handled — your player page has an "Open in Tab" fallback.

---

## 3. The Proxy / "unblocker" feature — 🟠 Moderate (biggest real risk)

A built-in web proxy that "bypasses school filters" is the single riskiest part, because:

- It can be **used to reach anything**, including content that creates liability (you become the intermediary).
- Schools/employers may treat it as **circumventing network security**, which can escalate faster than a game page.
- It draws far more negative attention than a game list.

**Current status:** Your `/proxy` page references an Ultraviolet service worker (`/uv/…`) that **isn't actually set up**, so the feature is non-functional right now. That's good — it means you can decide before it does anything.

**Recommended fixes (pick one):**
1. **Remove the Proxy page entirely** (lowest risk, recommended for a site you share at school). ← my suggestion
2. Keep it but clearly label it "for accessing the games on this site only," and don't let it load arbitrary URLs.
3. If you really want a general proxy, understand it materially raises your risk profile and is the thing most likely to get the whole domain banned.

---

## 4. Trademark & branding — 🟢 Low

"TotallyMath" is close in style to "Totally Science," and this project started by cloning that site.

- A *name* alone is low risk. The danger is **copying their logo, exact styling, or copyrighted page code** — that's copyright/trademark infringement.
- **Fix:** Use your own name, your own colors/logo (you already have a distinct purple theme), and don't copy another site's images or source. Add "Not affiliated with any other gaming site" to the footer. ✅ Added.

---

## 5. Privacy / COPPA (kids under 13) — 🟢 Very low

Your users are likely students, some under 13. US COPPA regulates collecting personal info from under-13s.

- You **don't collect personal info** — no accounts, no ad trackers, only local game saves. That's the safest possible posture.
- **Fixes done:** Added Privacy Policy, Cookie Policy, and a cookie notice stating no ad tracking. ✅

---

## 6. What actually protects you (DMCA safe harbor) — ✅ done

The realistic scenario is a rights-holder emailing "take my game down." Having a **DMCA / Contact page** with a clear takedown process means you can just… take it down, and you look responsible. This is the highest-value, lowest-effort protection, and it's now in place. ✅

---

## Priority fixes (ranked)

1. 🟠 **Decide on the Proxy.** Remove `/proxy` unless you specifically need it. *(Biggest risk reduction.)*
2. 🔴 **Never host pirated commercial games** (Retro Bowl, Basket Random, FNAF, Geometry Dash, etc.). Hosting their actual files *is* copyright infringement — this is the one thing that turns "low risk" into "real risk."
3. 🟢 **Keep it non-commercial.** No ads, no payments. Money makes you a target and weakens "hobby/fair-use" arguments.
4. 🟢 **Honor takedowns fast** using the DMCA page. Done.
5. 🟢 **Keep attribution intact.** Don't delete the /credits page or the LICENSE files. Done.

---

## Already implemented in this update

- ✅ `/privacy`, `/cookies`, `/terms`, `/credits`, `/dmca` pages
- ✅ Cookie-consent notice (no ad tracking)
- ✅ Per-game open-source attribution + licenses
- ✅ Footer with legal links + "not affiliated" disclaimer
- ✅ Original license files preserved in each game folder

**Still your call:** whether to keep the Proxy page (see §3).
