import HomePage from "@/components/HomePage/HomePage"
import NextSeo from "@/components/Seo/Seo"

export default function Home() {
  const seoField = {
    title: "Nautilus Shipping | The Standard for Excellence in Ship Management",
    description:
      "For over 17 years, Nautilus Shipping has provided reliable ship management services, including technical management, crew management, inspections, and commercial solutions. With 200+ ships manned and 100,000+ seafarers in our network, we deliver maritime excellence globally.",
    path: "",
    metaImage: "",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <HomePage />
    </>
  )
}
