import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Camera,
  Upload,
  ChefHat,
  ShoppingCart,
  Heart,
  Sparkles,
  Clock,
  Users,
  Camera as CameraIcon,
  Star,
  Zap,
} from "lucide-react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { RecipeCard } from "@/components/RecipeCard";
import { GroceryList } from "@/components/GroceryList";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MealPlannerDashboard } from "@/components/MealPlannerDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "recipes" | "grocery" | "favorites"
  >("home");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const sampleRecipes = [
    {
      id: 1,
      title: "Mediterranean Pasta Salad",
      cookTime: "15 min",
      servings: 4,
      ingredients: ["Pasta", "Tomatoes", "Olives", "Feta", "Olive Oil"],
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Quick Veggie Stir Fry",
      cookTime: "20 min",
      servings: 2,
      ingredients: [
        "Bell Peppers",
        "Broccoli",
        "Carrots",
        "Soy Sauce",
        "Garlic",
      ],
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      difficulty: "Easy",
    },
    {
      id: 3,
      title: "Avocado Toast Supreme",
      cookTime: "10 min",
      servings: 1,
      ingredients: ["Bread", "Avocado", "Tomato", "Lime", "Salt"],
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
      difficulty: "Beginner",
    },
  ];

  const renderContent = () => {
    switch (currentView) {
      case "recipes":
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-display font-bold text-gray-900">
                Your Recipe Suggestions
              </h1>
              <p className="text-xl text-gray-600">
                Based on what's in your fridge
              </p>
              <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-2xl border border-orange-200 max-w-2xl mx-auto">
                <p className="text-orange-800 font-medium">
                  🍳 Food loves you! Every recipe is crafted with care to make
                  your taste buds dance with joy ✨
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-500">
                  AI-powered recommendations
                </span>
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleRecipes.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className="animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </div>
        );
      case "grocery":
        return <GroceryList />;
      case "favorites":
        return <MealPlannerDashboard />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative text-center space-y-12 py-16 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-70"></div>
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 animate-float"></div>
              <div
                className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>

              <div className="relative space-y-8 animate-fade-in-up">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-6 rounded-3xl shadow-2xl shadow-orange-500/25 animate-scale-in">
                      <ChefHat className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-display font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-fade-in-down">
                    SnapMeal
                  </h1>
                  <div className="space-y-2">
                    <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                      Turn your fridge contents into delicious meals
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      with AI-powered recipe suggestions ✨
                    </p>
                  </div>

                  {/* Food Love Message */}
                  <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 p-6 rounded-3xl border-2 border-orange-200 max-w-3xl mx-auto shadow-lg">
                    <p className="text-orange-800 text-lg font-medium leading-relaxed">
                      🍽️ Hey there, food lover! Don't worry about calories or
                      restrictions -
                      <span className="font-bold text-red-700">
                        {" "}
                        FOOD LOVES YOU{" "}
                      </span>
                      just the way you are! Every bite is a celebration. Just
                      feel the joy and eat something amazing! 💕
                    </p>
                  </div>

                  <div className="flex items-center justify-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <span>Instant Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>Smart Recipes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>Save Favorites</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <PhotoUpload onImageUpload={setUploadedImage} />
              </div>

              {uploadedImage && (
                <div className="animate-fade-in-up space-y-6">
                  <div className="max-w-md mx-auto">
                    <img
                      src={uploadedImage}
                      alt="Uploaded fridge contents"
                      className="w-full h-72 object-cover rounded-2xl shadow-2xl shadow-orange-500/20 border-4 border-white"
                    />
                  </div>
                  <Button
                    onClick={() => setCurrentView("recipes")}
                    className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40"
                  >
                    <Sparkles className="mr-3 h-6 w-6 animate-pulse" />
                    Get Recipe Suggestions
                    <ChefHat className="ml-3 h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 py-20">
              {[
                {
                  icon: CameraIcon,
                  title: "Snap Your Fridge",
                  description:
                    "Simply take a photo of your fridge, pantry, or ingredients you have on hand",
                  color: "orange",
                  delay: "0s",
                },
                {
                  icon: Sparkles,
                  title: "AI Recipe Magic",
                  description:
                    "Our AI analyzes your ingredients and suggests personalized recipes instantly",
                  color: "green",
                  delay: "0.1s",
                },
                {
                  icon: ShoppingCart,
                  title: "Smart Grocery Lists",
                  description:
                    "Automatically generate grocery lists for missing ingredients",
                  color: "blue",
                  delay: "0.2s",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg group animate-fade-in-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-6">
                      <div
                        className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                          feature.color === "orange"
                            ? "bg-gradient-to-br from-orange-100 to-red-100 group-hover:from-orange-200 group-hover:to-red-200"
                            : feature.color === "green"
                            ? "bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200"
                            : "bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200"
                        }`}
                      >
                        <feature.icon
                          className={`h-10 w-10 ${
                            feature.color === "orange"
                              ? "text-orange-600"
                              : feature.color === "green"
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-display font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sample Recipes Preview */}
            <div className="space-y-12 py-20">
              <div className="text-center space-y-4 animate-fade-in-up">
                <h2 className="text-4xl font-display font-bold text-gray-900">
                  Popular Recipes
                </h2>
                <p className="text-xl text-gray-600">
                  Discover what others are cooking
                </p>
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    Loved by thousands
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {sampleRecipes.map((recipe, index) => (
                  <div
                    key={recipe.id}
                    className="animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <RecipeCard recipe={recipe} isPreview />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default Index;
