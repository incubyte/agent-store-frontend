import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import IncubyteLogo from "@/components/icons/incubyte.logo";

export const Header = () => {
  const isNotAgentPage = window.location.pathname !== "/agents";

  return (
    <header
      className={`border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 "bg-white/95 backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col justify-start items-start">
              <IncubyteLogo />
              <p className="text-sm text-gray-500">
                Intelligent AI Agents at Your Service
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Navigation Menu for Homepage */}

            {/* CTA Button */}
            {isNotAgentPage && (
              <Link to="/agents">
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-primary border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Back to Agents
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
