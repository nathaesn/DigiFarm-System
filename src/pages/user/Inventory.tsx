import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import { Package, ShoppingCart, Truck, BarChart2, Plus, Edit, Trash2, Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ChartCard from '../../components/dashboard/ChartCard';

interface InventoryItem {
  id: number;
  name: string;
  category: 'tomato' | 'chili';
  quantity: number;
  unit: string;
  grade: string;
  harvestDate: string;
  status: 'in-storage' | 'sold' | 'in-transit';
  price?: number;
}

const Inventory = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'tomato',
    quantity: 0,
    unit: 'kg',
    grade: 'A',
    harvestDate: '',
    status: 'in-storage'
  });
  
  useEffect(() => {
    document.title = 'Inventory Management - DigiFarm';
  }, []);

  // Sample inventory data
  const inventoryData: InventoryItem[] = [
    {
      id: 1,
      name: 'Roma Tomatoes',
      category: 'tomato',
      quantity: 250,
      unit: 'kg',
      grade: 'A',
      harvestDate: '2023-10-15',
      status: 'in-storage'
    },
    {
      id: 2,
      name: 'Cherry Tomatoes',
      category: 'tomato',
      quantity: 100,
      unit: 'kg',
      grade: 'A+',
      harvestDate: '2023-10-18',
      status: 'in-storage'
    },
    {
      id: 3,
      name: 'Cayenne Chilies',
      category: 'chili',
      quantity: 80,
      unit: 'kg',
      grade: 'A',
      harvestDate: '2023-10-10',
      status: 'sold',
      price: 15000
    },
    {
      id: 4,
      name: 'Bird\'s Eye Chilies',
      category: 'chili',
      quantity: 30,
      unit: 'kg',
      grade: 'B+',
      harvestDate: '2023-10-20',
      status: 'in-storage'
    },
    {
      id: 5,
      name: 'Beefsteak Tomatoes',
      category: 'tomato',
      quantity: 180,
      unit: 'kg',
      grade: 'A',
      harvestDate: '2023-10-22',
      status: 'in-transit'
    },
    {
      id: 6,
      name: 'Jalapeño Chilies',
      category: 'chili',
      quantity: 45,
      unit: 'kg',
      grade: 'A',
      harvestDate: '2023-10-17',
      status: 'sold',
      price: 18000
    }
  ];

  // Filter inventory based on selected filter and search query
  const filteredInventory = inventoryData.filter(item => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'tomato' && item.category === 'tomato') ||
                         (filter === 'chili' && item.category === 'chili') ||
                         (filter === item.status);
    
    const matchesSearch = searchQuery === '' ||
                         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.grade.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Chart data
  const inventoryDistributionData = {
    labels: ['Roma Tomatoes', 'Cherry Tomatoes', 'Beefsteak Tomatoes', 'Cayenne Chilies', 'Bird\'s Eye Chilies', 'Jalapeño Chilies'],
    datasets: [
      {
        label: 'Quantity (kg)',
        data: [250, 100, 180, 80, 30, 45],
        backgroundColor: [
          'rgba(229, 57, 53, 0.7)',
          'rgba(229, 57, 53, 0.5)',
          'rgba(229, 57, 53, 0.3)',
          'rgba(67, 160, 71, 0.7)',
          'rgba(67, 160, 71, 0.5)',
          'rgba(67, 160, 71, 0.3)',
        ],
      }
    ]
  };

  const salesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Tomato Sales (kg)',
        data: [120, 150, 180, 210],
        backgroundColor: 'rgba(229, 57, 53, 0.7)',
      },
      {
        label: 'Chili Sales (kg)',
        data: [80, 95, 110, 125],
        backgroundColor: 'rgba(67, 160, 71, 0.7)',
      }
    ]
  };

  const handleAddItem = () => {
    // In a real app, this would add the item to the backend
    setShowAddForm(false);
    alert('Item added successfully!');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-storage':
        return 'bg-blue-100 text-blue-800';
      case 'sold':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'tomato' 
      ? 'bg-accent-500' 
      : 'bg-primary-500';
  };

  return (
    <UserLayout title="Inventory Management">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-semibold text-gray-900">Inventory Management</h2>
              <p className="text-gray-600 mt-1">
                Track and manage your harvested crops and stock
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddForm(true)}
              >
                <Plus size={18} className="mr-1" /> Add Inventory
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
                <Package size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Stock</p>
                <p className="text-2xl font-semibold text-gray-900">685 kg</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-accent-100 text-accent-500 mr-4">
                <ShoppingCart size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Sold</p>
                <p className="text-2xl font-semibold text-gray-900">125 kg</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-warning-100 text-warning-500 mr-4">
                <Truck size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">In Transit</p>
                <p className="text-2xl font-semibold text-gray-900">180 kg</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-500 mr-4">
                <BarChart2 size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Estimated Value</p>
                <p className="text-2xl font-semibold text-gray-900">Rp 8.2M</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inventory Table */}
        <div className="card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Crop Inventory</h3>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  className="input pr-10 w-full"
                  placeholder="Search inventory..."
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
                  <option value="all">All Items</option>
                  <option value="tomato">Tomatoes</option>
                  <option value="chili">Chilies</option>
                  <option value="in-storage">In Storage</option>
                  <option value="sold">Sold</option>
                  <option value="in-transit">In Transit</option>
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
                    Crop
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harvest Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${getCategoryColor(item.category)} mr-2`}></div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.quantity} {item.unit}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.grade}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.harvestDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(item.status)}`}>
                        {item.status === 'in-storage' 
                          ? 'In Storage' 
                          : item.status === 'in-transit' 
                            ? 'In Transit' 
                            : 'Sold'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <Edit size={18} />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="Inventory Distribution" 
            type="bar"
            data={inventoryDistributionData}
          />
          
          <ChartCard 
            title="Monthly Sales" 
            type="bar"
            data={salesData}
          />
        </div>
        
        {/* Add Inventory Modal */}
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
                  Add New Inventory
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
                    Crop Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input"
                    value={newItem.name}
                    onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      className="input pr-10 appearance-none"
                      value={newItem.category}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value as 'tomato' | 'chili'})}
                    >
                      <option value="tomato">Tomato</option>
                      <option value="chili">Chili</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      className="input"
                      value={newItem.quantity}
                      onChange={(e) => setNewItem({...newItem, quantity: parseInt(e.target.value)})}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">
                      Unit
                    </label>
                    <div className="relative">
                      <select
                        id="unit"
                        className="input pr-10 appearance-none"
                        value={newItem.unit}
                        onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                      >
                        <option value="kg">Kilograms (kg)</option>
                        <option value="g">Grams (g)</option>
                        <option value="tons">Tons</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                      Grade
                    </label>
                    <div className="relative">
                      <select
                        id="grade"
                        className="input pr-10 appearance-none"
                        value={newItem.grade}
                        onChange={(e) => setNewItem({...newItem, grade: e.target.value})}
                      >
                        <option value="A+">A+ (Premium)</option>
                        <option value="A">A (High Quality)</option>
                        <option value="B+">B+ (Good Quality)</option>
                        <option value="B">B (Standard)</option>
                        <option value="C">C (Low Quality)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="harvestDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Harvest Date
                    </label>
                    <input
                      type="date"
                      id="harvestDate"
                      className="input"
                      value={newItem.harvestDate}
                      onChange={(e) => setNewItem({...newItem, harvestDate: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <div className="relative">
                    <select
                      id="status"
                      className="input pr-10 appearance-none"
                      value={newItem.status}
                      onChange={(e) => setNewItem({...newItem, status: e.target.value as 'in-storage' | 'sold' | 'in-transit'})}
                    >
                      <option value="in-storage">In Storage</option>
                      <option value="sold">Sold</option>
                      <option value="in-transit">In Transit</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                
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
                    onClick={handleAddItem}
                    className="btn btn-primary"
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </UserLayout>
  );
};

export default Inventory;