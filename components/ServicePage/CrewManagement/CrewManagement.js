import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const CrewManagement = () => {
  const data = {
    title:
      "Skilled Professionals for <br /> Safe and Reliable <br /> Operations",
    imageUrl: "/service/image02.png",
    desc1:
      "Behind every successful voyage is a capable crew, and at Nautilus Shipping, we make it our mission to deliver the best. Our crew management solutions ensure your vessels are staffed with highly trained, experienced, and motivated professionals who excel in both technical skill and operational readiness.",
    desc2:
      "From recruitment and onboarding to ongoing training and career development, we handle every aspect of crew management with care and precision. Our commitment to seafarer welfare fosters a supportive work environment that translates to better retention rates and consistent operational reliability. With Nautilus, you get a partner who values your crew as much as you do.",
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

export default CrewManagement
