import CareersPage from "@/components/CareersPage/CareersPage"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/careers")
}

export default function Page() {
  const metadata = getMetadata("/careers")
  // const seoField = {
  //   title: "Join Our Team | Careers at Nautilus Shipping",
  //   description:
  //     "Explore exciting career opportunities at Nautilus Shipping and become part of a team committed to excellence in ship management. Whether you're a seasoned professional or just starting out, discover roles that challenge and reward in a supportive environment. Join us in our mission to lead the maritime industry through innovation, dedication, and a commitment to superior service. Start your journey with Nautilus Shipping today and make a global impact.",
  //   path: "/careers",
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
      <CareersPage />
    </>
  )
}
