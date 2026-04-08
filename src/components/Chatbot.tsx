import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  role: 'user' | 'model';
  content: string;
};

const SYSTEM_PROMPT = `You are the Serima Legal Assistant, a sophisticated AI agent for Serima Legal Practice. Your goal is to provide general information about the firm's services and basic legal concepts in Botswana.

Guidelines:
Identity: Always identify as an AI assistant for Serima Legal Practice.
Context: Use the knowledge base provided (Botswana Employment Act, Deeds Registry procedures, and firm service descriptions).
Disclaimer: You must include a disclaimer if asked for specific legal advice: 'I am an AI assistant and cannot provide binding legal advice. For a formal legal opinion, please schedule a consultation with our attorneys.'
Lead Gen: If a user describes a legal problem (e.g., 'I haven't been paid by my employer'), provide a brief overview of the process in Botswana and then encourage them to 'Book a Consultation' via the contact form link (/contact).
Tone: Formal, empathetic, and professional.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Welcome to Serima Legal Practice. I am the Serima Legal Assistant. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Format history for Gemini
      const history = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.3,
        }
      });

      const text = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { role: 'model', content: 'I apologize, but I am currently experiencing technical difficulties. Please try again later or contact our office directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-navy text-gold p-4 rounded-full shadow-2xl hover:bg-navy-light transition-colors z-40 flex items-center justify-center border-2 border-gold"
          aria-label="Open legal assistant chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden" style={{ height: '500px', maxHeight: '80vh' }}>
          {/* Header */}
          <div className="bg-navy text-white p-4 flex justify-between items-center border-b-2 border-gold">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-gold" />
              <span className="font-serif font-bold">Serima Legal Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50 flex flex-col space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[85%] rounded-lg p-3 ${
                  msg.role === 'user' 
                    ? 'bg-navy text-white self-end rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-800 self-start rounded-tl-none shadow-sm'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-white border border-gray-200 text-gray-800 self-start rounded-lg rounded-tl-none shadow-sm p-3 max-w-[85%]">
                <Loader2 className="h-5 w-5 animate-spin text-navy" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-end space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a legal question..."
                className="flex-grow resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy min-h-[40px] max-h-[120px]"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gold text-navy p-2 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="text-[10px] text-center text-gray-400 mt-2">
              AI Assistant. Cannot provide binding legal advice.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
