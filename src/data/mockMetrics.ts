import type {
  DashboardData,
  ScenarioDistribution,
  TopRuleStats,
  VersionComparison,
  ReviewDistribution,
} from '../types';

export const dashboardData: DashboardData = {
  metrics: {
    totalCases: 457,
    highRiskCount: 176,
    pendingReviewCount: 89,
    currentVersion: 'v2.1',
    estimatedFalsePositiveRate: 4.8,
    estimatedMissRate: 2.3,
    blockRate: 17.1,
    missRate: 2.3,
    manualReviewCount: 42,
    avgReviewTime: 42,
    ruleAccuracy: 84.6,
    highRiskHitRate: 37.0,
  },
  scenarioDistribution: [
    { scenario: '恶意退款', count: 156, percentage: 34.1 },
    { scenario: '商家刷单', count: 124, percentage: 27.1 },
    { scenario: '补贴薅羊毛', count: 98, percentage: 21.4 },
    { scenario: '商品违规', count: 79, percentage: 17.3 },
  ],
  topRules: [
    { ruleId: 'RULE001', ruleName: '高频退款风险', hitCount: 184, hitPercentage: 23.4, accuracy: 86, falsePositiveRate: 5.2 },
    { ruleId: 'RULE003', ruleName: '商家订单异常增长规则', hitCount: 96, hitPercentage: 18.6, accuracy: 82, falsePositiveRate: 6.1 },
    { ruleId: 'RULE005', ruleName: '新客补贴异常规则', hitCount: 156, hitPercentage: 15.0, accuracy: 88, falsePositiveRate: 4.3 },
    { ruleId: 'RULE006', ruleName: '商品违规关键词规则', hitCount: 203, hitPercentage: 13.3, accuracy: 84, falsePositiveRate: 5.7 },
    { ruleId: 'RULE002', ruleName: '退款理由相似规则', hitCount: 132, hitPercentage: 11.4, accuracy: 78, falsePositiveRate: 7.4 },
  ],
  versionComparison: [
    { version: 'v1.8', blockRate: 15.9, falsePositiveRate: 6.0, missRate: 3.5, manualReviewCount: 48, riskAccuracy: 80.0 },
    { version: 'v2.1', blockRate: 17.1, falsePositiveRate: 4.8, missRate: 2.3, manualReviewCount: 42, riskAccuracy: 84.6 },
  ],
  reviewDistribution: [
    { status: '已放行', count: 234, percentage: 51.2 },
    { status: '已拦截', count: 78, percentage: 17.1 },
    { status: '人工复核中', count: 42, percentage: 9.2 },
    { status: '待审核', count: 89, percentage: 19.5 },
    { status: '观察中', count: 10, percentage: 2.2 },
    { status: '已升级', count: 4, percentage: 0.9 },
  ],
};

export const scenarioDistribution: ScenarioDistribution[] = dashboardData.scenarioDistribution;
export const topRules: TopRuleStats[] = dashboardData.topRules;
export const versionComparison: VersionComparison[] = dashboardData.versionComparison;
export const reviewDistribution: ReviewDistribution[] = dashboardData.reviewDistribution;