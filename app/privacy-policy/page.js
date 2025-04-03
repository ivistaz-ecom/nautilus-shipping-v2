import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/privacy-policy")
}

export default function Page() {
  const metadata = getMetadata("/privacy-policy")
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
      <PrivacyPolicy />
    </>
  )
}
