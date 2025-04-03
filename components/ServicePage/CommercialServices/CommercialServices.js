import Header from "@/components/Header/Header"
import Heading from "../components/Heading"
import ManagementServices from "../components/ManagementServices/ManagementServices"
import KeyFeatures from "../components/KeyFeatures/KeyFeatures"
import Latest from "../components/Latest/Latest"
import FAQs from "@/components/FAQs/FAQs"

// export async function generateMetadata() {
//   return getMetadata("/service/commercial-services")
// }

const CommercialServices = () => {
  // const metadata = getMetadata("/resources/commercial-services")
  const data = {
    title:
      "Strategic <span class='hide-br'><br></span>  Maritime <span class='hide-br'><br></span>  Solutions",
    imageUrl: "/service/img04.png",
    desc1:
      "In today’s competitive maritime landscape, strategic planning and informed decisions are crucial for profitability. Nautilus Shipping offers <b class='font-bold'>marine chartering companies</b> and <b class='font-bold'>contract management services for ship owners</b>, designed to maximize the value of your fleet. Our seamless <b class='font-bold'>operational management services for shipping companies</b> provide expert chartering strategies, market insights, and post-fixture operational support, ensuring you achieve financial success and operational efficiency.",
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
    desc: "Let’s craft smart solutions to enhance your fleet’s profitability.",
  }

  const faqs = [
    {
      ques: "How does Nautilus Shipping help shipowners maximize profitability?",
      ans: "We provide tailored chartering strategies, expert contract negotiation, and post-fixture support, ensuring optimal returns on every voyage.",
    },
    {
      ques: "What chartering services does Nautilus Shipping offer?",
      ans: "Our commercial team analyzes market trends and secures the best contracts for shipowners, balancing profitability with operational efficiency.",
    },
    {
      ques: "Why choose Nautilus Shipping for commercial services?",
      ans: "Our data-driven approach, strong industry partnerships, and hands-on management enable shipowners to navigate market challenges with confidence.",
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
      <ManagementServices data={msData} />
      <KeyFeatures data={keyFeaturesData} />
      <Latest />
      <FAQs data={faqs} />
    </>
  )
}

export default CommercialServices
