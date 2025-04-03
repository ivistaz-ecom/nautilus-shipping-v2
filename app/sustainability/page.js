import SustainabilityPage from "@/components/SustainabilityPage/SustainabilityPage"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/sustainability")
}

export default function Page() {
  const metadata = getMetadata("/resources/sustainability")
  // const seoField = {
  //   title: "Sustainable Ship Management | Nautilus Shipping",
  //   description:
  //     "Nautilus Shipping integrates energy efficiency, decarbonization, and sustainable ship management practices to minimize environmental impact. As a leader among vessel shipping companies, we align with IMO 2030 and 2050 goals for a greener maritime future.",
  //   path: "/sustainability",
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
      <SustainabilityPage />
    </>
  )
}
