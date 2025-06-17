import { Bot, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/agents' || location.pathname === '/';

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/agents" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AI Agent Hub</h1>
              <p className="text-sm text-gray-500">Intelligent AI Agents at Your Service</p>
            </div>
          </Link>

          {!isHomePage && (
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="border-primary/20 hover:bg-primary/5"
            >
              <Link to="/agents" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Agents
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};