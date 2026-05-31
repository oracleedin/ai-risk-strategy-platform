import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';
import { Toast } from '../common/Toast';
import { dashboardData } from '../../data/mockMetrics';

export const DashboardPage: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<'v1.8' | 'v2.1'>('v2.1');

  const metrics = dashboardData.metrics;
  const scenarios = dashboardData.scenarioDistribution;
  const topRules = dashboardData.topRules;
  const versionComparison = dashboardData.versionComparison;
  const reviewDist = dashboardData.reviewDistribution;

  const handleExportReport = () => {
    setToastMessage({
      message: '风险报告已导出（模拟），当前 Demo 使用前端状态模拟，不会导出真实数据。',
      type: 'success',
    });
  };

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
    <div className="p-6 max-w-7xl mx-auto">
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          type={toastMessage.type}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">策略效果看板</h1>
          <p className="text-sm text-gray-500 mt-1">追踪策略上线后的核心指标和版本效果</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedVersion('v1.8')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                selectedVersion === 'v1.8' ? 'bg-white shadow text-blue-600' : 'text-gray-600'
              }`}
            >
              v1.8
            </button>
            <button
              onClick={() => setSelectedVersion('v2.1')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                selectedVersion === 'v2.1' ? 'bg-white shadow text-blue-600' : 'text-gray-600'
              }`}
            >
              v2.1
            </button>
          </div>
          <button
            onClick={handleExportReport}
            className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors font-medium"
          >
            导出报告
          </button>
        </div>
      </div>

      {/* Core Metrics Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">风险案件总数</p>
          <p className="text-2xl font-bold text-gray-900">{metrics.totalCases}</p>
          <p className="text-xs text-green-600 mt-1">+17.5% vs 上期</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">高风险命中率</p>
          <p className="text-2xl font-bold text-blue-600">{metrics.highRiskHitRate}%</p>
          <p className="text-xs text-green-600 mt-1">+4.6pp vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">拦截率</p>
          <p className="text-2xl font-bold text-purple-600">{metrics.blockRate}%</p>
          <p className="text-xs text-green-600 mt-1">+1.2pp vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">误杀率</p>
          <p className="text-2xl font-bold text-orange-600">{metrics.estimatedFalsePositiveRate}%</p>
          <p className="text-xs text-green-600 mt-1">-1.2pp vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">漏放率</p>
          <p className="text-2xl font-bold text-red-600">{metrics.estimatedMissRate}%</p>
          <p className="text-xs text-green-600 mt-1">-1.2pp vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">人工审核量</p>
          <p className="text-2xl font-bold text-gray-600">{metrics.manualReviewCount}</p>
          <p className="text-xs text-green-600 mt-1">-12% vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">平均处理时长</p>
          <p className="text-2xl font-bold text-gray-600">{metrics.avgReviewTime}分钟</p>
          <p className="text-xs text-green-600 mt-1">-12.5% vs v1.8</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">规则命中准确率</p>
          <p className="text-2xl font-bold text-green-600">{metrics.ruleAccuracy}%</p>
          <p className="text-xs text-green-600 mt-1">+4.6pp vs v1.8</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Risk Scenario Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">风险场景分布</h3>
          <div className="space-y-4">
            {scenarios.length === 0 ? (
              <p className="text-sm text-gray-400">暂无数据</p>
            ) : (
              scenarios.map((item) => (
                <div key={item.scenario}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span>{getScenarioIcon(item.scenario)}</span>
                      <span className="text-sm font-medium text-gray-700">{item.scenario}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-900">{item.count} 件</span>
                      <span className="text-sm text-gray-500">{item.percentage}%</span>
                    </div>
                  </div>
                  <ProgressBar value={item.percentage} color="blue" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* Review Distribution */}
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">审核结果分布</h3>
          <div className="space-y-3">
            {reviewDist.length === 0 ? (
              <p className="text-sm text-gray-400">暂无数据</p>
            ) : (
              reviewDist.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <Badge variant="status" status={item.status}>{item.status}</Badge>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-900">{item.count} 件</span>
                    <span className="text-sm text-gray-500 w-12 text-right">{item.percentage}%</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Top Rules */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Top 命中规则</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-xs text-gray-500 font-medium pb-3">规则名称</th>
                <th className="text-right text-xs text-gray-500 font-medium pb-3">命中次数</th>
                <th className="text-right text-xs text-gray-500 font-medium pb-3">命中占比</th>
                <th className="text-right text-xs text-gray-500 font-medium pb-3">准确率</th>
                <th className="text-right text-xs text-gray-500 font-medium pb-3">误杀率</th>
              </tr>
            </thead>
            <tbody>
              {topRules.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-sm text-gray-400 py-4">暂无数据</td>
                </tr>
              ) : (
                topRules.map((rule) => (
                  <tr key={rule.ruleId} className="border-b border-gray-100">
                    <td className="py-3 text-sm font-medium text-gray-900">{rule.ruleName}</td>
                    <td className="py-3 text-sm text-gray-900 text-right">{rule.hitCount}</td>
                    <td className="py-3 text-sm text-gray-900 text-right">{rule.hitPercentage}%</td>
                    <td className="py-3 text-sm text-gray-900 text-right">{rule.accuracy}%</td>
                    <td className="py-3 text-sm text-orange-600 text-right">{rule.falsePositiveRate}%</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Version Comparison */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">策略版本对比</h3>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 grid grid-cols-5 gap-4 mb-4">
            <div></div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className={`text-center p-3 rounded-lg ${
                ver.version === 'v2.1' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
              }`}>
                <span className={`text-sm font-medium ${
                  ver.version === 'v2.1' ? 'text-blue-700' : 'text-gray-600'
                }`}>{ver.version}</span>
              </div>
            ))}
          </div>
          <div className="col-span-5 grid grid-cols-5 gap-4">
            <div className="text-sm text-gray-500">拦截率</div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className="text-center">
                <span className="text-sm font-medium text-gray-900">{ver.blockRate}%</span>
              </div>
            ))}
          </div>
          <div className="col-span-5 grid grid-cols-5 gap-4">
            <div className="text-sm text-gray-500">误杀率</div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className="text-center">
                <span className={`text-sm font-medium ${
                  ver.version === 'v2.1' ? 'text-green-600' : 'text-gray-900'
                }`}>{ver.falsePositiveRate}%</span>
              </div>
            ))}
          </div>
          <div className="col-span-5 grid grid-cols-5 gap-4">
            <div className="text-sm text-gray-500">漏放率</div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className="text-center">
                <span className="text-sm font-medium text-gray-900">{ver.missRate}%</span>
              </div>
            ))}
          </div>
          <div className="col-span-5 grid grid-cols-5 gap-4">
            <div className="text-sm text-gray-500">人工审核量</div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className="text-center">
                <span className="text-sm font-medium text-gray-900">{ver.manualReviewCount}</span>
              </div>
            ))}
          </div>
          <div className="col-span-5 grid grid-cols-5 gap-4">
            <div className="text-sm text-gray-500">风险准确率</div>
            {versionComparison.map((ver) => (
              <div key={ver.version} className="text-center">
                <span className={`text-sm font-medium ${
                  ver.version === 'v2.1' ? 'text-green-600' : 'text-gray-900'
                }`}>{ver.riskAccuracy}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* v2.1 Optimization Highlights */}
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800 font-medium">
            <span className="text-lg mr-2">✨</span>
            <strong>v2.1 相比 v1.8：</strong>误杀率下降 1.2pp，风险命中准确率提升 4.6pp，人工审核量下降 12%。
            这意味着在保持更高风险拦截能力的同时，减少了对正常用户和商家的误伤，提升了审核效率。
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;