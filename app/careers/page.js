import CareersPage from "@/components/CareersPage/CareersPage"
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
      <CareersPage />
    </>
  )
}
