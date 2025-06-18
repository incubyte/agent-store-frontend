import { Calendar, ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    maxLength: number = 120
  ) => {
    if (!text) return "No description available";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <Card className="group hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 border-gray-200 hover:border-secondary/30 bg-white flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary/10">
            <AvatarImage src={agent.image} alt={agent.name} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white font-semibold">
              {agent.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {agent.name}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Calendar className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-500">{formattedDate}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex flex-col flex-grow">
        <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {truncateDescription(agent.description)}
        </CardDescription>

        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className="bg-secondary/10 text-secondary-foreground border-secondary/20"
          >
            <Bot className="h-3 w-3 mr-1" />
            Agent
          </Badge>

          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white shadow-sm group-hover:shadow-md transition-all"
          >
            <Link
              to={`/agents/${agent.id}`}
              className="flex items-center gap-2"
            >
              Execute Agent
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
