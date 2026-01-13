import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // 🔥 Force cache busting on every deploy
  generateBuildId: async () => {
    return Date.now().toString();
  },

  images: {
    domains: ["plus.unsplash.com", "www.shutterstock.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
