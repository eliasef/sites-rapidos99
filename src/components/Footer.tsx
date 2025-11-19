import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider">SITES RÁPIDOS 99</span>
          </div>
          <p className="text-muted-foreground text-center">
            © 2025 Sites Rápidos 99 - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
