/**
 * Offline-safe fallback for `next/font/google`.
 *
 * The original `next/font/google` helpers (Montserrat, Inter, etc.)
 * fetch CSS + woff2 files from Google Fonts AT BUILD TIME, so
 * `next build` fails when the network is flaky/offline
 * (ECONNRESET from fonts.gstatic.com).
 *
 * These mocks expose the same call signature:
 *   const montserrat = Montserrat({ subsets, weight, variable, ... })
 *   montserrat.className  -> "" (no build-time CSS needed)
 *   montserrat.variable   -> "" (safe to use as className)
 *   montserrat.style      -> { fontFamily: "<Font>, <system fallbacks>" }
 *
 * Real webfonts are still loaded at RUNTIME via <link> tags
 * in pages/_app.js, so visuals are preserved when online,
 * but the build no longer depends on Google Fonts being reachable.
 */

function createFontMock(family) {
  return function fontMock(_options) {
    return {
      className: "",
      variable: "",
      style: {
        fontFamily: `${family}, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`,
      },
    };
  };
}

export const Montserrat = createFontMock("Montserrat");
export const Playfair_Display = createFontMock("'Playfair Display'");
export const Inter = createFontMock("Inter");
export const Lato = createFontMock("Lato");

// Catch-all for any other font added in future without touching this file twice.
const genericMock = createFontMock("inherit");
export const Roboto = genericMock;
export const Open_Sans = genericMock;
export const Poppins = genericMock;
export const Oswald = genericMock;
export const Raleway = genericMock;
export const Merriweather = genericMock;
