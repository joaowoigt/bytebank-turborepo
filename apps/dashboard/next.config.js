/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  assetPrefix: "/dashboard",
  experimental: {
    cssChunking: false, // default
  },
  async rewrites() {
    return {
      beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: "/dashboard/_next/:path*",
          destination: "/_next/:path*",
        },
      ],
    };
  },
};
