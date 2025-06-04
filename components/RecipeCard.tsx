import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Heart, ChefHat, Star, Sparkles } from "lucide-react";
import { useState } from "react";

interface Recipe {
  id: number;
  title: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  image: string;
  difficulty: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  isPreview?: boolean;
}

export const RecipeCard = ({ recipe, isPreview = false }: RecipeCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <Card
      className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Top badges */}
        <div className="absolute top-4 right-4">
          <Button
            size="sm"
            variant="secondary"
            className="rounded-full p-2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            onClick={handleFavorite}
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-300 ${
                isFavorited ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
        </div>

        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="bg-white/90 backdrop-blur-sm font-medium shadow-lg"
          >
            {recipe.difficulty}
          </Badge>
        </div>

        {/* Floating rating */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-medium">4.8</span>
          </div>
        </div>
      </div>

      <CardHeader className="space-y-3 pb-3">
        <CardTitle className="text-lg font-display font-semibold line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
          {recipe.title}
        </CardTitle>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-orange-500" />
            <span className="font-medium">{recipe.cookTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{recipe.servings} servings</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
            <Sparkles className="h-4 w-4 mr-1 text-yellow-500" />
            Ingredients:
          </h4>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-orange-200 text-orange-700 hover:bg-orange-50 transition-colors duration-200"
              >
                {ingredient}
              </Badge>
            ))}
            {recipe.ingredients.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
              >
                +{recipe.ingredients.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {!isPreview && (
          <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105">
            <ChefHat className="mr-2 h-4 w-4" />
            View Recipe
            {isHovered && <Sparkles className="ml-2 h-4 w-4 animate-pulse" />}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
