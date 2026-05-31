import React from 'react';

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '规则滞后',
    description: '传统规则引擎依赖人工维护，风险模式更新滞后，难以应对不断演变的欺诈手段。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: '高误杀率',
    description: '粗放的规则组合导致正常用户被误伤，客户投诉居高不下，影响业务口碑。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '成本高昂',
    description: '人工审核团队庞大，人员培训周期长，审核效率低下，人力成本持续攀升。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '响应迟缓',
    description: '从风险发现到策略上线周期过长，无法在欺诈窗口期内及时阻断攻击。',
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium rounded-full mb-4">
            行业痛点
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            传统风控面临的挑战
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            面对日益复杂的欺诈手段，传统风控方案已难以满足业务发展需求
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;