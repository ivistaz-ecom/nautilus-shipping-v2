import Disclaimer from "@/components/Disclaimer/Disclaimer"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Disclaimer | Nautilus Shipping",
    description:
      "Read the disclaimer for Nautilus Shipping's  to understand the limitations of liability, accuracy of information, and usage terms of our website.",
    path: "/disclaimer",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Disclaimer />
    </>
  )
}
