import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";
import { Zap } from "lucide-react";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mt-5">
            {/* AI Technology Badge */}

            <div className="relative flex justify-center">
              <div className="absolute left-1/3 -translate-x-1/2 -top-10 z-10 animate-float">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/50 rounded-full shadow-lg">
                  <Zap className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-primary">
                    AI Agent Technology
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              AI Agents for every{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Workflow
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover intelligent AI agents designed to automate your
              workflows, streamline operations, and boost productivity across
              your organization.
            </p>
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
