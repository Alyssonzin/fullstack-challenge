import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TMDB_TOKEN_BEARER: process.env.TMDB_TOKEN_BEARER,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      }
    ]
  }
};

export default nextConfig;
