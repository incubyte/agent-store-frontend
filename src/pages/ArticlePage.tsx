import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp, Users, Clock, DollarSign, Zap, Target, BarChart3, Rocket } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export const ArticlePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-6 lg:py-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <div className="mb-4 flex justify-start">
              <Link to="/agents">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent text-sm px-4 py-2"
                >
                  <ArrowLeft className="h-3 w-3 mr-1" />
                  Back to Agents
                </Button>
              </Link>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-4">
              <Rocket className="h-3 w-3 text-blue-300" />
              <span className="text-blue-100 font-semibold text-xs">
                INDUSTRY TRANSFORMATION REPORT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              The AI Workforce<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>

            {/* Power Subtitle */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              <strong className="text-white">Stop hiring armies of specialists.</strong> Start building teams of AI agents that work 24/7, never get tired, and deliver expert-level results at <strong className="text-blue-400">85% lower cost</strong>.
            </p>

            {/* Compelling Stats Row */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">85%</div>
                <div className="text-gray-300 text-xs">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">10x</div>
                <div className="text-gray-300 text-xs">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">24/7</div>
                <div className="text-gray-300 text-xs">Operation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-6 bg-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                The Problem Most Businesses Face
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Many organizations are stuck with traditional approaches that are expensive, slow, and difficult to scale. Here's how AI agents provide a better solution.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Traditional Problems */}
              <div className="bg-white p-5 rounded-xl border-2 border-red-200 shadow-lg">
                <div className="text-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-red-600">Traditional Approach</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-gray-900">$180K+/year</strong> for sales research teams
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-gray-900">$120K+/year</strong> for marketing agencies
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-gray-900">2-3 weeks wait</strong> for basic reports
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-gray-900">Inconsistent quality</strong> from multiple vendors
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-sm">
                      <strong className="text-gray-900">Complex scaling</strong> requires more hiring
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Agent Solution */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-5 rounded-xl border-2 border-green-200 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                  AI APPROACH
                </div>
                <div className="text-center mb-3 mt-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Rocket className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-green-600">The AI Agent Way</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong className="text-gray-900">$2K-5K/month</strong> operating costs
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong className="text-gray-900">30 minutes</strong> for comprehensive reports
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong className="text-gray-900">24/7 operation</strong> without breaks
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong className="text-gray-900">Expert-level consistency</strong> every time
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <strong className="text-gray-900">Instant scaling</strong> without hiring
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Agents Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Exactly Are AI Agents?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Think of AI agents as digital specialists with autonomous decision-making, tool usage, and goal-oriented behavior. They don't just answer questions—they solve problems end-to-end.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Autonomous Decision Making</h3>
                <p className="text-gray-600 text-sm">Analyze situations and choose actions without constant human direction</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tool Usage</h3>
                <p className="text-gray-600 text-sm">Operate websites, APIs, databases, and software just like human employees</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600 text-sm">Work toward specific objectives, adapting strategies based on results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Use Cases Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Universal Use Cases: Where AI Agents Excel
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AI agents can be applied across multiple business functions, providing consistent value regardless of industry or company size.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Research & Intelligence</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Market research and competitive analysis</li>
                  <li>• Customer behavior and sentiment analysis</li>
                  <li>• Technical documentation research</li>
                  <li>• Patent and legal research</li>
                  <li>• Medical literature and clinical trial analysis</li>
                  <li>• Drug interaction and contraindication research</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Brand mention tracking</li>
                  <li>• Competitor pricing updates</li>
                  <li>• Regulatory changes</li>
                  <li>• Performance metrics tracking</li>
                  <li>• Patient vital signs and health monitoring</li>
                  <li>• Medical equipment status and alerts</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-xl">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creation</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business reports and summaries</li>
                  <li>• Sales presentations</li>
                  <li>• Technical documentation</li>
                  <li>• Training materials</li>
                  <li>• Patient care plans and discharge summaries</li>
                  <li>• Medical procedure documentation</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-xl">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis & Decision Support</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Financial modeling</li>
                  <li>• Risk assessment</li>
                  <li>• Performance optimization</li>
                  <li>• Strategic planning</li>
                  <li>• Clinical decision support and diagnosis assistance</li>
                  <li>• Treatment outcome prediction and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                From Tool to Platform: Building Your AI Core
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Smart companies see agents as the intelligent core of their entire operation, not just fancy tools. Here's how to think about platform architecture.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Core Intelligence Layer</h3>
                  <p className="text-gray-600 mb-4">Your agent teams become the brain of your system:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Domain expertise (sales, marketing, finance)</li>
                    <li>• Institutional knowledge and best practices</li>
                    <li>• Real-time analysis capabilities</li>
                    <li>• Continuous learning from interactions</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Enterprise Interface Layer</h3>
                  <p className="text-gray-600 mb-4">User-friendly applications your team wants to use:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Auto-updating dashboards with insights</li>
                    <li>• One-click report generation</li>
                    <li>• Smart recommendations when needed</li>
                    <li>• Seamless workflow automation</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Integration Layer</h3>
                  <p className="text-gray-600 mb-4">Connects to everything you already use:</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• CRM systems and marketing platforms</li>
                    <li>• APIs, databases, third-party services</li>
                    <li>• Custom data sources</li>
                    <li>• Real-time synchronization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Real Agent Teams Delivering Real Results
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sales Intelligence */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sales Intelligence Team</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Company Research Agent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Decision-Maker Intelligence Agent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Technology Stack Analyst</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Business Challenge Identifier</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    Result: Complete sales intelligence that used to take 2-3 days now generated in 30 minutes
                  </p>
                </div>
              </div>

              {/* Marketing Optimization */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Marketing Optimization Team</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Website Performance Analyzer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Audience Intelligence Agent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Copywriting Specialist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Conversion Optimizer</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    Result: $10K-25K marketing audits delivered in under 2 hours
                  </p>
                </div>
              </div>

              {/* Healthcare Intelligence */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Healthcare Intelligence Team</h3>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Medical Research Analyst</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Patient Data Interpreter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Treatment Protocol Optimizer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Compliance Monitor</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">
                    Result: Evidence-based treatment recommendations with real-time literature support for every patient decision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-10 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Understanding the Economics of AI Agents
              </h2>
              <p className="text-lg text-blue-100">
                A realistic look at costs and potential returns when implementing AI agent platforms
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Old Way */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-red-300 mb-4 text-center">Traditional Approach</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Sales Research Team</span>
                    <span className="font-bold">$180K+/year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Marketing Agency</span>
                    <span className="font-bold">$120K+/year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>SEO Consultants</span>
                    <span className="font-bold">$50K+/year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Software Development</span>
                    <span className="font-bold">$500K+/year</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-red-500/20 px-4 rounded-lg mt-4">
                    <span className="text-lg font-bold">Total Annual Cost</span>
                    <span className="text-2xl font-bold text-red-300">$850K+</span>
                  </div>
                </div>
              </div>

              {/* New Way */}
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  85% SAVINGS
                </div>
                <h3 className="text-xl font-bold text-green-300 mb-4 text-center mt-3">AI Agent Platform</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Platform Setup (One-time)</span>
                    <span className="font-bold">$150K-300K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Monthly Operating Cost</span>
                    <span className="font-bold">$2K-5K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>Unlimited Scalability</span>
                    <span className="font-bold text-green-300">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span>24/7 Operation</span>
                    <span className="font-bold text-green-300">✓ Included</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-green-500/20 px-4 rounded-lg mt-4">
                    <span className="text-lg font-bold">Total Annual Cost</span>
                    <span className="text-2xl font-bold text-green-300">$350K max</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Your ROI</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">60%</div>
                    <div className="text-white text-sm">Cost Reduction Year 1</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">85%</div>
                    <div className="text-white text-sm">Cost Reduction Year 2+</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">10x</div>
                    <div className="text-white text-sm">Faster Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Getting Started: A Practical Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Successful AI agent implementation follows a proven three-phase approach that minimizes risk while maximizing learning and results.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Phase 1: Foundation (4-8 weeks)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Choose highest-impact business function</li>
                  <li>• Deploy specialized agent teams</li>
                  <li>• Integrate with existing workflows</li>
                  <li>• Measure performance vs. traditional methods</li>
                  <li>• Establish foundation for expansion</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Phase 2: Platform (8-12 weeks)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Design enterprise UI layer</li>
                  <li>• Build API connections to existing systems</li>
                  <li>• Create role-based dashboards</li>
                  <li>• Implement real-time data flow</li>
                  <li>• Train teams on new capabilities</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Phase 3: Ecosystem (Ongoing)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Launch new product offerings</li>
                  <li>• Expand agent capabilities</li>
                  <li>• Build customer-facing applications</li>
                  <li>• Integrate industry-specific tools</li>
                  <li>• Develop platform partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-10 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The Strategic Shift: From Tools to Platforms
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              The most successful organizations will be those that recognize AI agents not as individual tools, but as the intelligent foundation for their entire operation. This shift requires strategic thinking, but the potential returns—in efficiency, scalability, and competitive advantage—make it worth serious consideration.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="font-bold text-blue-400 mb-1 text-sm">Start with Strategy</h3>
                <p className="text-gray-300 text-xs">Identify your highest-impact use cases and build specialized agents for critical bottlenecks</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="font-bold text-purple-400 mb-1 text-sm">Think Long-term</h3>
                <p className="text-gray-300 text-xs">Design architecture that becomes more valuable and defensible over time</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <h3 className="font-bold text-green-400 mb-1 text-sm">Build Systematically</h3>
                <p className="text-gray-300 text-xs">Create institutional knowledge that compounds with every interaction</p>
              </div>
            </div>

            <Link to="/agents">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                Explore Available AI Agents
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};