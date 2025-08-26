"use client";

import React, { createContext, useContext, useState } from 'react';
import { addOnsData } from '@/lib/constants';

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
}

const AddOnsContext = createContext<AddOnsContextType | undefined>(undefined);

export function AddOnsProvider({ children }: { children: React.ReactNode }) {
  const [pendingAddOns, setPendingAddOns] = useState<AddOnData[]>(addOnsData);
  const [savedAddOns, setSavedAddOns] = useState<AddOnData[]>(addOnsData);

  const toggleAddOn = (title: string) => {
    setPendingAddOns(prev => 
      prev.map(addOn => 
        addOn.title === title 
          ? { ...addOn, active: !addOn.active }
          : addOn
      )
    );
  };

  const saveAddOns = () => {
    setSavedAddOns([...pendingAddOns]);
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
      hasUnsavedChanges 
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
