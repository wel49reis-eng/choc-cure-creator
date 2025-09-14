import { CTAButton } from "./CTAButton";

interface CheckoutItem {
  title: string;
  isStrikethrough?: boolean;
}

interface CheckoutSectionProps {
  title: string;
  items: CheckoutItem[];
  price: string;
  buttonText: string;
  bgColor: string;
  headerColor: string;
  onCtaClick: () => void;
}

export const CheckoutSection = ({ 
  title, 
  items, 
  price, 
  buttonText, 
  bgColor, 
  headerColor,
  onCtaClick 
}: CheckoutSectionProps) => {
  return (
    <div className={`${bgColor} border-2 border-primary rounded-2xl p-6 shadow-neon-pink max-w-md mx-auto`}>
      <div className={`${headerColor} text-white text-center py-4 px-6 rounded-xl mb-6 font-bold text-xl`}>
        {title}
      </div>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`text-foreground text-sm leading-relaxed ${
              item.isStrikethrough ? 'line-through opacity-60' : ''
            }`}
          >
            ✅ {item.title}
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-primary mb-2">
          Apenas {price}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="line-through">R$199,90</span>
        </div>
      </div>

      <CTAButton onClick={onCtaClick}>
        {buttonText}
      </CTAButton>

      <div className="flex justify-center items-center gap-4 mt-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <span>Garantia 7 dias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <span>Acesso vitalício</span>
        </div>
      </div>
    </div>
  );
};