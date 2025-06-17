import { useQuery } from '@tanstack/react-query';
import { agentApi } from '@/lib/api';

export const useAgents = () => {
  return useQuery({
    queryKey: ['agents'],
    queryFn: agentApi.getAgents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useAgent = (agentId: number) => {
  return useQuery({
    queryKey: ['agent', agentId],
    queryFn: () => agentApi.getAgent(agentId),
    enabled: !!agentId,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};