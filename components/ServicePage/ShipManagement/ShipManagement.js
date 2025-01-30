import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const ShipManagement = () => {
  const data = {
    title: "Efficient Ship Operations, <br /> Tailored <br /> for You",
    imageUrl: "/service/image01.png",
    desc1:
      "Managing a fleet requires a precise balance of expertise, compliance, and operational efficiency. At Nautilus Shipping, our ship management services are designed to ensure your vessels operate seamlessly, meeting the highest safety and performance standards. From routine maintenance to long-term operational planning, we tailor our services to meet your specific requirements, enabling you to focus on your business objectives. At the same time, we take care of your fleet",
    desc2:
      "We pride ourselves on proactive solutions that minimize downtime and ensure compliance with international regulations. With a dedicated team of maritime professionals and cutting-edge technology, we consistently deliver results that enhance your fleet’s performance and longevity.",
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

export default ShipManagement
