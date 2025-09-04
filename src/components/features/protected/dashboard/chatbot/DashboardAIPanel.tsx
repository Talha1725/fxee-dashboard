"use client";

import React from 'react';
import TradeSelectionPanel from './TradeSelectionPanel';

interface DashboardAIPanelProps {
  className?: string;
}

export default function DashboardAIPanel({ className }: DashboardAIPanelProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <TradeSelectionPanel />
    </div>
  );
}
