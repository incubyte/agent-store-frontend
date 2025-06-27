import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import IncubyteLogo from "@/components/icons/incubyte.logo";

export const Header = () => {
  const isNotAgentPage = window.location.pathname !== "/agents";

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <IncubyteLogo />
          </Link>

          <div className="flex items-center">
            {isNotAgentPage && (
              <Link to="/agents">
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-primary border-gray-300 hover:border-gray-400 transition-colors px-4 py-2 font-medium"
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
