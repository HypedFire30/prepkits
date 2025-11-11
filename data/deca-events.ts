export interface DECAEvent {
  id: string
  name: string
  description: string
  eventCode: string
}

export interface ClusterEvents {
  clusterId: string
  events: DECAEvent[]
}

// DECA Competitive Events by Cluster - Updated with official DECA event names
export const decaEvents: Record<string, DECAEvent[]> = {
  "business-administration": [
    {
      id: "hrm",
      name: "Human Resources Management Series",
      description: "Students analyze HR scenarios and develop solutions for workforce management challenges.",
      eventCode: "HRM",
    },
    {
      id: "bltdm",
      name: "Business Law and Ethics Team Decision Making",
      description: "Teams analyze business law and ethics scenarios to make strategic decisions.",
      eventCode: "BLTDM",
    },
  ],
  "entrepreneurship": [
    {
      id: "ent",
      name: "Entrepreneurship Series",
      description: "Students develop and present a business plan for a new venture, demonstrating entrepreneurial skills.",
      eventCode: "ENT",
    },
    {
      id: "etdm",
      name: "Entrepreneurship Team Decision Making",
      description: "Teams analyze business scenarios and make strategic decisions for entrepreneurial ventures.",
      eventCode: "ETDM",
    },
  ],
  "finance": [
    {
      id: "act",
      name: "Accounting Applications Series",
      description: "Students demonstrate accounting knowledge through practical applications and problem-solving.",
      eventCode: "ACT",
    },
    {
      id: "bfs",
      name: "Business Finance Series",
      description: "Students analyze financial scenarios and provide business finance solutions.",
      eventCode: "BFS",
    },
    {
      id: "ftdm",
      name: "Financial Services Team Decision Making",
      description: "Teams make strategic financial decisions through case analysis and roleplay scenarios.",
      eventCode: "FTDM",
    },
  ],
  "hospitality-tourism": [
    {
      id: "hlm",
      name: "Hotel and Lodging Management Series",
      description: "Students demonstrate knowledge of hotel operations, guest services, and revenue management.",
      eventCode: "HLM",
    },
    {
      id: "htdm",
      name: "Hospitality Services Team Decision Making",
      description: "Teams analyze hospitality scenarios and make decisions to improve guest experiences.",
      eventCode: "HTDM",
    },
    {
      id: "qsrm",
      name: "Quick Serve Restaurant Management Series",
      description: "Students demonstrate knowledge of quick service restaurant operations and management.",
      eventCode: "QSRM",
    },
    {
      id: "rfsm",
      name: "Restaurant and Food Service Management Series",
      description: "Students analyze restaurant operations and develop solutions for food service challenges.",
      eventCode: "RFSM",
    },
    {
      id: "ttdm",
      name: "Travel and Tourism Team Decision Making",
      description: "Teams make strategic decisions for travel and tourism businesses.",
      eventCode: "TTDM",
    },
  ],
  "marketing": [
    {
      id: "aam",
      name: "Apparel and Accessories Marketing Series",
      description: "Students develop marketing strategies for apparel and accessories products.",
      eventCode: "AAM",
    },
    {
      id: "asm",
      name: "Automotive Services Marketing Series",
      description: "Students demonstrate knowledge of automotive services marketing and sales.",
      eventCode: "ASM",
    },
    {
      id: "bsm",
      name: "Business Services Marketing Series",
      description: "Students develop marketing strategies for business-to-business services.",
      eventCode: "BSM",
    },
    {
      id: "btdm",
      name: "Buying and Merchandising Team Decision Making",
      description: "Teams analyze business services scenarios and develop marketing solutions.",
      eventCode: "BTDM",
    },
    {
      id: "fms",
      name: "Food Marketing Series",
      description: "Students develop marketing strategies for food products and services.",
      eventCode: "FMS",
    },
    {
      id: "mcs",
      name: "Marketing Communications Series",
      description: "Students develop and present marketing communication strategies and campaigns.",
      eventCode: "MCS",
    },
    {
      id: "mtdm",
      name: "Marketing Management Team Decision Making",
      description: "Teams analyze marketing scenarios and develop strategic marketing solutions.",
      eventCode: "MTDM",
    },
    {
      id: "rms",
      name: "Retail Merchandising Series",
      description: "Students demonstrate knowledge of retail operations, visual merchandising, and sales.",
      eventCode: "RMS",
    },
    {
      id: "sem",
      name: "Sports and Entertainment Marketing Series",
      description: "Students develop marketing strategies for sports and entertainment products and events.",
      eventCode: "SEM",
    },
    {
      id: "stdm",
      name: "Sports and Entertainment Marketing Team Decision Making",
      description: "Teams make strategic marketing decisions for sports and entertainment businesses.",
      eventCode: "STDM",
    },
  ],
}
