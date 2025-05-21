import React from 'react';
import { Droplet, Wifi, Cloud, Smartphone, BarChart2, Shield } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const IoTIrrigationPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Water Management',
      description: 'Automatically adjust irrigation based on real-time soil moisture, weather conditions, and crop needs.'
    },
    {
      title: 'Remote Monitoring',
      description: 'Monitor and control your irrigation system from anywhere using our mobile app or web dashboard.'
    },
    {
      title: 'Weather Integration',
      description: 'Integrate with local weather forecasts to optimize irrigation schedules and prevent water waste.'
    },
    {
      title: 'Zone Control',
      description: 'Create and manage different irrigation zones with customized schedules and water requirements.'
    },
    {
      title: 'Water Usage Analytics',
      description: 'Track and analyze water consumption patterns to identify opportunities for optimization.'
    },
    {
      title: 'Automated Alerts',
      description: 'Receive instant notifications about system status, leaks, or maintenance requirements.'
    }
  ];

  const benefits = [
    {
      title: 'Water Conservation',
      description: 'Reduce water usage by up to 30% through precise irrigation scheduling and real-time adjustments.'
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs by optimizing water usage and reducing manual labor requirements.'
    },
    {
      title: 'Increased Crop Yield',
      description: 'Improve crop health and yield through consistent and optimal irrigation practices.'
    },
    {
      title: 'Environmental Impact',
      description: 'Minimize environmental impact by preventing water runoff and reducing energy consumption.'
    }
  ];

  return (
    <ServicePage
      title="IoT Irrigation"
      description="Transform your irrigation system with smart IoT technology. Our advanced irrigation solution combines sensors, automation, and data analytics to optimize water usage and improve crop health."
      icon={<Droplet className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/iot-irrigation.jpg"
      ctaText="Start Smart Irrigation"
      ctaLink="/register?service=irrigation"
    />
  );
};

export default IoTIrrigationPage; 