import { Zap, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Agent } from "@/types";
import { useNavigate } from "react-router-dom";

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(agent.created_at), {
    addSuffix: true,
  });

  const truncateDescription = (
    text: string | undefined,
    maxLength: number = 150
  ) => {
    if (!text) return "No description available";

    // Remove the "Key Capabilities:" section from the description for display
    const cleanText = text
      .replace(/Key Capabilities:\s*[^.]+\.?\s*/i, "")
      .trim();

    return cleanText.length > maxLength
      ? `${cleanText.substring(0, maxLength)}...`
      : cleanText;
  };

  const getAgentCapabilities = (description: string | undefined) => {
    if (!description) return [];

    // Look for "Key Capabilities:" followed by comma-separated list
    const capabilitiesMatch = description.match(/Key Capabilities:\s*([^.]+)/i);

    if (capabilitiesMatch) {
      return capabilitiesMatch[1]
        .split(",")
        .map((cap) => cap.trim())
        .filter((cap) => cap.length > 0)
        .slice(0, 3); // Limit to 3 capabilities
    }

    return [];
  };

  const capabilities = getAgentCapabilities(agent.description);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/agents/${agent.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="h-full flex flex-col transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-xl cursor-pointer overflow-hidden rounded-xl min-h-[300px] bg-white group"
    >
      {/* Header with gradient background */}
      <div className="relative px-4 py-4 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-gray-900 mb-0 leading-tight">
                  {agent.name}
                </CardTitle>
                <div className="text-xs text-gray-500 font-medium">
                  AI Agent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className="p-4 flex flex-col flex-grow">
        {/* Description */}
        <CardDescription className="text-gray-600 mb-3 leading-relaxed text-sm">
          {truncateDescription(agent.description, 150)}
        </CardDescription>

        {/* Key Capabilities */}
        {capabilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-900 mb-2">
              Key Capabilities
            </h4>
            <div className="space-y-1">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-xs text-gray-600"
                >
                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Date and Actions */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3 w-3" />
              <span>Added {formattedDate}</span>
            </div>
          </div>

          {/* Action Button */}
          <Link to={`/agents/${agent.id}`}>
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium group-hover:shadow-md transition-all"
            >
              Execute Agent
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
