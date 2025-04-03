import Disclaimer from "@/components/Disclaimer/Disclaimer"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/disclaimer")
}

export default function Page() {
  const metadata = getMetadata("/disclaimer")
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
      <Disclaimer />
    </>
  )
}
