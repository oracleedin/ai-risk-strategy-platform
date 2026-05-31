import React from 'react';
import { Link } from 'react-router-dom';

export const ConsoleHeader: React.FC = () => {
  return (
    <header className="h-14 bg-[#111827] border-b border-[#1f2937] flex items-center px-6 shrink-0">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-white transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>返回 Landing</span>
        </Link>

        <div className="w-px h-5 bg-[#1f2937]" />

        <h1 className="text-base font-semibold text-white tracking-tight">
          智能风控策略平台
        </h1>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#064e3b] text-[#34d399] border border-[#065f46]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
          系统运行中
        </span>
        <span className="text-xs text-[#6b7280]">v2.1</span>
      </div>
    </header>
  );
};

export default ConsoleHeader;