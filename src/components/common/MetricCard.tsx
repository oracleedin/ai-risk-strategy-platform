import React from 'react';

type TrendDirection = 'up' | 'down' | 'neutral';

interface MetricCardProps {
  label: string;
  value: string | number;
  trend?: TrendDirection;
  trendValue?: string;
  className?: string;
}

const trendIcons: Record<TrendDirection, string> = {
  up: '↑',
  down: '↓',
  neutral: '→',
};

const trendStyles: Record<TrendDirection, string> = {
  up: 'text-green-600',
  down: 'text-red-600',
  neutral: 'text-gray-500',
};

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  trend,
  trendValue,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm ${className}`}>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {trend && trendValue && (
          <div className={`flex items-center gap-1 text-sm ${trendStyles[trend]}`}>
            <span>{trendIcons[trend]}</span>
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;