import React from 'react';
import { Calendar, BarChart2, AlertCircle, Smartphone, TrendingUp, Leaf } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const HarvestPredictionsPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Predictions',
      description: 'Leverage artificial intelligence to predict harvest yields and timing with high accuracy.'
    },
    {
      title: 'Weather Integration',
      description: 'Factor in weather forecasts and historical data for more accurate predictions.'
    },
    {
      title: 'Crop Health Analysis',
      description: 'Monitor crop health indicators to refine harvest predictions.'
    },
    {
      title: 'Historical Data Analysis',
      description: 'Use historical harvest data to improve prediction accuracy over time.'
    },
    {
      title: 'Resource Planning',
      description: 'Plan labor and equipment needs based on predicted harvest schedules.'
    },
    {
      title: 'Market Insights',
      description: 'Get market trend analysis to help with harvest timing and pricing decisions.'
    }
  ];

  const benefits = [
    {
      title: 'Better Planning',
      description: 'Plan your operations more effectively with accurate harvest predictions.'
    },
    {
      title: 'Resource Optimization',
      description: 'Optimize labor and equipment allocation based on predicted harvest schedules.'
    },
    {
      title: 'Market Advantage',
      description: 'Make informed decisions about harvest timing and market positioning.'
    },
    {
      title: 'Risk Reduction',
      description: 'Reduce uncertainty and better manage harvest-related risks.'
    }
  ];

  return (
    <ServicePage
      title="Harvest Predictions"
      description="Make data-driven decisions about your harvest with our advanced prediction system. Using AI and machine learning, we help you anticipate yields and optimize your harvest operations."
      icon={<Calendar className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/harvest-predictions.jpg"
      ctaText="Start Harvest Planning"
      ctaLink="/register?service=harvest-predictions"
    />
  );
};

export default HarvestPredictionsPage; 