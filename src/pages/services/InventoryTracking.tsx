import React from 'react';
import { Package, BarChart2, AlertCircle, Smartphone, Calendar, TrendingUp } from 'lucide-react';
import ServicePage from '../../components/services/ServicePage';

const InventoryTrackingPage: React.FC = () => {
  const features = [
    {
      title: "Real-time Inventory Monitoring",
      description: "Track your farm inventory in real-time, from seeds and supplies to harvested crops."
    },
    {
      title: "Automated Stock Alerts",
      description: "Receive notifications when inventory levels are low or when items need attention."
    },
    {
      title: "Barcode & QR Code Support",
      description: "Easily scan and track items using barcode and QR code technology."
    },
    {
      title: "Inventory Analytics",
      description: "Get insights into inventory trends, usage patterns, and optimization opportunities."
    },
    {
      title: "Mobile Management",
      description: "Manage your inventory on the go with our mobile app and web dashboard."
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly integrate with other farm management systems and tools."
    }
  ];

  const benefits = [
    {
      title: "Improved Efficiency",
      description: "Streamline inventory management and reduce time spent on manual tracking."
    },
    {
      title: "Cost Control",
      description: "Prevent stockouts and overstocking to optimize inventory costs."
    },
    {
      title: "Better Planning",
      description: "Make informed decisions based on accurate inventory data and trends."
    },
    {
      title: "Reduced Waste",
      description: "Minimize waste through better inventory tracking and management."
    }
  ];

  return (
    <ServicePage
      title="Inventory Tracking"
      description="Take control of your farm inventory with our comprehensive tracking solution. From supplies to harvested crops, manage everything in one place with real-time updates and smart analytics."
      icon={<Package className="w-8 h-8 text-primary-600" />}
      features={features}
      benefits={benefits}
      imageUrl="/images/services/inventory-tracking.jpg"
      ctaText="Start Inventory Tracking"
      ctaLink="/register?service=inventory"
    />
  );
};

export default InventoryTrackingPage; 