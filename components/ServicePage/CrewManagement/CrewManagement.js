import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"

const CrewManagement = () => {
  const headingData = {
    title: "Skilled Professionals for Safe </br> and Reliable </br> Operations",
    imageUrl: "/service/img02.png",
    desc1:
      "Behind every successful voyage is a capable crew, and at Nautilus Shipping, we make it our mission to deliver the best. Our crew management solutions ensure your vessels are staffed with highly trained, experienced, and motivated professionals who excel in both technical skill and operational readiness.",
    desc2:
      "From recruitment and onboarding to ongoing training and career development, we handle every aspect of crew management with care and precision. Our commitment to seafarer welfare fosters a supportive work environment that translates to better retention rates and consistent operational reliability. With Nautilus, you get a partner who values your crew as much as you do.",
  }

  const msData = {
    title: "Our Specific Services Include:",
    services: [
      {
        ques: "Recruitment And Selection:",
        ans: "Finding the right talent for your fleet, tailored to your vessel’s needs.",
      },
      {
        ques: "Training And Development:",
        ans: "Equipping crew with technical and safety knowledge to excel onboard.",
      },
      {
        ques: "Welfare Management:",
        ans: "Supporting seafarers’ well-being through comprehensive welfare policies.",
      },
      {
        ques: "Payroll Services:",
        ans: "Ensuring timely and accurate compensation for your crew.",
      },
    ],
  }

  const keyFeaturesData = {
    keyFeatures: [
      {
        imageUrl: "/service/key-features/icon04.svg",
        desc: "Recruitment of certified seafarers tailored to fleet requirements",
      },
      {
        imageUrl: "/service/key-features/icon05.svg",
        desc: "Comprehensive training programs focused on safety, technical skills, and compliance",
      },
      {
        imageUrl: "/service/key-features/icon06.svg",
        desc: "Crew welfare policies that prioritise well-being and long-term retention",
      },
    ],
    buttonText: "Discover",
    desc: "See how our crew management services prioritize your team’s growth and safety",
  }

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <Heading data={headingData} />
      <ManagementServices data={msData} />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
    </>
  )
}

export default CrewManagement
