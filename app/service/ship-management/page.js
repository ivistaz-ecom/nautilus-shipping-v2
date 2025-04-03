import ShipManagement from "@/components/ServicePage/ShipManagement/ShipManagement"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/service/ship-management")
}

export default function Page() {
  const metadata = getMetadata("/resources/ship-management")
  // const seoField = {
  //   title: "Ship Management Services India | Nautilus Shipping",
  //   description:
  //     "Nautilus Shipping provides comprehensive ship management services in India, ensuring technical excellence, compliance, and operational efficiency. As a trusted ship management company, we optimize performance across bulk carriers, tankers, and offshore vessels.",
  //   path: "/service/ship-management",
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
      <ShipManagement />
    </>
  )
}
