import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { Search, Plus, Filter, ChevronDown, Edit, AlertTriangle, Leaf, CheckCircle, Droplet, Thermometer } from 'lucide-react';
import ChartCard from '../../components/dashboard/ChartCard';
import { motion } from 'framer-motion';

interface CropData {
  id: string;
  name: string;
  variety: string;
  farmer: string;
  plantingDate: string;
  estimatedHarvest: string;
  status: 'healthy' | 'warning' | 'critical';
  health: number;
  soilMoisture: number;
  temperature: number;
  location: string;
}

const Crops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    document.title = 'Crop Management - DigiFarm';
  }, []);

  // Sample crop data
  const crops: CropData[] = [
    {
      id: 'crop-001',
      name: 'Tomato',
      variety: 'Roma F1',
      farmer: 'Budi Santoso',
      plantingDate: '2023-08-15',
      estimatedHarvest: '2023-11-10',
      status: 'healthy',
      health: 88,
      soilMoisture: 71,
      temperature: 28,
      location: 'Field A, Sector 1'
    },
    {
      id: 'crop-002',
      name: 'Tomato',
      variety: 'Cherry',
      farmer: 'Siti Nurhaliza',
      plantingDate: '2023-08-22',
      estimatedHarvest: '2023-11-15',
      status: 'healthy',
      health: 92,
      soilMoisture: 68,
      temperature: 27,
      location: 'Field B, Sector 2'
    },
    {
      id: 'crop-003',
      name: 'Chili',
      variety: 'Cayenne',
      farmer: 'Adi Pratama',
      plantingDate: '2023-09-01',
      estimatedHarvest: '2023-11-25',
      status: 'warning',
      health: 76,
      soilMoisture: 62,
      temperature: 29,
      location: 'Field C, Sector 1'
    },
    {
      id: 'crop-004',
      name: 'Chili',
      variety: 'Bird\'s Eye',
      farmer: 'Dewi Wijaya',
      plantingDate: '2023-09-05',
      estimatedHarvest: '2023-11-28',
      status: 'healthy',
      health: 85,
      soilMoisture: 70,
      temperature: 27,
      location: 'Field A, Sector 3'
    },
    {
      id: 'crop-005',
      name: 'Tomato',
      variety: 'Beefsteak',
      farmer: 'Rahmat Hidayat',
      plantingDate: '2023-09-10',
      estimatedHarvest: '2023-12-05',
      status: 'critical',
      health: 65,
      soilMoisture: 55,
      temperature: 31,
      location: 'Field D, Sector 2'
    },
    {
      id: 'crop-006',
      name: 'Chili',
      variety: 'Jalapeño',
      farmer: 'Indah Permata',
      plantingDate: '2023-09-15',
      estimatedHarvest: '2023-12-10',
      status: 'healthy',
      health: 88,
      soilMoisture: 69,
      temperature: 28,
      location: 'Field B, Sector 3'
    }
  ];

  // Filter crops based on search query and filter
  const filteredCrops = crops.filter(crop => {
    const matchesSearch = searchQuery === '' ||
                          crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          crop.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          crop.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          crop.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                          (filter === 'tomato' && crop.name === 'Tomato') ||
                          (filter === 'chili' && crop.name === 'Chili') ||
                          (filter === crop.status);
    
    return matchesSearch && matchesFilter;
  });

  // Chart data
  const cropDistributionData = {
    labels: ['Roma F1 Tomato', 'Cherry Tomato', 'Beefsteak Tomato', 'Cayenne Chili', 'Bird\'s Eye Chili', 'Jalapeño Chili'],
    datasets: [
      {
        label: 'Hectares',
        data: [25, 18, 15, 12, 10, 8],
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

  const healthStatusData = {
    labels: ['Healthy', 'Warning', 'Critical'],
    datasets: [
      {
        data: [72, 18, 10],
        backgroundColor: [
          'rgba(67, 160, 71, 0.7)',
          'rgba(251, 140, 0, 0.7)',
          'rgba(229, 57, 53, 0.7)',
        ],
        borderColor: [
          'rgba(67, 160, 71, 1)',
          'rgba(251, 140, 0, 1)',
          'rgba(229, 57, 53, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCropColor = (name: string) => {
    return name === 'Tomato' 
      ? 'bg-accent-500' 
      : 'bg-primary-500';
  };

  return (
    <AdminLayout title="Crop Management">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center">
              <Leaf size={24} className="text-primary-500 mr-3" />
              <div>
                <h2 className="text-xl font-heading font-semibold text-gray-900">Crop Management</h2>
                <p className="text-gray-600 mt-1">
                  Monitor and manage all active crops in the system
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  className="input pr-10 w-full"
                  placeholder="Search crops..."
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
                  <option value="all">All Crops</option>
                  <option value="tomato">Tomatoes</option>
                  <option value="chili">Chilies</option>
                  <option value="healthy">Healthy</option>
                  <option value="warning">Warning</option>
                  <option value="critical">Critical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
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
              <div className="p-3 rounded-full bg-primary-100 text-primary-500 mr-4">
                <Leaf size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Crops</p>
                <p className="text-2xl font-semibold text-gray-900">325</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Healthy</p>
                <p className="text-2xl font-semibold text-gray-900">234</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-500 mr-4">
                <AlertTriangle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Warning</p>
                <p className="text-2xl font-semibold text-gray-900">58</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-500 mr-4">
                <AlertTriangle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Critical</p>
                <p className="text-2xl font-semibold text-gray-900">33</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartCard 
            title="Crop Distribution" 
            type="bar"
            data={cropDistributionData}
          />
          
          <ChartCard 
            title="Health Status" 
            type="pie"
            data={healthStatusData}
          />
        </div>

        {/* Crops Table */}
        <div className="card">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Active Crops</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crop
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Farmer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Planting Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metrics
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCrops.map((crop) => (
                  <tr key={crop.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${getCropColor(crop.name)} mr-2`}></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{crop.name}</div>
                          <div className="text-xs text-gray-500">{crop.variety}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crop.farmer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crop.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{crop.plantingDate}</div>
                      <div className="text-xs text-gray-500">Harvest: {crop.estimatedHarvest}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(crop.status)}`}>
                        {crop.status.charAt(0).toUpperCase() + crop.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Leaf size={16} className="text-green-500 mr-1" />
                          <span className="text-sm">{crop.health}%</span>
                        </div>
                        <div className="flex items-center">
                          <Droplet size={16} className="text-blue-500 mr-1" />
                          <span className="text-sm">{crop.soilMoisture}%</span>
                        </div>
                        <div className="flex items-center">
                          <Thermometer size={16} className="text-red-500 mr-1" />
                          <span className="text-sm">{crop.temperature}°C</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredCrops.length === 0 && (
            <div className="text-center py-10">
              <Leaf size={48} className="mx-auto text-gray-300" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No crops found</h3>
              <p className="mt-1 text-sm text-gray-500">
                No crops matched your search criteria.
              </p>
            </div>
          )}
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredCrops.length}</span> of <span className="font-medium">{crops.length}</span> crops
              </div>
              <div className="flex space-x-2">
                <button className="btn bg-white border border-gray-300 text-gray-700">Previous</button>
                <button className="btn btn-primary">Next</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Critical Issues Section */}
        <div className="card">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <AlertTriangle size={20} className="text-red-500 mr-2" />
              Critical Issues
            </h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle size={24} className="text-red-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">High Temperature Alert</h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>Beefsteak Tomatoes in Field D, Sector 2 are experiencing temperatures above 30°C for more than 48 hours.</p>
                    <p className="mt-1"><strong>Recommended Action:</strong> Increase shade coverage and adjust irrigation schedule.</p>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm btn text-white bg-red-600 hover:bg-red-700">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle size={24} className="text-yellow-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-yellow-800">Low Soil Moisture</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Cayenne Chilies in Field C, Sector 1 have soil moisture levels below the recommended threshold.</p>
                    <p className="mt-1"><strong>Recommended Action:</strong> Review and adjust the irrigation schedule for this field.</p>
                  </div>
                  <div className="mt-4">
                    <button className="text-sm btn text-white bg-yellow-600 hover:bg-yellow-700">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Crops;