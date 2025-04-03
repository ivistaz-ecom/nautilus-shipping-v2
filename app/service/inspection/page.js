import Inspection from "@/components/ServicePage/Inspection/Inspection"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/service/inspection")
}

export default function Page() {
  const metadata = getMetadata("/resources/inspection")
  // const seoField = {
  //   title: "Vessel Inspection Services | Nautilus Shipping",
  //   description:
  //     "Ensure compliance and safety with Nautilus Shipping’s vessel inspection services. Our pre-purchase inspections, safety audits, and condition monitoring help shipowners maintain high performance and meet global regulatory standards.",
  //   path: "/service/inspection",
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
      <Inspection />
    </>
  )
}
