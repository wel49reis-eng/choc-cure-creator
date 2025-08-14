import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 bg-card hover:bg-muted transition-colors duration-200 flex justify-between items-center"
      >
        <h3 className="font-semibold text-foreground pr-4">{question}</h3>
        <div className={`text-accent text-2xl transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 bg-card">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};