"use client";

import React, { createContext, useContext, useState } from 'react';

type UserPlan = 'Free' | 'Basic' | 'Pro' | 'VIP';

interface UserContextType {
  userPlan: UserPlan;
  setUserPlan: (plan: UserPlan) => void;
  isPremium: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userPlan, setUserPlan] = useState<UserPlan>('Free');

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
