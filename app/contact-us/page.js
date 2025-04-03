import ContactPage from "@/components/ContactPage/ContactPage"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/contact-us")
}

export default function Page() {
  const metadata = getMetadata("/contact-us")
  // const seoField = {
  //   title: "Contact Nautilus Shipping | Ship Management Companies in India",
  //   description:
  //     "Get in touch with Nautilus Shipping, one of the leading ship management companies in India. Whether you need technical ship management services or Nautilus maritime solutions, our team is ready to assist. Visit our offices in Chennai, Mumbai, Bengaluru, Port Blair, Dubai, and Singapore.",
  //   path: "/contact-us",
  //   metaImage: "",
  //   pageType: "WebSite",
  // }

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metadata.schema),
          }}
        />
      </head>
      <ContactPage />
    </>
  )
}
