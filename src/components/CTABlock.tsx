import { CTAButton } from "./CTAButton";
import { PriceDisplay } from "./PriceDisplay";

interface CTABlockProps {
  originalPrice?: string;
  currentPrice: string;
  buttonText: string;
  className?: string;
  onCtaClick?: () => void;
}

export const CTABlock = ({ 
  originalPrice = "R$199,90", 
  currentPrice, 
  buttonText, 
  className = "",
  onCtaClick
}: CTABlockProps) => {
  return (
    <div className={`bg-card border border-border rounded-2xl p-8 shadow-neon-pink max-w-md mx-auto ${className}`}>
      <PriceDisplay 
        originalPrice={originalPrice}
        currentPrice={currentPrice}
      />
      <CTAButton onClick={onCtaClick}>
        {buttonText}
      </CTAButton>
      <div className="flex justify-center items-center gap-4 mt-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
          <span>Garantia 7 dias</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
          <span>Acesso vitalício</span>
        </div>
      </div>
    </div>
  );
};