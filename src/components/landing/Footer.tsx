import { Smartphone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">La Commande</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A plataforma que revoluciona a experiência de delivery com tecnologia simples e eficiente.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>© 2024 La Commande. Todos os direitos reservados.</p>
              <p className="flex items-center mt-2">
                Feito com <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> para facilitar sua vida.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;