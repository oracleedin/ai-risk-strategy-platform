import React from 'react';

const flowSteps = [
  {
    step: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '数据采集',
    description: '实时汇聚交易、行为、设备等多维度数据',
  },
  {
    step: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI特征提取',
    description: '深度学习模型自动提取风险特征向量',
  },
  {
    step: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '智能决策',
    description: '多模型ensemble实时输出风险评分',
  },
  {
    step: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '自动执行',
    description: '策略引擎毫秒级执行拦截/放行',
  },
];

const Arrow: React.FC = () => (
  <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </div>
);

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full mb-4">
            解决方案
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI驱动的智能风控流程
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            从数据采集到智能决策，全流程自动化处理，大幅提升风控效率
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step Card */}
                  <div className="relative w-full bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-6 mx-auto">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between cards */}
                  {index < flowSteps.length - 1 && <Arrow />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '<50ms', label: '平均响应时间' },
            { value: '99.9%', label: '系统可用性' },
            { value: '10x', label: '审核效率提升' },
            { value: '60%', label: '运营成本降低' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;