import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type ChartType = 'line' | 'bar' | 'pie';

interface ChartCardProps {
  title: string;
  type: ChartType;
  data: ChartData<any, any>;
  options?: ChartOptions<any>;
  height?: number;
}

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  type,
  data,
  options = {},
  height = 300
}) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={options} height={height} />;
      case 'bar':
        return <Bar data={data} options={options} height={height} />;
      case 'pie':
        return <Pie data={data} options={options} />;
      default:
        return <Line data={data} options={options} height={height} />;
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <div className="mt-2">
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartCard;