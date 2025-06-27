import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";
import { Zap } from "lucide-react";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                {/* AI Technology Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    AI Agent Technology
                  </span>
                </div>

                {/* Hero Content */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                  AI Agents for every Workflow
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                  Discover intelligent AI agents designed to automate your
                  workflows, streamline operations, and boost productivity across
                  your organization.
                </p>

                {/* CTA Button */}
                <div className="mb-12">
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Explore AI Agents
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-md">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-gray-600 font-medium">AI Agents</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600 font-medium">Available</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Automated</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Data Processor</div>
                        <div className="text-sm text-gray-600">Automated data analysis</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Report Generator</div>
                        <div className="text-sm text-gray-600">Instant report creation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Task Automator</div>
                        <div className="text-sm text-gray-600">Workflow optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents List Section */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <AgentList />
          </div>
        </div>
      </main>
    </div>
  );
};
