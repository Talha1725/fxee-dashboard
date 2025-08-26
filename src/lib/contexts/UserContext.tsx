"use client";

import React, { createContext, useContext, useState } from 'react';

type UserPlan = 'Free' | 'Basic' | 'Pro' | 'VIP';

interface UserContextType {
  userPlan: UserPlan;
  setUserPlan: (plan: UserPlan) => void;
  isPremium: boolean; // Pro or VIP users can access all add-ons
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userPlan, setUserPlan] = useState<UserPlan>('VIP'); // Mock user as Basic (not premium)

  // Both Pro and VIP are considered premium users who can access all add-ons
  const isPremium = userPlan === 'Pro' || userPlan === 'VIP';

  return (
    <UserContext.Provider value={{ userPlan, setUserPlan, isPremium }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
