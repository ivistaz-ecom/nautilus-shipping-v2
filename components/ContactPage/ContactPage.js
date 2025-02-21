"use client"

import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"
import FAQs from "../FAQs/FAQs"
import Header from "../Header/Header"
import FillOutForm from "./components/Form/FillOutForm"
import OurLocations from "./components/OurLocations"
import WhyWeDo from "./components/WhyWeDo"

const ContactPage = () => {
  const faqs = [
    {
      ques: "How can I get in touch with your team?",
      ans: "You can reach us via phone, email, or the contact form on this page.",
    },
    {
      ques: "How long does it take to get a response?",
      ans: "We aim to respond to all inquiries within 24 - 48 hours.",
    },
    {
      ques: "Do you have a 24/7 support line?",
      ans: "Yes, we provide round-the-clock support for urgent maritime matters.",
    },
  ]

  return (
    <ParallaxProvider>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <div className="pt-[75px] sm:pt-[87px]">
        {/* Banner */}
        <div className="h-[40vh] sm:h-[60vh] bg-[url('/contact-us/new-banner.png')] bg-cover bg-center"></div>
        {/* <ParallaxBanner
          layers={[
            {
              image: "/contact-us/banner01.jpeg",
              speed: -15,
              expanded: false,
            },
          ]}
          className="w-full mt-5 h-[600px] "
        /> */}
      </div>

      {/* Heading */}
      <div className="max-w-screen-xl w-full mx-auto py-7 sm:py-14 px-4 space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-8xl font-light">Contact Us</h1>
        <p className="text-base sm:text-lg w-full sm:w-3/4 font-light">
          At Nautilus Shipping, we provide a wide range of services designed to
          optimize your fleet operations and ensure long-term success. From
          safety and compliance to performance and crew welfare, we deliver
          solutions tailored to your needs.
        </p>
      </div>

      <FillOutForm />
      <OurLocations />
      <WhyWeDo />
      <FAQs data={faqs} />
    </ParallaxProvider>
  )
}

export default ContactPage
