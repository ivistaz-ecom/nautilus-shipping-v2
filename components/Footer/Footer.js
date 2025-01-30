import Copyright from "./components/Copyright"
import MenuSection from "./components/MenuSection"
import WhereWeServe from "./components/WhereWeServe"

const Footer = () => {
  return (
    <div className="border border-b-0 border-gray-300 rounded-3xl">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col w-full border-b border-gray-300">
        <MenuSection />
        <WhereWeServe />
      </div>
      <Copyright />
    </div>
  )
}

export default Footer
