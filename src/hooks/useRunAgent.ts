import { useMutation, useQueryClient } from '@tanstack/react-query';
import { agentApi } from '@/lib/api';
import type { RunAgentRequest } from '@/types';
import { useAgentStore } from '@/store/useAgentStore';
import { toast } from 'sonner';

export const useRunAgent = (agentId: number) => {
  const queryClient = useQueryClient();
  const { setIsRunning, setLastResult } = useAgentStore();

  return useMutation({
    mutationFn: (request: RunAgentRequest) => agentApi.runAgent(agentId, request),
    onMutate: () => {
      setIsRunning(true);
      setLastResult(null);
    },
    onSuccess: (data) => {
      setLastResult(data.response);
      toast.success('Agent completed successfully!');
      
      // Invalidate and refetch agent data
      queryClient.invalidateQueries({ queryKey: ['agent', agentId] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to run agent');
      setLastResult(null);
    },
    onSettled: () => {
      setIsRunning(false);
    },
  });
};