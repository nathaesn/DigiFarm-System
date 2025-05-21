import React, { useState, useEffect } from 'react';
import UserLayout from '../../components/layout/UserLayout';
import DataWidget from '../../components/dashboard/DataWidget';
import { Droplet, Calendar, Clock, CloudRain, ToggleLeft, AlertTriangle, Plus, ChevronDown, X } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

const Irrigation = () => {
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [scheduleDate, setScheduleDate] = useState<Date | null>(new Date());
  const [scheduleTime, setScheduleTime] = useState<Date | null>(new Date());
  const [scheduleDuration, setScheduleDuration] = useState(20);
  const [selectedSector, setSelectedSector] = useState('');
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  
  useEffect(() => {
    document.title = 'Irrigation Control - DigiFarm';
  }, []);

  const sectors = [
    { id: 'sector-a', name: 'Sector A', crop: 'tomato', area: '1.2 hectares' },
    { id: 'sector-b', name: 'Sector B', crop: 'chili', area: '0.8 hectares' },
    { id: 'sector-c', name: 'Sector C', crop: 'tomato', area: '1.5 hectares' },
  ];

  const schedules = [
    { 
      id: 1, 
      crop: 'tomato', 
      sector: 'Sector A', 
      date: '2023-10-27', 
      time: '08:30', 
      duration: 25, 
      status: 'scheduled', 
      moisture: 65 
    },
    { 
      id: 2, 
      crop: 'chili', 
      sector: 'Sector B', 
      date: '2023-10-27', 
      time: '10:00', 
      duration: 20, 
      status: 'scheduled', 
      moisture: 58 
    },
    { 
      id: 3, 
      crop: 'tomato', 
      sector: 'Sector C', 
      date: '2023-10-27', 
      time: '14:00', 
      duration: 30, 
      status: 'scheduled', 
      moisture: 62 
    },
    { 
      id: 4, 
      crop: 'tomato', 
      sector: 'Sector A', 
      date: '2023-10-26', 
      time: '08:30', 
      duration: 25, 
      status: 'completed', 
      moisture: 72 
    },
    { 
      id: 5, 
      crop: 'chili', 
      sector: 'Sector B', 
      date: '2023-10-26', 
      time: '10:00', 
      duration: 20, 
      status: 'completed', 
      moisture: 70 
    }
  ];

  const filteredSchedules = selectedCrop === 'all' 
    ? schedules 
    : schedules.filter(schedule => schedule.crop === selectedCrop);

  const getTodaySchedules = () => {
    return filteredSchedules.filter(schedule => 
      schedule.date === '2023-10-27' && schedule.status === 'scheduled'
    );
  };

  const getCompletedSchedules = () => {
    return filteredSchedules.filter(schedule => schedule.status === 'completed');
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCropColor = (crop: string) => {
    return crop === 'tomato' 
      ? 'bg-accent-500' 
      : 'bg-primary-500';
  };

  const handleSaveSchedule = () => {
    // In a real app, this would save the schedule to the backend
    setShowScheduleForm(false);
    alert('Irrigation schedule saved successfully!');
  };

  return (
    <UserLayout title="Irrigation Control">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="card p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-semibold text-gray-900">Irrigation Control</h2>
              <p className="text-gray-600 mt-1">
                Manage and schedule irrigation for your crops
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <div className="relative">
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="input pr-10 appearance-none"
                >
                  <option value="all">All Crops</option>
                  <option value="tomato">Tomato</option>
                  <option value="chili">Chili</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setShowScheduleForm(true)}
              >
                <Plus size={18} className="mr-1" /> New Schedule
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
          <DataWidget 
            title="Today's Schedules" 
            icon={<Calendar size={24} className="text-secondary-500" />}
          >
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{getTodaySchedules().length}</p>
              <p className="ml-2 text-sm text-gray-500">Scheduled</p>
            </div>
          </DataWidget>
          
          <DataWidget 
            title="Next Irrigation" 
            icon={<Clock size={24} className="text-warning-500" />}
          >
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {getTodaySchedules().length > 0 ? getTodaySchedules()[0].time : 'None'}
              </p>
              <p className="ml-2 text-sm text-gray-500">
                {getTodaySchedules().length > 0 ? getTodaySchedules()[0].sector : ''}
              </p>
            </div>
          </DataWidget>
          
          <DataWidget 
            title="Weather Forecast" 
            icon={<CloudRain size={24} className="text-primary-500" />}
          >
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">Sunny</p>
              <p className="ml-2 text-sm text-gray-500">No rain expected</p>
            </div>
          </DataWidget>
          
          <DataWidget 
            title="Auto-Irrigation" 
            icon={<ToggleLeft size={24} className="text-success-500" />}
          >
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">Enabled</p>
              <p className="ml-2 text-sm text-gray-500">Based on soil moisture</p>
            </div>
          </DataWidget>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sector Status */}
          <div className="lg:col-span-1">
            <div className="card h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Droplet size={20} className="text-secondary-500 mr-2" />
                Sector Status
              </h3>
              
              <div className="space-y-4">
                {sectors.map(sector => (
                  <div 
                    key={sector.id}
                    className="p-4 rounded-lg border border-gray-200 hover:border-secondary-300 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full ${getCropColor(sector.crop)} mr-2`}></div>
                          <h4 className="font-medium text-gray-900">{sector.name}</h4>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{sector.area}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700">Soil Moisture</p>
                        <p className="text-lg font-semibold">
                          {sector.crop === 'tomato' ? '68%' : '58%'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block text-secondary-500">
                              Current
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-secondary-500">
                              Target: {sector.crop === 'tomato' ? '65-75%' : '55-65%'}
                            </span>
                          </div>
                        </div>
                        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-secondary-100">
                          <div 
                            style={{ width: sector.crop === 'tomato' ? '68%' : '58%' }} 
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button 
                        className="btn btn-primary text-xs py-1 px-3"
                        onClick={() => {
                          setSelectedSector(sector.name);
                          setShowScheduleForm(true);
                        }}
                      >
                        Schedule
                      </button>
                      <button className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-xs py-1 px-3">
                        Irrigate Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Irrigation Schedule */}
          <div className="lg:col-span-2">
            <div className="card h-full">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Calendar size={20} className="text-secondary-500 mr-2" />
                Irrigation Schedule
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crop/Sector
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
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
                    {filteredSchedules.map(schedule => (
                      <tr key={schedule.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${getCropColor(schedule.crop)} mr-2`}></div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{schedule.crop === 'tomato' ? 'Tomato' : 'Chili'}</div>
                              <div className="text-xs text-gray-500">{schedule.sector}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(schedule.date)}</div>
                          <div className="text-xs text-gray-500">{schedule.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{schedule.duration} minutes</div>
                          <div className="text-xs text-gray-500">Soil moisture: {schedule.moisture}%</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(schedule.status)}`}>
                            {schedule.status.charAt(0).toUpperCase() + schedule.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {schedule.status === 'scheduled' && (
                            <div className="flex space-x-2">
                              <button className="text-primary-600 hover:text-primary-900">Edit</button>
                              <button className="text-red-600 hover:text-red-900">Cancel</button>
                            </div>
                          )}
                          {schedule.status === 'completed' && (
                            <button className="text-secondary-600 hover:text-secondary-900">View Details</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alert Section */}
        <div className="card border-l-4 border-warning-500 bg-warning-50">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle size={24} className="text-warning-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-warning-800">Attention Needed</h3>
              <div className="mt-2 text-sm text-warning-700">
                <p>
                  The weather forecast indicates potential heavy rain in the next 48 hours. Consider adjusting your irrigation schedule to prevent over-watering.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Schedule Form Modal */}
        {showScheduleForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  New Irrigation Schedule
                </h3>
                <button 
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setShowScheduleForm(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                    Sector
                  </label>
                  <div className="relative">
                    <select
                      id="sector"
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="input pr-10 appearance-none"
                      required
                    >
                      <option value="" disabled>Select a sector</option>
                      {sectors.map(sector => (
                        <option key={sector.id} value={sector.name}>{sector.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <DatePicker
                    id="date"
                    selected={scheduleDate}
                    onChange={(date) => setScheduleDate(date)}
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <DatePicker
                    id="time"
                    selected={scheduleTime}
                    onChange={(time) => setScheduleTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="input w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    id="duration"
                    min="5"
                    max="60"
                    value={scheduleDuration}
                    onChange={(e) => setScheduleDuration(parseInt(e.target.value))}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Adjust based on soil moisture (recommended)
                    </span>
                  </label>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowScheduleForm(false)}
                    className="btn bg-gray-100 hover:bg-gray-200 text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveSchedule}
                    className="btn btn-primary"
                  >
                    Save Schedule
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

export default Irrigation;