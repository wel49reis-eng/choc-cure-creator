interface PriceDisplayProps {
  originalPrice: string;
  currentPrice: string;
  className?: string;
}

export const PriceDisplay = ({ originalPrice, currentPrice, className = "" }: PriceDisplayProps) => {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <div className="text-muted-foreground line-through text-lg mb-2">
        De {originalPrice}
      </div>
      <div className="text-3xl font-bold text-accent animate-glow">
        Hoje apenas {currentPrice}
      </div>
    </div>
  );
};