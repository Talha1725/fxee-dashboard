"use client";

import React, { createContext, useContext, useState } from 'react';
import { addOnsData } from '@/lib/constants';

interface AddOnData {
  icon: React.ReactNode;
  title: string;
  isVip: boolean;
  active: boolean;
}

interface AddOnsContextType {
  addOns: AddOnData[];
  toggleAddOn: (title: string) => void;
}

const AddOnsContext = createContext<AddOnsContextType | undefined>(undefined);

export function AddOnsProvider({ children }: { children: React.ReactNode }) {
  const [addOns, setAddOns] = useState<AddOnData[]>(addOnsData);

  const toggleAddOn = (title: string) => {
    setAddOns(prev => 
      prev.map(addOn => 
        addOn.title === title 
          ? { ...addOn, active: !addOn.active }
          : addOn
      )
    );
  };

  return (
    <AddOnsContext.Provider value={{ addOns, toggleAddOn }}>
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
