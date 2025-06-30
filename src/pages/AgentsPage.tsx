import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* AI Workforce Revolution Banner */}
      <section className="py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <h2 className="text-sm md:text-base font-light italic">
                The AI Workforce Revolution
              </h2>
            </div>
            <Link to="/article/ai-workforce-revolution">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-md font-semibold transition-colors inline-flex items-center gap-1 text-xs whitespace-nowrap">
                Know More
                <ArrowRight className="h-3 w-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 lg:py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              {/* Left Content */}
              <div>
                {/* AI Technology Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-3">
                  <Zap className="h-3 w-3 text-secondary" />
                  <span className="text-xs font-medium text-white">
                    AI Agent Technology
                  </span>
                </div>

                {/* Hero Content */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  AI Agents for every Workflow
                </h1>

                <p className="text-base text-gray-300 leading-relaxed mb-4 max-w-lg">
                  Discover intelligent AI agents designed to automate your
                  workflows, streamline operations, and boost productivity across
                  your organization.
                </p>

                {/* CTA Button */}
                <div className="mb-6">
                  <button 
                    onClick={() => {
                      const agentList = document.getElementById('agent-list');
                      agentList?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded-lg font-semibold transition-colors shadow-lg text-sm"
                  >
                    Explore AI Agents
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-xs">
                  <div>
                    <div className="text-xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-xs text-gray-400 font-medium">AI Agents</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-secondary mb-1">24/7</div>
                    <div className="text-xs text-gray-400 font-medium">Available</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-xs text-gray-400 font-medium">Automated</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Element */}
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs">Data Processor</div>
                        <div className="text-xs text-gray-400">Automated data analysis</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-6 h-6 bg-secondary rounded-lg flex items-center justify-center">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs">Report Generator</div>
                        <div className="text-xs text-gray-400">Instant report creation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10">
                      <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                        <Zap className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-xs">Task Automator</div>
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
