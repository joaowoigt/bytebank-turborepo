/** @type {import('next').NextConfig} */

const { basePath } = require("../dashboard/next.config");

const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://localhost:3001";

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/home",
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `${DASHBOARD_URL}`,
        source: "/dashboard/:path*",
        destination: `${DASHBOARD_URL}/:path*`,
      },
    ];
  },
};
