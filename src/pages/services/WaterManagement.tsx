import React from 'react';
import { Waves, Droplet, Cloud, BarChart2, AlertCircle, Smartphone } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const WaterManagementPage: React.FC = () => {
  const features = [
    {
      title: 'Water Usage Monitoring',
      description: 'Track water consumption across your farm with detailed analytics and reporting.'
    },
    {
      title: 'Smart Irrigation Control',
      description: 'Automatically adjust irrigation based on weather forecasts and soil conditions.'
    },
    {
      title: 'Leak Detection',
      description: 'Identify and locate water leaks quickly to prevent water waste and damage.'
    },
    {
      title: 'Water Quality Analysis',
      description: 'Monitor water quality parameters to ensure optimal conditions for your crops.'
    },
    {
      title: 'Usage Optimization',
      description: 'Get recommendations for optimizing water usage based on crop needs and conditions.'
    },
    {
      title: 'Mobile Control',
      description: 'Manage your water systems remotely through our mobile app or web dashboard.'
    }
  ];

  const benefits = [
    {
      title: 'Water Conservation',
      description: 'Reduce water waste and optimize usage through smart monitoring and control.'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower water bills and operational costs through efficient water management.'
    },
    {
      title: 'Environmental Impact',
      description: 'Minimize environmental impact by reducing water waste and optimizing usage.'
    },
    {
      title: 'Crop Health',
      description: 'Improve crop health through precise water management and quality control.'
    }
  ];

  return (
    <ServicePage
      title="Water Management"
      description="Optimize your farm's water usage with our comprehensive water management solution. From monitoring to control, we help you make the most of every drop while ensuring optimal conditions for your crops."
      icon={<Waves className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/water-management.jpg"
      ctaText="Start Water Management"
      ctaLink="/register?service=water-management"
    />
  );
};

export default WaterManagementPage; 