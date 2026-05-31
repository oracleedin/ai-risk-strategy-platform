// Risk Scenario Types
export type RiskScenario = '恶意退款' | '商家刷单' | '补贴薅羊毛' | '商品违规';

// Risk Level Types
export type RiskLevel = '低风险' | '中风险' | '高风险';

// Review Status Types
export type ReviewStatus = '待审核' | '已放行' | '已拦截' | '人工复核中' | '观察中' | '已升级';

// Subject Type Types
export type SubjectType = '用户' | '商家' | '商品';

// Review Action Types
export type ReviewAction =
  | '放行'
  | '拦截'
  | '进入人工复核'
  | '加入观察名单'
  | '升级二线审核'
  | '拦截并人工复核';

// Hit Rule Interface
export interface HitRule {
  ruleId: string;
  ruleName: string;
  condition: string;
  currentValue: string;
  contribution: '低' | '中' | '高';
  critical: boolean;
}

// Timeline Event Interface
export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

// Risk Case Interface
export interface RiskCase {
  id: string;
  scenario: RiskScenario;
  subjectType: SubjectType;
  subjectName: string;
  title: string;
  riskLevel: RiskLevel;
  riskScore: number;
  status: ReviewStatus;
  summary: string;
  aiExplanation: string;
  keyFeatures: string[];
  hitRules: HitRule[];
  timeline: TimelineEvent[];
  suggestedAction: ReviewAction;
}

// Rule Condition Interface
export interface RuleCondition {
  field: string;
  operator: '>=' | '<=' | '=' | 'contains' | 'in';
  value: string | number;
  description: string;
}

// Risk Rule Interface
export interface RiskRule {
  id: string;
  name: string;
  scenario: RiskScenario;
  description: string;
  conditions: RuleCondition[];
  logic: 'AND' | 'OR';
  riskLevel: RiskLevel;
  action: ReviewAction;
  enabled: boolean;
  version: string;
  hitCount7d: number;
  accuracy: number;
  falsePositiveRate: number;
}

// Dashboard Metrics Interface
export interface DashboardMetrics {
  totalCases: number;
  highRiskCount: number;
  pendingReviewCount: number;
  currentVersion: string;
  estimatedFalsePositiveRate: number;
  estimatedMissRate: number;
  blockRate: number;
  missRate: number;
  manualReviewCount: number;
  avgReviewTime: number;
  ruleAccuracy: number;
  highRiskHitRate: number;
}

// Scenario Distribution
export interface ScenarioDistribution {
  scenario: RiskScenario;
  count: number;
  percentage: number;
}

// Top Rule Stats
export interface TopRuleStats {
  ruleId: string;
  ruleName: string;
  hitCount: number;
  hitPercentage: number;
  accuracy: number;
  falsePositiveRate: number;
}

// Version Comparison
export interface VersionComparison {
  version: string;
  blockRate: number;
  falsePositiveRate: number;
  missRate: number;
  manualReviewCount: number;
  riskAccuracy: number;
}

// Review Distribution
export interface ReviewDistribution {
  status: ReviewStatus;
  count: number;
  percentage: number;
}

// Dashboard Data
export interface DashboardData {
  metrics: DashboardMetrics;
  scenarioDistribution: ScenarioDistribution[];
  topRules: TopRuleStats[];
  versionComparison: VersionComparison[];
  reviewDistribution: ReviewDistribution[];
}

// Const objects for reuse
export const RiskScenario = {
  MALICIOUS_REFUND: '恶意退款' as RiskScenario,
  MERCHANT_FRAUD: '商家刷单' as RiskScenario,
  SUBSIDY_ABUSE: '补贴薅羊毛' as RiskScenario,
  PRODUCT_VIOLATION: '商品违规' as RiskScenario,
} as const;

export const RiskLevel = {
  LOW: '低风险' as RiskLevel,
  MEDIUM: '中风险' as RiskLevel,
  HIGH: '高风险' as RiskLevel,
} as const;

export const ReviewStatus = {
  PENDING: '待审核' as ReviewStatus,
  PASSED: '已放行' as ReviewStatus,
  BLOCKED: '已拦截' as ReviewStatus,
  MANUAL_REVIEW: '人工复核中' as ReviewStatus,
  UNDER_OBSERVATION: '观察中' as ReviewStatus,
  ESCALATED: '已升级' as ReviewStatus,
} as const;

export const SubjectType = {
  USER: '用户' as SubjectType,
  MERCHANT: '商家' as SubjectType,
  PRODUCT: '商品' as SubjectType,
} as const;

export const ReviewAction = {
  PASS: '放行' as ReviewAction,
  BLOCK: '拦截' as ReviewAction,
  MANUAL_REVIEW: '进入人工复核' as ReviewAction,
  FLAG_OBSERVATION: '加入观察名单' as ReviewAction,
  ESCALATE: '升级二线审核' as ReviewAction,
  BLOCK_AND_REVIEW: '拦截并人工复核' as ReviewAction,
} as const;

export const ConditionLogic = {
  AND: 'AND' as const,
  OR: 'OR' as const,
} as const;