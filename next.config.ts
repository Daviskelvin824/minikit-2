// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/.well-known/farcaster.json",
        destination:
          "https://api.farcaster.xyz/miniapps/hosted-manifest/01998e89-0527-c0fb-6b8e-97fbbaafbd9c",
        permanent: false, // false = 307 Temporary Redirect
      },
    ];
  },
};

module.exports = nextConfig;
