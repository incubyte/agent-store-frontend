import { Bot, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header
      className={`border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 "bg-white/95 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">AI Agent Hub</h1>
              <p className="text-sm text-gray-500">
                Intelligent AI Agents at Your Service
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Navigation Menu for Homepage */}

            {/* CTA Button */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-gray-300 hover:bg-primary/5 text-primary"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
