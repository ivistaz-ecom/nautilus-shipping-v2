/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "docs.nautilusshipping.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
