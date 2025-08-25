import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contato" className="py-24 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em contato Agora!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Comece a usar o La Commande hoje mesmo e transforme a experiência de pedidos do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-lg px-8 py-6"
                onClick={() => window.open(`https://wa.me/5551997041908?text=Ol%C3%A1%2C+tenho+interesse+e+gostaria+ostaria+de+obter+mais+informações.`, '_blank')}
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                WhatsApp
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-primary-foreground/20"
          >
            <p className="text-primary-foreground/70 text-sm">
              Junte-se a milhares de estabelecimentos que já confiam no La Commande
            </p>
            <div className="flex justify-center items-center mt-6 space-x-8 text-primary-foreground/60">
              <span className="text-2xl font-bold">1000+</span>
              <span className="text-sm">Restaurantes</span>
              <span className="text-2xl font-bold">50k+</span>
              <span className="text-sm">Pedidos</span>
              <span className="text-2xl font-bold">4.9★</span>
              <span className="text-sm">Avaliação</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;