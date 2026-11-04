import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Desativa o indicador flutuante com a letra "N" do Next.js dev */
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
