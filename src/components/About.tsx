import { CheckCircle, Zap, Target, Award } from "lucide-react";
import profilePhoto from "@/assets/elias-profile.jpg";

const About = () => {
  const features = [
    { icon: Zap, text: "Sites rápidos e otimizados" },
    { icon: Target, text: "Focados em conversão" },
    { icon: Award, text: "Design profissional" },
    { icon: CheckCircle, text: "Entrega no prazo" },
  ];

  return (
    <section id="sobre" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-card border border-border rounded-lg p-8 shadow-elegant flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  Olá! Eu sou o <span className="text-primary font-semibold">Elias</span>, especialista em 
                  desenvolvimento de sites <span className="text-primary">rápidos, bonitos e otimizados</span>. 
                  Com mais de 5 anos de experiência, já ajudei dezenas de empresas, influenciadores e negócios 
                  locais a estabelecerem uma presença digital forte e profissional.
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Meu foco é entregar <span className="text-primary font-semibold">resultados reais</span> através 
                  de sites que não apenas impressionam visualmente, mas também convertem visitantes em clientes.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <img 
                  src={profilePhoto} 
                  alt="Elias - Desenvolvedor Web" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-glow"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-secondary/50 rounded-lg p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant"
                  >
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
