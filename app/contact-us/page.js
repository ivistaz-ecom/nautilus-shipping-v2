import ContactPage from "@/components/ContactPage/ContactPage"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Contact Nautilus Shipping | Ship Management Companies in India",
    description:
      "Get in touch with Nautilus Shipping, one of the leading ship management companies in India. Whether you need technical ship management services or Nautilus maritime solutions, our team is ready to assist. Visit our offices in Chennai, Mumbai, Bengaluru, Port Blair, Dubai, and Singapore.",
    path: "/contact-us",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <ContactPage />
    </>
  )
}
