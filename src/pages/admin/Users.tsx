import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Users as UsersIcon, Search, UserPlus, Filter, ChevronDown, Edit, Trash2, User, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  subscription: string;
  dateJoined: string;
  lastActive: string;
}

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  
  useEffect(() => {
    document.title = 'User Management - DigiFarm';
  }, []);

  // Sample user data
  const users: UserData[] = [
    {
      id: 'usr-001',
      name: 'Budi Santoso',
      email: 'budi@example.com',
      role: 'user',
      status: 'active',
      subscription: 'Pro',
      dateJoined: '2023-08-15',
      lastActive: '2023-10-25'
    },
    {
      id: 'usr-002',
      name: 'Siti Nurhaliza',
      email: 'siti@example.com',
      role: 'user',
      status: 'active',
      subscription: 'Enterprise',
      dateJoined: '2023-06-22',
      lastActive: '2023-10-24'
    },
    {
      id: 'usr-003',
      name: 'Adi Pratama',
      email: 'adi@example.com',
      role: 'user',
      status: 'pending',
      subscription: 'Basic',
      dateJoined: '2023-10-21',
      lastActive: '2023-10-21'
    },
    {
      id: 'usr-004',
      name: 'Dewi Wijaya',
      email: 'dewi@example.com',
      role: 'user',
      status: 'active',
      subscription: 'Pro',
      dateJoined: '2023-07-10',
      lastActive: '2023-10-23'
    },
    {
      id: 'usr-005',
      name: 'Rahmat Hidayat',
      email: 'rahmat@example.com',
      role: 'user',
      status: 'inactive',
      subscription: 'Basic',
      dateJoined: '2023-09-05',
      lastActive: '2023-10-15'
    },
    {
      id: 'usr-006',
      name: 'Indah Permata',
      email: 'indah@example.com',
      role: 'user',
      status: 'active',
      subscription: 'Basic',
      dateJoined: '2023-05-18',
      lastActive: '2023-10-20'
    },
    {
      id: 'usr-007',
      name: 'Rizky Ahmad',
      email: 'rizky@example.com',
      role: 'user',
      status: 'active',
      subscription: 'Pro',
      dateJoined: '2023-04-30',
      lastActive: '2023-10-22'
    }
  ];

  // Filter users based on search query and filter
  const filteredUsers = users.filter(user => {
    const matchesSearch = searchQuery === '' ||
                          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'active' && user.status === 'active') ||
                         (filter === 'inactive' && user.status === 'inactive') ||
                         (filter === 'pending' && user.status === 'pending') ||
                         (filter === user.subscription.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSubscriptionBadge = (subscription: string) => {
    switch (subscription) {
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

  const handleAddUser = () => {
    // In a real app, this would add the user to the backend
    setShowAddForm(false);
    alert('User added successfully!');
  };

  const handleEditUser = (user: UserData) => {
    setSelectedUser(user);
    setShowAddForm(true);
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // In a real app, this would delete the user from the backend
      alert(`User ${userId} deleted successfully!`);
    }
  };

  return (
    <AdminLayout title="User Management">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center">
              <UsersIcon size={24} className="text-secondary-500 mr-3" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-gray-900">User Management</h2>
                <p className="text-gray-600 mt-1">
                  Manage all user accounts and subscriptions
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSelectedUser(null);
                  setShowAddForm(true);
                }}
              >
                <UserPlus size={18} className="mr-1" /> Add User
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
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-500 mr-4">
                <UsersIcon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">1,285</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">1,145</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 mr-4">
                <AlertTriangle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Users</p>
                <p className="text-2xl font-semibold text-gray-900">42</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-gray-100 text-gray-500 mr-4">
                <User size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Inactive Users</p>
                <p className="text-2xl font-semibold text-gray-900">98</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Users Table */}
        <div className="card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">User Accounts</h3>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  className="input pr-10 w-full"
                  placeholder="Search users..."
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
                  <option value="all">All Users</option>
                  <option value="active">Active Users</option>
                  <option value="inactive">Inactive Users</option>
                  <option value="pending">Pending Users</option>
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
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subscription
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Joined
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-medium">
                          {user.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(user.status)}`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getSubscriptionBadge(user.subscription)}`}>
                        {user.subscription}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.dateJoined}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          className="text-primary-600 hover:text-primary-900"
                          onClick={() => handleEditUser(user)}
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-10">
              <UsersIcon size={48} className="mx-auto text-gray-300" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
              <p className="mt-1 text-sm text-gray-500">
                No users matched your search criteria.
              </p>
            </div>
          )}
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> users
              </div>
              <div className="flex space-x-2">
                <button className="btn bg-white border border-gray-300 text-gray-700">Previous</button>
                <button className="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add/Edit User Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {selectedUser ? 'Edit User' : 'Add New User'}
                </h3>
                <button 
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setShowAddForm(false)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    defaultValue={selectedUser?.name || ''}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    defaultValue={selectedUser?.email || ''}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <div className="relative">
                      <select
                        id="status"
                        className="input pr-10 appearance-none"
                        defaultValue={selectedUser?.status || 'active'}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subscription" className="block text-sm font-medium text-gray-700 mb-1">
                      Subscription
                    </label>
                    <div className="relative">
                      <select
                        id="subscription"
                        className="input pr-10 appearance-none"
                        defaultValue={selectedUser?.subscription || 'Basic'}
                      >
                        <option value="Basic">Basic</option>
                        <option value="Pro">Pro</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {!selectedUser && (
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="input"
                      placeholder="Leave empty for auto-generated password"
                    />
                  </div>
                )}
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="btn bg-gray-100 hover:bg-gray-200 text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleAddUser}
                    className="btn btn-primary"
                  >
                    {selectedUser ? 'Update User' : 'Add User'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Users;