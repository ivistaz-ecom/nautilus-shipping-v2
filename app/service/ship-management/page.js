"use client"
import NextSeo from "@/components/Seo/Seo"
import ShipManagement from "@/components/ServicePage/ShipManagement/ShipManagement"

const page = () => {
  const seoField = {
    title: "Ship Management Services India | Nautilus Shipping",
    description:
      "Nautilus Shipping provides comprehensive ship management services in India, ensuring technical excellence, compliance, and operational efficiency. As a trusted ship management company, we optimize performance across bulk carriers, tankers, and offshore vessels.",
    path: "/service/ship-management",
    metaImage: "/our-approach/img01.png",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <ShipManagement />
    </>
  )
}

export default page
