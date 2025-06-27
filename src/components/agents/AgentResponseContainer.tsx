import { useState } from "react";
import {
  Bot,
  Copy,
  Loader2,
  Maximize2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { MarkdownRenderer } from "./MarkdownRenderer";
import { AgentFullScreenResponseModal } from "./modals/AgentFullScreenResponseModal";
import { toast } from "sonner";
import IncubyteLeaf from "../icons/incubyteLeaf";

interface AgentResponseContainerProps {
  agentName: string;
  isRunning: boolean;
  response: string | null;
  className?: string;
}



export const AgentResponseContainer = ({
  agentName,
  isRunning,
  response ,
  className = "",
}: AgentResponseContainerProps) => {
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

  const handleCopyResult = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      toast.success("Result copied to clipboard!");
    }
  };

  return (
    <>
      <Card className={`border-gray-200 bg-white ${className}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <IncubyteLeaf />
              {agentName} Response
            </CardTitle>

            {response && (
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

          {!isRunning && !response && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center text-gray-500">
                <Bot className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <p>Submit a prompt to see the agent's response</p>
              </div>
            </div>
          )}

          {!isRunning && response && (
            <div className="space-y-4">
              <ScrollArea className="h-[320px] w-full border rounded-md">
                <div className="p-4">
                  <MarkdownRenderer content={response} />
                </div>
              </ScrollArea>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Full Screen Modal */}
      <AgentFullScreenResponseModal
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
        content={response}
        onCopy={handleCopyResult}
        title={`Response from ${agentName}`}
      />
    </>
  );
};



