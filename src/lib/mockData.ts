export const mockAgents = [
  {
    id: 1,
    name: "Content Writer Pro",
    slug: "content-writer-pro",
    description: "An advanced AI agent specialized in creating high-quality, engaging content for blogs, articles, marketing copy, and social media posts. Capable of adapting tone, style, and format to match your brand voice and target audience.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Code Review Assistant",
    slug: "code-review-assistant",
    description: "Expert AI agent that analyzes code quality, identifies bugs, suggests optimizations, and provides detailed feedback on programming best practices across multiple languages including Python, JavaScript, TypeScript, and more.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-14T14:20:00Z",
    updated_at: "2024-01-14T14:20:00Z"
  },
  {
    id: 3,
    name: "Business Strategy Advisor",
    slug: "business-strategy-advisor",
    description: "Strategic AI consultant that helps analyze market trends, competitive landscapes, and provides actionable business insights. Specializes in growth strategies, market entry plans, and operational optimization recommendations.",
    image: "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-13T09:15:00Z",
    updated_at: "2024-01-13T09:15:00Z"
  },
  {
    id: 4,
    name: "Data Analysis Expert",
    slug: "data-analysis-expert",
    description: "Powerful AI agent for data analysis, visualization, and insights generation. Can process complex datasets, create meaningful charts, perform statistical analysis, and provide data-driven recommendations for business decisions.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-12T16:45:00Z",
    updated_at: "2024-01-12T16:45:00Z"
  },
  {
    id: 5,
    name: "SEO Optimization Specialist",
    slug: "seo-optimization-specialist",
    description: "Advanced SEO AI agent that analyzes websites, suggests keyword strategies, optimizes content for search engines, and provides comprehensive SEO audits with actionable improvement recommendations.",
    image: "https://images.pexels.com/photos/7688378/pexels-photo-7688378.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-11T11:30:00Z",
    updated_at: "2024-01-11T11:30:00Z"
  },
  {
    id: 6,
    name: "Customer Support Bot",
    slug: "customer-support-bot",
    description: "Intelligent customer service AI that handles inquiries, troubleshoots issues, provides product information, and escalates complex problems. Trained on best practices for customer satisfaction and retention.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-10T13:20:00Z",
    updated_at: "2024-01-10T13:20:00Z"
  },
  {
    id: 7,
    name: "Social Media Manager",
    slug: "social-media-manager",
    description: "Creative AI agent for social media management, content creation, hashtag optimization, and engagement strategies. Helps plan campaigns, create posts, and analyze social media performance across platforms.",
    image: "https://images.pexels.com/photos/7688367/pexels-photo-7688367.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-09T08:45:00Z",
    updated_at: "2024-01-09T08:45:00Z"
  },
  {
    id: 8,
    name: "Financial Advisor AI",
    slug: "financial-advisor-ai",
    description: "Expert financial AI that provides investment advice, budget planning, risk assessment, and portfolio optimization recommendations. Helps with financial planning, tax strategies, and wealth management insights.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-08T15:10:00Z",
    updated_at: "2024-01-08T15:10:00Z"
  },
  {
    id: 9,
    name: "Language Translator Pro",
    slug: "language-translator-pro",
    description: "Advanced multilingual AI translator that provides accurate translations, cultural context, and localization services across 50+ languages. Specializes in maintaining tone, context, and cultural nuances.",
    image: "https://images.pexels.com/photos/7688347/pexels-photo-7688347.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-07T12:30:00Z",
    updated_at: "2024-01-07T12:30:00Z"
  },
  {
    id: 10,
    name: "Email Marketing Specialist",
    slug: "email-marketing-specialist",
    description: "Specialized AI for email marketing campaigns, newsletter creation, subject line optimization, and automated email sequences. Helps improve open rates, click-through rates, and overall email engagement.",
    image: "https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-06T10:15:00Z",
    updated_at: "2024-01-06T10:15:00Z"
  },
  {
    id: 11,
    name: "Legal Document Assistant",
    slug: "legal-document-assistant",
    description: "AI legal assistant that helps draft contracts, reviews legal documents, explains legal terms, and provides guidance on compliance issues. Specializes in business law, contracts, and regulatory requirements.",
    image: "https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-05T14:45:00Z",
    updated_at: "2024-01-05T14:45:00Z"
  },
  {
    id: 12,
    name: "Research Assistant Pro",
    slug: "research-assistant-pro",
    description: "Comprehensive research AI that conducts thorough investigations, compiles reports, fact-checks information, and provides detailed analysis on any topic. Excellent for academic research, market studies, and competitive analysis.",
    image: "https://images.pexels.com/photos/7688384/pexels-photo-7688384.jpeg?auto=compress&cs=tinysrgb&w=400",
    created_at: "2024-01-04T09:30:00Z",
    updated_at: "2024-01-04T09:30:00Z"
  }
];

export const mockRunAgentResponse = (prompt: string, agentName: string): string => {
  const responses = {
    "Content Writer Pro": `# Content Strategy Analysis

Based on your prompt: "${prompt}"

## Key Recommendations

### 1. Content Structure
- **Hook**: Start with a compelling question or statistic
- **Body**: Use the AIDA framework (Attention, Interest, Desire, Action)
- **CTA**: Include clear, actionable next steps

### 2. SEO Optimization
- Target long-tail keywords related to your topic
- Use semantic keywords throughout the content
- Optimize meta descriptions and headers

### 3. Engagement Tactics
- Include relevant statistics and data points
- Add interactive elements like polls or quizzes
- Use storytelling to create emotional connections

## Sample Content Outline

\`\`\`markdown
# Your Compelling Headline Here

## Introduction
- Hook your readers with an interesting fact
- Preview what they'll learn

## Main Content Sections
1. Problem identification
2. Solution presentation
3. Benefits and outcomes
4. Real-world examples

## Conclusion
- Summarize key points
- Include strong call-to-action
\`\`\`

**Next Steps**: Implement these strategies and track engagement metrics to optimize performance.`,

    "Code Review Assistant": `# Code Review Report

## Analysis of Your Code Request: "${prompt}"

### ✅ Strengths Identified
- Clean variable naming conventions
- Proper error handling implementation
- Good separation of concerns

### ⚠️ Areas for Improvement

#### 1. Performance Optimizations
\`\`\`javascript
// Instead of this:
for (let i = 0; i < array.length; i++) {
  // operations
}

// Consider this:
const length = array.length;
for (let i = 0; i < length; i++) {
  // operations
}
\`\`\`

#### 2. Security Considerations
- Implement input validation
- Use parameterized queries for database operations
- Add rate limiting for API endpoints

#### 3. Code Structure
\`\`\`typescript
// Recommended pattern:
interface UserService {
  getUser(id: string): Promise<User>;
  updateUser(id: string, data: Partial<User>): Promise<User>;
}

class UserServiceImpl implements UserService {
  // Implementation here
}
\`\`\`

### 📊 Metrics
- **Code Quality Score**: 8.5/10
- **Security Rating**: Good
- **Performance Impact**: Medium

**Recommendation**: Address the security considerations first, then optimize for performance.`,

    "Business Strategy Advisor": `# Strategic Business Analysis

## Executive Summary
Your inquiry: "${prompt}"

### Market Opportunity Assessment

#### 1. Market Size & Growth
- **Total Addressable Market (TAM)**: $2.5B
- **Serviceable Addressable Market (SAM)**: $450M
- **Growth Rate**: 15% YoY

#### 2. Competitive Landscape
| Competitor | Market Share | Strengths | Weaknesses |
|------------|--------------|-----------|------------|
| Company A | 25% | Brand recognition | High prices |
| Company B | 18% | Innovation | Limited reach |
| Company C | 12% | Cost efficiency | Quality issues |

### Strategic Recommendations

#### Short-term (3-6 months)
1. **Market Entry Strategy**
   - Focus on underserved segments
   - Develop strategic partnerships
   - Implement competitive pricing

#### Medium-term (6-18 months)
2. **Growth Acceleration**
   - Expand product portfolio
   - Enter adjacent markets
   - Build customer loyalty programs

#### Long-term (18+ months)
3. **Market Leadership**
   - Acquire key competitors
   - Develop proprietary technology
   - Establish industry standards

### Financial Projections
- **Year 1 Revenue**: $2.5M
- **Year 2 Revenue**: $6.8M
- **Year 3 Revenue**: $15.2M
- **Break-even**: Month 14

**Next Steps**: Conduct detailed market research and develop a comprehensive business plan.`,

    "default": `# AI Agent Response

Thank you for your inquiry: "${prompt}"

## Analysis Complete

I've processed your request and here's my comprehensive response:

### Key Insights
- Analyzed your specific requirements
- Identified potential opportunities and challenges
- Developed actionable recommendations

### Recommendations
1. **Immediate Actions**
   - Implement the suggested strategies
   - Monitor key performance indicators
   - Gather feedback for continuous improvement

2. **Long-term Considerations**
   - Plan for scalability
   - Consider market trends
   - Maintain competitive advantage

### Technical Implementation
\`\`\`javascript
// Example implementation
function processRequest(input) {
  const result = analyzeData(input);
  return generateRecommendations(result);
}
\`\`\`

### Next Steps
- Review the recommendations carefully
- Prioritize actions based on impact and feasibility
- Schedule follow-up analysis in 30 days

**Note**: This analysis is based on current market conditions and available data. Regular updates are recommended for optimal results.`
  };

  return responses[agentName as keyof typeof responses] || responses.default;
};