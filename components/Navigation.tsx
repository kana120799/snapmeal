import { Camera, Heart, ShoppingCart, Home, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavigationProps {
  currentView: "home" | "recipes" | "grocery" | "favorites";
  onViewChange: (view: "home" | "recipes" | "grocery" | "favorites") => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home" as const, label: "Home", icon: Home },
    { id: "recipes" as const, label: "Recipes", icon: Camera },
    { id: "grocery" as const, label: "Grocery", icon: ShoppingCart },
    { id: "favorites" as const, label: "Favorites", icon: Heart },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 animate-fade-in-down">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-3 rounded-2xl shadow-lg animate-float">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                SnapMeal
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Food Loves You ❤️
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 animate-fade-in-down">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => onViewChange(item.id)}
                  className={`relative flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                    currentView === item.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25"
                      : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                  {currentView === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                  )}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 hover:bg-orange-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onViewChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 justify-start w-full transition-all duration-300 ${
                      currentView === item.id
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-orange-50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
