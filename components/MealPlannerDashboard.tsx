import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SavedMealsGrid } from "./SavedMealsGrid";
import { MealCalendar } from "./MealCalendar";
import { Search, Filter, Heart, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";

interface SavedMeal {
  id: number;
  title: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  rating: number;
  tags: string[];
  addedDate: string;
}

interface PlannedMeal {
  id: string;
  mealTitle: string;
  date: Date;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
}

export const MealPlannerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [plannedMeals, setPlannedMeals] = useState<PlannedMeal[]>([
    {
      id: "1",
      mealTitle: "Mediterranean Pasta Salad",
      date: new Date(),
      mealType: "lunch",
    },
    {
      id: "2",
      mealTitle: "Quick Veggie Stir Fry",
      date: new Date(Date.now() + 86400000), // tomorrow
      mealType: "dinner",
    },
  ]);

  // Sample saved meals data
  const savedMeals: SavedMeal[] = [
    {
      id: 1,
      title: "Mediterranean Pasta Salad",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      cookTime: "15 min",
      servings: 4,
      difficulty: "Easy",
      rating: 4.8,
      tags: ["Healthy", "Quick", "Vegetarian"],
      addedDate: "Dec 1, 2024",
    },
    {
      id: 2,
      title: "Quick Veggie Stir Fry",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
      cookTime: "20 min",
      servings: 2,
      difficulty: "Easy",
      rating: 4.6,
      tags: ["Healthy", "Vegan", "Asian"],
      addedDate: "Nov 28, 2024",
    },
    {
      id: 3,
      title: "Avocado Toast Supreme",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
      cookTime: "10 min",
      servings: 1,
      difficulty: "Beginner",
      rating: 4.9,
      tags: ["Breakfast", "Healthy", "Quick"],
      addedDate: "Dec 2, 2024",
    },
    {
      id: 4,
      title: "Spicy Thai Curry",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      cookTime: "35 min",
      servings: 4,
      difficulty: "Medium",
      rating: 4.7,
      tags: ["Spicy", "Thai", "Comfort"],
      addedDate: "Nov 30, 2024",
    },
  ];

  const handleAddToCalendar = (meal: SavedMeal) => {
    const newPlannedMeal: PlannedMeal = {
      id: `${meal.id}-${Date.now()}`,
      mealTitle: meal.title,
      date: new Date(),
      mealType: "dinner",
    };
    setPlannedMeals([...plannedMeals, newPlannedMeal]);
    console.log(`Added ${meal.title} to calendar`);
  };

  const handleClearWeek = () => {
    setPlannedMeals([]);
    console.log("Cleared week's meal plan");
  };

  const handleShareMealPlan = () => {
    console.log("Sharing meal plan...");
    // Implementation for sharing functionality
  };

  const handleRemoveMeal = (id: string) => {
    setPlannedMeals(plannedMeals.filter((meal) => meal.id !== id));
  };

  const filterOptions = [
    { value: "all", label: "All Meals" },
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "beginner", label: "Beginner" },
    { value: "healthy", label: "Healthy" },
    { value: "quick", label: "Quick" },
    { value: "vegetarian", label: "Vegetarian" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-display font-bold text-gray-900">
          Meal Planner Dashboard
        </h1>
        <p className="text-xl text-gray-600">
          Your saved recipes and meal planning hub
        </p>
        <div className="bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded-2xl border border-pink-200 max-w-2xl mx-auto">
          <p className="text-red-800 font-medium">
            💖 Food loves you back! Plan your meals with joy and embrace every
            delicious moment ✨
          </p>
        </div>
      </div>

      <Tabs defaultValue="saved" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="saved" className="flex items-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>Saved Meals</span>
          </TabsTrigger>
          <TabsTrigger value="planner" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Meal Planner</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="saved" className="space-y-6 mt-8">
          {/* Search and Filter Section */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span>Find Your Perfect Meal</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search saved recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-orange-200 focus:border-orange-400 focus:ring-orange-300"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-orange-200 rounded-md focus:border-orange-400 focus:ring-orange-300 bg-white min-w-[150px]"
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Saved Meals Grid */}
          <SavedMealsGrid
            meals={savedMeals}
            onAddToCalendar={handleAddToCalendar}
            searchQuery={searchQuery}
            selectedFilter={selectedFilter}
          />
        </TabsContent>

        <TabsContent value="planner" className="mt-8">
          <MealCalendar
            plannedMeals={plannedMeals}
            onClearWeek={handleClearWeek}
            onShareMealPlan={handleShareMealPlan}
            onRemoveMeal={handleRemoveMeal}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
