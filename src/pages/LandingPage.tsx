import { CTABlock } from "@/components/CTABlock";
import { Testimonial } from "@/components/Testimonial";
import { FAQItem } from "@/components/FAQItem";
import { BackgroundRemovalTool } from "@/components/BackgroundRemovalTool";
import heroImage from "@/assets/hero-chocolate.jpg";
import chocolateDessertsImage from "@/assets/chocolate-desserts.jpg";
import marinaAvatar from "@/assets/marina-avatar.jpg";
import anaPaulaAvatar from "@/assets/ana-paula-avatar.jpg";
import carlaAvatar from "@/assets/carla-avatar.jpg";
import robertaAvatar from "@/assets/roberta-avatar.jpg";
import fernandaAvatar from "@/assets/fernanda-avatar.jpg";
import julianaAvatar from "@/assets/juliana-avatar.jpg";
import guaranteeImage from "@/assets/guarantee-original.png";
import benefit1Image from "@/assets/benefit-1-faceis-rapidos.jpg";
import benefit2Image from "@/assets/benefit-2-ingredientes-simples.jpg";
import benefit3Image from "@/assets/benefit-3-sem-gluten.jpg";
import benefit4Image from "@/assets/benefit-4-reducao-inchaco.jpg";
import benefit5Image from "@/assets/benefit-5-saciam-menos.jpg";
import benefit6Image from "@/assets/benefit-6-sabor-irresistivel.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundRemovalTool />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            O Método Para Comer Doces de Chocolate 
            <span className="text-primary animate-glow"> Todos os Dias</span>
            … e Sentir Seu Corpo 
            <span className="text-secondary"> Agradecer!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transforme sua paixão por chocolate em autocuidado — sem culpa e sem abrir mão do sabor.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/30">
              Sem glúten
            </span>
            <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/30">
              Sem lactose
            </span>
            <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
              Sem açúcar refinado
            </span>
          </div>

          <CTABlock 
            currentPrice="R$37"
            buttonText="Quero meu Cacau Sem Culpa agora"
            className="animate-float"
          />
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={chocolateDessertsImage} 
                alt="Nayara com chocolate saudável"
                className="rounded-2xl shadow-neon w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Minha História de Transformação
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Eu também passei por isso. A frustração de amar chocolate, mas sentir culpa a cada mordida.</p>
                <p>Pré-diabetes, ganho de peso, a sensação de que estava perdendo o controle da minha saúde...</p>
                <p>Tentei dietas restritivas, cortar o chocolate completamente, mas nada funcionava a longo prazo.</p>
                <p className="text-primary font-semibold text-lg">
                  Mas eu descobri que o problema não era o chocolate… e sim a forma como ele era feito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            O Segredo Que Me Permitiu Comer Chocolate 
            <span className="text-primary"> Todo Dia</span> e 
            <span className="text-secondary"> Melhorar Minha Saúde</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { text: "Fáceis e rápidos de preparar", image: benefit1Image },
              { text: "Ingredientes simples e acessíveis", image: benefit2Image },
              { text: "Sem glúten, leite, lácteos e lactose", image: benefit3Image },
              { text: "Auxiliam na redução do inchaço e inflamação", image: benefit4Image },
              { text: "Saciam com menos quantidade", image: benefit5Image },
              { text: "Sabor irresistível e autêntico", image: benefit6Image }
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-neon transition-all duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={benefit.image} 
                    alt={benefit.text}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-medium text-foreground text-center">{benefit.text}</p>
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
            +14.000 alunas em 55 países
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
              Valor total: <span className="line-through">R$471,00</span>
            </div>
            <CTABlock 
              currentPrice="R$37"
              buttonText="Quero meu Cacau Sem Culpa agora"
            />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <img 
            src={guaranteeImage} 
            alt="Garantia de 7 dias" 
            className="w-24 h-24 mx-auto mb-6"
          />
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
            Oferta especial de R$37 — só hoje!
          </p>
          
          <CTABlock 
            currentPrice="R$37"
            buttonText="SIM! Quero Transformar Minha Relação com o Chocolate"
            className="animate-neon-pulse"
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