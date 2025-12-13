import type { NextConfig } from "next";

// UBAH DARI ': NextConfig' MENJADI ': any'
const nextConfig: any = {
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
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;