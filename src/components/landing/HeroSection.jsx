import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const appSteps = [
    {
      number: 1,
      title: "Escolha no cardápio",
      description: "Navegue pelos produtos",
      image: "🍔"
    },
    {
      number: 2,
      title: "Adicione ao carrinho",
      description: "Monte seu pedido",
      image: "🛒"
    },
    {
      number: 3,
      title: "Informe a forma de pagamento",
      description: "Finalize seu pedido",
      image: "💳"
    },
    {
      number: 4,
      title: "Confirme pelo WhatsApp",
      description: "Você recebe o pedido completo e agiliza a preparação e entrega.",
      image: "📲"
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Peça seu delivery em poucos cliques!
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Facilidade, rapidez e os melhores{" "}
            <span className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"> 
              lanches
            </span>{" "}
            no conforto da sua casa!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Seu pedido, sem complicação. Com o La Commande você faz seu pedido rápido e fácil.
          </motion.p>
        </div>

        {/* App Flow Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La Commande</h2>
            <p className="text-primary-foreground/80">Seu pedido, sem complicação</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {appSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-primary-foreground/20 rounded-2xl p-6 mb-4 backdrop-blur-sm">
                  <div className="text-6xl mb-4">{step.image}</div>
                  <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-primary-foreground/80">{step.description}</p>
                
                {index < appSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-6 h-6 text-primary-foreground/60" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => window.open('https://eduardoschoepf.github.io/la-commande-delivery', '_blank')}
            >
              Teste Grátis
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;