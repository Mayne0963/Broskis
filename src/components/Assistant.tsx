'use client';
import { useState, useRef, useEffect } from 'react';
import { useAI } from '../lib/ai/AIContext';

export default function Assistant() {
  const { messages, sendMessage } = useAI();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;
    await sendMessage(input);
    setInput('');
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-primary p-4 rounded-full shadow-lg z-50"
        onClick={() => setOpen(prev => !prev)}
      >
        🤖
      </button>
      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-background border border-gray-700 flex flex-col rounded-md shadow-lg z-50">
          <div className="flex justify-between items-center bg-secondary p-2 rounded-t-md">
            <span className="text-white">Assistant</span>
            <button onClick={() => setOpen(false)} className="text-white">✕</button>
          </div>
          <div className="flex-1 p-2 overflow-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={\`inline-block px-3 py-1 rounded-md $\{m.role === 'user' ? 'bg-primary text-black' : 'bg-gray-700 text-white'\}\`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-2 border-t border-gray-700 flex">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 bg-gray-800 text-white rounded-l-md focus:outline-none"
            />
            <button type="submit" className="bg-primary p-2 rounded-r-md">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
