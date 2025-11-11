export interface Flashcard {
  id: string
  term: string
  definition: string
}

export interface FlashcardSet {
  clusterId: string
  flashcards: Flashcard[]
}

// Example flashcards - easy to update by editing this file
export const flashcardSets: Record<string, Flashcard[]> = {
  "business-administration": [
    {
      id: "1",
      term: "SWOT Analysis",
      definition: "A strategic planning technique used to identify Strengths, Weaknesses, Opportunities, and Threats related to business competition or project planning.",
    },
    {
      id: "2",
      term: "Mission Statement",
      definition: "A formal summary of the aims and values of a company, organization, or individual.",
    },
    {
      id: "3",
      term: "Stakeholder",
      definition: "A person with an interest or concern in something, especially a business.",
    },
    {
      id: "4",
      term: "ROI (Return on Investment)",
      definition: "A performance measure used to evaluate the efficiency of an investment or compare the efficiency of different investments.",
    },
  ],
  "entrepreneurship": [
    {
      id: "1",
      term: "Business Plan",
      definition: "A formal written document containing business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved.",
    },
    {
      id: "2",
      term: "Startup",
      definition: "A newly established business, typically characterized by innovation and high growth potential.",
    },
    {
      id: "3",
      term: "Venture Capital",
      definition: "Financing that investors provide to startup companies and small businesses that are believed to have long-term growth potential.",
    },
    {
      id: "4",
      term: "Bootstrapping",
      definition: "Building a company from the ground up with nothing but personal savings, and with luck, the cash coming in from the first sales.",
    },
  ],
  "finance": [
    {
      id: "1",
      term: "Assets",
      definition: "Resources owned by a business that have economic value and can be converted into cash.",
    },
    {
      id: "2",
      term: "Liabilities",
      definition: "Financial obligations or debts that a company owes to others.",
    },
    {
      id: "3",
      term: "Equity",
      definition: "The value of an ownership interest in property, including shareholders' equity in a business.",
    },
    {
      id: "4",
      term: "Balance Sheet",
      definition: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time.",
    },
  ],
  "hospitality-tourism": [
    {
      id: "1",
      term: "Guest Experience",
      definition: "The overall interaction between a guest and a hospitality business throughout the entire customer journey.",
    },
    {
      id: "2",
      term: "Revenue per Available Room (RevPAR)",
      definition: "A metric used in the hospitality industry to measure hotel performance, calculated by multiplying average daily rate by occupancy rate.",
    },
    {
      id: "3",
      term: "Concierge",
      definition: "A hotel employee whose job is to assist guests with various tasks like making restaurant reservations, arranging transportation, and providing local information.",
    },
    {
      id: "4",
      term: "Yield Management",
      definition: "A variable pricing strategy based on understanding, anticipating, and influencing consumer behavior to maximize revenue or profits.",
    },
  ],
  "marketing": [
    {
      id: "1",
      term: "Target Market",
      definition: "A specific group of consumers at which a company aims its products and services.",
    },
    {
      id: "2",
      term: "Brand Positioning",
      definition: "The process of positioning your brand in the mind of your customers, differentiating it from competitors.",
    },
    {
      id: "3",
      term: "Marketing Mix (4 Ps)",
      definition: "Product, Price, Place, and Promotion - the four key elements of a marketing strategy.",
    },
    {
      id: "4",
      term: "Customer Acquisition Cost (CAC)",
      definition: "The cost associated with convincing a customer to buy a product/service, including research, marketing, and advertising costs.",
    },
  ],
}

