import { Header } from '@/components/layout/Header';
import { AgentDetail } from '@/components/agents/AgentDetail';

export const AgentDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <AgentDetail />
      </main>
    </div>
  );
};