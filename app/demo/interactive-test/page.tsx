import { InteractiveTest, type TestQuestion } from "@/components/interactive-test"
import { Suspense } from "react"

// Sample test questions for demo
const sampleQuestions: TestQuestion[] = [
  {
    id: "1",
    question: "What is the primary purpose of a mission statement?",
    options: [
      "To list company products",
      "To define the company's purpose and values",
      "To outline financial goals",
      "To describe the organizational structure",
    ],
    correctAnswer: 1,
    explanation: "A mission statement defines the company's purpose and values, serving as a guide for decision-making and strategy.",
  },
  {
    id: "2",
    question: "What does SWOT analysis stand for?",
    options: [
      "Strengths, Weaknesses, Opportunities, Threats",
      "Sales, Workforce, Operations, Technology",
      "Strategic, Workflow, Organizational, Tactical",
      "Service, Wealth, Output, Training",
    ],
    correctAnswer: 0,
    explanation: "SWOT analysis is a strategic planning tool that evaluates Strengths, Weaknesses, Opportunities, and Threats to help organizations make informed decisions.",
  },
  {
    id: "3",
    question: "What is the break-even point?",
    options: [
      "The point where revenue equals total costs",
      "The point where profit is maximized",
      "The point where sales volume is highest",
      "The point where fixed costs are zero",
    ],
    correctAnswer: 0,
    explanation: "The break-even point is the point at which total revenue equals total costs, resulting in neither profit nor loss.",
  },
  {
    id: "4",
    question: "Which of the following is a characteristic of effective leadership?",
    options: [
      "Micromanaging all tasks",
      "Clear communication and vision",
      "Avoiding delegation",
      "Making all decisions alone",
    ],
    correctAnswer: 1,
    explanation: "Effective leadership involves clear communication, a shared vision, and the ability to inspire and guide others toward common goals.",
  },
  {
    id: "5",
    question: "What is the difference between marketing and sales?",
    options: [
      "Marketing focuses on long-term brand building; sales focuses on immediate transactions",
      "They are the same thing",
      "Marketing is only digital; sales is only in-person",
      "Marketing costs money; sales makes money",
    ],
    correctAnswer: 0,
    explanation: "Marketing focuses on creating awareness, building brand, and generating leads over time, while sales focuses on converting leads into immediate transactions.",
  },
]

export default function InteractiveTestDemo() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading test...</div>}>
          <InteractiveTest 
            questions={sampleQuestions} 
            testName="Interactive Test Demo"
          />
        </Suspense>
      </main>
    </div>
  )
}

