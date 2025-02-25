import Events from "@/components/ResourcesPage/Events/Events"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Meta Title: Past & Upcoming Events | Nautilus Shipping",
    description:
      "Stay updated with the latest events hosted and attended by Nautilus Shipping. Join us to gain insights into the maritime industry, learn from experts, and network with peers. These events are designed to foster professional growth, share industry best practices, and discuss innovative solutions in ship management.",
    path: "/resources/events",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <Events />
    </>
  )
}
