import Image from "next/image"

const Hiring = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3 sm:px-0 w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-16 pb-7 md:pb-14">
      {/* Image Card */}
      <div className="border p-1 border-gray-300 rounded-lg">
        <Image
          src="/careers/hiring-may.jpg"
          width={475}
          height={400}
          alt="Hiring"
          className="w-full max-w-[400px] lg:w-auto rounded"
        />
      </div>
      {/* Text Content */}
      <div className="space-y-4 lg:space-y-5 text-left">
        <h2 className="text-xl md:text-3xl font-light tracking-wider">
          Urgent Requirement
        </h2>
        <p className="text-sm md:text-lg font-light w-full sm:w-9/12">
          We currently seeking a NCV CO(Chief Officer), NCV CE(Chief Engineer),
          NCV Master for immediate deployment on our fleet of 16 Indian coastal
          mini bulk carriers. These vessels, built in 2021, are gearless 8000
          DWT and operate exclusively on the Dharamtar – Jaigad coastal route
          (South of Mumbai).
        </p>
        <p className="text-sm md:text-base font-light w-full sm:w-9/12 tracking-wide">
          <strong>Position:</strong> NCV CO, NCV CE, NCV Master <br />
          <strong>Vessel Type:</strong> Mini Bulk Carrier (Gearless) <br />
          <strong>Built:</strong> 2021 <br />
          <strong>DWT:</strong> 8000 <br />
          <strong>Trading Area:</strong> Indian Coastal – Dharamtar to Jaigad{" "}
          <br />
          Apply now by emailing us at{" "}
          <a
            href="mailto:crewing@nautilusshipping.com"
            className="hover:text-secondary"
          >
            crewing@nautilusshipping.com
          </a>{" "}
          <br />
          Contact our Crewing team at: <br /> Pradeepa:{" "}
          <a href="tel:+919500574771" className="hover:text-secondary">
            +91 95005 74771
          </a>{" "}
          or Imran:{" "}
          <a href="tel:+917397588640" className="hover:text-secondary">
            +91 73975 88640
          </a>{" "}
        </p>
      </div>
    </div>
  )
}

export default Hiring
