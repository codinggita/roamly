import { Link, useLocation } from "react-router-dom"
import { HiBell, HiUserCircle } from "react-icons/hi"

export default function Navbar() {
  const { pathname } = useLocation()

  const getLinkClass = (path) => {
    const isActive = pathname === path
    return `font-sans text-lg font-medium transition-colors duration-200 px-2 py-1 ${
      isActive 
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-0.5" 
        : "text-gray-500 hover:text-blue-600"
    }`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-10 h-full flex items-center justify-between">
        {/* LEFT — Logo */}
        <Link to="/" className="font-heading text-3xl font-bold text-blue-600 tracking-tight">
          ROAMLY
        </Link>

        {/* CENTER — Nav Links */}
        <div className="flex items-center gap-10">
          <Link to="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link to="/explore" className={getLinkClass("/explore")}>
            Explore
          </Link>
          <Link to="/roambook" className={getLinkClass("/roambook")}>
            RoamBook
          </Link>
        </div>

        {/* RIGHT — Icons */}
        <div className="flex items-center gap-5">
          <HiBell className="text-2xl text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
          <HiUserCircle className="text-4xl text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
        </div>
      </div>
    </nav>
  )
}
