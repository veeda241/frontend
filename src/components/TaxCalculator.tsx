
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { taxBrackets } from '@/lib/mockData';

const TaxCalculator: React.FC = () => {
  const [income, setIncome] = useState<string>('60000');
  const [taxAmount, setTaxAmount] = useState<number | null>(null);
  const [effectiveRate, setEffectiveRate] = useState<number | null>(null);
  const [marginalRate, setMarginalRate] = useState<number | null>(null);
  
  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    
    if (isNaN(incomeValue) || incomeValue < 0) {
      return;
    }
    
    let totalTax = 0;
    let applicableBracket = null;
    
    // Find applicable bracket and calculate tax
    for (let i = 0; i < taxBrackets.length; i++) {
      const bracket = taxBrackets[i];
      
      if (incomeValue > bracket.min && (bracket.max === null || incomeValue <= bracket.max)) {
        applicableBracket = bracket;
      }
      
      if (i === 0) {
        // First bracket
        const taxableAmount = Math.min(incomeValue, bracket.max || 0);
        totalTax += taxableAmount * (bracket.rate / 100);
      } else {
        // Higher brackets
        const prevBracket = taxBrackets[i - 1];
        const taxableAmount = incomeValue > bracket.min 
          ? Math.min(incomeValue - bracket.min, (bracket.max || Infinity) - bracket.min)
          : 0;
        totalTax += taxableAmount * (bracket.rate / 100);
      }
    }
    
    setTaxAmount(Math.round(totalTax));
    setEffectiveRate(Math.round((totalTax / incomeValue) * 1000) / 10);
    setMarginalRate(applicableBracket ? applicableBracket.rate : 0);
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Calculator className="h-5 w-5 text-fiscal-600 mr-2" />
          <CardTitle className="text-lg font-semibold">Quick Tax Estimator</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income</Label>
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                <Input
                  id="income"
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="pl-7"
                />
              </div>
              <Button onClick={calculateTax} className="bg-fiscal-600 hover:bg-fiscal-700">
                <ArrowRight className="h-4 w-4 mr-1" /> Calculate
              </Button>
            </div>
          </div>
          
          {taxAmount !== null && (
            <div className="bg-fiscal-50 p-4 rounded-md space-y-3">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Estimated Tax:</h4>
                <p className="text-xl font-bold">${taxAmount.toLocaleString()}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Effective Rate:</h4>
                  <p className="text-md font-semibold">{effectiveRate}%</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Marginal Rate:</h4>
                  <p className="text-md font-semibold">{marginalRate}%</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                This is a simplified estimate based on federal tax brackets only.
                Actual tax may vary based on deductions, credits, and other factors.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxCalculator;
