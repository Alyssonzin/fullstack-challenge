import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TMDB_TOKEN_BEARER: process.env.TMDB_TOKEN_BEARER,
  }
};

export default nextConfig;
