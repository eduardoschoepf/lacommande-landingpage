import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Hamburger, ShoppingCart, Smartphone } from "lucide-react";

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: Hamburger,
      title: "1. O cliente escolhe os itens",
      description: "Navega pelo cardápio e monta seu pedido personalizado.",
      emoji: "🍔"
    },
    {
      icon: ShoppingCart,
      title: "2. Finaliza o pedido",
      description: "Informa endereço de entrega e indica qual será a forma de pagamento.",
      emoji: "🛒"
    },
    {
      icon: Smartphone,
      title: "3. Confirma no WhatsApp",
      description: "Você recebe o pedido completo com todos os itens, valor total e forma de pagamento escolhida, agilizando a preparação e entrega.",
      emoji: "📲"
    }
  ];

  return (
    <section ref={ref} id="como-funciona" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos simples, o cliente faz o pedido e você agiliza a preparação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <Card className="h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">{step.emoji}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-0 h-0 border-l-4 border-l-primary border-t-2 border-b-2 border-t-transparent border-b-transparent transform -translate-y-1/2"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;