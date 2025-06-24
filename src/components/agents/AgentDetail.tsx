import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Bot,
  Calendar,
  Mail,
  Send,
  Copy,
  Loader2,
  AlertCircle,
  CheckCircle,
  Maximize2,
  X,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useAgent } from "@/hooks/useAgents";
import { useRunAgent } from "@/hooks/useRunAgent";
import { useAgentStore } from "@/store/useAgentStore";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { toast } from "sonner";

export const AgentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const agentId = parseInt(id ?? "0", 10);

  const { data, isLoading, error } = useAgent(agentId);
  const agent = data?.agent;
  const agentPrompt = data?.prompt;
  const runAgentMutation = useRunAgent(agentId);
  const { isRunning } = useAgentStore();

  const [userPrompt, setUserPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);
  const [currentResult, setCurrentResult] = useState<string | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullScreenOpen) {
        setIsFullScreenOpen(false);
      }
    };

    if (isFullScreenOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isFullScreenOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userPrompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const result = await runAgentMutation.mutateAsync({
        prompt: userPrompt.trim(),
        user_email: email.trim(),
      });
      // Store result in local state instead of global store
      setCurrentResult(result.response || "Response generated successfully");

      // Clear form on success
      setUserPrompt("");
    } catch (error) {
      console.error("Error running agent:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to run agent"
      );
    }
  };

  const handleCopyResult = () => {
    if (currentResult) {
      navigator.clipboard.writeText(currentResult);
      toast.success("Result copied to clipboard!");
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
        {/* Header */}

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
          <Card className="border-gray-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Execute Agent
              </CardTitle>
              <CardDescription>
                Enter your prompt and email to interact with this agent
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prompt">Your Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder={agentPrompt ?? "Type your prompt here..."}
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    className="min-h-32 resize-none"
                    required
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{userPrompt.length} characters</span>
                    <span>Be specific for better results</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isRunning || !userPrompt.trim() || !email.trim()}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {isRunning ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Generate Response
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setUserPrompt("");
                      setEmail("");
                    }}
                    disabled={isRunning}
                  >
                    Clear
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="border-gray-200 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-secondary" />
                  Agent Response
                </CardTitle>

                {currentResult && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsFullScreenOpen(true)}
                      className="border-secondary/20 hover:bg-secondary/5"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyResult}
                      className="border-secondary/20 hover:bg-secondary/5"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent>
              {isRunning && (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-3" />
                    <p className="text-gray-600">Processing your request...</p>
                    <p className="text-sm text-gray-500 mt-1">
                      This may take a few moments
                    </p>
                  </div>
                </div>
              )}

              {!isRunning && !currentResult && (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center text-gray-500">
                    <Bot className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p>Submit a prompt to see the agent's response</p>
                  </div>
                </div>
              )}

              {!isRunning && currentResult && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Response generated successfully
                  </div>

                  <Separator />

                  <ScrollArea className="h-96 w-full border rounded-md">
                    <div className="p-4">
                      <MarkdownRenderer content={currentResult} />
                    </div>
                  </ScrollArea>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Full Screen Modal */}
        {isFullScreenOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsFullScreenOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative w-[95vw] h-[95vh] bg-white rounded-lg shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-secondary" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Agent Response
                  </h2>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyResult}
                    className="border-secondary/20 hover:bg-secondary/5"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsFullScreenOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-h-0 p-6">
                <ScrollArea className="h-full w-full border rounded-md">
                  <div className="p-6">
                    {currentResult && (
                      <MarkdownRenderer content={currentResult} />
                    )}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
