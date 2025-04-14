"use client"

import { ParallaxProvider } from "react-scroll-parallax"
import FAQs from "../FAQs/FAQs"
import Header from "../Header/Header"
import FillOutForm from "./components/Form/FillOutForm"
import OurLocations from "./components/OurLocations"
import WhyWeDo from "./components/WhyWeDo"
import Form from "./components/Form/Form"
import OurLocationsNew from "./components/OurLocationsNew"

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
    <>
      <ParallaxProvider>
        <Header
          logo="/logo.png"
          hamburger="/hamburger-dark.svg"
          search="/search-dark.svg"
        />
        {/* <div className="pt-[75px] sm:pt-[87px]">
        Banner
        <div className="h-[40vh] sm:h-[60vh] bg-[url('/contact-us/new-banner.png')] bg-cover bg-center"></div>
        <ParallaxBanner
          layers={[
            {
              image: "/contact-us/banner01.jpeg",
              speed: -15,
              expanded: false,
            },
          ]}
          className="w-full mt-5 h-[600px] "
        />
      </div> */}

        {/* Heading */}
        <div className="pt-24 md:pt-28 max-w-screen-lg w-full mx-auto pb-7 sm:pb-14 px-3 md:px-4 space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-8xl font-light text-center">
            Contact Us
          </h1>
          {/* <p className="text-base sm:text-lg w-full font-light">
            At <span class="">Nautilus Shipping</span>, we provide a wide range
            of services designed to optimise your fleet operations and ensure
            long-term success. As one of the trusted{" "}
            <span class="">ship management companies in India</span>, our
            expertise spans safety, compliance, technical management, and crew
            welfare—delivering tailored solutions to meet your unique{" "}
            <br className="hidden md:block" /> maritime needs.
          </p> */}
          <p className="text-base sm:text-lg w-full font-light">
            Whether you're looking for a reliable partner in{" "}
            <span>technical ship management companies</span> or want to learn{" "}
            <br className="hidden md:block" /> more about{" "}
            <span>Nautilus ship management</span> and our global capabilities,
            we’re here to help.
          </p>
        </div>

        <div className="max-w-screen-lg w-full mx-auto pb-7 sm:pb-14 px-3 md:px-4 space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-5xl font-light text-center">
            How can we assist you?
          </h1>

          <p className="text-base sm:text-lg w-full font-light md:w-11/12">
            Fill out the form with your details and requirements, and a member
            of the <span>Nautilus Maritime Services</span> team will be in touch
            shortly.
          </p>
        </div>

        <div className="bg-primary max-w-screen-lg mx-auto rounded-xl w-full sm:w-3/5">
          <Form />
        </div>

        {/* <FillOutForm /> */}
        <OurLocations />
        {/* <OurLocationsNew /> */}
        {/* <WhyWeDo /> */}
        <FAQs data={faqs} />
      </ParallaxProvider>
    </>
  )
}

export default ContactPage
