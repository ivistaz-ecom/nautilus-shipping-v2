import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"
import PrePurchaseInspection from "../components/PrePurchaseInspection"

const Inspection = () => {
  const data = {
    title: "Thorough Inspections for </br> Safer </br> Voyages",
    imageUrl: "/service/image03.png",
    desc1:
      "Safety and compliance are at the core of maritime success, and at Nautilus Shipping, we provide comprehensive inspection services to ensure your fleet operates within the highest safety and regulatory standards. Whether pre-purchase evaluation, routine condition monitoring, or a detailed safety audit, our inspections are thorough, precise, and tailored to meet your needs.",
    desc2:
      "Our extensive experience and keen attention to detail help you identify potential risks before they become costly. Our inspection process enhances operational efficiency and ensures your vessels comply with evolving global regulations, safeguarding your investment and reputation.",
  }

  const keyFeaturesData = {
    keyFeatures: [
      {
        imageUrl: "/service/key-features/icon07.svg",
        desc: "Pre-purchase inspections to evaluate vessel condition and mitigate risks",
      },
      {
        imageUrl: "/service/key-features/icon08.svg",
        desc: "Detailed safety audits to ensure compliance with maritime standards",
      },
      {
        imageUrl: "/service/key-features/icon09.svg",
        desc: "Regular condition monitoring to support preventive maintenance efforts",
      },
    ],
    buttonText: "Schedule",
    desc: "",
  }

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading data={data} />
      <PrePurchaseInspection />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
    </>
  )
}

export default Inspection
