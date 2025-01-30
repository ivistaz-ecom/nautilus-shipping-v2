import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const CommercialServices = () => {
  const data = {
    title:
      "Drive Profitability with <br /> Strategic Maritime <br /> Solutions",
    imageUrl: "/service/image04.png",
    desc1:
      "In today’s competitive maritime landscape, profitability depends on informed decisions and strategic planning. Nautilus Shipping’s commercial services are designed to help you maximise the value of your fleet. From expert chartering strategies to in-depth market insights, we provide the guidance you need to achieve financial success and operational efficiency.",
    desc2:
      "We go beyond the basics by offering seamless contract negotiations and post-fixture operational support. Our client-focused, data-driven approach ensures you have the tools and expertise to navigate market challenges and seize new opportunities. With Nautilus Shipping, you gain a trusted partner committed to optimizing your fleet’s profitability.",
  }

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading data={data} />
      <ManagementServices />
      <KeyFeatures />
      <Latest />
    </>
  )
}

export default CommercialServices
