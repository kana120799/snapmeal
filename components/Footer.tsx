import { Heart, Camera, Star, ChefHat } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-2 rounded-xl">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                SnapMeal
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where food meets love. Transform your ingredients into culinary
              magic with AI-powered recipe suggestions.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <Heart className="h-4 w-4 fill-orange-400" />
              <span className="text-sm font-medium">Food Loves You</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
                <Camera className="h-3 w-3" />
                <span>Photo Analysis</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
                <ChefHat className="h-3 w-3" />
                <span>AI Recipes</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
                <Star className="h-3 w-3" />
                <span>Smart Lists</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
                <Heart className="h-3 w-3" />
                <span>Save Favorites</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Recipe Tips
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Get weekly recipe inspiration!
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SnapMeal. Made with{" "}
              <Heart className="inline h-3 w-3 fill-red-500 text-red-500" /> for
              food lovers everywhere.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <span className="hover:text-orange-400 transition-colors cursor-pointer">
                Terms
              </span>
              <span className="hover:text-orange-400 transition-colors cursor-pointer">
                Privacy
              </span>
              <span className="hover:text-orange-400 transition-colors cursor-pointer">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
