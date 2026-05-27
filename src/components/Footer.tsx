
import { NavLink } from 'react-router'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍳</span>
              <h3 className="text-xl font-bold text-orange-400">RecipeHub</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Discover delicious recipes, cooking tips, and culinary inspiration for every occasion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Pinterest</span>
                📌
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipes" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  All Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  My Favorites
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Recipe Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Popular Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Vegetarian
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Stay Connected</h4>
            <p className="text-gray-300 text-sm">
              Get the latest recipes and cooking tips delivered to your inbox.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
            <div className="text-gray-300 text-sm">
              <p>📧 hello@recipehub.com</p>
              <p>📞 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 RecipeHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
