import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"
import FAQs from "@/components/FAQs/FAQs"
import { getMetadata } from "@/utils/metadata"

export async function generateMetadata() {
  return getMetadata("/service/ship-management")
}

const ShipManagement = () => {
  const metadata = getMetadata("/resources/ship-management")
  const data = {
    title:
      "Efficient Ship Operations, Tailored <span class='hide-br'><br></span> for You",

    imageUrl: "/service/img01.png",
    desc1:
      "Managing a fleet requires a precise balance of expertise, compliance, and operational efficiency. At Nautilus Shipping, a leader among <b class='font-bold'>ship management companies for global fleet management services</b>, we ensure your vessels operate seamlessly, meeting the highest safety and performance standards. Our services cater to various vessel types, including <b class='font-bold'>bulk ship management</b> and <b class='font-bold'>container ship management services</b>, providing routine maintenance to long-term operational planning tailored to meet your specific needs.",
    desc2:
      "We pride ourselves on proactive solutions that minimize downtime and ensure compliance with international regulations. With a dedicated team of maritime professionals and cutting-edge technology, we consistently deliver results that enhance your fleet’s performance and longevity.",
  }

  const msData = {
    title: "Our Technical Management Services Include:",
    services: [
      {
        ques: "Maintenance And Repairs:",
        ans: "Ensuring vessels are always in top operational condition.",
      },
      {
        ques: "Planned Maintenance System:",
        ans: "Proactive planning for seamless operations.",
      },
      {
        ques: "Safety And Environmental Compliance:",
        ans: "Adherence to IMO regulations and safety protocols.",
      },
      {
        ques: "Procurement:",
        ans: "Efficient supply chain solutions for essential spares and services.",
      },
      {
        ques: "Performance Monitoring:",
        ans: "Real-time tracking to maximize efficiency and reduce costs.",
      },
    ],
  }

  const keyFeaturesData = {
    keyFeatures: [
      {
        imageUrl: "/service/key-features/icon01.svg",
        desc: "Tailored maintenance schedules to ensure optimal performance",
      },
      {
        imageUrl: "/service/key-features/icon02.svg",
        desc: "Proactive compliance management, aligning with IMO and other global standards",
      },
      {
        imageUrl: "/service/key-features/icon03.svg",
        desc: "Detailed real-time operational updates and performance insights",
      },
    ],
    buttonText: "Explore",
    desc: "Ship management solutions that keep your fleet running efficiently",
  }

  const faqs = [
    {
      ques: "How does Nautilus Shipping ensure cost efficiency in ship management?",
      ans: "Our approach includes real-time performance monitoring, planned maintenance systems, and strategic procurement to reduce operational expenses and improve fleet longevity, leading to significant OPEX savings for our clients.",
    },
    {
      ques: "What ship management services does Nautilus Shipping offer?",
      ans: "We provide technical management, safety and environmental compliance, maintenance planning, procurement, and performance tracking, ensuring seamless operations across diverse vessel types.",
    },
    {
      ques: "How does Nautilus Shipping ensure compliance with global maritime regulations?",
      ans: "We align with IMO standards, Port State Control requirements, and industry best practices, ensuring every vessel under our management meets the highest regulatory standards.",
    },
  ]

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
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading data={data} />
      <ManagementServices data={msData} />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
      <FAQs data={faqs} />
    </>
  )
}

export default ShipManagement
