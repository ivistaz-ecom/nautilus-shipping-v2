import NewsAndInsights from "@/components/ResourcesPage/NewsAndInsights/NewsAndInsights"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/resources/news-and-insights")
}

export default function Page() {
  return (
    <>
      <NewsAndInsights />
    </>
  )
}
