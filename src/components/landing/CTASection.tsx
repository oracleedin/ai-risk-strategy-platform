import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VySW5wdXQiIHBhdHRlcm5Vbml0cz0idXNlcklucHV0IiBkPSJNMCAwIEw2MCAwIEw2MCA2MCBMMCA2MCBaIi8+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHJ1bGU9InVudGltZWRiYWNrdGhyb3VnaCIvPjxwYXRoIGQ9Ik0wIDBoNjB2NjBINnoiIGZpbGw9Im5vbmUiIHJ1bGU9InVudGltZWRiYWNrdGhyb3VnaCIvPjxwYXRoIGQ9Ik0wIDB2NTBIDYwVjAiIGZpbGw9IndoaXRlLy4xNSIgZmlsbC1vcGFjaXR5PSIwLjEiIHJ1bGU9InVudGltZWRiYWNrdGhyb3VnaCIvPjwvc3ZnPg==')] opacity-30" />

          {/* Content */}
          <div className="relative px-12 py-20 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              进入 AI 风控后台，查看完整策略配置 Demo
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              当前 Demo 使用模拟风险案件、Mock 风控规则和前端计算指标，重点展示风控策略产品的信息架构、规则配置、AI 风险解释、阈值模拟和策略看板
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/risk-console')}
                className="px-10 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg cursor-pointer"
              >
                进入风控后台
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                免费试用14天
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                无需信用卡
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                7x24技术支持
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;