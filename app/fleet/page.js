import Fleet from "@/components/Fleet/Fleet"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Fleet Management Shipping Company | Nautilus Shipping",
    description:
      "Nautilus Shipping has successfully manned 237 vessels and continues to expand its fleet. As a leading fleet management shipping company, we ensure efficiency, safety, and compliance for bulk carriers, tankers, and specialized vessels. Explore our fleet management solutions today.",
    path: "/fleet",
    metaImage: "/our-approach/img01.png",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Fleet />
    </>
  )
}
