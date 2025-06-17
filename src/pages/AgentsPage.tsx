import { Header } from "@/components/layout/Header";
import { AgentList } from "@/components/agents/AgentList";

export const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Agents List */}
          <AgentList />
        </div>
      </main>
    </div>
  );
};
