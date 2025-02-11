import Copyright from "./components/Copyright"
import MenuSection from "./components/MenuSection"
import WhereWeServe from "./components/WhereWeServe"

const Footer = () => {
  return (
    <div className="border border-b-0 border-gray-400 rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto p-4 border-b border-gray-300">
        <MenuSection />
        <div className="hidden md:block">
          <WhereWeServe />
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Footer
