import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { Toast } from '../common/Toast';
import { EmptyState } from '../common/EmptyState';
import { mockRules } from '../../data/mockRules';
import type { RiskRule } from '../../types';

export const RulesPage: React.FC = () => {
  const [selectedRule, setSelectedRule] = useState<RiskRule | null>(null);
  const [rules, setRules] = useState<RiskRule[]>(mockRules);
  const [toastMessage, setToastMessage] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null);
  const [localThresholds, setLocalThresholds] = useState<Record<string, number | string>>({});

  const handleSelectRule = (rule: RiskRule) => {
    setSelectedRule(rule);
    if (!localThresholds[rule.id] && rule.conditions.length > 0) {
      const firstCondition = rule.conditions[0];
      if (typeof firstCondition.value === 'number') {
        setLocalThresholds(prev => ({ ...prev, [rule.id]: firstCondition.value }));
      }
    }
  };

  const handleToggleEnabled = (ruleId: string) => {
    setRules(prevRules =>
      prevRules.map(rule =>
        rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
      )
    );

    if (selectedRule?.id === ruleId) {
      setSelectedRule(prev => prev ? { ...prev, enabled: !prev.enabled } : null);
    }

    const rule = rules.find(r => r.id === ruleId);
    setToastMessage({
      message: `规则 "${rule?.name}" 已${rule?.enabled ? '禁用' : '启用'}`,
      type: 'success',
    });
  };

  const handleThresholdChange = (ruleId: string, value: number) => {
    setLocalThresholds(prev => ({ ...prev, [ruleId]: value }));
  };

  const handleSaveStrategy = () => {
    if (!selectedRule) return;
    setToastMessage({
      message: `规则 "${selectedRule.name}" 的配置已保存至当前 Demo 状态`,
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
    <div className="flex h-full">
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          type={toastMessage.type}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Left Column: Rule List */}
      <div className="w-96 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">规则策略配置</h2>
          <p className="text-sm text-gray-500 mt-1">共 {rules.length} 条风控规则</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {rules.length === 0 ? (
            <EmptyState icon="📋" message="暂无规则配置" />
          ) : (
            rules.map((rule) => (
              <div
                key={rule.id}
                onClick={() => handleSelectRule(rule)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedRule?.id === rule.id ? 'bg-blue-50 border-l-2 border-l-blue-500' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span>{getScenarioIcon(rule.scenario)}</span>
                    <span className="text-sm font-medium text-gray-900">{rule.name}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleEnabled(rule.id);
                    }}
                    className={`relative w-10 h-5 rounded-full transition-colors ${
                      rule.enabled ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform shadow ${
                        rule.enabled ? 'left-5' : 'left-0.5'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="risk" riskLevel={rule.riskLevel}>
                    {rule.riskLevel}
                  </Badge>
                  <span className="text-xs text-gray-500">{rule.scenario}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>策略版本: {rule.version}</span>
                  <span>近 7 日命中: {rule.hitCount7d}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Column: Rule Detail / Config Panel */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {selectedRule ? (
          <div className="p-6 space-y-6">
            {/* Rule Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedRule.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">规则ID: {selectedRule.id}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="risk" riskLevel={selectedRule.riskLevel}>
                    {selectedRule.riskLevel}
                  </Badge>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedRule.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {selectedRule.enabled ? '已启用' : '已禁用'}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">适用场景</p>
                  <p className="text-sm font-medium text-gray-900">{selectedRule.scenario}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">处理动作</p>
                  <p className="text-sm font-medium text-gray-900">{selectedRule.action}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">逻辑关系</p>
                  <p className="text-sm font-medium text-gray-900">{selectedRule.logic}</p>
                </div>
              </div>

              {selectedRule.description && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">规则说明</p>
                  <p className="text-sm text-gray-700">{selectedRule.description}</p>
                </div>
              )}
            </div>

            {/* Conditions Config */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-4">条件配置</h4>
              <div className="space-y-4">
                {selectedRule.conditions.map((condition, index) => (
                  <div key={`${condition.field}-${index}`} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-900">条件 {index + 1}</span>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {selectedRule.logic}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-500">条件字段</label>
                        <p className="text-sm text-gray-900 font-mono">{condition.field}</p>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">运算符</label>
                        <p className="text-sm text-gray-900">{condition.operator}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="text-xs text-gray-500 mb-1 block">阈值</label>
                      {typeof condition.value === 'number' ? (
                        <div className="flex items-center gap-3">
                          <input
                            type="range"
                            min="0"
                            max={100}
                            step="1"
                            value={localThresholds[selectedRule.id] ?? condition.value}
                            onChange={(e) => handleThresholdChange(selectedRule.id, parseFloat(e.target.value))}
                            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                          />
                          <input
                            type="number"
                            value={localThresholds[selectedRule.id] ?? condition.value}
                            onChange={(e) => handleThresholdChange(selectedRule.id, parseFloat(e.target.value))}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm text-center"
                          />
                        </div>
                      ) : (
                        <p className="text-sm text-gray-900 font-mono">{condition.value}</p>
                      )}
                    </div>
                    <p className="mt-2 text-xs text-gray-500">{condition.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSaveStrategy}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium text-sm"
                >
                  保存策略
                </button>
              </div>
            </div>

            {/* Rule Statistics */}
            <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
              <h4 className="text-base font-semibold text-gray-900 mb-4">近 7 日效果</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">{selectedRule.hitCount7d}</p>
                  <p className="text-xs text-gray-500 mt-1">命中次数</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">{selectedRule.accuracy}%</p>
                  <p className="text-xs text-gray-500 mt-1">准确率</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">{selectedRule.falsePositiveRate}%</p>
                  <p className="text-xs text-gray-500 mt-1">误杀率</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900">{selectedRule.version}</p>
                  <p className="text-xs text-gray-500 mt-1">策略版本</p>
                </div>
              </div>
            </div>

            {/* Threshold Change Impact */}
            {localThresholds[selectedRule.id] !== undefined && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>阈值调整影响提示：</strong>降低阈值可能提升拦截率，但同时会增加误杀率和人工审核量。建议调整后观察 3-5 天数据再做最终决策。
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <EmptyState icon="📋" message="请选择一个规则查看详情或配置" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RulesPage;