import NextSeo from "@/components/Seo/Seo"
import CrewManagement from "@/components/ServicePage/CrewManagement/CrewManagement"

export default function Page() {
  const seoField = {
    title: "Crew Management Services | Nautilus Shipping",
    description:
      "Nautilus Shipping offers marine crew management services, including recruitment, training, and welfare programs. With a strong focus on seafarer well-being and operational excellence, we ensure skilled and motivated crews for global fleet operations.",
    path: "/service/crew-management",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <CrewManagement />
    </>
  )
}
