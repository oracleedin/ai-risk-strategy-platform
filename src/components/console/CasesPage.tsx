import React, { useState, useMemo } from 'react';
import { Badge } from '../common/Badge';
import { Toast } from '../common/Toast';
import { EmptyState } from '../common/EmptyState';
import { mockCases } from '../../data/mockCases';
import type { RiskCase, RiskScenario, ReviewStatus, ReviewAction } from '../../types';

type FilterTab = '全部' | RiskScenario;

const REVIEW_ACTION_LABELS: Record<ReviewAction, string> = {
  '放行': '放行',
  '拦截': '拦截',
  '进入人工复核': '人工复核',
  '加入观察名单': '观察',
  '升级二线审核': '升级',
  '拦截并人工复核': '拦截复核',
};

export const CasesPage: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('R001');
  const [activeFilter, setActiveFilter] = useState<FilterTab>('全部');
  const [toastMessage, setToastMessage] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null);
  const [cases, setCases] = useState<RiskCase[]>(mockCases);

  const filteredCases = useMemo(() => {
    if (activeFilter === '全部') return cases;
    return cases.filter(c => c.scenario === activeFilter);
  }, [cases, activeFilter]);

  const selectedCase = useMemo(() => {
    return cases.find(c => c.id === selectedCaseId) || null;
  }, [cases, selectedCaseId]);

  const handleSelectCase = (caseItem: RiskCase) => {
    setSelectedCaseId(caseItem.id);
  };

  const handleReviewAction = (action: ReviewAction) => {
    if (!selectedCase) return;

    const statusMap: Record<ReviewAction, ReviewStatus> = {
      '放行': '已放行',
      '拦截': '已拦截',
      '进入人工复核': '人工复核中',
      '加入观察名单': '观察中',
      '升级二线审核': '已升级',
      '拦截并人工复核': '人工复核中',
    };

    setCases(prevCases =>
      prevCases.map(c =>
        c.id === selectedCase.id ? { ...c, status: statusMap[action] } : c
      )
    );

    setToastMessage({
      message: `审核结果已记录：${REVIEW_ACTION_LABELS[action]}。当前 Demo 使用前端状态模拟，不会写入真实数据库。`,
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

  const getRiskScoreColor = (score: number): string => {
    if (score >= 85) return 'text-red-600 bg-red-50';
    if (score >= 70) return 'text-orange-600 bg-orange-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-green-600 bg-green-50';
  };

  const filterTabs: FilterTab[] = ['全部', '恶意退款', '商家刷单', '补贴薅羊毛', '商品违规'];

  return (
    <div className="flex h-full">
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          type={toastMessage.type}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Left Column: Case List */}
      <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">风险案件列表</h2>
          <p className="text-sm text-gray-500 mt-1">共 {filteredCases.length} 条案件</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-2 py-1 text-xs rounded-md transition-colors ${
                activeFilter === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case List */}
        <div className="flex-1 overflow-y-auto">
          {filteredCases.length === 0 ? (
            <EmptyState icon="📋" message="暂无风险案件" />
          ) : (
            filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                onClick={() => handleSelectCase(caseItem)}
                className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedCaseId === caseItem.id ? 'bg-blue-50 border-l-2 border-l-blue-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-sm font-mono text-gray-900">{caseItem.id}</span>
                  <Badge variant="risk" riskLevel={caseItem.riskLevel}>
                    {caseItem.riskLevel}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <span>{getScenarioIcon(caseItem.scenario)}</span>
                  <span className="text-sm text-gray-700">{caseItem.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{caseItem.subjectName}</span>
                  <div className="flex items-center gap-1">
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${getRiskScoreColor(caseItem.riskScore)}`}>
                      {caseItem.riskScore}
                    </span>
                  </div>
                </div>
                <div className="mt-1">
                  <Badge variant="status" status={caseItem.status}>
                    {caseItem.status}
                  </Badge>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Middle Column: Case Detail */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {selectedCase ? (
          <div className="p-6 space-y-6">
            {/* Case Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedCase.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {getScenarioIcon(selectedCase.scenario)} {selectedCase.scenario} · {selectedCase.subjectName}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="risk" riskLevel={selectedCase.riskLevel}>
                    {selectedCase.riskLevel}
                  </Badge>
                  <Badge variant="status" status={selectedCase.status}>
                    {selectedCase.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">风险主体</p>
                  <p className="text-sm font-medium text-gray-900">{selectedCase.subjectName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">AI 风险分</p>
                  <p className={`text-lg font-bold ${getRiskScoreColor(selectedCase.riskScore).split(' ')[0]}`}>
                    {selectedCase.riskScore}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">风险场景</p>
                  <p className="text-sm font-medium text-gray-900">{selectedCase.scenario}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">建议处理</p>
                  <p className="text-sm font-medium text-gray-900">{selectedCase.suggestedAction}</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500 mb-1">风险摘要</p>
                <p className="text-sm text-gray-700">{selectedCase.summary}</p>
              </div>
            </div>

            {/* AI Risk Explanation */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">🤖</span>
                <h4 className="text-base font-semibold text-gray-900">AI 风险解释</h4>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedCase.aiExplanation}
                </p>
              </div>
            </div>

            {/* Key Risk Features */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-3">关键风险特征</h4>
              <div className="space-y-2">
                {selectedCase.keyFeatures.length === 0 ? (
                  <p className="text-sm text-gray-400">暂无关键风险特征</p>
                ) : (
                  selectedCase.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-4">行为时间线</h4>
              <div className="space-y-4">
                {selectedCase.timeline.length === 0 ? (
                  <p className="text-sm text-gray-400">暂无时间线记录</p>
                ) : (
                  selectedCase.timeline.map((event, index) => (
                    <div key={`${event.time}-${index}`} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        {index < selectedCase.timeline.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gray-200 min-h-8"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{event.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{event.time}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <EmptyState icon="📋" message="请选择一个风险案件查看详情" />
          </div>
        )}
      </div>

      {/* Right Column: Hit Rules & Review Actions */}
      <div className="w-80 border-l border-gray-200 bg-white flex flex-col">
        {selectedCase ? (
          <>
            {/* Hit Rules */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900">命中规则</h3>
              <p className="text-xs text-gray-500 mt-1">共 {selectedCase.hitRules.length} 条规则被触发</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {selectedCase.hitRules.length === 0 ? (
                <EmptyState icon="📋" message="未命中规则" />
              ) : (
                selectedCase.hitRules.map((hitRule, index) => (
                  <div key={`${hitRule.ruleId}-${index}`} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{hitRule.ruleName}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        hitRule.contribution === '高' ? 'bg-red-100 text-red-700' :
                        hitRule.contribution === '中' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {hitRule.contribution}贡献
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>规则ID: {hitRule.ruleId}</p>
                      <p>命中条件: {hitRule.condition}</p>
                      <p>当前值: {hitRule.currentValue}</p>
                    </div>
                    {hitRule.critical && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded">
                        关键规则
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Review Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <h3 className="text-base font-semibold text-gray-900 mb-3">人工审核操作</h3>
              <div className="space-y-2">
                {(['放行', '拦截', '进入人工复核', '加入观察名单', '升级二线审核'] as ReviewAction[]).map((action) => (
                  <button
                    key={action}
                    onClick={() => handleReviewAction(action)}
                    className={`w-full px-3 py-2 text-sm rounded-md transition-colors font-medium ${
                      action === '放行' ? 'bg-green-500 text-white hover:bg-green-600' :
                      action === '拦截' ? 'bg-red-500 text-white hover:bg-red-600' :
                      action === '升级二线审核' ? 'bg-purple-500 text-white hover:bg-purple-600' :
                      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400 text-center">
                审核结果已记录。当前 Demo 使用前端状态模拟，不会写入真实数据库。
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <EmptyState icon="⚙️" message="请选择一个风险案件" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CasesPage;