import Company from "@/components/AboutUsPage/Company/Company"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/about-us/company")
}

export default function Page() {
  const metadata = getMetadata("/about-us/company")

  // const seoField = {
  //   title: "Nautilus Ship Management | Leading Ship Managers in India",
  //   description:
  //     "With 17 years of expertise, Nautilus Shipping has evolved from a crew management company to a full-service ship management provider. We operate from six global offices, offering technical management, inspections, and commercial services for maritime excellence.",
  //   path: "/about-us/company",
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
      <Company />
    </>
  )
}
