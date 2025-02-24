import Newsletter from "@/components/ResourcesPage/Newsletter/Newsletter"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "",
    description: "",
    path: "",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Newsletter />
    </>
  )
}
