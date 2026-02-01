import type { Flashcard } from "./flashcards"

const CLUSTER_NAMES: Record<string, string> = {
  "business-administration": "Business Administration",
  entrepreneurship: "Entrepreneurship",
  finance: "Finance",
  "hospitality-tourism": "Hospitality & Tourism",
  marketing: "Marketing",
}

/**
 * DECA-focused expanded content for each cluster term.
 * Each paragraph explains how the term relates to DECA competitions, performance indicators,
 * role-plays, or career readiness—so the accordion shows something different from the definition.
 */
function decaExpansion(
  term: string,
  clusterId: string,
  index: number
): string {
  const clusterName = CLUSTER_NAMES[clusterId] ?? clusterId
  const templates = [
    `In DECA ${clusterName} events, ${term} is a core concept. Performance indicators and role-play rubrics often assess your ability to apply it when analyzing business scenarios and recommending solutions. Strong competitors define the term, explain its relevance to the situation, and connect it to their recommendations.`,
    `DECA ${clusterName} role-plays and written events frequently involve ${term}. Judges score you on how well you demonstrate this concept in your analysis and delivery. Use it when structuring your response and when connecting your ideas to the event’s performance indicators.`,
    `This concept appears in DECA ${clusterName} performance indicator lists and is relevant to both the cluster exam and competitive events. In role-plays, show your understanding by applying ${term} to the scenario; in written events, use it to justify your recommendations and strengthen your plan.`,
    `DECA prepares you for careers in ${clusterName}; ${term} is one of the workplace skills that competitive events are designed to develop. Demonstrating it in role-plays, case studies, or written projects helps you prove your readiness to judges and aligns with what employers look for.`,
    `When preparing for DECA ${clusterName} events, make sure you can explain and apply ${term}. Role-play judges look for clear connections between the scenario and concepts like this, and the cluster exam may test your knowledge directly. Use practice role-plays to build fluency.`,
  ]
  return templates[index % templates.length]
}

/**
 * Returns an array of DECA-expanded paragraphs for a cluster’s flashcards (same order as the set).
 * Use this in the "Terms in this set" accordion so expanded content is DECA-focused, not a repeat of the definition.
 */
export function getClusterDecaDetails(
  clusterId: string,
  flashcards: Flashcard[]
): string[] {
  return flashcards.map((card, index) =>
    decaExpansion(card.term, clusterId, index)
  )
}
