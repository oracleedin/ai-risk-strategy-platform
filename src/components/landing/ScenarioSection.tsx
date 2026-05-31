import React from 'react';

const scenarios = [
  {
    name: '恶意退款',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'red',
    signals: ['频繁申请退款', '退货商品损坏', '退款金额异常', '历史退款率高'],
    focus: '交易链路追踪 + 行为序列分析',
  },
  {
    name: '商家刷单',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'orange',
    signals: ['IP地址集中', '账号关联性强', '收货地址相似', '下单时间规律'],
    focus: '设备指纹 + 社交关系图谱',
  },
  {
    name: '补贴薅羊毛',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'green',
    signals: ['新户集中爆发', '活动参与异常', '套利意图明显', '账户生命周期短'],
    focus: '优惠叠加分析 + 账户行为聚类',
  },
  {
    name: '商品违规',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: 'purple',
    signals: ['类目错挂', '品牌侵权', '价格虚标', '描述违禁'],
    focus: '图像识别 + NLP商品描述分析',
  },
];

const colorMap = {
  red: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-500',
    border: 'border-red-200 dark:border-red-800',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-500',
    border: 'border-orange-200 dark:border-orange-800',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-500',
    border: 'border-green-200 dark:border-green-800',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-500',
    border: 'border-purple-200 dark:border-purple-800',
  },
};

export const ScenarioSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
            风险场景
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            多场景智能风控覆盖
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            针对不同业务场景定制专属识别模型，精准捕捉各类风险行为
          </p>
        </div>

        {/* Scenario Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario, index) => {
            const colors = colorMap[scenario.color as keyof typeof colorMap];
            return (
              <div
                key={index}
                className={`relative p-8 bg-white dark:bg-gray-800 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform shrink-0`}>
                    {scenario.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {scenario.name}
                    </h3>

                    {/* Typical Signals */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">典型信号</p>
                      <div className="flex flex-wrap gap-2">
                        {scenario.signals.map((signal, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                          >
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Processing Focus */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">处理重点</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {scenario.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;