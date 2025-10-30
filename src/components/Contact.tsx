import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="text-primary">Conversar?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Está pronto para transformar seu negócio com um site profissional? 
              Entre em contato comigo pelo WhatsApp e vamos discutir seu projeto!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <a 
                href="https://w.app/ij0tah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Fale comigo no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <a 
                href="https://www.instagram.com/elias.sites/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Siga no Instagram
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Respondo rapidamente e estou sempre disponível para discutir novos projetos!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
