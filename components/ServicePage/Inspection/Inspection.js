import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"
import PrePurchaseInspection from "../components/PrePurchaseInspection"
import FAQs from "@/components/FAQs/FAQs"

const Inspection = () => {
  const data = {
    title:
      "Thorough Inspections for <span class='hide-br'><br></span> Safer <span class='hide-br'><br></span> Voyages",
    imageUrl: "/service/img03.png",
    desc1:
      "Safety and compliance are critical to maritime success. At Nautilus Shipping, our expert <b class='font-bold'>vessel inspection services</b> uphold the highest standards for fleet safety and global regulatory adherence. From comprehensive ship assessments to pre-purchase evaluations, we provide shipping companies with detailed insights that mitigate risks and protect investments.",
    desc2:
      "As part of our broader <b class='font-bold'>Marine Crew Management Services</b> and operational solutions, our inspections are conducted by seasoned professionals using a robust <b class='font-bold'>crew management system</b> that integrates findings with ongoing fleet operations. With a track record of high RightShip scores and zero detentions, our inspection expertise adds tangible value to commercial shipping operations.",
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
    desc: "A Comprehensive Inspection for Your Fleet Today.",
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
