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
  async redirects() {
    return [
      {
        source: "/resources/news-and-insights",
        destination: "/news-and-insights",
        permanent: true,
      },
      {
        source: "/resources/newsletter",
        destination: "/newsletter",
        permanent: true,
      },
      {
        source: "/resources/events",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/resources/latest-news",
        destination: "/news-and-insights",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
