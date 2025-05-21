import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/layout/AdminLayout';
import StatCard from '../../components/dashboard/StatCard';
import ChartCard from '../../components/dashboard/ChartCard';
import { 
  Users, 
  Leaf, 
  CreditCard, 
  TrendingUp, 
  AlertTriangle,
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard - DigiFarm';
  }, []);

  // Sample data for the charts
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Users',
        data: [12, 19, 25, 35, 42, 50],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (million Rp)',
        data: [5.2, 5.7, 6.1, 6.8, 7.2, 7.5],
        borderColor: '#43a047',
        backgroundColor: 'rgba(67, 160, 71, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const subscriberDistributionData = {
    labels: ['Basic', 'Pro', 'Enterprise'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          'rgba(25, 118, 210, 0.7)',
          'rgba(67, 160, 71, 0.7)',
          'rgba(211, 47, 47, 0.7)',
        ],
        borderColor: [
          'rgba(25, 118, 210, 1)',
          'rgba(67, 160, 71, 1)',
          'rgba(211, 47, 47, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const cropDistributionData = {
    labels: ['Tomato', 'Chili', 'Other'],
    datasets: [
      {
        label: 'Hectares',
        data: [120, 85, 35],
        backgroundColor: [
          'rgba(211, 47, 47, 0.7)',
          'rgba(67, 160, 71, 0.7)',
          'rgba(156, 39, 176, 0.7)',
        ],
      }
    ]
  };

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-6">
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <StatCard 
            title="Total Users" 
            value="1,285" 
            icon={<Users size={24} className="text-secondary-500" />}
            color="bg-secondary-500"
            change="+12%"
            changeType="positive"
          />
          
          <StatCard 
            title="Active Crops" 
            value="325" 
            icon={<Leaf size={24} className="text-primary-500" />}
            color="bg-primary-500"
            change="+8%"
            changeType="positive"
          />
          
          <StatCard 
            title="Monthly Revenue" 
            value="Rp 7.5M" 
            icon={<CreditCard size={24} className="text-success-500" />}
            color="bg-success-500"
            change="+4.2%"
            changeType="positive"
          />
          
          <StatCard 
            title="System Alerts" 
            value="3" 
            icon={<AlertTriangle size={24} className="text-error-500" />}
            color="bg-error-500"
            change="-2"
            changeType="neutral"
          />
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="User Growth" 
            type="line"
            data={userGrowthData}
          />
          
          <ChartCard 
            title="Revenue Trend" 
            type="line"
            data={revenueData}
          />
          
          <ChartCard 
            title="Subscription Distribution" 
            type="pie"
            data={subscriberDistributionData}
          />
          
          <ChartCard 
            title="Crop Distribution" 
            type="bar"
            data={cropDistributionData}
          />
        </div>

        {/* Recent Activities and System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="card h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Recent Activities</h3>
                <button className="text-sm text-primary-600 hover:text-primary-700 flex items-center">
                  View All <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time
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
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-medium">
                            BS
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Budi Santoso</div>
                            <div className="text-xs text-gray-500">budi@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Subscription upgraded to Pro
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        10 minutes ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center text-accent-700 font-medium">
                            SN
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Siti Nurhaliza</div>
                            <div className="text-xs text-gray-500">siti@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Added new crop monitoring
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1 hour ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-medium">
                            AP
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Adi Pratama</div>
                            <div className="text-xs text-gray-500">adi@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Registered new account
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3 hours ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-warning-100 rounded-full flex items-center justify-center text-warning-700 font-medium">
                            DW
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Dewi Wijaya</div>
                            <div className="text-xs text-gray-500">dewi@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Updated irrigation schedule
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        6 hours ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-error-100 rounded-full flex items-center justify-center text-error-700 font-medium">
                            RH
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Rahmat Hidayat</div>
                            <div className="text-xs text-gray-500">rahmat@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Payment processing
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        12 hours ago
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* System Status */}
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Status</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Server Uptime</span>
                    <span className="text-sm text-gray-500">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Database Load</span>
                    <span className="text-sm text-gray-500">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">API Response Time</span>
                    <span className="text-sm text-gray-500">180ms</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-success-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Storage Usage</span>
                    <span className="text-sm text-gray-500">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-warning-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Active Alerts</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex-shrink-0 mt-0.5">
                        <AlertTriangle size={16} className="text-red-500" />
                      </div>
                      <div className="ml-3">
                        <h5 className="text-xs font-medium text-red-800">High CPU Usage</h5>
                        <p className="text-xs text-red-700 mt-1">Processing server at 92% capacity for 15 min.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                      <div className="flex-shrink-0 mt-0.5">
                        <AlertTriangle size={16} className="text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <h5 className="text-xs font-medium text-yellow-800">Scheduled Maintenance</h5>
                        <p className="text-xs text-yellow-700 mt-1">System backup scheduled for 01:00 AM.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/users" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-secondary-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <Users size={36} className="text-secondary-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">User Management</h3>
              <p className="text-sm text-gray-600">View and manage user accounts</p>
            </div>
          </Link>
          
          <Link to="/crops" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-primary-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <Leaf size={36} className="text-primary-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Crop Management</h3>
              <p className="text-sm text-gray-600">Monitor all active crops in the system</p>
            </div>
          </Link>
          
          <Link to="/subscriptions" className="card hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-success-50 to-white">
            <div className="flex flex-col items-center text-center p-4">
              <CreditCard size={36} className="text-success-500 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">Subscription Analytics</h3>
              <p className="text-sm text-gray-600">View subscription and payment data</p>
            </div>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;