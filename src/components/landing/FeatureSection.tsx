import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: '深度学习模型',
    description: '基于Transformer架构的多模态模型，自动学习风险特征，支持增量训练持续优化。',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '实时监控大屏',
    description: '可视化风险态势，支持多维度筛选，提供分钟级更新的业务洞察。',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '策略可视化编排',
    description: '无代码方式配置风控策略，支持版本管理与灰度发布，降低运营门槛。',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '关系图谱分析',
    description: '基于异构图神经网络识别团伙欺诈，挖掘隐藏关联关系，精准定位核心人员。',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '全链路审计',
    description: '完整记录决策依据与处理过程，支持合规审查与业务复盘。',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '开放API生态',
    description: 'RESTful API支持快速集成，提供多语言SDK与完善的开发者文档。',
    highlight: false,
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium rounded-full mb-4">
            核心能力
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            强大的技术支撑
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            六大核心模块协同运作，构建完整的风控闭环
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${
                feature.highlight
                  ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white border-transparent'
                  : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                feature.highlight
                  ? 'bg-white/20'
                  : 'bg-purple-100 dark:bg-purple-900/30'
              } ${feature.highlight ? 'text-white' : 'text-purple-500'} group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-semibold mb-3 ${feature.highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {feature.title}
              </h3>
              <p className={`leading-relaxed ${feature.highlight ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                {feature.description}
              </p>

              {/* Hover accent line */}
              {feature.highlight && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;