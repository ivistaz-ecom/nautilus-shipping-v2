import NextSeo from "@/components/Seo/Seo"
import Inspection from "@/components/ServicePage/Inspection/Inspection"

export default function Page() {
  const seoField = {
    title: "Vessel Inspection Services | Nautilus Shipping",
    description:
      "Ensure compliance and safety with Nautilus Shipping’s vessel inspection services. Our pre-purchase inspections, safety audits, and condition monitoring help shipowners maintain high performance and meet global regulatory standards.",
    path: "/service/inspection",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Inspection />
    </>
  )
}
