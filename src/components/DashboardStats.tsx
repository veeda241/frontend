
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, Percent, CheckCircle, Search, FileText } from 'lucide-react';
import { taxStats } from '@/lib/mockData';

const DashboardStats: React.FC = () => {
  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'percent':
        return <Percent className="h-5 w-5" />;
      case 'check-circle':
        return <CheckCircle className="h-5 w-5" />;
      case 'search':
        return <Search className="h-5 w-5" />;
      case 'file-text':
        return <FileText className="h-5 w-5" />;
      default:
        return <Percent className="h-5 w-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {taxStats.map((stat) => (
        <Card key={stat.id} className="border-l-4 border-l-fiscal-600">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
              </div>
              <div className="bg-fiscal-100 p-2 rounded-full">
                {getIcon(stat.icon)}
              </div>
            </div>
            <div className="mt-2 flex items-center">
              {stat.change.trend === 'up' ? (
                <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-600 mr-1" />
              )}
              <span className={stat.change.trend === 'up' ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
                {stat.change.value} {stat.change.trend === 'up' ? 'increase' : 'decrease'}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
