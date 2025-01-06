/** @type {import('next').NextConfig} */

const DASHBOARD_URL = process.env.DASHBOARD_URL || "http://localhost:3001";
const LOGIN_URL = process.env.LOGIN_URL || "http://localhost:3002";

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/home",
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `https://bytebank-turborepo-dashboard.vercel.app/`,
        source: "/dashboard/:path*",
        destination: `https://bytebank-turborepo-dashboard.vercel.app/:path*`,
      },
      {
        source: "/login",
        destination: `https://bytebank-turborepo-login.vercel.app/`,
        source: "/login/:path*",
        destination: `https://bytebank-turborepo-login.vercel.app/:path*`,
      },
    ];
  },
};
