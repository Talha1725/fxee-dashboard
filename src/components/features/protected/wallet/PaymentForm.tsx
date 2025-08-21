"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useCreatePaymentMutation } from '@/lib/redux/features/payments/paymentsApi';
import { handleApiError } from '@/lib/utils/apiUtils';
import { useAuth } from '@/hooks/useAuth';
import type { CreatePaymentRequest } from '@/types/redux';

export default function PaymentForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState<CreatePaymentRequest>({
    userId: user?.id ? parseInt(user.id) : 0,
    amount: 0,
    currency: 'USD',
    paymentMethod: 'credit_card',
    description: '',
    paymentProcessor: 'stripe',
    metadata: {}
  });

  // API hooks
  const [createPayment, { isLoading: isCreating }] = useCreatePaymentMutation();

  const handleInputChange = (field: keyof CreatePaymentRequest, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user?.id) {
      alert('User not authenticated');
      return;
    }

    if (formData.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      const paymentData = {
        ...formData,
        userId: parseInt(user.id)
      };

      const response = await createPayment(paymentData).unwrap();
      
      if (response.success) {
        alert('Payment created successfully!');
        // Reset form
        setFormData({
          userId: parseInt(user.id),
          amount: 0,
          currency: 'USD',
          paymentMethod: 'credit_card',
          description: '',
          paymentProcessor: 'stripe',
          metadata: {}
        });
      }
    } catch (error) {
      const errorMessage = handleApiError(error as any);
      alert(`Error creating payment: ${errorMessage}`);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Amount and Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount *</label>
              <Input
                type="number"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', parseFloat(e.target.value) || 0)}
                placeholder="Enter amount"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Currency</label>
              <Select
                value={formData.currency}
                onValueChange={(value) => handleInputChange('currency', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment Method and Processor */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Method</label>
              <Select
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange('paymentMethod', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit_card">Credit Card</SelectItem>
                  <SelectItem value="debit_card">Debit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                  <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                  <SelectItem value="crypto">Cryptocurrency</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Payment Processor</label>
              <Input
                value={formData.paymentProcessor}
                onChange={(e) => handleInputChange('paymentProcessor', e.target.value)}
                placeholder="e.g., stripe, paypal"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Payment description..."
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isCreating || !user?.id || formData.amount <= 0}
            className="w-full"
          >
            {isCreating ? 'Creating Payment...' : 'Create Payment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
