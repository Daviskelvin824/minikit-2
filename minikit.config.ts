const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */

export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjExODU1MDUsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg0YzlkYTdmNjlkNTE3MkVjMjI1NjA2ODlkMzU1OTQ5Y0EwNDU5ZGM0In0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LTIudmVyY2VsLmFwcCJ9",
    signature:
      "wjsCAoePiVOxneVQwKk6zlD9Bqw+mUH0Mz163aHbbkJFs6B15TcW9gPnwEd/f3vs4DDtp+SLmsycv8k0q3vWdRw=",
  },

  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "minikit-2",
    subtitle: "mini-kit",
    description: "davisminikit",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "trymini",
    ogTitle: "davismini",
    ogDescription: "davis mini",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
