'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

export type DeliveryMethod = 'delivery' | 'pickup';

interface DeliveryContextValue {
  method: DeliveryMethod;
  setMethod: (method: DeliveryMethod) => void;
}

const DeliveryContext = createContext<DeliveryContextValue | undefined>(undefined);

export function DeliveryProvider({ children }: { children: ReactNode }) {
  const [method, setMethod] = useState<DeliveryMethod>('delivery');
  return (
    <DeliveryContext.Provider value={{ method, setMethod }}>
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within DeliveryProvider');
  }
  return context;
}
