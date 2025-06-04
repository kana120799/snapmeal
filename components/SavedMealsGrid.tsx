import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Clock, Users, Star } from "lucide-react";
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

interface SavedMealsGridProps {
  meals: SavedMeal[];
  onAddToCalendar: (meal: SavedMeal) => void;
  searchQuery: string;
  selectedFilter: string;
}

export const SavedMealsGrid = ({
  meals,
  onAddToCalendar,
  searchQuery,
  selectedFilter,
}: SavedMealsGridProps) => {
  const filteredMeals = meals.filter((meal) => {
    const matchesSearch =
      meal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      selectedFilter === "all" ||
      meal.difficulty.toLowerCase() === selectedFilter ||
      meal.tags.some((tag) => tag.toLowerCase() === selectedFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMeals.map((meal, index) => (
        <Card
          key={meal.id}
          className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative overflow-hidden">
            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute top-4 right-4">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full p-2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                onClick={() => onAddToCalendar(meal)}
              >
                <Calendar className="h-4 w-4 text-orange-600" />
              </Button>
            </div>

            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-white/90 backdrop-blur-sm font-medium shadow-lg"
              >
                {meal.difficulty}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-medium">{meal.rating}</span>
              </div>
            </div>
          </div>

          <CardHeader className="space-y-3 pb-3">
            <CardTitle className="text-lg font-display font-semibold line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
              {meal.title}
            </CardTitle>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="font-medium">{meal.cookTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="font-medium">{meal.servings} servings</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-0">
            <div className="flex flex-wrap gap-2">
              {meal.tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-orange-200 text-orange-700 hover:bg-orange-50 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="text-xs text-gray-500">
              Added on {meal.addedDate}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
