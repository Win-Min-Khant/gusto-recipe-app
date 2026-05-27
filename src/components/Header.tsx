import { useState } from 'react'
import { NavLink } from 'react-router'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-orange-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold hover:text-orange-200 transition-colors">
              🍳 RecipeHub
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-orange-200 transition-colors font-medium ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `text-white hover:text-orange-200 transition-colors font-medium ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `text-white hover:text-orange-200 transition-colors font-medium ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Favorites
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-orange-200 transition-colors font-medium ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-64 px-4 py-2 rounded-full border-2 border-orange-300 focus:border-orange-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600">
                🔍
              </button>
            </div>
            <NavLink
              to="/profile"
              className="text-white hover:text-orange-200 transition-colors"
            >
              👤 Profile
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-200 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-orange-600 rounded-md mt-2">
              <NavLink
                to="/"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/recipes"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </NavLink>
              <NavLink
                to="/categories"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </NavLink>
              <NavLink
                to="/favorites"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Favorites
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  className="w-full px-4 py-2 rounded-full border-2 border-orange-300 focus:border-orange-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400"
                />
              </div>
              <NavLink
                to="/profile"
                className="block px-3 py-2 text-white hover:bg-orange-700 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
