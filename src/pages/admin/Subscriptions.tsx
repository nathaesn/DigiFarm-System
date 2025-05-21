import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Search, CreditCard, TrendingUp, FileText, ChevronDown, Download, CheckCircle, XCircle, Clock } from 'lucide-react';
import ChartCard from '../../components/dashboard/ChartCard';
import { motion } from 'framer-motion';

interface SubscriptionData {
  id: string;
  customer: string;
  email: string;
  plan: 'Basic' | 'Pro' | 'Enterprise';
  amount: number;
  status: 'active' | 'expired' | 'pending' | 'canceled';
  startDate: string;
  nextBilling: string;
  paymentMethod: string;
}

interface PaymentData {
  id: string;
  invoiceId: string;
  customer: string;
  amount: number;
  date: string;
  status: 'completed' | 'failed' | 'pending';
  paymentMethod: string;
}

const Subscriptions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  
  useEffect(() => {
    document.title = 'Subscriptions Management - DigiFarm';
  }, []);

  // Sample subscription data
  const subscriptions: SubscriptionData[] = [
    {
      id: 'sub-001',
      customer: 'Budi Santoso',
      email: 'budi@example.com',
      plan: 'Pro',
      amount: 599000,
      status: 'active',
      startDate: '2023-06-15',
      nextBilling: '2023-11-15',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'sub-002',
      customer: 'Siti Nurhaliza',
      email: 'siti@example.com',
      plan: 'Enterprise',
      amount: 999000,
      status: 'active',
      startDate: '2023-04-22',
      nextBilling: '2023-11-22',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'sub-003',
      customer: 'Adi Pratama',
      email: 'adi@example.com',
      plan: 'Basic',
      amount: 299000,
      status: 'pending',
      startDate: '2023-10-28',
      nextBilling: '2023-11-28',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'sub-004',
      customer: 'Dewi Wijaya',
      email: 'dewi@example.com',
      plan: 'Pro',
      amount: 599000,
      status: 'active',
      startDate: '2023-07-10',
      nextBilling: '2023-11-10',
      paymentMethod: 'E-wallet'
    },
    {
      id: 'sub-005',
      customer: 'Rahmat Hidayat',
      email: 'rahmat@example.com',
      plan: 'Basic',
      amount: 299000,
      status: 'expired',
      startDate: '2023-09-05',
      nextBilling: '2023-10-05',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'sub-006',
      customer: 'Indah Permata',
      email: 'indah@example.com',
      plan: 'Basic',
      amount: 299000,
      status: 'canceled',
      startDate: '2023-08-18',
      nextBilling: '2023-10-18',
      paymentMethod: 'Bank Transfer'
    }
  ];

  // Sample payment data
  const payments: PaymentData[] = [
    {
      id: 'pmt-001',
      invoiceId: 'INV-2023-001',
      customer: 'Budi Santoso',
      amount: 599000,
      date: '2023-10-15',
      status: 'completed',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'pmt-002',
      invoiceId: 'INV-2023-002',
      customer: 'Siti Nurhaliza',
      amount: 999000,
      date: '2023-10-22',
      status: 'completed',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: 'pmt-003',
      invoiceId: 'INV-2023-003',
      customer: 'Adi Pratama',
      amount: 299000,
      date: '2023-10-28',
      status: 'pending',
      paymentMethod: 'Credit Card'
    },
    {
      id: 'pmt-004',
      invoiceId: 'INV-2023-004',
      customer: 'Dewi Wijaya',
      amount: 599000,
      date: '2023-10-10',
      status: 'completed',
      paymentMethod: 'E-wallet'
    },
    {
      id: 'pmt-005',
      invoiceId: 'INV-2023-005',
      customer: 'Rahmat Hidayat',
      amount: 299000,
      date: '2023-10-05',
      status: 'failed',
      paymentMethod: 'Credit Card'
    }
  ];

  // Filter subscriptions based on search query and filter
  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchesSearch = searchQuery === '' ||
                          subscription.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          subscription.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                          (filter === 'active' && subscription.status === 'active') ||
                          (filter === 'expired' && subscription.status === 'expired') ||
                          (filter === 'pending' && subscription.status === 'pending') ||
                          (filter === 'canceled' && subscription.status === 'canceled') ||
                          (filter === subscription.plan.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  // Filter payments based on status filter
  const filteredPayments = payments.filter(payment => {
    return paymentFilter === 'all' || payment.status === paymentFilter;
  });

  // Chart data
  const revenueData = {
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
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

  const planDistributionData = {
    labels: ['Basic', 'Pro', 'Enterprise'],
    datasets: [
      {
        data: [55, 35, 10],
        backgroundColor: [
          'rgba(25, 118, 210, 0.7)',
          'rgba(156, 39, 176, 0.7)',
          'rgba(49, 27, 146, 0.7)',
        ],
        borderColor: [
          'rgba(25, 118, 210, 1)',
          'rgba(156, 39, 176, 1)',
          'rgba(49, 27, 146, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-gray-100 text-gray-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'Basic':
        return 'bg-blue-100 text-blue-800';
      case 'Pro':
        return 'bg-purple-100 text-purple-800';
      case 'Enterprise':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout title="Subscription Management">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center">
              <CreditCard size={24} className="text-success-500 mr-3" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-gray-900">Subscription Management</h2>
                <p className="text-gray-600 mt-1">
                  Manage subscription plans and monitor payments
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <button className="btn btn-primary">
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-success-100 text-success-500 mr-4">
                <CreditCard size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">Rp 7.5M</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-500 mr-4">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Subscriptions</p>
                <p className="text-2xl font-semibold text-gray-900">1,145</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-500 mr-4">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Avg. Subscription Length</p>
                <p className="text-2xl font-semibold text-gray-900">7.3 months</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-warning-100 text-warning-500 mr-4">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Payments</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard 
            title="Monthly Revenue Trend" 
            type="line"
            data={revenueData}
          />
          
          <ChartCard 
            title="Subscription Plan Distribution" 
            type="pie"
            data={planDistributionData}
          />
        </div>

        {/* Subscriptions Table */}
        <div className="card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Active Subscriptions</h3>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  className="input pr-10 w-full"
                  placeholder="Search subscriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
              </div>
              
              <div className="relative w-full sm:w-auto">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="input pr-10 appearance-none w-full"
                >
                  <option value="all">All Subscriptions</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="expired">Expired</option>
                  <option value="canceled">Canceled</option>
                  <option value="basic">Basic Plan</option>
                  <option value="pro">Pro Plan</option>
                  <option value="enterprise">Enterprise Plan</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Billing
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSubscriptions.map((subscription) => (
                  <tr key={subscription.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-medium">
                          {subscription.customer.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{subscription.customer}</div>
                          <div className="text-sm text-gray-500">{subscription.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPlanBadge(subscription.plan)}`}>
                        {subscription.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(subscription.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(subscription.status)}`}>
                        {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subscription.startDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subscription.nextBilling}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredSubscriptions.length === 0 && (
            <div className="text-center py-10">
              <CreditCard size={48} className="mx-auto text-gray-300" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No subscriptions found</h3>
              <p className="mt-1 text-sm text-gray-500">
                No subscriptions matched your search criteria.
              </p>
            </div>
          )}
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredSubscriptions.length}</span> of <span className="font-medium">{subscriptions.length}</span> subscriptions
              </div>
              <div className="flex space-x-2">
                <button className="btn bg-white border border-gray-300 text-gray-700">Previous</button>
                <button className="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Payments */}
        <div className="card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Payments</h3>
            <div className="mt-4 sm:mt-0">
              <div className="relative">
                <select
                  value={paymentFilter}
                  onChange={(e) => setPaymentFilter(e.target.value)}
                  className="input pr-10 appearance-none"
                >
                  <option value="all">All Payments</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Method
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payment.invoiceId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatCurrency(payment.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {payment.status === 'completed' && <CheckCircle size={16} className="text-green-500 mr-1" />}
                        {payment.status === 'failed' && <XCircle size={16} className="text-red-500 mr-1" />}
                        {payment.status === 'pending' && <Clock size={16} className="text-yellow-500 mr-1" />}
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(payment.status)}`}>
                          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payment.paymentMethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-secondary-600 hover:text-secondary-900 flex items-center justify-end w-full">
                        <Download size={16} className="mr-1" />
                        Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Subscriptions;