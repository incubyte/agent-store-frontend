import { useMemo } from "react";
import { Search, SlidersHorizontal, RefreshCw } from "lucide-react";
import { AgentCard } from "./AgentCard";
import { AgentCardSkeleton } from "./AgentCardSkeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAgents } from "@/hooks/useAgents";
import { useAgentStore } from "@/store/useAgentStore";

export const AgentList = () => {
  const { data: agents, isLoading, error, refetch } = useAgents();
  const { searchQuery, setSearchQuery, sortBy, setSortBy } = useAgentStore();

  const filteredAndSortedAgents = useMemo(() => {
    if (!agents) return [];

    let filtered = agents;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = agents.filter(
        (agent) =>
          agent.name.toLowerCase().includes(query) ||
          agent.description?.toLowerCase().includes(query)
      );
    }

    // Sort agents
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        case "oldest":
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        case "alphabetical":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [agents, searchQuery, sortBy]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            Connection Error
          </h3>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <Button
            onClick={() => refetch()}
            className="bg-primary hover:bg-primary/90"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Compact Search and Filter Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search agents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 border-gray-300 focus:border-secondary focus:ring-secondary/20"
            />
          </div>

          {/* Filter and Count */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <Select
                value={sortBy}
                onValueChange={(value: "newest" | "oldest" | "alphabetical") =>
                  setSortBy(value)
                }
              >
                <SelectTrigger className="w-32 h-10 border-gray-300 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {agents && (
              <div className="text-sm text-gray-500 whitespace-nowrap px-2 py-1 bg-gray-50 rounded">
                {filteredAndSortedAgents.length} of {agents.length}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <AgentCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && filteredAndSortedAgents.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              {searchQuery ? "No agents found" : "No agents available"}
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? `Try adjusting your search for "${searchQuery}"`
                : "Check back later for new AI agents."}
            </p>
            {searchQuery && (
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
                className="mt-4 border-gray-300 text-primary hover:bg-primary/5"
              >
                Clear Search
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Agent Grid */}
      {!isLoading && filteredAndSortedAgents.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      )}
    </div>
  );
};
