import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Droplet, BarChart2, Microscope, Waves, Package, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'IoT Irrigation',
    path: '/services/irrigation',
    icon: <Droplet className="w-5 h-5" />,
    description: 'Smart irrigation control and monitoring'
  },
  {
    title: 'Crop Monitoring',
    path: '/services/crop-monitoring',
    icon: <BarChart2 className="w-5 h-5" />,
    description: 'Real-time crop health tracking'
  },
  {
    title: 'Soil Analysis',
    path: '/services/soil-analysis',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Comprehensive soil quality assessment'
  },
  {
    title: 'Water Management',
    path: '/services/water-management',
    icon: <Waves className="w-5 h-5" />,
    description: 'Efficient water resource management'
  },
  {
    title: 'Inventory Tracking',
    path: '/services/inventory',
    icon: <Package className="w-5 h-5" />,
    description: 'Farm inventory and supply management'
  },
  {
    title: 'Harvest Predictions',
    path: '/services/harvest-predictions',
    icon: <Calendar className="w-5 h-5" />,
    description: 'AI-powered yield forecasting'
  }
];

interface NavbarDropdownProps {
  onClose: () => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      >
        Services
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50"
            onMouseEnter={() => setIsOpen(true)}
          >
            <div className="p-2 grid grid-cols-1 gap-1">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => {
                    setIsOpen(false);
                    onClose();
                  }}
                  className="flex items-start p-3 rounded-md hover:bg-primary-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                    {service.icon}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                      {service.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarDropdown; 