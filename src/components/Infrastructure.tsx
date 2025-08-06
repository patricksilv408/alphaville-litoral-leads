import { 
  Waves, 
  Dumbbell, 
  ChefHat, 
  Calendar,
  Baby,
  Bike,
  Zap,
  Car
} from "lucide-react";
import clubeImage from "@/assets/clube-lazer.jpg";

const Infrastructure = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Piscina",
      description: "Área aquática completa para toda família"
    },
    {
      icon: Dumbbell,
      title: "Academia",
      description: "Equipamentos modernos para seu bem-estar"
    },
    {
      icon: ChefHat,
      title: "Espaço Gourmet",
      description: "Local perfeito para encontros e celebrações"
    },
    {
      icon: Calendar,
      title: "Espaço Eventos",
      description: "Salão para festas e comemorações especiais"
    },
    {
      icon: Baby,
      title: "Playground Infantil e Baby",
      description: "Diversão garantida para crianças de todas as idades"
    },
    {
      icon: Bike,
      title: "Bicicletário",
      description: "Incentivo ao transporte sustentável"
    },
    {
      icon: Zap,
      title: "Estação de Recarga",
      description: "Para carros elétricos - futuro sustentável"
    },
    {
      icon: Car,
      title: "Estacionamento",
      description: "Vagas amplas e seguras para visitantes"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium mb-6">
            Infraestrutura e Lazer Completo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um clube exclusivo pensado para proporcionar momentos únicos de lazer, 
            esporte e convivência para toda sua família
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={clubeImage} 
                alt="Clube e área de lazer Alphaville Litoral Norte 4"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Clube Exclusivo</h3>
                <p className="text-white/90">Lazer e bem-estar para toda família</p>
              </div>
            </div>
          </div>
          
          {/* Amenities Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 border border-border hover:transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-premium mb-2 group-hover:text-primary transition-colors">
                          {amenity.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Features Bar */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Infraestrutura Completa</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/90">Drenagem</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Premium</div>
              <div className="text-sm text-white/90">Paisagismo</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm text-white/90">Segurança</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Eco</div>
              <div className="text-sm text-white/90">Sustentável</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;