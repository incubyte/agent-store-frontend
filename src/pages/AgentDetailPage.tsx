import { Header } from '@/components/layout/Header';
import { AgentDetail } from '@/components/agents/AgentDetail';

export const AgentDetailPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AgentDetail />
      </main>
    </div>
  );
};