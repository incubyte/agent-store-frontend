import { useState } from "react";
import { useParams } from "react-router-dom";
import { Calendar, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { useAgent } from "@/hooks/useAgents";
import { useRunAgent } from "@/hooks/useRunAgent";
import { useAgentStore } from "@/store/useAgentStore";
import { AgentResponseContainer } from "./AgentResponseContainer";
import { AgentExecutionForm } from "./AgentExecutionForm";
import { toast } from "sonner";

export const AgentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const agentId = parseInt(id ?? "0", 10);

  const { data, isLoading, error } = useAgent(agentId);
  const agent = data?.agent;
  const agentPrompt = data?.prompt;
  const runAgentMutation = useRunAgent(agentId);
  const { isRunning } = useAgentStore();
  const [currentResult, setCurrentResult] = useState<string | null>(null);

  const handleAgentExecution = async (data: {
    prompt: string;
    email: string;
  }) => {
    try {
      const result = await runAgentMutation.mutateAsync({
        prompt: data.prompt,
        user_email: data.email,
      });
      // Store result in local state instead of global store
      setCurrentResult(result.response || "Response generated successfully");
    } catch (error) {
      console.error("Error running agent:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to run agent"
      );
      throw error; // Re-throw to let form handle it
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !agent) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error?.message ?? "Agent not found"}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const formattedDate = formatDistanceToNow(new Date(agent.created_at), {
    addSuffix: true,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Agent Info */}
        <Card className="border-gray-200 bg-white">
          <CardHeader>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarImage src={agent.image} alt={agent.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white text-lg font-semibold">
                  {agent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {agent.name}
                  </CardTitle>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Created {formattedDate}
                  </div>
                </div>

                {agent.description && (
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {agent.description}
                  </CardDescription>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Interaction Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <AgentExecutionForm
            agentPrompt={agentPrompt}
            isRunning={isRunning}
            onSubmit={handleAgentExecution}
          />

          {/* Results Panel */}
          <AgentResponseContainer
            agentName={agent.name}
            isRunning={isRunning}
            response={currentResult}
          />
        </div>
      </div>
    </div>
  );
};
