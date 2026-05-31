import React, { useState, useMemo } from 'react';
import { Toast } from '../common/Toast';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

interface SimulationMetrics {
  blockRate: number;
  falsePositiveRate: number;
  missRate: number;
  manualReviewCount: number;
  userComplaintRisk: number;
  assetLossRisk: number;
}

const STRATEGY_MODES = {
  conservative: { label: '保守策略', threshold: 82, description: '阈值较高，误杀率低，但漏放风险较高', suitable: '用户体验优先、风险损失较小的场景' },
  balanced: { label: '均衡策略', threshold: 70, description: '拦截、误杀、漏放和审核量相对平衡', suitable: '大多数平台治理场景' },
  aggressive: { label: '激进策略', threshold: 55, description: '阈值较低，拦截率高，但误杀率和审核成本较高', suitable: '高资损、高投诉、高违规风险场景' },
};

export const SimulatorPage: React.FC = () => {
  const [threshold, setThreshold] = useState<number>(70);
  const [toastMessage, setToastMessage] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null);

  const metrics = useMemo((): SimulationMetrics => {
    const normalizedThreshold = threshold / 100;
    const baseBlockRate = 95;
    const baseFalsePositive = 15;
    const baseMissRate = 1;
    const baseManualReview = 180;

    const blockRate = Math.max(5, Math.min(95, baseBlockRate * (1 - normalizedThreshold * 0.8 + 0.1)));
    const falsePositiveRate = Math.max(1, Math.min(20, baseFalsePositive * (1 - normalizedThreshold * 0.9)));
    const missRate = Math.max(0.5, Math.min(15, baseMissRate * (normalizedThreshold * 1.5)));
    const manualReviewCount = Math.round(baseManualReview * (1 - normalizedThreshold * 0.7 + 0.3));
    const userComplaintRisk = Math.max(2, Math.min(25, falsePositiveRate * 1.2));
    const assetLossRisk = Math.max(3, Math.min(30, missRate * 1.5 + (100 - threshold) * 0.1));

    return {
      blockRate: Math.round(blockRate * 10) / 10,
      falsePositiveRate: Math.round(falsePositiveRate * 10) / 10,
      missRate: Math.round(missRate * 10) / 10,
      manualReviewCount,
      userComplaintRisk: Math.round(userComplaintRisk * 10) / 10,
      assetLossRisk: Math.round(assetLossRisk * 10) / 10,
    };
  }, [threshold]);

  const strategySuggestion = useMemo(() => {
    if (threshold < 60) {
      return { level: '激进', color: 'red', message: '当前策略偏激进，需关注误杀和审核量' };
    }
    if (threshold > 80) {
      return { level: '保守', color: 'yellow', message: '当前策略偏保守，需关注漏放风险' };
    }
    return { level: '均衡', color: 'green', message: '当前策略较均衡' };
  }, [threshold]);

  const handleStrategyMode = (mode: 'conservative' | 'balanced' | 'aggressive') => {
    setThreshold(STRATEGY_MODES[mode].threshold);
    setToastMessage({
      message: `已切换至${STRATEGY_MODES[mode].label}，阈值设置为 ${STRATEGY_MODES[mode].threshold}`,
      type: 'info',
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {toastMessage && (
        <Toast
          message={toastMessage.message}
          type={toastMessage.type}
          onClose={() => setToastMessage(null)}
        />
      )}

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">阈值模拟器</h1>
        <p className="text-sm text-gray-500 mt-1">模拟不同风险阈值对拦截率、误杀率、漏放率和人工审核量的影响</p>
      </div>

      {/* Strategy Mode Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {(Object.keys(STRATEGY_MODES) as ('conservative' | 'balanced' | 'aggressive')[]).map((mode) => {
          const strategy = STRATEGY_MODES[mode];
          const isActive = threshold === strategy.threshold;
          return (
            <div
              key={mode}
              onClick={() => handleStrategyMode(mode)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                isActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-semibold text-gray-900">{strategy.label}</span>
                {isActive && <Badge variant="status" status="人工复核中">运行中</Badge>}
              </div>
              <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
              <p className="text-xs text-gray-400">适合：{strategy.suitable}</p>
            </div>
          );
        })}
      </div>

      {/* Threshold Slider */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">风险拦截阈值</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">0</span>
            <input
              type="range"
              min="0"
              max="100"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <span className="text-sm text-gray-500">100</span>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-2xl font-bold text-blue-600">{threshold}</span>
              <span className="text-sm text-gray-500">分</span>
            </div>
          </div>
        </div>

        {/* Strategy Suggestion */}
        <div className={`p-4 rounded-lg border ${
          strategySuggestion.color === 'red' ? 'bg-red-50 border-red-200' :
          strategySuggestion.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
          'bg-green-50 border-green-200'
        }`}>
          <p className={`text-sm font-medium ${
            strategySuggestion.color === 'red' ? 'text-red-800' :
            strategySuggestion.color === 'yellow' ? 'text-yellow-800' :
            'text-green-800'
          }`}>
            <span className="text-lg mr-2">💡</span>
            {strategySuggestion.message}
          </p>
        </div>
      </div>

      {/* Simulation Metrics */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">模拟指标预览</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">预计拦截率</span>
                <span className="text-lg font-bold text-blue-600">{metrics.blockRate}%</span>
              </div>
              <ProgressBar value={metrics.blockRate} color="blue" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">预计误杀率</span>
                <span className="text-lg font-bold text-orange-600">{metrics.falsePositiveRate}%</span>
              </div>
              <ProgressBar value={metrics.falsePositiveRate} color="orange" max={30} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">预计漏放率</span>
                <span className="text-lg font-bold text-purple-600">{metrics.missRate}%</span>
              </div>
              <ProgressBar value={metrics.missRate} color="purple" max={20} />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">预计人工审核量</span>
                <span className="text-lg font-bold text-gray-600">{metrics.manualReviewCount} 件/天</span>
              </div>
              <ProgressBar value={(metrics.manualReviewCount / 200) * 100} color="gray" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-xs text-red-600 mb-1">预计用户投诉风险</p>
              <p className="text-2xl font-bold text-red-700">{metrics.userComplaintRisk}%</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-xs text-orange-600 mb-1">预计资损风险</p>
              <p className="text-2xl font-bold text-orange-700">{metrics.assetLossRisk}%</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">阈值说明</p>
              <p className="text-sm text-gray-700">阈值越低 = 拦截越严 = 误杀越高</p>
              <p className="text-sm text-gray-700">阈值越高 = 拦截越松 = 漏放越大</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorPage;