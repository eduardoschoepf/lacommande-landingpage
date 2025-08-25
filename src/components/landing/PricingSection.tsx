import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      name: "Plano Mensal",
      price: "R$ 9,99",
      period: "por mês",
      description: "Perfeito para começar",
      features: [
        "Acesso completo à plataforma",
        "Suporte via WhatsApp",
        "Atualizações automáticas"
      ],
      ctaText: "Assinar Mensal",
      popular: false
    },
    {
      name: "Plano Anual",
      price: "R$ 99,90",
      period: "por ano",
      description: "Economize R$ 19,98!",
      features: [
        "Todos os benefícios do plano mensal",
        "Prioridade no suporte",
        "2 meses grátis",
        "Desconto especial em upgrades"
      ],
      ctaText: "Assinar Anual",
      popular: true
    }
  ];

  return (
    <section ref={ref} id="planos" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos para todos os gostos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano que melhor atende seu negócio e comece a vender mais!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-glow'
              }`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary shadow-primary' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => window.open(`https://wa.me/5551997041908?text=Ol%C3%A1%2C+tenho+interesse+no+plano+Mensal+de+${plan.price}+do+La+Commande.`, '_blank')}
                  >
                    {plan.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground inline-block">
            <p className="text-lg font-semibold mb-2">🎁 Oferta Especial</p>
            <p>Primeiro pedido com <strong>10% OFF!</strong></p>
            <p>Use o cupom: <code className="bg-primary-foreground/20 px-2 py-1 rounded">LACOMMANDE10</code></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;