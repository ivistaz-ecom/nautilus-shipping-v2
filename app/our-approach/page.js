import OurApproachPage from "@/components/OurApproachPage/OurApproachPage"
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
      <OurApproachPage />
    </>
  )
}
