'use client';

import React, { createContext, useState, useContext } from 'react';

interface TestContextType {
  testInfo: {
    name?: string;
    current?: number;
    total?: number;
  } | null;
  setTestInfo: (info: { name?: string; current?: number; total?: number } | null) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [testInfo, setTestInfo] = useState<{ name?: string; current?: number; total?: number } | null>(null);

  return (
    <TestContext.Provider value={{ testInfo, setTestInfo }}>
      {children}
    </TestContext.Provider>
  );
}

export function useTestInfo() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestInfo debe usarse dentro de TestProvider');
  }
  return context;
}
