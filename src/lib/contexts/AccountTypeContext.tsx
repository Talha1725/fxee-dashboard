"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGetUserProfileQuery } from '@/lib/redux/services/userApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

export type AccountType = 'virtual-account' | 'demo-account';
export type DatabaseAccountType = 'virtual_account' | 'demo_account';

const convertAccountType = (dbType: DatabaseAccountType): AccountType => {
  return dbType === 'virtual_account' ? 'virtual-account' : 'demo-account';
};

interface AccountTypeContextType {
  accountType: AccountType;
  setAccountType: (type: AccountType) => void;
  isVirtualAccount: boolean;
  isDemoAccount: boolean;
  userAccountType: AccountType | null;
  isDemoAccountEnabled: boolean;
}

const AccountTypeContext = createContext<AccountTypeContextType | undefined>(undefined);

interface AccountTypeProviderProps {
  children: ReactNode;
}

export function AccountTypeProvider({ children }: AccountTypeProviderProps) {
  const [accountType, setAccountTypeState] = useState<AccountType>('virtual-account');
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  
  const { data: profileData } = useGetUserProfileQuery(undefined, {
    skip: !isAuthenticated,
  });

  const rawUserAccountType = profileData?.result?.accountType || user?.accountType;
  const userAccountType = rawUserAccountType ? convertAccountType(rawUserAccountType) : null;
  
  useEffect(() => {
    if (userAccountType) {
      setAccountTypeState(userAccountType);
      localStorage.setItem('accountType', userAccountType);
    } else {
      const savedAccountType = localStorage.getItem('accountType') as AccountType;
      if (savedAccountType && ['virtual-account', 'demo-account'].includes(savedAccountType)) {
        setAccountTypeState(savedAccountType);
      }
    }
  }, [userAccountType]);

  const setAccountType = (type: AccountType) => {
    setAccountTypeState(type);
    localStorage.setItem('accountType', type);
  };

  const isVirtualAccount = accountType === 'virtual-account';
  const isDemoAccount = accountType === 'demo-account';
  
  const isDemoAccountEnabled = rawUserAccountType === 'demo_account';

  return (
    <AccountTypeContext.Provider
      value={{
        accountType,
        setAccountType,
        isVirtualAccount,
        isDemoAccount,
        userAccountType,
        isDemoAccountEnabled,
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
