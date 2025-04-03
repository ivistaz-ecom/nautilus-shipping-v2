import OurApproachPage from "@/components/OurApproachPage/OurApproachPage"
import NextSeo from "@/components/Seo/Seo"

export default function Page() {
  const seoField = {
    title: "Experience the 4P Framework in Ship Management | Nautilus Shipping",
    description:
      "Discover the transformative 4P Framework at Nautilus Shipping, designed to enhance your fleet's operational efficiency and profitability. Our strategic approach includes problem-solving agility, performance-based remuneration, profit optimization for ship owners, and strict adherence to Port State Control regulations. Embrace a partnership that aligns with your business goals and drives long-term value, ensuring smooth sailing in dynamic market conditions. Connect with us to see how our tailored solutions can maximize your returns.",
    path: "/our-approach",
    metaImage: "",
    pageType: "WebSite",
  }

  return (
    <>
      <NextSeo {...seoField} />
      <OurApproachPage />
    </>
  )
}
