import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";
import { Bot, Zap } from "lucide-react";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary/5 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* AI Technology Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/20 rounded-full mb-6">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-primary">AI Agent Technology</span>
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Agents
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover intelligent AI agents designed to automate your workflows, 
              streamline operations, and boost productivity across your organization.
            </p>

            {/* Floating Bot Icon */}
            <div className="absolute top-8 right-8 hidden lg:block">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg animate-float">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents List Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <AgentList />
        </div>
      </main>
    </div>
  );
};
