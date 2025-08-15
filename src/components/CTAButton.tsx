import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTAButton = ({ children, className = "", onClick }: CTAButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`
        w-full max-w-lg mx-auto bg-primary text-primary-foreground 
        text-lg font-bold py-8 px-6 rounded-xl 
        shadow-neon hover:shadow-glow-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:brightness-110
        animate-neon-pulse
        min-h-[80px] leading-tight
        ${className}
      `}
    >
      {children}
    </Button>
  );
};