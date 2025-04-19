'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import ChatAssistantService from './services/ChatAssistantService';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface AIContextValue {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
}

const AIContext = createContext<AIContextValue | undefined>(undefined);

export function AIProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);

  async function sendMessage(text: string) {
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text }]);
    // Get assistant response
    const response = await ChatAssistantService.getResponse(text);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
  }

  return (
    <AIContext.Provider value={{ messages, sendMessage }}>
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error('useAI must be used within AIProvider');
  }
  return context;
}
