import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/layout/UserLayout';
import StatCard from '../../components/dashboard/StatCard';
import ChartCard from '../../components/dashboard/ChartCard';
import { 
  Thermometer, 
  Droplet, 
  Clock, 
  CloudRain, 
  Leaf, 
  PieChart,
  ArrowDown,
  ArrowUp,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard - DigiFarm';
  }, []);

  // Sample data for the charts
  const tomatoHealthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Tomato Health Index',
        data: [78, 82, 86, 89],
        borderColor: '#e53935',
        backgroundColor: 'rgba(229, 57, 53, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chiliHealthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Chili Health Index',
        data: [72, 78, 82, 85],
        borderColor: '#43a047',
        backgroundColor: 'rgba(67, 160, 71, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const waterUsageData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Tomato (liters)',
        data: [24, 22, 25, 20, 26, 21, 23],
        backgroundColor: 'rgba(229, 57, 53, 0.7)',
      },
      {
        label: 'Chili (liters)',
        data: [18, 15, 19, 14, 16, 17, 15],
        backgroundColor: 'rgba(67, 160, 71, 0.7)',
      }
    ]
  };

  const cropDistributionData = {
    labels: ['Tomato', 'Chili'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: [
          'rgba(229, 57, 53, 0.7)',
          'rgba(67, 160, 71, 0.7)',
        ],
        borderColor: [
          'rgba(229, 57, 53, 1)',
          'rgba(67, 160, 71, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <UserLayout title="Dashboard">
      <div className="space-y-6">
        {/* Welcome message */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-heading font-semibold text-gray-900">Welcome to DigiFarm</h2>
          <p className="text-gray-600 mt-2">
            Here's an overview of your farm's metrics and upcoming irrigation schedules.
          </p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <StatCard 
            title="Temperature" 
            value="28°C" 
            icon={<Thermometer size={24} className="text-accent-500" />}
            color="bg-accent-500"
            change="+2°C"
            changeType="negative"
          />
          
          <StatCard 
            title="Soil Moisture" 
            value="68%" 
            icon={<Droplet size={24} className="text-secondary-500" />}
            color="bg-secondary-500"
            change="+5%"
            changeType="positive"
          />
          
          <StatCard 
            title="Next Irrigation" 
            value="2h 15m" 
            icon={<Clock size={24} className="text-warning-500" />}
            color="bg-warning-500"
          />
          
          <StatCard 
            title="Forecast" 
            value="Sunny" 
            icon={<CloudRain size={24} className="text-primary-500" />}
            color="bg-primary-500"
          />
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="Tomato Health Metrics" 
            type="line"
            data={tomatoHealthData}
            options={{
              scales: {
                y: {
                  beginAtZero: false,
                  min: 60,
                  max: 100
                }
              }
            }}
          />
          
          <ChartCard 
            title="Chili Health Metrics" 
            type="line"
            data={chiliHealthData}
            options={{
              scales: {
                y: {
                  beginAtZero: false,
                  min: 60,
                  max: 100
                }
              }
            }}
          />
          
          <ChartCard 
            title="Weekly Water Usage" 
            type="bar"
            data={waterUsageData}
          />
          
          <ChartCard 
            title="Crop Distribution" 
            type="pie"
            data={cropDistributionData}
          />
        </div>

        {/* Notifications and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alerts */}
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Alerts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex-shrink-0 mt-0.5">
                    <Thermometer size={20} className="text-yellow-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800">Temperature Alert</h4>
                    <p className="text-sm text-yellow-700 mt-1">Temperature reaching high levels in Sector B. Consider additional shade.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex-shrink-0 mt-0.5">
                    <Droplet size={20} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-blue-800">Water Level</h4>
                    <p className="text-sm text-blue-700 mt-1">Water reservoir at 30%. Consider refilling in the next 48 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex-shrink-0 mt-0.5">
                    <Leaf size={20} className="text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-green-800">Crop Health</h4>
                    <p className="text-sm text-green-700 mt-1">Tomato plants in Sector A showing excellent growth rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming Irrigations */}
          <div className="lg:col-span-2">
            <div className="card h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Upcoming Irrigations</h3>
                <Link to="/irrigation" className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                  View All <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crop
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sector
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                          <div className="text-sm font-medium text-gray-900">Tomato</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sector A
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Today, 14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        25 min
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Scheduled
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                          <div className="text-sm font-medium text-gray-900">Chili</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sector B
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Today, 16:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        20 min
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Scheduled
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mr-2"></div>
                          <div className="text-sm font-medium text-gray-900">Tomato</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sector C
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Tomorrow, 09:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        30 min
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/crop-stats" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-accent-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <PieChart size={36} className="text-accent-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Crop Statistics</h3>
              <p className="text-sm text-gray-600">View detailed health metrics for all your crops</p>
            </div>
          </Link>
          
          <Link to="/irrigation" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-secondary-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <Droplet size={36} className="text-secondary-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Irrigation Control</h3>
              <p className="text-sm text-gray-600">Schedule and monitor water distribution</p>
            </div>
          </Link>
          
          <Link to="/inventory" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-primary-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <Clock size={36} className="text-primary-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Inventory Management</h3>
              <p className="text-sm text-gray-600">Track harvested crops and supplies</p>
            </div>
          </Link>
          
          <Link to="/subscription" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-warning-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <Leaf size={36} className="text-warning-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Subscription</h3>
              <p className="text-sm text-gray-600">Manage your subscription plan and billing</p>
            </div>
          </Link>
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;