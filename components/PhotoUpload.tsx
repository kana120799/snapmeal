import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, ImageIcon, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PhotoUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

export const PhotoUpload = ({ onImageUpload }: PhotoUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
        toast({
          title: "Photo uploaded successfully! ✨",
          description: "AI is analyzing your ingredients...",
        });
      };
      reader.readAsDataURL(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto animate-scale-in">
      <Card
        className={`relative p-12 border-2 border-dashed transition-all duration-500 cursor-pointer group overflow-hidden ${
          isDragOver
            ? "border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-2xl shadow-orange-500/20 scale-105"
            : "border-gray-300 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 hover:scale-102"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onClick={() => fileInputRef.current?.click()}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative text-center space-y-6">
          <div className="flex justify-center">
            <div
              className={`relative p-6 rounded-full transition-all duration-500 ${
                isDragOver
                  ? "bg-gradient-to-br from-orange-500 to-red-500 text-white scale-110"
                  : "bg-gradient-to-br from-orange-100 to-red-100 text-orange-600 group-hover:scale-105"
              }`}
            >
              <ImageIcon className="h-16 w-16" />
              {isDragOver && (
                <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-display font-bold text-gray-900">
              Upload your fridge photo
            </h3>
            <p className="text-gray-600 text-lg">
              Drag and drop or click to browse
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
              <span>AI will analyze your ingredients instantly</span>
              <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <Button
              variant="outline"
              className="flex items-center space-x-2 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            >
              <Upload className="h-5 w-5" />
              <span className="font-medium">Browse Files</span>
            </Button>

            <Button
              className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white flex items-center space-x-2 shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
              onClick={(e) => {
                e.stopPropagation();
                toast({
                  title: "Camera feature 📸",
                  description: "Camera capture would open here in a real app!",
                });
              }}
            >
              <Camera className="h-5 w-5" />
              <span className="font-medium">Take Photo</span>
            </Button>
          </div>
        </div>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};
