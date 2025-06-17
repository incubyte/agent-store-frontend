import axios from 'axios';
import type { Agent, RunAgentRequest, RunAgentResponse } from '@/types';
import { mockAgents, mockRunAgentResponse } from './mockData';

const API_BASE_URL = 'http://127.0.0.1:8000';
const USE_MOCK_DATA = true; // Set to false when real API is available

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED') {
      throw new Error('Unable to connect to the API server. Please ensure the backend is running on http://127.0.0.1:8000');
    }
    
    const message = error.response?.data?.message || error.message || 'An unexpected error occurred';
    throw new Error(message);
  }
);

// Mock API functions
const mockApi = {
  getAgents: async (): Promise<Agent[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockAgents;
  },

  getAgent: async (agentId: number): Promise<Agent> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const agent = mockAgents.find(a => a.id === agentId);
    if (!agent) {
      throw new Error(`Agent with ID ${agentId} not found`);
    }
    return agent;
  },

  runAgent: async (agentId: number, request: RunAgentRequest): Promise<RunAgentResponse> => {
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
    
    const agent = mockAgents.find(a => a.id === agentId);
    if (!agent) {
      throw new Error(`Agent with ID ${agentId} not found`);
    }

    // Simulate occasional errors for testing
    if (Math.random() < 0.1) {
      throw new Error('Agent processing failed. Please try again.');
    }

    const response = mockRunAgentResponse(request.prompt, agent.name);
    return { response };
  },
};

export const agentApi = {
  // Get all agents
  getAgents: async (): Promise<Agent[]> => {
    if (USE_MOCK_DATA) {
      return mockApi.getAgents();
    }
    
    const response = await api.get<Agent[]>('/agents');
    return response.data;
  },

  // Get specific agent
  getAgent: async (agentId: number): Promise<Agent> => {
    if (USE_MOCK_DATA) {
      return mockApi.getAgent(agentId);
    }
    
    const response = await api.get<Agent>(`/agents/${agentId}`);
    return response.data;
  },

  // Run agent with prompt
  runAgent: async (agentId: number, request: RunAgentRequest): Promise<RunAgentResponse> => {
    if (USE_MOCK_DATA) {
      return mockApi.runAgent(agentId, request);
    }
    
    const response = await api.post<RunAgentResponse>(`/run-agent/${agentId}`, request);
    return response.data;
  },
};