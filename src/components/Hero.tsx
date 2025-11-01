import { Button } from "@/components/ui/button";
import { Code, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-8 h-8 text-primary" />
            <span className="text-primary font-semibold tracking-wider">ELIAS SITES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Crio sites{" "}
            <span className="text-primary relative">
              modernos
              <Sparkles className="inline w-8 h-8 ml-2 animate-pulse" />
            </span>
            <br />
            e profissionais
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Com mais de <span className="text-primary font-semibold">5 anos de experiência</span> no mercado, 
            transformo ideias em sites que geram resultados reais para seu negócio.
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              Peça seu site agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
