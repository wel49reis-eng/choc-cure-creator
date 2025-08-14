import testimonialAvatar from '@/assets/testimonial-avatar.jpg';

interface TestimonialProps {
  name: string;
  text: string;
  location?: string;
}

export const Testimonial = ({ name, text, location }: TestimonialProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-neon transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img src={testimonialAvatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-foreground">{name}</h4>
            {location && (
              <span className="text-sm text-muted-foreground">• {location}</span>
            )}
          </div>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
          <div className="flex text-accent mt-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};