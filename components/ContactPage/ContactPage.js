import FAQs from "../FAQs/FAQs"
import Header from "../Header/Header"
import FillOutForm from "./components/Form/FillOutForm"
import OurLocations from "./components/OurLocations"
import WhyWeDo from "./components/WhyWeDo"

const ContactPage = () => {
  const faqs = [
    {
      ques: "What types of vessels are in your fleet?",
      ans: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS, including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      ques: "What types of vessels are in your fleet?",
      ans: "Flowbite is first conceptualized and designed using the Figma software, so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      ques: "What types of vessels are in your fleet?",
      ans: "The main difference is that the core components from Flowbite are open-source under the MIT license, whereas Tailwind UI is a paid product. Flowbite relies on smaller and standalone components, while Tailwind UI offers sections of pages.",
    },
  ]

  return (
    <>
      <Header
        logo="/logo.png"
        hamburger="/hamburger-dark.svg"
        search="/search-dark.svg"
      />
      <div className="pt-[87px]">
        {/* Banner */}
        <div className="h-[40vh] sm:h-[60vh] bg-[url('/contact-us/banner.png')] bg-cover bg-center"></div>
      </div>

      {/* Heading */}
      <div className="max-w-screen-xl w-full mx-auto py-10 sm:py-14 px-4 space-y-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-8xl font-light">Contact Us</h1>
        <p className="text-base sm:text-xl w-full sm:w-3/4 font-light">
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
    </>
  )
}

export default ContactPage
