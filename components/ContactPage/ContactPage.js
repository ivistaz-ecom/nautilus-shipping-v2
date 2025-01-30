import FAQs from "../FAQs/FAQs"
import Header from "../Header/Header"
import Form from "./components/Form"
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
        <div className="h-[60vh] bg-[url('/contact-us/banner.png')] bg-cover bg-center"></div>
      </div>

      {/* heading */}
      <div className="max-w-screen-xl w-full mx-auto py-14 px-4 space-y-8">
        <h1 className="text-8xl font-light">Contact Us</h1>
        <p className="text-[22px] w-3/4">
          At Nautilus Shipping, we provide a wide range of services designed to
          optimize your fleet operations and ensure long-term success. From
          safety and compliance to performance and crew welfare, we deliver
          solutions tailored to your needs.
        </p>
      </div>

      <Form />
      <OurLocations />
      <WhyWeDo />
      <FAQs />
    </>
  )
}

export default ContactPage
