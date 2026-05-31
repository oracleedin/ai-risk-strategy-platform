import React from 'react';
import { RiskLevel, ReviewStatus } from '../../types';

type BadgeVariant = 'risk' | 'status' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  riskLevel?: RiskLevel;
  status?: ReviewStatus;
  className?: string;
}

const riskLevelStyles: Record<RiskLevel, string> = {
  '低风险': 'bg-green-100 text-green-800 border-green-200',
  '中风险': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  '高风险': 'bg-red-100 text-red-800 border-red-200',
};

const statusStyles: Record<ReviewStatus, string> = {
  '待审核': 'bg-gray-100 text-gray-700 border-gray-200',
  '已放行': 'bg-green-100 text-green-700 border-green-200',
  '已拦截': 'bg-red-100 text-red-700 border-red-200',
  '人工复核中': 'bg-orange-100 text-orange-700 border-orange-200',
  '观察中': 'bg-blue-100 text-blue-700 border-blue-200',
  '已升级': 'bg-purple-100 text-purple-700 border-purple-200',
};

const defaultStyles = 'bg-gray-100 text-gray-700 border-gray-200';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  riskLevel,
  status,
  className = '',
}) => {
  let style = defaultStyles;

  if (variant === 'risk' && riskLevel) {
    style = riskLevelStyles[riskLevel];
  } else if (variant === 'status' && status) {
    style = statusStyles[status];
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${style} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;