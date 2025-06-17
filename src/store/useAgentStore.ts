import { create } from 'zustand';
import type { Agent } from '@/types';

interface AgentStore {
  selectedAgent: Agent | null;
  setSelectedAgent: (agent: Agent | null) => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  sortBy: 'newest' | 'oldest' | 'alphabetical';
  setSortBy: (sort: 'newest' | 'oldest' | 'alphabetical') => void;
  
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  
  lastResult: string | null;
  setLastResult: (result: string | null) => void;
}

export const useAgentStore = create<AgentStore>((set) => ({
  selectedAgent: null,
  setSelectedAgent: (agent) => set({ selectedAgent: agent }),
  
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  sortBy: 'newest',
  setSortBy: (sort) => set({ sortBy: sort }),
  
  isRunning: false,
  setIsRunning: (running) => set({ isRunning: running }),
  
  lastResult: null,
  setLastResult: (result) => set({ lastResult: result }),
}));