import React from 'react';

const tools = [
  {
    name: '风险画像',
    description: '多维度关联分析，自动生成主体风险画像，识别高风险群体',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    name: '智能推理',
    description: '基于大语言模型的决策解释，生成人类可读的风险分析报告',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    name: '异常检测',
    description: '无监督学习自动发现离群点，无需标注即可识别新型欺诈模式',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'green',
  },
];

const colorMap = {
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-500',
    border: 'border-purple-200 dark:border-purple-800',
    accent: 'from-purple-500 to-purple-600',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-500',
    border: 'border-blue-200 dark:border-blue-800',
    accent: 'from-blue-500 to-blue-600',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-500',
    border: 'border-green-200 dark:border-green-800',
    accent: 'from-green-500 to-green-600',
  },
};

export const AIWorkflowSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/50 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full mb-4">
            AI能力
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI工具深度加持
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            融合前沿AI技术，让风控决策更智能、更透明、更高效
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => {
            const colors = colorMap[tool.color as keyof typeof colorMap];
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className={`relative p-8 rounded-2xl bg-white dark:bg-gray-800 border ${colors.border} overflow-hidden transition-all duration-300 hover:shadow-xl`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-transform`}>
                      {tool.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              AI模型持续优化中，当前版本
              <span className="font-semibold text-purple-600 dark:text-purple-400"> v3.2.1</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowSection;