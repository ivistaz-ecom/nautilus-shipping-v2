import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const CommercialServices = () => {
  const data = {
    title: "Drive Profitability with Strategic </br> Maritime </br> Solutions",
    imageUrl: "/service/img04.png",
    desc1:
      "In today’s competitive maritime landscape, profitability depends on informed decisions and strategic planning. Nautilus Shipping’s commercial services are designed to help you maximise the value of your fleet. From expert chartering strategies to in-depth market insights, we provide the guidance you need to achieve financial success and operational efficiency.",
    desc2:
      "We go beyond the basics by offering seamless contract negotiations and post-fixture operational support. Our client-focused, data-driven approach ensures you have the tools and expertise to navigate market challenges and seize new opportunities. With Nautilus Shipping, you gain a trusted partner committed to optimizing your fleet’s profitability.",
  }

  const msData = {
    title: "Our Commercial Services Include:",
    services: [
      {
        ques: "Chartering:",
        ans: "Tailored solutions to maximize returns on each voyage.",
      },
      {
        ques: "Contract Management:",
        ans: "Ensuring agreements are clear, fair, and beneficial.",
      },
      {
        ques: "Post-Fixture Support:",
        ans: "Seamless operational management after the charter is fixed.",
      },
    ],
  }

  const keyFeaturesData = {
    keyFeatures: [
      {
        imageUrl: "/service/key-features/icon10.svg",
        desc: "Tailored chartering strategies that align with market trends",
      },
      {
        imageUrl: "/service/key-features/icon11.svg",
        desc: "Expert negotiation and management of contracts to maximize returns",
      },
      {
        imageUrl: "/service/key-features/icon12.svg",
        desc: "Post-fixture support to ensure smooth operational execution and cost savings",
      },
    ],
    buttonText: "Connect With Us",
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
      <ManagementServices data={msData} />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
    </>
  )
}

export default CommercialServices
