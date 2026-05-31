import React from 'react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  message: string;
  description?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  message,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 ${className}`}>
      {icon && <div className="text-gray-400 mb-4">{icon}</div>}
      <p className="text-lg font-medium text-gray-600 mb-1">{message}</p>
      {description && <p className="text-sm text-gray-400 text-center">{description}</p>}
    </div>
  );
};

export default EmptyState;