import { CTABlock } from "@/components/CTABlock";
import { CTAButton } from "@/components/CTAButton";
import { Testimonial } from "@/components/Testimonial";
import { FAQItem } from "@/components/FAQItem";
import { CountdownTimer } from "@/components/CountdownTimer";
import { VSLSection } from "@/components/VSLSection";
import { CheckoutSection } from "@/components/CheckoutSection";

import heroImage from "@/assets/hero-chocolate.jpg";
import chocolateDessertsImage from "@/assets/chocolate-desserts.jpg";
import marinaAvatar from "@/assets/marina-avatar.jpg";
import anaPaulaAvatar from "@/assets/ana-paula-avatar.jpg";
import carlaAvatar from "@/assets/carla-avatar.jpg";
import robertaAvatar from "@/assets/roberta-avatar.jpg";
import fernandaAvatar from "@/assets/fernanda-avatar.jpg";
import julianaAvatar from "@/assets/juliana-avatar.jpg";
import guaranteeImage from "@/assets/guarantee-correct.png";
import benefit1Image from "@/assets/benefit-1-faceis-rapidos.jpg";
import benefit2Image from "@/assets/benefit-2-ingredientes-simples.jpg";
import benefit3Image from "@/assets/benefit-3-sem-gluten.jpg";
import benefit4Image from "@/assets/benefit-4-reducao-inchaco.jpg";
import benefit5Image from "@/assets/benefit-5-saciam-menos.jpg";
import benefit6Image from "@/assets/benefit-6-sabor-irresistivel.jpg";
import guaranteeSealImage from "@/assets/guarantee-seal-7days.jpg";
import securePurchaseImage from "@/assets/secure-purchase-lock.jpg";
import creditCardsImage from "@/assets/credit-cards-accepted.jpg";

export default function LandingPage() {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout-section');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBasicCheckout = () => {
    // Facebook Pixel - Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Cacau Sem Culpa Básico',
        value: 10.00,
        currency: 'BRL'
      });
    }
    
    // Redirect to payment
    window.open('https://pay.herospark.com/cacau-sem-culpa-460581', '_blank');
  };

  const handleCTAWithScroll = () => {
    // Facebook Pixel - Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Cacau Sem Culpa CTA',
        value: 10.00,
        currency: 'BRL'
      });
    }
    
    // Scroll to checkout
    scrollToCheckout();
  };

  const handlePremiumCheckout = () => {
    // Facebook Pixel - Lead event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Cacau Sem Culpa Premium',
        value: 19.90,
        currency: 'BRL'
      });
    }
    
    // Redirect to payment
    window.open('https://pay.herospark.com/cacau-sem-culpa-premium-460587', '_blank');
  };

  const premiumItems = [
    { title: "1º E-Book - Introdução ao Método" },
    { title: "BÔNUS: Manual Pessoal de Chocolate Saudável" },
    { title: "BÔNUS: Como Adoçar Doces Saudáveis" },
    { title: "BÔNUS: Mix de Farinha Sem Glúten - Doce que Faz Bem" },
    { title: "BÔNUS: Adoçantes Naturais para Adaptar as Receitas" },
    { title: "2º E-Book - 40 Receitas de Bolos sem Lactose, Glúten e Açúcar" },
    { title: "3º E-Book - O Chocolate 1% Cacau e o Controle de Apetite" },
    { title: "4º E-Book - O Segredo do Cacau: Como o Chocolate Ajuda a Queimar Gordura" },
    { title: "5º E-Book - Plano de 7 dias do Chocolate Emagrecedor" },
    { title: "6º E-Book - Choco Detox: Como Usar Chocolate para Desinflamar e Secar a Barriga" }
  ];

  const basicItems = [
    { title: "1º E-Book - Introdução ao Método" },
    { title: "BÔNUS: Manual Pessoal de Chocolate Saudável" },
    { title: "BÔNUS: Como Adoçar Doces Saudáveis" },
    { title: "BÔNUS: Mix de Farinha Sem Glúten - Doce que Faz Bem" },
    { title: "BÔNUS: Adoçantes Naturais para Adaptar as Receitas" },
    { title: "2º E-Book - 40 Receitas de Bolos sem Lactose, Glúten e Açúcar", isStrikethrough: true },
    { title: "3º E-Book - O Chocolate 1% Cacau e o Controle de Apetite", isStrikethrough: true },
    { title: "4º E-Book - O Segredo do Cacau: Como o Chocolate Ajuda a Queimar Gordura", isStrikethrough: true },
    { title: "5º E-Book - Plano de 7 dias do Chocolate Emagrecedor", isStrikethrough: true },
    { title: "6º E-Book - Choco Detox: Como Usar Chocolate para Desinflamar e Secar a Barriga", isStrikethrough: true }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CountdownTimer />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-2">
            <span className="text-primary animate-glow">Cacau Sem Culpa:</span><br/>
            O Método Para Emagrecer Comendo 
            <span className="text-secondary"> Doce Todos os Dias</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed px-2">
            Transforme sua paixão por chocolate em autocuidado — sem culpa e sem abrir mão do sabor.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            <span className="bg-primary/20 text-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-primary/30">
              Sem glúten
            </span>
            <span className="bg-secondary/20 text-secondary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-secondary/30">
              Sem lactose
            </span>
            <span className="bg-accent/20 text-accent px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-accent/30">
              Sem Açúcar
            </span>
          </div>

          <VSLSection onCtaClick={scrollToCheckout} />
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={chocolateDessertsImage} 
                alt="Nayara com chocolate saudável"
                className="rounded-2xl shadow-neon w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground px-2">
                Minha História de Transformação
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed px-2">
                <p className="text-sm sm:text-base">Eu também passei por isso. A frustração de amar chocolate, mas sentir culpa a cada mordida.</p>
                <p className="text-sm sm:text-base">Pré-diabetes, ganho de peso, a sensação de que estava perdendo o controle da minha saúde...</p>
                <p className="text-sm sm:text-base">Tentei dietas restritivas, cortar o chocolate completamente, mas nada funcionava a longo prazo.</p>
                <p className="text-primary font-semibold text-base sm:text-lg">
                  Mas eu descobri que o problema não era o chocolate… e sim a forma como ele era feito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-foreground px-2">
            O Segredo Que Me Permitiu Comer Chocolate 
            <span className="text-primary"> Todo Dia</span> e 
            <span className="text-secondary"> Melhorar Minha Saúde</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { text: "Fáceis e rápidos de preparar", image: benefit1Image },
              { text: "Ingredientes simples e acessíveis", image: benefit2Image },
              { text: "Sem glúten, leite, lácteos e lactose", image: benefit3Image },
              { text: "Auxiliam na redução do inchaço e inflamação", image: benefit4Image },
              { text: "Saciam com menos quantidade", image: benefit5Image },
              { text: "Sabor irresistível e autêntico", image: benefit6Image }
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-neon transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4">
                  <img 
                    src={benefit.image} 
                    alt={benefit.text}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-foreground text-center text-sm sm:text-base">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            O Que Minhas Alunas Dizem
          </h2>
          <p className="text-center text-accent text-xl font-semibold mb-12">
            +29.000 alunas em 60 países
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial 
              name="Marina S."
              text="Finalmente encontrei receitas que são gostosas DE VERDADE! Meu marido nem acredita que são saudáveis."
              location="São Paulo"
              avatar={marinaAvatar}
            />
            <Testimonial 
              name="Ana Paula"
              text="Diabética há 10 anos, nunca pensei que poderia comer chocolate sem medo. Obrigada por mudar minha vida!"
              location="Rio de Janeiro"
              avatar={anaPaulaAvatar}
            />
            <Testimonial 
              name="Carla M."
              text="Perdi 8kg em 3 meses comendo chocolate todo dia. Parece mentira, mas é real!"
              location="Minas Gerais"
              avatar={carlaAvatar}
            />
            <Testimonial 
              name="Roberta L."
              text="Minha filha celíaca finalmente pode comer chocolate igual aos amigos. Ela fica radiante!"
              location="Bahia"
              avatar={robertaAvatar}
            />
            <Testimonial 
              name="Fernanda"
              text="Sou nutricionista e recomendo essas receitas para todos os meus pacientes. Revolucionário!"
              location="Paraná"
              avatar={fernandaAvatar}
            />
            <Testimonial 
              name="Juliana R."
              text="Ingredientes que já tenho em casa e o resultado é melhor que da confeitaria. Incrível!"
              location="Santa Catarina"
              avatar={julianaAvatar}
            />
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            O Que Você Vai Aprender No 
            <span className="text-primary"> Cacau Sem Culpa</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-2">🍰 Bolo de Chocolate Perfeito</h3>
                <p className="text-muted-foreground">Fofinho, úmido e irresistível</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-secondary mb-2">🍫 Brownie Irresistível</h3>
                <p className="text-muted-foreground">Denso, cremoso e viciante</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-accent mb-2">🥧 Torta de Brownie dos Sonhos</h3>
                <p className="text-muted-foreground">Combinação perfeita de texturas</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-2">🍮 Mousse de Chocolate Aveludado</h3>
                <p className="text-muted-foreground">Cremoso e aerado</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-secondary mb-2">🧁 Petit Gateau com Coração Cremoso</h3>
                <p className="text-muted-foreground">O favorito das alunas</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <h3 className="text-xl font-bold text-accent mb-2">📋 Guias Completos</h3>
                <p className="text-muted-foreground">Lista de ingredientes e utensílios</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-xl p-6">
              <div className="text-4xl">📱</div>
              <div className="text-left">
                <h3 className="font-bold text-foreground">Acesso Vitalício</h3>
                <p className="text-muted-foreground">PC, tablet e celular</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer and Bonuses */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Além do Curso, Você Vai Receber 
            <span className="text-secondary"> 3 Bônus Exclusivos</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-neon-pink transition-all duration-300">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-primary mb-2">Manual Pessoal de Chocolates Saudáveis</h3>
              <p className="text-muted-foreground mb-4">Guia completo com dicas exclusivas</p>
              <div className="text-2xl font-bold text-accent">R$74</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-neon-pink transition-all duration-300">
              <div className="text-4xl mb-4">🍯</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Como Adoçar Doces Saudáveis</h3>
              <p className="text-muted-foreground mb-4">Alternativas naturais ao açúcar</p>
              <div className="text-2xl font-bold text-accent">R$53</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-neon-pink transition-all duration-300">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold text-accent mb-2">Mix de Farinha Sem Glúten Doce Que Faz Bem</h3>
              <p className="text-muted-foreground mb-4">Blend perfeito para suas receitas</p>
              <div className="text-2xl font-bold text-accent">R$97</div>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-muted-foreground mb-4">
              Valor total: <span className="line-through">R$199,90</span>
            </div>
          <CTABlock 
            currentPrice="R$10,00"
            buttonText="Quero meu Cacau"
            onCtaClick={handleCTAWithScroll}
          />
          </div>
        </div>
      </section>

      {/* Guarantee Section - Updated */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Garantia Incondicional de 
            <span className="text-primary"> 7 Dias</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experimente todas as receitas. Se não ficar completamente satisfeita, 
            devolvemos 100% do seu dinheiro sem perguntas e sem burocracia.
          </p>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout-section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground px-2">
            Escolha Sua Oferta Especial
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Basic Checkout - LEFT SIDE */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 border-4 border-blue-500 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl mb-6 sm:mb-8 font-bold text-lg sm:text-2xl shadow-lg">
                Cacau Sem Culpa
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : Introdução ao Método : Cacau Sem Culpa</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Receitas para Redução de Peso</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Dicas para Bolo de Chocolate Fit :</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>1. FARINHAS ALTERNATIVAS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>2. GORDURAS SAUDÁVEIS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>3. ADOÇANTES NATURAIS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>4. UMIDADE NATURAL</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium bg-green-100 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0 font-bold">✅</span>
                  <span className="font-bold text-green-700 dark:text-green-300">Garantia Incondicional de 7 Dias</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>BÔNUS: Manual Pessoal de Chocolate Saudável</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>BÔNUS: Como Adoçar Doces Saudáveis</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>BÔNUS: Mix de Farinha Sem Glúten - Doce que Faz Bem</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>BÔNUS: Adoçantes Naturais para Adaptar as Receitas</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>Guia : 40 Receitas de Bolos sem Lactose, Glúten e Açúcar</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>Guia : O Chocolate 1% Cacau e o Controle de Apetite</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>Guia : O Segredo do Cacau: Como o Chocolate Ajuda a Queimar Gordura</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>Guia : Plano de 7 dias do Chocolate Emagrecedor</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium line-through opacity-50">
                  <span className="text-red-500 text-lg sm:text-xl flex-shrink-0">❌</span>
                  <span>Guia : Choco Detox: Como Usar Chocolate para Desinflamar e Secar a Barriga</span>
                </div>
              </div>

              <div className="text-center mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">Apenas R$10,00</div>
                <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  <span className="line-through">R$199,90</span>
                </div>
              </div>

              <button 
                onClick={handleBasicCheckout}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Quero Esta Oferta!
              </button>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>

            {/* Premium Checkout - RIGHT SIDE */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 border-4 border-orange-500 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl mb-6 sm:mb-8 font-bold text-lg sm:text-2xl shadow-lg">
                Cacau Sem Culpa - Premium
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : Introdução ao Método : Cacau Sem Culpa</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Receitas para Redução de Peso</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Dicas para Bolo de Chocolate Fit :</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>1. FARINHAS ALTERNATIVAS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>2. GORDURAS SAUDÁVEIS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>3. ADOÇANTES NATURAIS</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium ml-4">
                  <span>4. UMIDADE NATURAL</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium bg-green-100 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-500">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0 font-bold">✅</span>
                  <span className="font-bold text-green-700 dark:text-green-300">Garantia Incondicional de 7 Dias</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>BÔNUS: Manual Pessoal de Chocolate Saudável</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>BÔNUS: Como Adoçar Doces Saudáveis</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>BÔNUS: Mix de Farinha Sem Glúten - Doce que Faz Bem</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>BÔNUS: Adoçantes Naturais para Adaptar as Receitas</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : 40 Receitas de Bolos sem Lactose, Glúten e Açúcar</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : O Chocolate 1% Cacau e o Controle de Apetite</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : O Segredo do Cacau: Como o Chocolate Ajuda a Queimar Gordura</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : Plano de 7 dias do Chocolate Emagrecedor</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base font-medium">
                  <span className="text-green-500 text-lg sm:text-xl flex-shrink-0">✅</span>
                  <span>Guia : Choco Detox: Como Usar Chocolate para Desinflamar e Secar a Barriga</span>
                </div>
              </div>

              <div className="text-center mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2 sm:mb-3">Apenas R$27,90</div>
                <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  <span className="line-through">R$499,00</span>
                </div>
              </div>

              <button 
                onClick={handlePremiumCheckout}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Quero o Premium Agora!
              </button>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Sua Compra é 100% Segura e Garantida
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* 7 Days Guarantee */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto">
                <img 
                  src={guaranteeSealImage} 
                  alt="Garantia incondicional de 7 dias" 
                  className="w-full h-full object-contain rounded-full shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                  Garantia de 7 Dias
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Se não ficar satisfeita, devolvemos 100% do seu dinheiro
                </p>
              </div>
            </div>

            {/* Secure Purchase */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto">
                <img 
                  src={securePurchaseImage} 
                  alt="Compra segura e protegida" 
                  className="w-full h-full object-contain shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Compra Segura
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ambiente totalmente protegido com certificado de segurança
                </p>
              </div>
            </div>

            {/* Credit Cards Accepted */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-24 md:w-40 md:h-32 mx-auto">
                <img 
                  src={creditCardsImage} 
                  alt="Aceitamos diversos cartões de crédito" 
                  className="w-full h-full object-contain shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-2">
                  Formas de Pagamento
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Aceitamos os principais cartões de crédito do mercado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="As receitas são realmente gostosas ou têm gosto de saudável?"
              answer="Essa é a pergunta que mais recebo! As receitas são DELICIOSAS. Tanto que muitas alunas servem para a família sem contar que são saudáveis, e todos elogiam o sabor. O segredo está na combinação perfeita dos ingredientes."
            />
            <FAQItem 
              question="Não tenho habilidade na cozinha, vou conseguir?"
              answer="Absolutamente SIM! As receitas foram desenvolvidas para iniciantes. Cada passo é explicado de forma simples e clara, com dicas para não errar. Você vai se surpreender com sua capacidade!"
            />
            <FAQItem 
              question="Os ingredientes são caros ou difíceis de encontrar?"
              answer="Todos os ingredientes são fáceis de encontrar em qualquer supermercado ou loja de produtos naturais. Priorizei receitas com ingredientes acessíveis e que você provavelmente já tem em casa."
            />
            <FAQItem 
              question="Sou diabética, posso fazer adaptações?"
              answer="Sim! Todas as receitas são desenvolvidas pensando em pessoas com restrições. Além disso, você ganha o bônus sobre adoçantes naturais para fazer as adaptações perfeitas para seu caso."
            />
            <FAQItem 
              question="Por quanto tempo terei acesso?"
              answer="O acesso é VITALÍCIO! Você paga uma vez e tem acesso para sempre, podendo assistir quantas vezes quiser, quando quiser, em qualquer dispositivo."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Está Pronta Para Comer Chocolate 
            <span className="text-primary"> Sem Culpa?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Oferta especial de R$10,00 — só hoje!
          </p>
          
          <CTABlock 
            currentPrice="R$10,00"
            buttonText="Sim ! Eu Quero Chocolate"
            className="animate-neon-pulse [&_.cta-button]:max-w-lg"
            onCtaClick={handleCTAWithScroll}
          />
          
          <div className="mt-8 flex justify-center items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              🔒 Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-2">
              ✅ Garantia de 7 dias
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Cacau Sem Culpa</h3>
          <p className="text-muted-foreground mb-6">by Nayara Reis</p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              YouTube
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>© 2024 Cacau Sem Culpa. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}