import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color,
  change,
  changeType = 'neutral'
}) => {
  const getChangeColor = () => {
    switch(changeType) {
      case 'positive':
        return 'text-success-500';
      case 'negative':
        return 'text-error-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <motion.div 
      className="card overflow-hidden"
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`absolute top-0 left-0 w-2 h-full ${color}`}></div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {change && (
              <span className={`ml-2 text-sm ${getChangeColor()}`}>
                {change}
              </span>
            )}
          </div>
        </div>
        <div className={`p-2 rounded-full ${color} bg-opacity-10`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;