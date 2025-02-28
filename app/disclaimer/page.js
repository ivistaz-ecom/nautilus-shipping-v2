import Disclaimer from "@/components/Disclaimer/Disclaimer"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/disclaimer")
}

export default function Page() {
  return (
    <>
      <Disclaimer />
    </>
  )
}
