import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { CreditCard, Check, AlertTriangle, Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  useEffect(() => {
    document.title = 'Subscription - DigiFarm';
  }, []);

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 299000,
      description: 'For small farms',
      features: [
        'Up to 5 IoT sensors',
        'Basic crop statistics',
        'Manual irrigation control',
        '7-day data history',
        'Email support',
      ],
      notIncluded: [
        'Automated irrigation scheduling',
        'Advanced crop analytics',
        'Weather integration',
        'Unlimited IoT sensors',
        'AI-powered irrigation optimization',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 599000,
      description: 'For medium farms',
      features: [
        'Up to 15 IoT sensors',
        'Advanced crop analytics',
        'Automated irrigation scheduling',
        '30-day data history',
        'Priority email and chat support',
        'Weather integration',
      ],
      notIncluded: [
        'Unlimited IoT sensors',
        'AI-powered irrigation optimization',
        '365-day data history',
        '24/7 dedicated support',
        'Custom integrations',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 999000,
      description: 'For large operations',
      features: [
        'Unlimited IoT sensors',
        'Comprehensive analytics',
        'AI-powered irrigation optimization',
        '365-day data history',
        '24/7 dedicated support',
        'Custom integrations',
      ],
      notIncluded: [],
    },
  ];

  const invoices = [
    {
      id: 'INV-2023-10',
      date: 'October 25, 2023',
      amount: 'Rp 599.000',
      status: 'paid'
    },
    {
      id: 'INV-2023-09',
      date: 'September 25, 2023',
      amount: 'Rp 599.000',
      status: 'paid'
    },
    {
      id: 'INV-2023-08',
      date: 'August 25, 2023',
      amount: 'Rp 599.000',
      status: 'paid'
    },
    {
      id: 'INV-2023-07',
      date: 'July 25, 2023',
      amount: 'Rp 599.000',
      status: 'paid'
    },
    {
      id: 'INV-2023-06',
      date: 'June 25, 2023',
      amount: 'Rp 599.000',
      status: 'paid'
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleUpgrade = () => {
    alert('Subscription upgraded successfully!');
  };

  return (
    <UserLayout title="Subscription">
      <div className="space-y-6">
        {/* Current Plan */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Current Subscription</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-secondary-100 text-secondary-500 mr-3">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900">Pro Plan</h4>
                    <p className="text-gray-500">Active until November 25, 2023</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-2">
                  <p className="text-sm text-gray-500">
                    Your next payment of <span className="font-medium text-gray-900">Rp 599.000</span> will be processed on November 25, 2023.
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="btn bg-gray-100 hover:bg-gray-200 text-gray-800">
                  Manage Payment Methods
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Plans Section */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Available Plans</h3>
            <p className="text-gray-500 mt-1">Select a plan that works best for your farming needs.</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <motion.div 
                  key={plan.id}
                  className={`border rounded-lg overflow-hidden transition-colors duration-200 ${
                    selectedPlan === plan.id
                      ? 'border-secondary-500 ring-2 ring-secondary-500 ring-opacity-50'
                      : 'border-gray-200 hover:border-secondary-300'
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`p-6 ${selectedPlan === plan.id ? 'bg-secondary-50' : 'bg-white'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-medium text-gray-900">{plan.name}</h4>
                        <p className="text-gray-500 text-sm">{plan.description}</p>
                      </div>
                      {selectedPlan === plan.id && (
                        <div className="bg-secondary-500 text-white p-1 rounded-full">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-gray-900">{formatCurrency(plan.price)}</p>
                      <p className="text-gray-500 text-sm">per month</p>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        className={`w-full btn ${
                          selectedPlan === plan.id
                            ? 'bg-gray-200 text-gray-800 cursor-not-allowed'
                            : 'btn-primary'
                        }`}
                        onClick={() => {
                          if (selectedPlan !== plan.id) {
                            setSelectedPlan(plan.id);
                            handleUpgrade();
                          }
                        }}
                        disabled={selectedPlan === plan.id}
                      >
                        {selectedPlan === plan.id ? 'Current Plan' : 'Upgrade'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-gray-200">
                    <h5 className="font-medium text-gray-900 mb-4">Features</h5>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-secondary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-400">
                          <AlertTriangle size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Payment History */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Payment History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-secondary-600 hover:text-secondary-900 flex items-center justify-end w-full">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="card">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 flex items-center cursor-pointer">
                How do I upgrade my subscription?
                <ChevronRight size={18} className="ml-2 text-gray-500" />
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                You can upgrade your subscription at any time by selecting a new plan above. The price difference will be prorated for the remainder of your billing period.
              </p>
            </div>
            
            <div className="pt-3 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 flex items-center cursor-pointer">
                Can I downgrade my subscription?
                <ChevronRight size={18} className="ml-2 text-gray-500" />
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                Yes, you can downgrade your subscription at any time. The change will take effect at the end of your current billing period.
              </p>
            </div>
            
            <div className="pt-3 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 flex items-center cursor-pointer">
                How do I cancel my subscription?
                <ChevronRight size={18} className="ml-2 text-gray-500" />
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                You can cancel your subscription by contacting our customer support team. Please note that no refunds are provided for the current billing period.
              </p>
            </div>
            
            <div className="pt-3 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 flex items-center cursor-pointer">
                What payment methods are accepted?
                <ChevronRight size={18} className="ml-2 text-gray-500" />
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                We accept credit cards, debit cards, and bank transfers. All payments are processed securely through our payment gateway.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Support */}
        <div className="bg-secondary-50 rounded-lg p-6 border border-secondary-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h4 className="text-lg font-medium text-gray-900">Need help with your subscription?</h4>
              <p className="text-gray-600 mt-1">
                Our customer support team is available to help you with any questions.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="btn btn-secondary">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Subscription;