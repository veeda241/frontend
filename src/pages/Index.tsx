
import React from 'react';
import Header from '@/components/Header';
import DashboardStats from '@/components/DashboardStats';
import AiInsights from '@/components/AiInsights';
import TaxTrends from '@/components/TaxTrends';
import RegulationFeed from '@/components/RegulationFeed';
import TaxCalculator from '@/components/TaxCalculator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Tax Monitoring Dashboard</h1>
          <p className="text-muted-foreground">
            AI-powered insights and analytics for the income tax system.
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <TaxTrends />
            <RegulationFeed />
          </div>
          
          <div className="space-y-6">
            <AiInsights />
            <TaxCalculator />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
