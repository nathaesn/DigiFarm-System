import React from 'react';
import { Microscope, Droplet, Leaf, BarChart2, AlertCircle, Smartphone } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const SoilAnalysisPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Soil Monitoring',
      description: 'Monitor soil moisture, temperature, and nutrient levels in real-time using advanced sensors.'
    },
    {
      title: 'Nutrient Analysis',
      description: 'Get detailed insights into soil nutrient composition and recommendations for optimal crop growth.'
    },
    {
      title: 'pH Level Tracking',
      description: 'Monitor and maintain optimal soil pH levels for different crops and growing conditions.'
    },
    {
      title: 'Historical Data Analysis',
      description: 'Track soil conditions over time and identify patterns that affect crop health and yield.'
    },
    {
      title: 'Smart Alerts',
      description: 'Receive notifications when soil conditions require attention or adjustment.'
    },
    {
      title: 'Crop-Specific Recommendations',
      description: 'Get tailored recommendations based on your specific crops and soil conditions.'
    }
  ];

  const benefits = [
    {
      title: 'Improved Crop Health',
      description: 'Maintain optimal soil conditions for better crop growth and reduced disease risk.'
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize fertilizer and water usage based on precise soil analysis.'
    },
    {
      title: 'Increased Yield',
      description: 'Achieve higher crop yields through better soil management and nutrient optimization.'
    },
    {
      title: 'Sustainable Farming',
      description: 'Practice sustainable farming by maintaining soil health and reducing chemical usage.'
    }
  ];

  return (
    <ServicePage
      title="Soil Analysis"
      description="Take the guesswork out of soil management with our advanced soil analysis service. Using cutting-edge sensors and analytics, we provide comprehensive insights into your soil's health and composition."
      icon={<Microscope className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/soil-analysis.jpg"
      ctaText="Start Soil Analysis"
      ctaLink="/register?service=soil-analysis"
    />
  );
};

export default SoilAnalysisPage; 