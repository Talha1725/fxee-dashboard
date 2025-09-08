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
  enginePower: number;
  setEnginePower: (power: number) => void;
  isLoading: boolean;
  error: any;
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
  const { data: aiToolsData, isLoading, error } = useGetUserAIToolsQuery();
  const [updateAITools, { isLoading: isUpdating }] = useUpdateUserAIToolsMutation();
  
  // Initialize with all tools inactive until API responds
  const initialAddOns = addOnsData.map(addOn => ({
    ...addOn,
    active: false
  }));
  
  const [pendingAddOns, setPendingAddOns] = useState<AddOnData[]>(initialAddOns);
  const [savedAddOns, setSavedAddOns] = useState<AddOnData[]>(initialAddOns);
  const [isInitialized, setIsInitialized] = useState(false);
  const [enginePower, setEnginePower] = useState<number>(33);
  const [savedEnginePower, setSavedEnginePower] = useState<number>(33);

  // Update add-ons state when API data changes or fails
  useEffect(() => {
    // Handle API loading completion (success or error)
    if (!isLoading) {
      let updatedAddOns = initialAddOns; // Default to all inactive
      let currentEnginePower = 0; // Default to 0 on error
      
      // Only update with API data if successful
      if (aiToolsData && aiToolsData.success && aiToolsData.data?.tools && !error) {
        const tools = aiToolsData.data.tools;
        const enabledToolKeys = tools.filter(tool => tool.isEnabled).map(tool => tool.toolKey);
        
        // Update addons based on API data
        updatedAddOns = addOnsData.map(addOn => {
          const toolKey = ADDON_TO_TOOL_MAP[addOn.title];
          return {
            ...addOn,
            active: toolKey ? enabledToolKeys.includes(toolKey) : false
          };
        });

        // Update engine power from API
        if (aiToolsData.data['engine-power'] !== undefined) {
          currentEnginePower = aiToolsData.data['engine-power'];
        } else {
          currentEnginePower = 33; // Default fallback if no engine-power in response
        }
      } else if (error) {
        // On error, ensure everything is reset to defaults
        console.error('AI Tools API error:', error);
        updatedAddOns = initialAddOns; // All tools inactive
        currentEnginePower = 0; // Engine power at 0
      }
      
      setPendingAddOns(updatedAddOns);
      setSavedAddOns(updatedAddOns);
      setEnginePower(currentEnginePower);
      setSavedEnginePower(currentEnginePower);
      setIsInitialized(true);
    }
  }, [aiToolsData, isLoading, error]);

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
    // Map pendingAddOns to new API format
    const toolsArray = Object.keys(ADDON_TO_TOOL_MAP).map(title => {
      const toolKey = ADDON_TO_TOOL_MAP[title];
      const addOn = pendingAddOns.find(a => a.title === title);
      return {
        toolKey,
        isEnabled: addOn ? addOn.active : false
      };
    });

    // Filter out tools that don't have a valid mapping
    const validTools = toolsArray.filter(tool => tool.toolKey);
    
    if (validTools.filter(tool => tool.isEnabled).length === 0) {
      showToast.error("Please select at least one AI tool");
      return;
    }
    
    try {
      const result = await updateAITools({ 
        tools: validTools,
        "engine-power": enginePower 
      }).unwrap();
      
      if (result.success) {
        setSavedAddOns([...pendingAddOns]);
        setSavedEnginePower(enginePower);
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

  const hasUnsavedChanges = !compareAddOns(pendingAddOns, savedAddOns) || enginePower !== savedEnginePower;

  return (
    <AddOnsContext.Provider value={{ 
      pendingAddOns, 
      savedAddOns, 
      toggleAddOn, 
      saveAddOns, 
      hasUnsavedChanges,
      isUpdating,
      enginePower,
      setEnginePower,
      isLoading,
      error
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
