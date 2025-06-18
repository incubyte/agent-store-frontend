import { useQuery } from "@tanstack/react-query";
import { agentApi } from "@/lib/api";
import { AgentWithPrompt } from "@/types";

export const useAgents = () => {
  return useQuery({
    queryKey: ["agents"],
    queryFn: agentApi.getAgents,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useAgent = (agentId: number) => {
  return useQuery({
    queryKey: ["agent", agentId],
    queryFn: async () => {
      const data: AgentWithPrompt = await agentApi.getAgent(agentId);
      console.log("Fetched agent data in hook:", data);
      return {
        agent: data.agent,
        prompt: data.prompt || "",
      };
    },
    enabled: !!agentId && agentId > 0,
    staleTime: 5 * 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};