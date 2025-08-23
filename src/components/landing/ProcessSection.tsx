import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Smartphone, Bike } from "lucide-react";

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha seus itens",
      description: "Navegue pelo cardápio e monte seu pedido.",
      emoji: "🛒"
    },
    {
      icon: Smartphone,
      title: "2. Finalize o pedido",
      description: "Informe seu endereço e escolha a forma de pagamento.",
      emoji: "📲"
    },
    {
      icon: Bike,
      title: "3. Aguarde a entrega",
      description: "Receba em casa com agilidade e segurança.",
      emoji: "🚴‍♂️"
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
            Em apenas 3 passos simples, você tem seu pedido na porta de casa.
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-primary">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
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