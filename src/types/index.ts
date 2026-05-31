export interface Agent {
  id: string;
  name: string;
  role: string;
  education: string;
  expertise: string;
  persona: string;
  skills: string[];
  outputs: string[];
  guardrails: string[];
  bestPhase: 'Discover' | 'Define' | 'Develop' | 'Deliver' | 'All';
  avatarColor: string; // custom HSL or Tailwind color class
}

export interface Skill {
  id: string;
  name: string;
  phase: 'Discover' | 'Define' | 'Develop' | 'Deliver';
  description: string;
  outputs: string[];
}

export interface WorkflowPhase {
  id: 'Discover' | 'Define' | 'Develop' | 'Deliver';
  name: string;
  goal: string;
  recommendedAgents: string[]; // Agent IDs
  recommendedSkills: string[]; // Skill IDs
  requiredInput: string;
  expectedOutput: string;
  judgeRelevance: string;
}

export interface RubricCriterion {
  id: string;
  name: string;
  score: number;
  explanation: string;
  redFlags: string[];
  improvement: string;
  recommendedAgentId: string;
}

export interface ProposalSection {
  id: string;
  title: string;
  maxWords: number;
  judgeFocus: string;
  helperAgentId: string;
  templateContent: string;
}

export interface GeneratedOutput {
  id: string;
  type: string;
  content: string;
  timestamp: string;
  authorAgentId: string;
  inputUsed: string;
}
