import { Link } from 'react-router-dom'

const TopMenu = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Brand/Logo */}
          <div className="shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
              NKS<span className="text-indigo-600">hub</span>
            </a>
          </div>
      
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to={"/"} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <Link to={"/signup"} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Sign Up
            </Link>
            <Link to={"/login"} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </Link>
          </nav>
      
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md">
              Get Started
            </a>
          </div>
      
          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}

          {/* Mobile list of Items */}
          <nav className="flex md:hidden">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <Link to={"/signup"} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Sign Up
            </Link>
            <Link to={"/login"} className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default TopMenu
