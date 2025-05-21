import React from 'react';
import { BarChart2, Camera, Leaf, AlertCircle, TrendingUp, Smartphone } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const CropMonitoringPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Monitoring',
      description: 'Monitor crop health, growth, and development in real-time using advanced sensors and imaging technology.'
    },
    {
      title: 'Disease Detection',
      description: 'Early detection of plant diseases and pest infestations using AI-powered image recognition.'
    },
    {
      title: 'Growth Analytics',
      description: 'Track crop growth metrics and compare against historical data to optimize farming practices.'
    },
    {
      title: 'Weather Impact Analysis',
      description: 'Analyze how weather conditions affect crop health and growth patterns.'
    },
    {
      title: 'Mobile Alerts',
      description: 'Receive instant notifications about potential issues or significant changes in crop conditions.'
    },
    {
      title: 'Yield Prediction',
      description: 'Predict crop yields using historical data, current conditions, and advanced analytics.'
    }
  ];

  const benefits = [
    {
      title: 'Early Problem Detection',
      description: 'Identify and address issues before they significantly impact crop health or yield.'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on comprehensive crop data and analytics.'
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize resource allocation by understanding crop needs and growth patterns.'
    },
    {
      title: 'Increased Productivity',
      description: 'Improve overall farm productivity through proactive monitoring and management.'
    }
  ];

  return (
    <ServicePage
      title="Crop Monitoring"
      description="Stay ahead of crop health issues with our advanced monitoring system. Using a combination of sensors, drones, and AI technology, we provide comprehensive insights into your crops' health and growth."
      icon={<BarChart2 className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/crop-monitoring.jpg"
      ctaText="Start Monitoring"
      ctaLink="/register?service=crop-monitoring"
    />
  );
};

export default CropMonitoringPage; 