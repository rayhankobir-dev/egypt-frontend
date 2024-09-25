/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "egypt-backend-txj3.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "http://localhost:4000",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
