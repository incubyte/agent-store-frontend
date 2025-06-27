import { Calendar } from "lucide-react";
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

interface AgentCardProps {
  agent: Agent;
}

export const AgentCard = ({ agent }: AgentCardProps) => {
  const formattedDate = formatDistanceToNow(new Date(agent.created_at), {
    addSuffix: true,
  });

  const truncateDescription = (
    text: string | undefined,
    maxLength: number = 180
  ) => {
    if (!text) return "No description available";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const getAgentInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const handleCardClick = () => {
    // Reset scroll position before navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <Link
      to={`/agents/${agent.id}`}
      className="block h-full"
      onClick={handleCardClick}
    >
      <Card className="h-full flex flex-col transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-lg cursor-pointer overflow-hidden rounded-lg min-h-[320px] bg-white">
        {/* Header Section */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-primary mb-0 leading-tight">
                {agent.name}
              </CardTitle>
            </div>
            <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm">
              {getAgentInitials(agent.name)}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex flex-col flex-grow">
          <CardDescription className="text-gray-600 mb-6 line-clamp-4 leading-relaxed flex-grow">
            {truncateDescription(agent.description, 160)}
          </CardDescription>

          {/* Date Section */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>

          {/* Button Section */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex justify-end">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-md transition-colors"
              >
                Execute Agent
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
