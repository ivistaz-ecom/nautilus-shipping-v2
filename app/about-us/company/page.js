import Company from "@/components/AboutUsPage/Company/Company"
import NextSeo from "@/components/Seo/Seo"
import configData from "@/config"

export async function generateMetadata() {
  const siteUrl = configData.websiteMainUrl
  const path = "/about-us/company"
  const fullUrl = `${siteUrl}${path}`
  const title = "Nautilus Ship Management | Leading Ship Managers in India"
  const description =
    "With 17 years of expertise, Nautilus Shipping has evolved from a crew management company to a full-service ship management provider."

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title,
      description,
      siteName: "Nautilus Shipping",
      //images: [{ url: imageUrl }],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [imageUrl],
    // },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export default function Page() {
  const seoField = {
    title: "Nautilus Ship Management | Leading Ship Managers in India",
    description:
      "With 17 years of expertise, Nautilus Shipping has evolved from a crew management company to a full-service ship management provider. We operate from six global offices, offering technical management, inspections, and commercial services for maritime excellence.",
    path: "/about-us/company",
    metaImage: "",
    pageType: "WebSite",
  }
  return (
    <>
      {/* <NextSeo {...seoField} /> */}
      <Company />
    </>
  )
}
