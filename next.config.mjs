/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["docs.nautilusshipping.com"],
  },
  experimental: {
    esmExternals: true,
  },
}

export default nextConfig
