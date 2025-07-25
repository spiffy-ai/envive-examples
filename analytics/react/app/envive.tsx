
import React, {createContext, useContext} from 'react';
import { EnviveAnalytics } from '@envive-ai/analytics';

type EnviveAnalyticsContextType = {
  envive: EnviveAnalytics
};

const EnviveAnalyticsContext = createContext<EnviveAnalyticsContextType | undefined>(undefined);

export function EnviveAnalyticsProvider({children}: {children: React.ReactNode}) {
  const envive = new EnviveAnalytics({
        apiKey: 'ENVIVE_API_KEY', // Replace with your actual API key
  });
  return (
    <EnviveAnalyticsContext.Provider value={{envive: envive}}>
      {children}
    </EnviveAnalyticsContext.Provider>
  );
}

export function useEnviveAnalytics() {
  const context = useContext(EnviveAnalyticsContext);
  if (!context) {
    throw new Error('useEnviveAnalytics must be used within an EnviveAnalyticsProvider');
  }
  return context;
}
