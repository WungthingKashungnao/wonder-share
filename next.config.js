/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["img.clerk.com", "images.pexels.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
