import CommercialServices from "@/components/ServicePage/CommercialServices/CommercialServices"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/service/commercial-services")
}

export default function Page() {
  // const seoField = {
  //   title: "Commercial Shipping Companies | Nautilus Shipping",
  //   description:
  //     "Maximize fleet profitability with Nautilus Shipping’s commercial crewing and chartering services. We provide strategic chartering, operational support, and post-fixture management, ensuring optimized performance for shipowners.",
  //   path: "/service/commercial-services",
  //   metaImage: "",
  //   pageType: "WebSite",
  // }

  return (
    <>
      <CommercialServices />
    </>
  )
}
