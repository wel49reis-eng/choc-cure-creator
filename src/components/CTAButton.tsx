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
        w-full max-w-md mx-auto bg-primary text-primary-foreground 
        text-lg font-bold py-6 px-8 rounded-xl 
        shadow-neon hover:shadow-glow-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:brightness-110
        animate-neon-pulse
        ${className}
      `}
    >
      {children}
    </Button>
  );
};