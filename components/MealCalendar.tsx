import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash, Share } from "lucide-react";
import { useState } from "react";

interface PlannedMeal {
  id: string;
  mealTitle: string;
  date: Date;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
}

interface MealCalendarProps {
  plannedMeals: PlannedMeal[];
  onClearWeek: () => void;
  onShareMealPlan: () => void;
  onRemoveMeal: (id: string) => void;
}

export const MealCalendar = ({
  plannedMeals,
  onClearWeek,
  onShareMealPlan,
  onRemoveMeal,
}: MealCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const getMealsForDate = (date: Date) => {
    return plannedMeals.filter(
      (meal) => meal.date.toDateString() === date.toDateString()
    );
  };

  const selectedDateMeals = selectedDate ? getMealsForDate(selectedDate) : [];

  const getMealTypeColor = (mealType: string) => {
    switch (mealType) {
      case "breakfast":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "lunch":
        return "bg-green-100 text-green-800 border-green-200";
      case "dinner":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "snack":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Calendar Section */}
      <Card className="animate-fade-in-up">
        <CardHeader>
          <CardTitle className="text-xl font-display">Meal Calendar</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearWeek}
              className="hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <Trash className="h-4 w-4 mr-2" />
              Clear Week
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onShareMealPlan}
              className="hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
            >
              <Share className="h-4 w-4 mr-2" />
              Share Plan
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border shadow-sm"
          />
        </CardContent>
      </Card>

      {/* Selected Date Meals */}
      <Card className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <CardHeader>
          <CardTitle className="text-xl font-display">
            {selectedDate
              ? selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Select a Date"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedDateMeals.length > 0 ? (
            selectedDateMeals.map((meal) => (
              <div
                key={meal.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-900">
                    {meal.mealTitle}
                  </h4>
                  <Badge
                    variant="outline"
                    className={getMealTypeColor(meal.mealType)}
                  >
                    {meal.mealType.charAt(0).toUpperCase() +
                      meal.mealType.slice(1)}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveMeal(meal.id)}
                  className="hover:bg-red-50 hover:text-red-600"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No meals planned for this date</p>
              <p className="text-sm mt-2">Add meals from your saved recipes!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
