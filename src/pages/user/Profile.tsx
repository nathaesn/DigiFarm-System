import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { User, MapPin, Mail, Phone, Shield, Key, Upload, Check, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('general');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  
  useEffect(() => {
    document.title = 'Profile - DigiFarm';
    
    // Set default values
    setName(user?.name || '');
    setPhone('+62 812-3456-7890');
    setAddress('123 Farming Way, Agriculture District, Jakarta');
  }, [user]);

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API request
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    // Simulate API request
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }, 1000);
  };

  return (
    <UserLayout title="Profile">
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="card">
          <div className="p-6 sm:flex sm:items-start sm:justify-between">
            <div className="sm:flex sm:items-center">
              <div className="mb-4 sm:mb-0 sm:mr-5 flex-shrink-0">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-3xl font-bold">
                  {user?.name?.charAt(0)}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-heading font-semibold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
                <div className="mt-2 flex items-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active Subscription: Pro
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <button className="btn btn-primary">
                <Upload size={16} className="mr-2" />
                Upload Photo
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="sm:flex sm:items-baseline">
              <div className="mt-4 sm:mt-0 sm:ml-10">
                <nav className="-mb-px flex space-x-8">
                  <button
                    className={`
                      whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === 'general'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                    onClick={() => setActiveTab('general')}
                  >
                    General Information
                  </button>
                  <button
                    className={`
                      whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                      ${activeTab === 'security'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                    onClick={() => setActiveTab('security')}
                  >
                    Security
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'general' && (
            <div className="p-6">
              <form onSubmit={handleGeneralSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="input pl-10"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-3">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="input pl-10 bg-gray-50"
                          value={user?.email}
                          disabled
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="phone"
                          className="input pl-10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="address"
                          className="input pl-10"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="p-6">
              <form onSubmit={handlePasswordSubmit}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                      <Shield size={20} className="text-primary-500 mr-2" />
                      Change Password
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Update your password to ensure your account stays secure.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Key size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="current-password"
                          className="input pl-10"
                          value={oldPassword}
                          onChange={(e) => setOldPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Key size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="new-password"
                          className="input pl-10"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Key size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="confirm-password"
                          className="input pl-10"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button type="submit" className="btn btn-primary">
                    Update Password
                  </button>
                </div>
              </form>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Shield size={20} className="text-primary-500 mr-2" />
                  Two-Factor Authentication
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Add an extra layer of security to your account with two-factor authentication.
                </p>
                
                <div className="mt-4">
                  <button className="btn bg-gray-100 hover:bg-gray-200 text-gray-800">
                    Enable Two-Factor Authentication
                  </button>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                  <Shield size={20} className="text-red-500 mr-2" />
                  Danger Zone
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Permanently delete your account and all of your data.
                </p>
                
                <div className="mt-4">
                  <button className="btn bg-red-500 hover:bg-red-600 text-white">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Success Alert */}
        {showSuccess && (
          <motion.div 
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center">
              <Check size={20} className="mr-2" />
              <p>Your changes have been saved successfully!</p>
            </div>
          </motion.div>
        )}
        
        {/* Error Alert */}
        {showError && (
          <motion.div 
            className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center">
              <X size={20} className="mr-2" />
              <p>Passwords do not match. Please try again.</p>
            </div>
          </motion.div>
        )}
      </div>
    </UserLayout>
  );
};

export default Profile;