import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google avatar
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com", // fallback avatar
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com", // Google logo (login button)
      },
    ],
  },
};

export default nextConfig;