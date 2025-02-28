import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/privacy-policy")
}

export default function Page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  )
}
