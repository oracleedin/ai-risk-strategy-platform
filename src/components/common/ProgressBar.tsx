import React from 'react';

interface ProgressBarProps {
  label?: string;
  value: number;
  max?: number;
  showPercentage?: boolean;
  color?: 'blue' | 'orange' | 'purple' | 'gray' | 'green' | 'red';
  className?: string;
}

const colorStyles: Record<string, string> = {
  blue: 'bg-blue-600',
  orange: 'bg-orange-600',
  purple: 'bg-purple-600',
  gray: 'bg-gray-600',
  green: 'bg-green-600',
  red: 'bg-red-600',
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  max = 100,
  showPercentage = false,
  color = 'blue',
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-600">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-600">{Math.round(percentage)}%</span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${colorStyles[color]} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;