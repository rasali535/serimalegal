import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Search } from 'lucide-react';

type Message = {
  role: 'user' | 'model';
  content: string;
};

const KNOWLEDGE_BASE = [
  {
    keywords: ['conveyancing', 'property', 'deed', 'plot', 'house'],
    answer: "Our Conveyancing & Property department handles all aspects of property law in Botswana. We assist with property transfers, bonds, leases, and navigating the Deeds Registry. For specific advice, please book a consultation."
  },
  {
    keywords: ['commercial', 'corporate', 'business', 'company', 'contract'],
    answer: "Serima Legal provides comprehensive Corporate & Commercial services, including company formation, contract drafting, and regulatory compliance. We help businesses operate legally and efficiently within Botswana's framework."
  },
  {
    keywords: ['litigation', 'court', 'sue', 'lawsuit'],
    answer: "We handle Civil Litigation in both the Magistrates Court and High Court of Botswana. Our team is experienced in debt recovery, family law disputes, and general civil claims."
  },
  {
    keywords: ['labour', 'employment', 'employer', 'dismissed', 'wages'],
    answer: "Under the Botswana Employment Act, we assist clients with unfair dismissal cases, wage disputes, and labour relations. We can represent you at the Labour Office or Industrial Court."
  },
  {
    keywords: ['contact', 'address', 'location', 'where'],
    answer: "We are located at Plot 23891, Sesase Road, Gaborone, Botswana. You can reach us at info@serimalegal.co.bw or +267 390 0000. You can also use our contact page to book an appointment."
  },
  {
    keywords: ['fee', 'cost', 'charge', 'expensive'],
    answer: "Our fees vary depending on the complexity of the matter. We offer competitive rates and transparent billing. We recommend a consultation to discuss your specific needs and receive a fee estimate."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Welcome to Serima Legal Practice. I am here to help you navigate our services. What can I assist you with today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    // Simulated short delay
    setTimeout(() => {
      const lowerMsg = userMessage.toLowerCase();
      let bestAnswer = "I'm sorry, I don't have information on that specific topic. Would you like to reach our office directly or book a consultation via our contact page (/contact)?";

      for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(k => lowerMsg.includes(k))) {
          bestAnswer = entry.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'model', content: bestAnswer }]);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "Property Law",
    "Labour Law",
    "Company Registration",
    "Contact Details"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-navy text-gold p-4 rounded-full shadow-2xl hover:bg-navy-light transition-colors z-40 flex items-center justify-center border-2 border-gold"
          aria-label="Open information assistant"
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
              <img src="/logo_white.png" alt="" className="h-6 w-auto" />
              <span className="font-serif font-bold text-sm">Knowledge Base Assistant</span>
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
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Links */}
          <div className="px-4 py-2 border-t border-gray-100 flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="text-[10px] bg-gray-200 hover:bg-gray-300 text-charcoal px-2 py-1 rounded transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-end space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-grow resize-none border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy min-h-[40px] max-h-[120px]"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-gold text-navy p-2 rounded-md hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="text-[10px] text-center text-gray-400 mt-2">
              Formal legal opinions require direct consultation.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
