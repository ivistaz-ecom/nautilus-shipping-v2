import Newsletter from "@/components/ResourcesPage/Newsletter/Newsletter"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Stay Informed with the Nautilus Shipping Newsletter",
    description:
      "Subscribe to the Nautilus Newsletter for exclusive insights into the maritime industry. Each edition is packed with expert opinions, innovative strategies, the latest news, and real-world case studies from Nautilus Shipping. Whether you’re a seasoned seafarer or a maritime enthusiast, our newsletter brings you firsthand accounts and essential updates to keep you informed and connected.",
    path: "/resources/newsletter",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Newsletter />
    </>
  )
}
