import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface DataWidgetProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
}

const DataWidget: React.FC<DataWidgetProps> = ({ 
  title, 
  icon, 
  children, 
  className = '',
  titleClassName = ''
}) => {
  return (
    <motion.div 
      className={`card ${className}`}
      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`flex items-center mb-4 ${titleClassName}`}>
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
};

export default DataWidget;