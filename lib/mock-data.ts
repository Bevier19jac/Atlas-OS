import type {
  AtlasBlueprint,
  AutomationOpportunity,
  BusinessIdea,
  DashboardCardData,
  EntrepreneurProfile,
  RoadmapItem,
} from "@/types/atlas";

export const sampleEntrepreneurProfile: EntrepreneurProfile = {
  id: "profile-001",
  name: "Maya Johnson",
  email: "maya@example.com",
  experienceLevel: "operator",
};

export const sampleBusinessIdea: BusinessIdea = {
  id: "idea-001",
  title: "AI follow-up system for boutique consultants",
  summary:
    "A lightweight service that turns discovery calls into structured follow-up notes, next steps, and client-ready proposals.",
  currentStage: "Customer problem identified, offer not packaged yet",
  biggestProblem: "Consultants lose momentum after calls because follow-up is inconsistent.",
  desiredOutcome: "Launch a paid pilot with five consultants in 30 days.",
};

export const sampleRoadmapItems: RoadmapItem[] = [
  {
    week: "Week 1",
    objective: "Validate pain and buyer urgency",
    deliverable: "Interview script, 10 target prospects, and pain-pattern notes",
  },
  {
    week: "Week 2",
    objective: "Package the pilot offer",
    deliverable: "One-page offer, pricing hypothesis, and delivery workflow",
  },
  {
    week: "Week 3",
    objective: "Sell and deliver manually",
    deliverable: "Three pilot conversations and first paid client target",
  },
  {
    week: "Week 4",
    objective: "Document repeatable system",
    deliverable: "Delivery checklist, automation backlog, and next build decision",
  },
];

export const sampleAutomationOpportunities: AutomationOpportunity[] = [
  {
    name: "Call summary extraction",
    description:
      "Use AI to convert discovery call transcripts into pain points, commitments, and proposal inputs.",
    priority: "High",
  },
  {
    name: "Proposal first draft",
    description:
      "Generate a structured proposal draft from approved intake data and founder-reviewed positioning.",
    priority: "Medium",
  },
  {
    name: "Client follow-up reminders",
    description:
      "Trigger next-step reminders when prospects stall after a proposal or pilot delivery milestone.",
    priority: "Medium",
  },
];

export const sampleAtlasBlueprint: AtlasBlueprint = {
  id: "blueprint-001",
  name: "AI Follow-Up System Blueprint",
  sprintObjective: {
    title: "Atlas Idea-to-Business Sprint",
    status: "Active",
    outcome: "Validate and package a paid pilot before building software.",
  },
  businessConcept:
    "A productized service for boutique consultants that turns client calls into polished follow-up assets and proposal drafts.",
  targetCustomer:
    "Independent consultants and small advisory firms that sell high-trust services through discovery calls.",
  problemStatement:
    "Consultants often create strong call momentum but lose revenue because follow-up is slow, inconsistent, or too generic.",
  firstOffer:
    "A 14-day Follow-Up Operating System Sprint that documents the consultant's sales conversation, drafts follow-up assets, and creates a repeatable proposal workflow.",
  revenueModel:
    "Start with a fixed-fee sprint, then expand into a monthly optimization retainer once the manual workflow is proven.",
  differentiation:
    "Atlas positions this as a strategic revenue workflow, not a generic AI note-taking tool. The emphasis is sharper follow-up, better offers, and faster paid decisions.",
  roadmap: sampleRoadmapItems,
  automationOpportunities: sampleAutomationOpportunities,
  buildRecommendation: {
    decision: "Validate First",
    rationale:
      "Sell and deliver the sprint manually before building a SaaS product. The workflow needs proof of urgency, willingness to pay, and repeatable delivery steps.",
  },
};

export const dashboardCards: DashboardCardData[] = [
  {
    title: "Current Sprint",
    description: sampleAtlasBlueprint.sprintObjective.outcome,
    status: "Active",
    metric: "Day 4 of 14",
  },
  {
    title: "Idea Status",
    description: sampleBusinessIdea.summary,
    status: "Clarifying",
    metric: "Offer packaging next",
  },
  {
    title: "Offer Blueprint",
    description: sampleAtlasBlueprint.firstOffer,
    status: "Draft",
    metric: "6 sections prepared",
  },
  {
    title: "Execution Roadmap",
    description: "30-day path from validation to first paid pilot and repeatable delivery.",
    status: "Ready",
    metric: "4 weekly milestones",
  },
  {
    title: "AI Automation Opportunities",
    description: "Automation ideas are ranked after the manual workflow is understood.",
    status: "Mapped",
    metric: "3 opportunities",
  },
  {
    title: "Next Action",
    description: "Interview five target consultants and test the pain/problem statement.",
    status: "Priority",
    metric: "Due this week",
  },
];
