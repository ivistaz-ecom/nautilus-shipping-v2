import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Privacy Policy | Nautilus Shipping",
    description:
      "Read Nautilus Shipping's Privacy Policy to understand how we collect, use, and protect your personal information. Our policy outlines the steps we take to ensure your data is secure while you interact with our services. We are committed to maintaining your trust and transparency in all our data handling practices.",
    path: "/privacy-policy",
    metaImage: "/our-approach/img01.png",
    pageType: "WebSite",
  }
  return (
    <>
      <NextSeo {...seoField} />
      <PrivacyPolicy />
    </>
  )
}
