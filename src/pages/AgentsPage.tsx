import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";
import { Zap } from "lucide-react";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                {/* AI Technology Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4">
                  <Zap className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-white">
                    AI Agent Technology
                  </span>
                </div>

                {/* Hero Content */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  AI Agents for every Workflow
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-lg">
                  Discover intelligent AI agents designed to automate your
                  workflows, streamline operations, and boost productivity across
                  your organization.
                </p>

                {/* CTA Button */}
                <div className="mb-8">
                  <button 
                    onClick={() => {
                      const agentList = document.getElementById('agent-list');
                      agentList?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                  >
                    Explore AI Agents
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 max-w-md">
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-sm text-gray-400 font-medium">AI Agents</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-sm text-gray-400 font-medium">Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-gray-400 font-medium">Automated</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Data Processor</div>
                        <div className="text-xs text-gray-400">Automated data analysis</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Report Generator</div>
                        <div className="text-xs text-gray-400">Instant report creation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">Task Automator</div>
                        <div className="text-xs text-gray-400">Workflow optimization</div>
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
      <main id="agent-list" className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <AgentList />
          </div>
        </div>
      </main>
    </div>
  );
};
