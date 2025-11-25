import React, { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";

const AIGuidance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi there! I'm your STEM Guide. How can I help you explore your future today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Mock response
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: 'That\'s a great question! Based on your interest, I\'d recommend checking out the "Explore Careers" page or trying the "Build a Virtual Bridge" activity.',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-surface rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col mb-4 animate-fade-in-up">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold">STEM Guide AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.type === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-white text-text border border-gray-100 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 bg-surface border-t border-gray-100 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-grow px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-full hover:bg-primary-hover transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-hover transition-transform hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-6 h-6" style={{ color: "#646cff" }} />
        ) : (
          <MessageSquare className="w-6 h-6" style={{ color: "#646cff" }} />
        )}
      </button>
    </div>
  );
};

export default AIGuidance;
