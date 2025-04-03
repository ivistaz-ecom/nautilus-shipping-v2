import Team from "@/components/AboutUsPage/Team/Team"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/about-us/team")
}

export default function Page() {
  const metadata = getMetadata("/about-us/team")
  // const seoField = {
  //   title:
  //     "Nautilus Shipping Leadership and Team | Experienced Maritime Professionals",
  //   description:
  //     "Explore the skilled leadership and dedicated team behind Nautilus Shipping. Meet our maritime experts, who bring decades of experience across various aspects of ship management and maritime services. Discover how our leaders drive innovation and excellence in the shipping industry, mentoring a team committed to upholding the highest standards.",
  //   path: "/about-us/team",
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
      <Team />
    </>
  )
}
