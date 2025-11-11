export interface Cluster {
  id: string
  name: string
  description: string
  color: string
  videoId?: string
  videoType?: "youtube" | "vimeo"
  iconPath?: string
  iconColor?: string
}

export const clusters: Cluster[] = [
  {
    id: "business-administration",
    name: "Business Administration",
    description: "Core business management and administrative skills",
    color: "from-yellow-400 to-yellow-600",
    videoId: "YOUR_VIDEO_ID_HERE", // Replace with actual video ID
    videoType: "youtube", // or "vimeo"
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    description: "Starting and managing your own business",
    color: "from-purple-500 to-purple-700",
    videoId: undefined, // Add video ID when available
    videoType: "youtube",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Financial planning, analysis, and management",
    color: "from-green-500 to-green-700",
    videoId: undefined,
    videoType: "youtube",
  },
  {
    id: "hospitality-tourism",
    name: "Hospitality & Tourism",
    description: "Service excellence in hospitality and tourism",
    color: "from-blue-700 to-blue-900",
    videoId: undefined,
    videoType: "youtube",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Marketing strategies and brand management",
    color: "from-red-500 to-red-700",
    videoId: undefined,
    videoType: "youtube",
  },
]

