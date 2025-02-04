const Heading = () => {
  return (
    <div className="pt-[125px] pb-14">
      <h1 className="text-6xl font-light text-center leading-tight">
        India’s fastest growing <br /> Ship Management company
      </h1>
      <div className="bg-[url('/careers/bg.png')] bg-cover relative mt-10">
        <div className="bg-black/60 absolute inset-0"></div>
        <div className="max-w-screen-xl mx-auto w-full py-20 px-4 relative z-10 text-white space-y-10">
          <h2 className="text-6xl font-light leading-tight">
            Why Join <br /> Nautilus Shipping?
          </h2>
          <p className="text-[22px] font-light">
            At Nautilus Shipping, we value our seafarers by ensuring on-time
            payments, offering competitive wages among the best in the industry,
            and prioritizing your safety with modern, well-maintained vessels
            that meet stringent safety standards. With a modern and expanding
            fleet equipped with cutting-edge technology, we provide exciting
            career opportunities both at sea and ashore, including pathways for
            career advancement. Join us to embark on a rewarding journey where
            your skills and dedication are truly recognized.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Heading
