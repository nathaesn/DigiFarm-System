import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import ChartCard from '../../components/dashboard/ChartCard';
import DataWidget from '../../components/dashboard/DataWidget';
import { Leaf, Thermometer, Droplet, Sun, Wind, Gauge, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const CropStats = () => {
  const [selectedCrop, setSelectedCrop] = useState('tomato');
  
  useEffect(() => {
    document.title = 'Crop Statistics - DigiFarm';
  }, []);

  // Sample data for the charts
  const healthData = {
    tomato: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [
        {
          label: 'Health Index',
          data: [75, 78, 82, 86, 89, 88],
          borderColor: '#e53935',
          backgroundColor: 'rgba(229, 57, 53, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    },
    chili: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [
        {
          label: 'Health Index',
          data: [70, 72, 78, 82, 85, 83],
          borderColor: '#43a047',
          backgroundColor: 'rgba(67, 160, 71, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    }
  };

  const soilMoistureData = {
    tomato: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Soil Moisture (%)',
          data: [65, 68, 72, 70, 65, 68, 71],
          borderColor: '#1976d2',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    },
    chili: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Soil Moisture (%)',
          data: [55, 58, 62, 60, 56, 59, 61],
          borderColor: '#1976d2',
          backgroundColor: 'rgba(25, 118, 210, 0.1)',
          fill: true,
          tension: 0.4
        }
      ]
    }
  };

  const nutrientData = {
    tomato: {
      labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium'],
      datasets: [
        {
          label: 'Nutrient Levels',
          data: [75, 65, 80, 55, 60],
          backgroundColor: [
            'rgba(229, 57, 53, 0.7)',
            'rgba(25, 118, 210, 0.7)',
            'rgba(67, 160, 71, 0.7)',
            'rgba(251, 140, 0, 0.7)',
            'rgba(156, 39, 176, 0.7)',
          ],
        }
      ]
    },
    chili: {
      labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium'],
      datasets: [
        {
          label: 'Nutrient Levels',
          data: [65, 70, 75, 60, 55],
          backgroundColor: [
            'rgba(229, 57, 53, 0.7)',
            'rgba(25, 118, 210, 0.7)',
            'rgba(67, 160, 71, 0.7)',
            'rgba(251, 140, 0, 0.7)',
            'rgba(156, 39, 176, 0.7)',
          ],
        }
      ]
    }
  };

  const waterUsageData = {
    tomato: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Water Usage (Liters)',
          data: [120, 132, 125, 135],
          backgroundColor: 'rgba(25, 118, 210, 0.7)',
        }
      ]
    },
    chili: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Water Usage (Liters)',
          data: [85, 92, 88, 95],
          backgroundColor: 'rgba(25, 118, 210, 0.7)',
        }
      ]
    }
  };

  const cropData = {
    tomato: {
      name: 'Tomato',
      variety: 'Roma F1',
      plantingDate: '2023-08-15',
      estimatedHarvest: '2023-11-10',
      growthStage: 'Fruiting',
      health: 88,
      soilMoisture: 71,
      temperature: 28,
      sunlight: 'High',
      windSpeed: 'Low',
      pests: 'None detected',
      diseases: 'None detected',
      sensorId: 'TOM-A542',
      lastUpdated: '2023-10-25 14:30',
      color: 'text-accent-500',
      bgColor: 'bg-accent-500',
      lightBgColor: 'bg-accent-50',
    },
    chili: {
      name: 'Chili',
      variety: 'Cayenne',
      plantingDate: '2023-09-01',
      estimatedHarvest: '2023-11-25',
      growthStage: 'Flowering',
      health: 83,
      soilMoisture: 61,
      temperature: 29,
      sunlight: 'High',
      windSpeed: 'Low',
      pests: 'None detected',
      diseases: 'None detected',
      sensorId: 'CHI-B237',
      lastUpdated: '2023-10-25 14:30',
      color: 'text-primary-500',
      bgColor: 'bg-primary-500',
      lightBgColor: 'bg-primary-50',
    }
  };

  const data = selectedCrop === 'tomato' ? cropData.tomato : cropData.chili;

  const getHealthStatus = (health: number) => {
    if (health >= 85) return { text: 'Excellent', color: 'text-success-500' };
    if (health >= 70) return { text: 'Good', color: 'text-secondary-500' };
    if (health >= 50) return { text: 'Average', color: 'text-warning-500' };
    return { text: 'Poor', color: 'text-error-500' };
  };

  const healthStatus = getHealthStatus(data.health);

  return (
    <UserLayout title="Crop Statistics">
      <div className="space-y-6">
        {/* Crop Selector */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-semibold text-gray-900">Crop Statistics</h2>
              <p className="text-gray-600 mt-1">
                View detailed health metrics and data for your crops
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="relative">
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="input pr-10 appearance-none"
                >
                  <option value="tomato">Tomato (Roma F1)</option>
                  <option value="chili">Chili (Cayenne)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crop Overview */}
        <motion.div 
          className={`card p-6 border-l-4 ${data.bgColor}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          key={selectedCrop}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className={`text-xl font-semibold ${data.color} mb-2`}>{data.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Variety: {data.variety}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Planting Date</p>
                  <p className="font-medium">{data.plantingDate}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Est. Harvest</p>
                  <p className="font-medium">{data.estimatedHarvest}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Growth Stage</p>
                  <p className="font-medium">{data.growthStage}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Sensor ID</p>
                  <p className="font-medium">{data.sensorId}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-500 text-sm mb-1">Last Updated</p>
                <p className="font-medium">{data.lastUpdated}</p>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Health Status</h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                <div className="flex-1">
                  <p className="text-gray-500 text-sm mb-1">Overall Health</p>
                  <div className="flex items-center">
                    <span className={`text-2xl font-bold ${healthStatus.color}`}>{data.health}%</span>
                    <span className={`ml-2 text-sm font-medium ${healthStatus.color}`}>
                      {healthStatus.text}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 w-full sm:w-2/3">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`${data.bgColor} h-3 rounded-full`} 
                      style={{ width: `${data.health}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                <div className={`p-3 rounded-lg ${data.lightBgColor}`}>
                  <div className="flex items-center">
                    <Thermometer size={20} className={data.color} />
                    <p className="ml-2 text-gray-700 font-medium">Temperature</p>
                  </div>
                  <p className="mt-1 text-xl font-semibold">{data.temperature}°C</p>
                </div>
                
                <div className={`p-3 rounded-lg ${data.lightBgColor}`}>
                  <div className="flex items-center">
                    <Droplet size={20} className={data.color} />
                    <p className="ml-2 text-gray-700 font-medium">Soil Moisture</p>
                  </div>
                  <p className="mt-1 text-xl font-semibold">{data.soilMoisture}%</p>
                </div>
                
                <div className={`p-3 rounded-lg ${data.lightBgColor}`}>
                  <div className="flex items-center">
                    <Sun size={20} className={data.color} />
                    <p className="ml-2 text-gray-700 font-medium">Sunlight</p>
                  </div>
                  <p className="mt-1 text-xl font-semibold">{data.sunlight}</p>
                </div>
                
                <div className={`p-3 rounded-lg ${data.lightBgColor}`}>
                  <div className="flex items-center">
                    <Wind size={20} className={data.color} />
                    <p className="ml-2 text-gray-700 font-medium">Wind</p>
                  </div>
                  <p className="mt-1 text-xl font-semibold">{data.windSpeed}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard 
            title="Health Trend" 
            type="line"
            data={healthData[selectedCrop]}
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
            title="Soil Moisture" 
            type="line"
            data={soilMoistureData[selectedCrop]}
            options={{
              scales: {
                y: {
                  beginAtZero: false,
                  min: 40,
                  max: 80
                }
              }
            }}
          />
          
          <ChartCard 
            title="Nutrient Levels" 
            type="bar"
            data={nutrientData[selectedCrop]}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100
                }
              }
            }}
          />
          
          <ChartCard 
            title="Weekly Water Usage" 
            type="bar"
            data={waterUsageData[selectedCrop]}
          />
        </div>
        
        {/* Additional Information Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DataWidget 
            title="Pest & Disease"
            icon={<Leaf size={24} className={data.color} />}
            className="col-span-1"
          >
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Pest Status</p>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-success-500 mr-2"></div>
                  <p className="font-medium">No pests detected</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Disease Status</p>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-success-500 mr-2"></div>
                  <p className="font-medium">No diseases detected</p>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Last Inspection</p>
                <p className="font-medium">2023-10-24</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Next Inspection</p>
                <p className="font-medium">2023-10-31</p>
              </div>
            </div>
          </DataWidget>
          
          <DataWidget 
            title="Soil Analysis"
            icon={<Gauge size={24} className={data.color} />}
            className="col-span-1"
          >
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">pH Level</p>
                <div className="flex items-center">
                  <p className="font-medium">6.5</p>
                  <span className="ml-2 text-sm text-success-500">(Optimal)</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Soil Type</p>
                <p className="font-medium">Loamy</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Organic Matter</p>
                <p className="font-medium">3.8%</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm mb-1">Electrical Conductivity</p>
                <p className="font-medium">1.2 dS/m</p>
              </div>
            </div>
          </DataWidget>
          
          <DataWidget 
            title="Recommendations"
            icon={<Droplet size={24} className={data.color} />}
            className="col-span-1"
          >
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">Water Management</p>
                <p className="text-sm text-gray-600">
                  Maintain current irrigation schedule. Soil moisture levels are optimal.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Fertilization</p>
                <p className="text-sm text-gray-600">
                  Consider adding calcium supplement within the next 7 days.
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-1">Preventive Measures</p>
                <p className="text-sm text-gray-600">
                  Monitor for early signs of powdery mildew as humidity levels rise.
                </p>
              </div>
            </div>
          </DataWidget>
        </div>
      </div>
    </UserLayout>
  );
};

export default CropStats;