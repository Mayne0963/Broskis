'use client';
import { ReactNode } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import { DeliveryProvider } from '../contexts/DeliveryContext';
import { AgeVerificationProvider } from '../contexts/AgeVerificationContext';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';
import { LoyaltyProvider } from '../contexts/LoyaltyContext';
import { AIProvider } from '../lib/ai/AIContext'; from '../contexts/MusicPlayerContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>
        <DeliveryProvider>
          <AgeVerificationProvider>
            <MusicPlayerProvider>
                      <LoyaltyProvider>
              <AIProvider>
                              {children}
              </AIProvider>
            </LoyaltyProvider>
            </MusicPlayerProvider>
          </AgeVerificationProvider>
        </DeliveryProvider>
      </CartProvider>
    </AuthProvider>
  );
}
