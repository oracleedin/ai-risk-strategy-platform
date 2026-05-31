import React from 'react';
import { useNavigate } from 'react-router-dom';

const metrics = [
  { label: '今日风险案件', value: '128', highlight: true },
  { label: '高风险命中率', value: '37%', highlight: false },
  { label: '误杀率预估', value: '4.8%', highlight: false },
  { label: '人工审核量', value: '62', highlight: false },
  { label: '当前策略版本', value: 'v2.1', highlight: false },
];

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-950 dark:via-gray-900 dark:to-blue-950" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              AI驱动的智能风控平台
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              智能识别
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {' '}风险交易
              </span>
              <br />
              让审核更精准
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
              基于深度学习的多场景风控系统，实时识别恶意退款、商家刷单、补贴薅羊毛等风险行为，大幅降低误杀率，提升审核效率。
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/risk-console')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 cursor-pointer"
              >
                进入风控后台
              </button>
              <button
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                查看策略设计思路
              </button>
            </div>
          </div>

          {/* Right content - Product Preview Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">实时监控面板</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Risk Management Dashboard</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">
                  Live
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className={`p-4 rounded-xl ${
                        metric.highlight
                          ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
                          : 'bg-gray-50 dark:bg-gray-900'
                      }`}
                    >
                      <p className={`text-sm mb-1 ${metric.highlight ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                        {metric.label}
                      </p>
                      <p className={`text-2xl font-bold ${metric.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Mini chart placeholder */}
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">风险趋势</span>
                    <span className="text-xs text-green-600 dark:text-green-400">+12% vs昨日</span>
                  </div>
                  <div className="flex items-end gap-2 h-16">
                    {[40, 65, 45, 80, 55, 70, 60, 85, 75, 90, 80, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;