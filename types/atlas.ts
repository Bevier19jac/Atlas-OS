export type EntrepreneurProfile = {
  id: string;
  name: string;
  email: string;
  experienceLevel: "first-time founder" | "operator" | "expert";
};

export type BusinessIdea = {
  id: string;
  title: string;
  summary: string;
  currentStage: string;
  biggestProblem: string;
  desiredOutcome: string;
};

export type SprintObjective = {
  title: string;
  status: "Draft" | "In Review" | "Active" | "Complete";
  outcome: string;
};

export type RoadmapItem = {
  week: string;
  objective: string;
  deliverable: string;
};

export type AutomationOpportunity = {
  name: string;
  description: string;
  priority: "Low" | "Medium" | "High";
};

export type BuildRecommendation = {
  decision: "Build" | "Do Not Build Yet" | "Validate First";
  rationale: string;
};

export type AtlasBlueprint = {
  id: string;
  name: string;
  sprintObjective: SprintObjective;
  businessConcept: string;
  targetCustomer: string;
  problemStatement: string;
  firstOffer: string;
  revenueModel: string;
  differentiation: string;
  roadmap: RoadmapItem[];
  automationOpportunities: AutomationOpportunity[];
  buildRecommendation: BuildRecommendation;
};

export type DashboardCardData = {
  title: string;
  description: string;
  status: string;
  metric: string;
};

// Sprint 2: Intake persistence types

export type IntakeSubmissionInput = {
  name: string;
  email: string;
  business_idea: string;
  current_stage?: string;
  biggest_problem?: string;
  target_customer?: string;
  desired_outcome?: string;
  budget_timeline?: string;
  notes?: string;
};

export type IntakeSubmission = IntakeSubmissionInput & {
  id: string;
  created_at: string;
  status: string;
};
