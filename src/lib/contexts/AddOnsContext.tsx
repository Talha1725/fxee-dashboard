"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { addOnsData } from '@/lib/constants';
import { useGetUserAIToolsQuery, useUpdateUserAIToolsMutation } from '@/lib/redux/features/ai-tools/aiToolsApi';
import { showToast } from '@/lib/utils/toast';

interface AddOnData {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVip: boolean;
  active: boolean;
}

interface AddOnsContextType {
  pendingAddOns: AddOnData[];
  savedAddOns: AddOnData[];
  toggleAddOn: (title: string) => void;
  saveAddOns: () => void;
  hasUnsavedChanges: boolean;
  isUpdating: boolean;
}

// Map add-on titles to API tool keys
const ADDON_TO_TOOL_MAP: Record<string, string> = {
  // "AI Analysis": "rsi", // Commented out - no need for ai analysis we will show and use rsi
  "AI RSI Analyzer": "rsi", 
  "Fibonacci Retracement Analyzer": "fibonacci_retracement",
  "Volatility & Risk Analyzer": "volatility_risk",
  "Market Sentiment Aggregator": "market_sentiment",
  "Mass Psychology Analysis": "mass_psychology",
  // "News Impact Predictor": "market_sentiment", // Commented out - we do not have news impact for now
  "Pattern Recognition Scanner": "pattern_recognition",
  "AI Trend Forecast": "ai_trend",
  "Smart Portfolio Allocator": "smart_portfolio",
  "Trade Probability Calculator": "trade_probability"
};

const AddOnsContext = createContext<AddOnsContextType | undefined>(undefined);

export function AddOnsProvider({ children }: { children: React.ReactNode }) {
  const { data: aiToolsData, isLoading } = useGetUserAIToolsQuery();
  const [updateAITools, { isLoading: isUpdating }] = useUpdateUserAIToolsMutation();
  
  // Initialize with all tools inactive until API responds
  const initialAddOns = addOnsData.map(addOn => ({
    ...addOn,
    active: false
  }));
  
  const [pendingAddOns, setPendingAddOns] = useState<AddOnData[]>(initialAddOns);
  const [savedAddOns, setSavedAddOns] = useState<AddOnData[]>(initialAddOns);
  const [isInitialized, setIsInitialized] = useState(false);

  // Update add-ons state when API data changes
  useEffect(() => {
    if (!isLoading && aiToolsData) {
      let updatedAddOns = initialAddOns;
      
      if (aiToolsData.success && aiToolsData.data?.enabledTools) {
        const enabledTools = aiToolsData.data.enabledTools;
        
        // Update addons based on API data
        updatedAddOns = addOnsData.map(addOn => {
          const toolKey = ADDON_TO_TOOL_MAP[addOn.title];
          return {
            ...addOn,
            active: toolKey ? enabledTools.includes(toolKey) : false
          };
        });
      }
      
      setPendingAddOns(updatedAddOns);
      setSavedAddOns(updatedAddOns);
      setIsInitialized(true);
    }
  }, [aiToolsData, isLoading]);

  const toggleAddOn = (title: string) => {
    setPendingAddOns(prev => 
      prev.map(addOn => 
        addOn.title === title 
          ? { ...addOn, active: !addOn.active }
          : addOn
      )
    );
  };
  
  const saveAddOns = async () => {
    // Map pendingAddOns to tool keys for API
    const selectedTools = pendingAddOns
      .filter(addOn => addOn.active && ADDON_TO_TOOL_MAP[addOn.title])
      .map(addOn => ADDON_TO_TOOL_MAP[addOn.title]);
    
    if (selectedTools.length === 0) {
      showToast.error("Please select at least one AI tool");
      return;
    }
    
    try {
      const result = await updateAITools({ tools: selectedTools }).unwrap();
      
      if (result.success) {
        setSavedAddOns([...pendingAddOns]);
        showToast.success("AI tools updated successfully!");
      } else {
        showToast.error("Failed to update AI tools");
      }
    } catch (error: any) {
      console.error("Failed to update AI tools:", error);
      
      // Handle different types of errors
      if (error?.data?.requiresUpgrade) {
        showToast.error("AI tools are only available for VIP members");
      } else if (error?.data?.details) {
        showToast.error("Please select at least one AI tool");
      } else {
        showToast.error("Failed to update AI tools. Please try again.");
      }
    }
  };

  // Compare add-ons without React components (icons) to avoid circular references
  const compareAddOns = (addOns1: AddOnData[], addOns2: AddOnData[]) => {
    if (addOns1.length !== addOns2.length) return false;
    
    return addOns1.every((addOn1, index) => {
      const addOn2 = addOns2[index];
      return addOn1.title === addOn2.title && 
             addOn1.active === addOn2.active && 
             addOn1.isVip === addOn2.isVip &&
             addOn1.description === addOn2.description;
    });
  };

  const hasUnsavedChanges = !compareAddOns(pendingAddOns, savedAddOns);

  return (
    <AddOnsContext.Provider value={{ 
      pendingAddOns, 
      savedAddOns, 
      toggleAddOn, 
      saveAddOns, 
      hasUnsavedChanges,
      isUpdating 
    }}>
      {children}
    </AddOnsContext.Provider>
  );
}

export function useAddOns() {
  const context = useContext(AddOnsContext);
  if (context === undefined) {
    throw new Error('useAddOns must be used within an AddOnsProvider');
  }
  return context;
}
