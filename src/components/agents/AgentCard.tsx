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
      <Card className="group h-full flex flex-col transition-all duration-200 border border-gray-200 hover:border-blue-400 hover:shadow-2xl cursor-pointer overflow-hidden rounded-xl min-h-[320px] shadow-lg">
        {/* Header Section with Solid Navy Background */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ backgroundColor: "#0d3253" }}
        >
          <div className="flex-1 pr-3">
            <CardTitle className="text-lg font-semibold text-white mb-0 leading-tight drop-shadow-sm">
              {agent.name}
            </CardTitle>
          </div>
          <div className="bg-white/90 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-lg backdrop-blur-sm">
            {getAgentInitials(agent.name)}
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex flex-col flex-grow bg-white">
          <CardDescription className="text-base text-gray-700 mb-6 line-clamp-4 leading-relaxed flex-grow">
            {truncateDescription(agent.description, 180)}
          </CardDescription>

          {/* Date Section */}
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>

          {/* Bottom section with divider line and button */}
          <div className="mt-auto">
            <div className="w-full h-px bg-cyan-300 mb-4"></div>
            <div className="flex justify-end">
              <Button
                size="default"
                className="text-white font-medium px-6 py-3 rounded-md shadow-lg border border-white/30 pointer-events-auto hover:bg-blue-800 transition-colors duration-200"
                style={{ backgroundColor: "#0d3253" }}
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
