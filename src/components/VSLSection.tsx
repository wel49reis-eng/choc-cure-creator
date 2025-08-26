import { CTAButton } from "./CTAButton";

interface VSLSectionProps {
  onCtaClick: () => void;
}

export const VSLSection = ({ onCtaClick }: VSLSectionProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* VSL Video */}
      <div className="relative w-full max-w-3xl mx-auto mb-8">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-neon">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aXwIGan9yEc?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Cacau Sem Culpa - VSL"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* CTA Button below video */}
      <div className="text-center mb-8">
        <div className="inline-block bg-card border border-border rounded-2xl p-6 shadow-neon-pink">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-muted-foreground mb-2">
              De: <span className="line-through">R$471,00</span>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">
              Por apenas R$19,90
            </div>
            <div className="text-sm text-accent">
              🔥 Oferta especial por tempo limitado!
            </div>
          </div>
          
          <CTAButton onClick={() => {
            // Facebook Pixel tracking
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('track', 'Lead', {
                content_name: 'Cacau Sem Culpa VSL',
                value: 19.90,
                currency: 'BRL'
              });
            }
            onCtaClick();
          }}>
            Quero meu Cacau agora
          </CTAButton>
          
          <div className="flex justify-center items-center gap-4 mt-4 text-sm text-muted-foreground">
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
      </div>
    </div>
  );
};