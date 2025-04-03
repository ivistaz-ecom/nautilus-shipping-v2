import NewsAndInsights from "@/components/ResourcesPage/NewsAndInsights/NewsAndInsights"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/resources/news-and-insights")
}

export default function Page() {
  const metadata = getMetadata("/resources/news-and-insights")
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
      <NewsAndInsights />
    </>
  )
}
