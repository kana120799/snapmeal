import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Plus, Trash2, Share, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GroceryItem {
  id: number;
  name: string;
  category: string;
  checked: boolean;
  quantity?: string;
}

export const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([
    {
      id: 1,
      name: "Tomatoes",
      category: "Produce",
      checked: false,
      quantity: "3 large",
    },
    {
      id: 2,
      name: "Mozzarella",
      category: "Dairy",
      checked: false,
      quantity: "8 oz",
    },
    {
      id: 3,
      name: "Basil",
      category: "Herbs",
      checked: true,
      quantity: "1 bunch",
    },
    {
      id: 4,
      name: "Olive Oil",
      category: "Pantry",
      checked: false,
      quantity: "1 bottle",
    },
    {
      id: 5,
      name: "Pasta",
      category: "Pantry",
      checked: false,
      quantity: "1 lb",
    },
    {
      id: 6,
      name: "Bell Peppers",
      category: "Produce",
      checked: false,
      quantity: "2 pieces",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
    quantity: "",
  });

  const toggleItem = (id: number) => {
    setGroceryItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setGroceryItems((items) => items.filter((item) => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your grocery list",
    });
  };

  const addCustomItem = () => {
    if (newItem.name.trim()) {
      const id = Math.max(...groceryItems.map((item) => item.id)) + 1;
      setGroceryItems((items) => [
        ...items,
        {
          id,
          name: newItem.name.trim(),
          category: newItem.category,
          quantity: newItem.quantity.trim() || undefined,
          checked: false,
        },
      ]);
      setNewItem({ name: "", category: "Produce", quantity: "" });
      setShowAddForm(false);
      toast({
        title: "Item added! 🎉",
        description: `${newItem.name} has been added to your grocery list`,
      });
    }
  };

  const categories = [...new Set(groceryItems.map((item) => item.category))];
  const checkedItems = groceryItems.filter((item) => item.checked).length;
  const totalItems = groceryItems.length;

  const handleShare = () => {
    toast({
      title: "Grocery list shared! 📱",
      description: "Link copied to clipboard",
    });
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header with food-loving message */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="h-8 w-8 text-red-500 fill-red-500 animate-pulse" />
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Your Grocery List
          </h1>
          <Heart className="h-8 w-8 text-red-500 fill-red-500 animate-pulse" />
        </div>
        <p className="text-xl text-gray-600">
          {checkedItems} of {totalItems} delicious items collected
        </p>
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-2xl border border-orange-200">
          <p className="text-orange-800 font-medium">
            🍽️ Food loves you! Every ingredient is a step closer to your next
            amazing meal ✨
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Progress bar */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-semibold text-gray-800">
                Shopping Progress
              </span>
              <span className="text-lg font-bold text-orange-600">
                {Math.round((checkedItems / totalItems) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${(checkedItems / totalItems) * 100}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              You're doing great! Keep going! 💪
            </p>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            className="flex-1 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
            onClick={handleShare}
          >
            <Share className="mr-2 h-4 w-4" />
            Share List
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Start Shopping
          </Button>
        </div>

        {/* Grocery items by category */}
        {categories.map((category) => {
          const categoryItems = groceryItems.filter(
            (item) => item.category === category
          );

          return (
            <Card
              key={category}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="pb-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span className="text-gray-800">{category}</span>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    {categoryItems.length} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                {categoryItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-102 ${
                      item.checked
                        ? "bg-green-50 border-green-200 shadow-md"
                        : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-md"
                    }`}
                  >
                    <Checkbox
                      checked={item.checked}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                    <div className="flex-1">
                      <div
                        className={`font-medium transition-all duration-200 ${
                          item.checked
                            ? "line-through text-gray-500"
                            : "text-gray-900"
                        }`}
                      >
                        {item.name}
                      </div>
                      {item.quantity && (
                        <div className="text-sm text-gray-500">
                          {item.quantity}
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}

        {/* Add custom item section */}
        <Card className="border-2 border-dashed border-orange-300 hover:border-orange-400 transition-colors">
          <CardContent className="p-6">
            {!showAddForm ? (
              <Button
                variant="ghost"
                className="w-full border-0 text-orange-600 hover:text-orange-700 hover:bg-orange-50 py-8"
                onClick={() => setShowAddForm(true)}
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Custom Item
              </Button>
            ) : (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Add New Item</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input
                    placeholder="Item name"
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="border-orange-200 focus:border-orange-400"
                  />
                  <select
                    value={newItem.category}
                    onChange={(e) =>
                      setNewItem((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Pantry">Pantry</option>
                    <option value="Herbs">Herbs</option>
                    <option value="Meat">Meat</option>
                    <option value="Snacks">Snacks</option>
                  </select>
                </div>
                <Input
                  placeholder="Quantity (optional)"
                  value={newItem.quantity}
                  onChange={(e) =>
                    setNewItem((prev) => ({
                      ...prev,
                      quantity: e.target.value,
                    }))
                  }
                  className="border-orange-200 focus:border-orange-400"
                />
                <div className="flex space-x-2">
                  <Button
                    onClick={addCustomItem}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    Add Item
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
