

Template built from https://github.com/Shopify/hydrogen

# React Example Usage

app/envive.tsx

Replace `ENVIVE_API_KEY` with the API key you were provided

```tsx

import React, {createContext, useContext} from 'react';
import { EnviveAnalytics } from '@envive-ai/analytics';

type EnviveAnalyticsContextType = {
  envive: EnviveAnalytics
};

const EnviveAnalyticsContext = createContext<EnviveAnalyticsContextType | undefined>(undefined);

export function EnviveAnalyticsProvider({children}: {children: React.ReactNode}) {
  const envive = new EnviveAnalytics({
        apiKey: 'ENVIVE_API_KEY',
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

```
Wrap the page/component with the created provider

app/root.tsx

```tsx
        <EnviveAnalyticsProvider>
            <PageLayout {...data}>
              {children}
            </PageLayout>
        </EnviveAnalyticsProvider>

```

app/components/ProductForm.tsx
```tsx
import { useEnviveAnalytics } from '~/envive';
const {envive} = useEnviveAnalytics();
      <AddToCartButton
        onClick={() => {
          if (selectedVariant) {
            envive.trackAddToCartClicked({
                id: selectedVariant.id,
                quantity: 1,
                price: Number(selectedVariant.price.amount),
                currencyCode: selectedVariant.price.currencyCode,
            });
          }

        }}
      />   

```

# Hydrogen template: Skeleton

Hydrogen is Shopify’s stack for headless commerce. Hydrogen is designed to dovetail with [Remix](https://remix.run/), Shopify’s full stack web framework. This template contains a **minimal setup** of components, queries and tooling to get started with Hydrogen.

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes


## Local development
```bash
cd analytics/react
npm install
npm run dev
```

