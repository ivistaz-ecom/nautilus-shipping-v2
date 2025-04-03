"use client"
import NextSeo from "@/components/Seo/Seo"
import ShipManagement from "@/components/ServicePage/ShipManagement/ShipManagement"
import { usePathname } from "next/navigation"

const page = () => {
  const pathName = usePathname()
  console.log("Current Pathname: ", pathName) // Check what this outputs in the console

  const seoField = {
    title: "Ship Management Services India | Nautilus Shipping",
    description:
      "Nautilus Shipping provides comprehensive ship management services in India, ensuring technical excellence, compliance, and operational efficiency. As a trusted ship management company, we optimize performance across bulk carriers, tankers, and offshore vessels.",
    path: pathName, // Pathname should be passed here
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
