import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Eduardo S.",
      avatar: "ES",
      rating: 5,
      comment: "Nunca foi tão fácil pedir meu X-CARNE favorito! A plataforma é super intuitiva."
    },
    {
      name: "Maria Silva",
      avatar: "MS", 
      rating: 5,
      comment: "Entrega super rápida e o acompanhamento em tempo real é perfeito!"
    },
    {
      name: "João Santos",
      avatar: "JS",
      rating: 5,
      comment: "Adoro a variedade do cardápio e a facilidade no pagamento. Recomendo!"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de clientes já confiam no La Commande para suas refeições.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </blockquote>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Cliente verificado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;