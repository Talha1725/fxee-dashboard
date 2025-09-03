"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AccountType = 'virtual-account' | 'demo-account';

interface AccountTypeContextType {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  isVirtualAccount: boolean;
  isDemoAccount: boolean;
}

const AccountTypeContext = createContext<AccountTypeContextType | undefined>(undefined);

interface AccountTypeProviderProps {
  children: ReactNode;
}

export function AccountTypeProvider({ children }: AccountTypeProviderProps) {
  const [accountType, setAccountTypeState] = useState<AccountType>('virtual-account');

  // Load account type from localStorage on mount
  useEffect(() => {
    const savedAccountType = localStorage.getItem('accountType') as AccountType;
    if (savedAccountType && (savedAccountType === 'virtual-account' || savedAccountType === 'demo-account')) {
      setAccountTypeState(savedAccountType);
    }
  }, []);

  const setAccountType = (type: AccountType) => {
    setAccountTypeState(type);
    localStorage.setItem('accountType', type);
  };

  const isVirtualAccount = accountType === 'virtual-account';
  const isDemoAccount = accountType === 'demo-account';

  return (
    <AccountTypeContext.Provider
      value={{
        accountType,
        setAccountType,
        isVirtualAccount,
        isDemoAccount,
      }}
    >
      {children}
    </AccountTypeContext.Provider>
  );
}

export function useAccountType() {
  const context = useContext(AccountTypeContext);
  if (context === undefined) {
    throw new Error('useAccountType must be used within an AccountTypeProvider');
  }
  return context;
}
