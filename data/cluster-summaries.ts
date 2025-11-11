export interface ClusterSummary {
  clusterId: string
  points: string[]
}

export const clusterSummaries: Record<string, string[]> = {
  "business-administration": [
    "Focuses on core business management principles and administrative operations",
    "Covers organizational structure, leadership, and strategic planning",
    "Emphasizes effective communication and team management skills",
    "Includes project management, operations, and quality control concepts",
    "Develops skills in decision-making, problem-solving, and business ethics",
    "Prepares students for roles in business operations and administration",
  ],
  "entrepreneurship": [
    "Covers the process of starting and managing a new business venture",
    "Focuses on business plan development and market analysis",
    "Emphasizes innovation, creativity, and risk management",
    "Includes financial planning, funding strategies, and resource allocation",
    "Develops skills in identifying opportunities and building competitive advantages",
    "Prepares students to launch and grow successful business enterprises",
  ],
  "finance": [
    "Focuses on financial planning, analysis, and investment strategies",
    "Covers banking, credit, insurance, and financial services",
    "Emphasizes personal and business financial management",
    "Includes understanding of financial markets, securities, and portfolios",
    "Develops skills in budgeting, forecasting, and financial decision-making",
    "Prepares students for careers in finance, accounting, and investment management",
  ],
  "hospitality-tourism": [
    "Focuses on service excellence in hospitality and tourism industries",
    "Covers hotel management, event planning, and customer service",
    "Emphasizes creating exceptional guest experiences and satisfaction",
    "Includes destination marketing, travel planning, and tourism development",
    "Develops skills in operations management and revenue optimization",
    "Prepares students for careers in hotels, restaurants, travel, and event management",
  ],
  "marketing": [
    "Focuses on marketing strategies, brand management, and customer engagement",
    "Covers market research, consumer behavior, and segmentation",
    "Emphasizes digital marketing, social media, and advertising campaigns",
    "Includes product development, pricing strategies, and distribution channels",
    "Develops skills in communication, sales, and relationship building",
    "Prepares students for careers in marketing, advertising, and brand management",
  ],
}

