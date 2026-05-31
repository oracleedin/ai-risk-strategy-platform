import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MetricCard } from '../common/MetricCard';
import { Badge } from '../common/Badge';
import { dashboardData } from '../../data/mockMetrics';
import { mockCases } from '../../data/mockCases';

export const OverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const metrics = dashboardData.metrics;
  const scenarios = dashboardData.scenarioDistribution;

  const recentHighRiskCases = mockCases
    .filter(c => c.riskLevel === '高风险')
    .slice(0, 3);

  const getScenarioIcon = (scenario: string): string => {
    const icons: Record<string, string> = {
      '恶意退款': '💰',
      '商家刷单': '📈',
      '补贴薅羊毛': '🎯',
      '商品违规': '⚠️',
    };
    return icons[scenario] || '📋';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">风控后台概览</h1>
          <p className="text-sm text-gray-500 mt-1">实时监控风控平台运行状态</p>
        </div>
        <div className="text-sm text-gray-400">
          策略版本：{metrics.currentVersion}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="今日风险案件"
          value={metrics.totalCases}
          trend="up"
          trendValue="+17.5%"
        />
        <MetricCard
          label="高风险案件数"
          value={metrics.highRiskCount}
          trend="up"
          trendValue="+8.2%"
        />
        <MetricCard
          label="待人工审核"
          value={metrics.pendingReviewCount}
          trend="down"
          trendValue="-20.5%"
        />
        <MetricCard
          label="预估误杀率"
          value={`${metrics.estimatedFalsePositiveRate}%`}
          trend="down"
          trendValue="-1.2pp"
        />
        <MetricCard
          label="预估漏放率"
          value={`${metrics.estimatedMissRate}%`}
          trend="down"
          trendValue="-1.2pp"
        />
        <MetricCard
          label="人工审核量"
          value={metrics.manualReviewCount}
          trend="down"
          trendValue="-12%"
        />
        <MetricCard
          label="平均处理时长"
          value={`${metrics.avgReviewTime}分钟`}
          trend="down"
          trendValue="-12.5%"
        />
        <MetricCard
          label="规则命中准确率"
          value={`${metrics.ruleAccuracy}%`}
          trend="up"
          trendValue="+4.6pp"
        />
      </div>

      {/* Scenario Distribution & Module Entry Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scenario Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">风险场景分布</h2>
          <div className="space-y-3">
            {scenarios.map((item) => (
              <div
                key={item.scenario}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getScenarioIcon(item.scenario)}</span>
                  <div>
                    <p className="font-medium text-gray-900">{item.scenario}</p>
                    <p className="text-sm text-gray-500">{item.count} 件</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">{item.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Entry Cards */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">功能模块入口</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/risk-console/cases')}
              className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all border border-blue-200"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">📋</div>
              <div className="text-left">
                <p className="font-medium text-gray-900">风险案件</p>
                <p className="text-sm text-gray-500">审核 & 处理</p>
              </div>
            </button>
            <button
              onClick={() => navigate('/risk-console/rules')}
              className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all border border-green-200"
            >
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">⚙️</div>
              <div className="text-left">
                <p className="font-medium text-gray-900">规则配置</p>
                <p className="text-sm text-gray-500">策略管理</p>
              </div>
            </button>
            <button
              onClick={() => navigate('/risk-console/simulator')}
              className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all border border-purple-200"
            >
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl">🎛️</div>
              <div className="text-left">
                <p className="font-medium text-gray-900">阈值模拟</p>
                <p className="text-sm text-gray-500">效果模拟</p>
              </div>
            </button>
            <button
              onClick={() => navigate('/risk-console/dashboard')}
              className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all border border-orange-200"
            >
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl">📊</div>
              <div className="text-left">
                <p className="font-medium text-gray-900">策略看板</p>
                <p className="text-sm text-gray-500">效果追踪</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recent High-Risk Cases */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">最近高风险案件</h2>
          <button
            onClick={() => navigate('/risk-console/cases')}
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
          >
            查看全部 →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">案件 ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">风险场景</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">主体名称</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">风险等级</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">AI 风险分</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">当前状态</th>
              </tr>
            </thead>
            <tbody>
              {recentHighRiskCases.map((caseItem) => (
                <tr key={caseItem.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-mono text-gray-900">{caseItem.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <span className="flex items-center gap-2">
                      <span>{getScenarioIcon(caseItem.scenario)}</span>
                      {caseItem.scenario}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <div>
                      <p className="font-medium">{caseItem.subjectName}</p>
                      <p className="text-xs text-gray-400">{caseItem.subjectType}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="risk" riskLevel={caseItem.riskLevel}>
                      {caseItem.riskLevel}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-sm font-bold ${
                      caseItem.riskScore >= 85 ? 'text-red-600' :
                      caseItem.riskScore >= 70 ? 'text-orange-600' :
                      'text-yellow-600'
                    }`}>
                      {caseItem.riskScore}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="status" status={caseItem.status}>
                      {caseItem.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;