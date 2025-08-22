"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useCreateCustomAnalysisMutation, useGetSupportedSymbolsQuery } from '@/lib/redux/features/recommendations/recommendationsApi';
import { handleApiError } from '@/lib/utils/apiUtils';
import type { CustomAnalysisRequest } from '@/types/redux';

export default function CustomAnalysisForm() {
  const [formData, setFormData] = useState<CustomAnalysisRequest>({
    profitTarget: 0,
    maxRisk: 0,
    riskLevel: 'mid',
    tradingType: 'swing_trade',
    tradingVersion: 'basic',
    symbol: '',
    timeFrame: '',
    customGoals: ''
  });

  // API hooks
  const [createAnalysis, { isLoading: isCreating }] = useCreateCustomAnalysisMutation();
  const { data: symbolsData, isLoading: isLoadingSymbols } = useGetSupportedSymbolsQuery();

  const handleInputChange = (field: keyof CustomAnalysisRequest, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.symbol) {
      alert('Please select a symbol');
      return;
    }

    if (formData.profitTarget <= 0 || formData.maxRisk <= 0) {
      alert('Please enter valid profit target and risk amounts');
      return;
    }

    try {
      const response = await createAnalysis(formData).unwrap();
      
      if (response.success) {
        alert('Analysis created successfully!');
        // Reset form or redirect to analysis details
        setFormData({
          profitTarget: 0,
          maxRisk: 0,
          riskLevel: 'mid',
          tradingType: 'swing_trade',
          tradingVersion: 'basic',
          symbol: '',
          timeFrame: '',
          customGoals: ''
        });
      }
    } catch (error) {
      const errorMessage = handleApiError(error as any);
      alert(`Error creating analysis: ${errorMessage}`);
    }
  };

  const supportedSymbols = symbolsData?.data?.symbols || [];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Custom Trading Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Symbol Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Trading Symbol *</label>
            <Select
              value={formData.symbol}
              onValueChange={(value) => handleInputChange('symbol', value)}
              disabled={isLoadingSymbols}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a trading symbol" />
              </SelectTrigger>
              <SelectContent>
                {supportedSymbols.map((symbol) => (
                  <SelectItem key={symbol.id} value={symbol.symbol}>
                    {symbol.symbol} ({symbol.type})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Profit Target and Risk */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Profit Target *</label>
              <Input
                type="number"
                value={formData.profitTarget}
                onChange={(e) => handleInputChange('profitTarget', parseFloat(e.target.value) || 0)}
                placeholder="Enter profit target"
                min="0"
                step="0.01"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Max Risk *</label>
              <Input
                type="number"
                value={formData.maxRisk}
                onChange={(e) => handleInputChange('maxRisk', parseFloat(e.target.value) || 0)}
                placeholder="Enter max risk"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          {/* Risk Level and Trading Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Risk Level</label>
              <Select
                value={formData.riskLevel}
                onValueChange={(value) => handleInputChange('riskLevel', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="mid">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Trading Type</label>
              <Select
                value={formData.tradingType}
                onValueChange={(value) => handleInputChange('tradingType', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day_trade">Day Trade</SelectItem>
                  <SelectItem value="swing_trade">Swing Trade</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Trading Version and Timeframe */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Analysis Version</label>
              <Select
                value={formData.tradingVersion}
                onValueChange={(value) => handleInputChange('tradingVersion', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (Single Target)</SelectItem>
                  <SelectItem value="pro">Pro (Multiple Targets)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Timeframe</label>
              <Input
                value={formData.timeFrame}
                onChange={(e) => handleInputChange('timeFrame', e.target.value)}
                placeholder="e.g., 2 Days, 1H, 4H"
              />
            </div>
          </div>

          {/* Custom Goals */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Custom Goals (Optional)</label>
            <Textarea
              value={formData.customGoals}
              onChange={(e) => handleInputChange('customGoals', e.target.value)}
              placeholder="Describe your trading goals or specific requirements..."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isCreating || !formData.symbol || formData.profitTarget <= 0 || formData.maxRisk <= 0}
            className="w-full"
          >
            {isCreating ? 'Creating Analysis...' : 'Create Custom Analysis'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
