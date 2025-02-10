import FAQs from "../FAQs/FAQs"
import Header from "../Header/Header"
import FillOutForm from "./components/Form/FillOutForm"
import OurLocations from "./components/OurLocations"
import WhyWeDo from "./components/WhyWeDo"

const ContactPage = () => {
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
      <FAQs />
    </>
  )
}

export default ContactPage
