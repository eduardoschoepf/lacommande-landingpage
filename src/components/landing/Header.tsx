import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">La Commande</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              size="sm" 
              className="bg-gradient-primary shadow-primary"
              onClick={() => window.open('https://eduardoschoepf.github.io/la-commande', '_blank')}
            >
              Teste Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  size="sm" 
                  className="bg-gradient-primary"
                  onClick={() => window.open('https://eduardoschoepf.github.io/la-commande', '_blank')}
                >
                  Teste Grátis
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;