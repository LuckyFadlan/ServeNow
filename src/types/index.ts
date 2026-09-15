export type PersonaRole = 'director' | 'manager' | 'agent' | 'compliance' | 'sales';

export interface PersonaInfo {
  role: PersonaRole;
  title: string;
  name: string;
  department: string;
  avatar: string;
  badge: string;
  accessibleTabs: string[];
  description: string;
}

export interface HistoricalFinancial {
  year: string;
  revenue: number; // in Billions IDR
  growth: number; // percentage
  arr: number; // Billions IDR
  clients: number;
  employees: number;
  netProfit: number; // Millions IDR
  netMargin: number; // percentage
  churn: number;
  criticalIncidents: number;
  revPerEmployee: number; // Millions IDR
  profitPerEmployee: number; // Millions IDR
}

export interface TransformationTarget {
  metric: string;
  current: string;
  target: string;
  gap: string;
  status: 'on-track' | 'at-risk' | 'achieved';
  category: 'Financial' | 'Operational' | 'Market';
}

export interface FinancialSimulation {
  ratio: number;
  employees: number;
  salaryCost: number; // Miliar IDR
  totalCost: number; // Miliar IDR
  netProfit: number; // Miliar IDR
  netMargin: number; // percentage
  isViable: boolean;
  notes: string;
}

export interface DOAItem {
  id: string;
  category: string;
  description: string;
  headLimit: string;
  directorLimit: string;
  dirutLimit: string;
  rationale: string;
}

export interface ApprovalRequest {
  id: string;
  applicant: string;
  role: string;
  type: 'diskon' | 'pengeluaran' | 'perubahan_lingkup' | 'proposal' | 'eskalasi';
  title: string;
  nominalValue: number;
  unit: string;
  assignedApprover: 'Head' | 'Direktur' | 'Direktur Utama';
  status: 'Pending' | 'Approved' | 'Rejected';
  timestamp: string;
  justification: string;
}

export interface ImplementationPackage {
  id: string;
  name: string;
  durationWeeks: number;
  priceMillion: number;
  marginPercent: number;
  manWeeks: number;
  staffing: string;
  targetSegment: string;
  features: string[];
  isPopular?: boolean;
}

export interface IndustryTemplate {
  id: string;
  industry: string;
  title: string;
  timeReduction: string;
  keyWorkflows: string[];
  prebuiltConnectors: string[];
  sampleClient: string;
  iconName: string;
}

export interface CustomerAccount {
  id: string;
  name: string;
  sector: 'Retail' | 'Pendidikan' | 'Kesehatan' | 'Properti' | 'Jasa Keuangan (BFSI)' | 'Pemerintahan';
  arrMillion: number;
  healthScore: number;
  churnRisk: 'Low' | 'Medium' | 'High';
  onboardingDay: number;
  slaPerformance: number;
  activeChannels: string[];
  criticalIssues: number;
  contactPerson: string;
  implementationPkg: string;
  isOutsideJabodetabek: boolean;
}

export interface OmnichannelTicket {
  id: string;
  clientName: string;
  customerUser: string;
  channel: 'WhatsApp' | 'Live Chat' | 'Email' | 'Voice' | 'Mobile App';
  subject: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Open' | 'In Progress' | 'Escalated' | 'Resolved';
  slaHoursLeft: number;
  aiClassification: string;
  aiSummary: string;
  sentiment: 'Positive' | 'Neutral' | 'Frustrated' | 'Angry';
  requiresHumanOversight: boolean;
  piiMasked: boolean;
  createdAt: string;
}

export interface ComplianceControl {
  id: string;
  code: string;
  title: string;
  framework: 'UU PDP No. 27/2022' | 'Pedoman AI Perbankan OJK 2025' | 'SPBE No. 95/2018';
  status: 'Compliant' | 'Active' | 'Audit Ready';
  description: string;
  technicalEnforcement: string;
  metrics: string;
}

export interface SalesDeal {
  id: string;
  clientName: string;
  sector: string;
  dealSizeMillion: number;
  stage: 'Lead Mentah' | 'Terkualifikasi (SDR)' | 'Peluang (AE)' | 'Proposal Demo' | 'Negosiasi Legal' | 'Menang (Closed-Won)';
  winProbability: number;
  ownerSdr: string;
  ownerAe: string;
  isOutsideJabodetabek: boolean;
  city: string;
  expectedCloseDate: string;
}

export interface EmployeeScorecard {
  id: string;
  name: string;
  role: string;
  department: string;
  targetOutputScore: number; // Weight 40%
  qualitySlaScore: number; // Weight 30%
  disciplineScore: number; // Weight 20%
  developmentScore: number; // Weight 10%
  totalScore: number;
  overtimeHours: number;
  overtimeRootCause: 'Perilaku' | 'Perencanaan' | 'Dependensi Tim' | 'Klien' | 'Resource' | 'Requirement' | 'Teknis' | 'Nihil';
  coreHoursCompliance: number; // %
}
