import Newsletter from "@/components/ResourcesPage/Newsletter/Newsletter"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/resources/newsletter")
}

export default function Page() {
  const metadata = getMetadata("/resources/newsletter")
  // const seoField = {
  //   title: "Stay Informed with the Nautilus Shipping Newsletter",
  //   description:
  //     "Subscribe to the Nautilus Newsletter for exclusive insights into the maritime industry. Each edition is packed with expert opinions, innovative strategies, the latest news, and real-world case studies from Nautilus Shipping. Whether you’re a seasoned seafarer or a maritime enthusiast, our newsletter brings you firsthand accounts and essential updates to keep you informed and connected.",
  //   path: "/resources/newsletter",
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
      <Newsletter />
    </>
  )
}
