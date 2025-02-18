import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"
import PrePurchaseInspection from "../components/PrePurchaseInspection"
import FAQs from "@/components/FAQs/FAQs"

const Inspection = () => {
  const data = {
    title: "Thorough Inspections for </br> Safer </br> Voyages",
    imageUrl: "/service/img03.png",
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

  const faqs = [
    {
      ques: "What is the RightShip rating for Nautilus-managed vessels?",
      ans: "Our vessels maintain a RightShip rating of 4 out of 5, with a proven track record of zero detentions, demonstrating our commitment to safety and regulatory excellence.",
    },
    {
      ques: "What types of vessel inspections does Nautilus Shipping conduct?",
      ans: "We offer pre-purchase inspections, safety audits, and routine condition monitoring to ensure compliance, operational efficiency, and risk mitigation.",
    },
    {
      ques: "How does a pre-purchase inspection benefit shipowners?",
      ans: "Our pre-purchase inspection provides detailed insights into vessel condition, structural integrity, machinery performance, and compliance history, allowing buyers to make informed investment decisions.",
    },
  ]

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
      <FAQs data={faqs} />
    </>
  )
}

export default Inspection
