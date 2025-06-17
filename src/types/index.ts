export interface Agent {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  created_at: string;
  updated_at: string;
}

export interface RunAgentRequest {
  prompt: string;
  user_email: string;
}

export interface RunAgentResponse {
  response: string;
}

export interface ApiError {
  message: string;
  status?: number;
}