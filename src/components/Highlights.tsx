import { Shield, Leaf, Car, Home, Trees, Waves } from "lucide-react";

const Highlights = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Portaria com controle de acesso e sistema de segurança 24h"
    },
    {
      icon: Trees,
      title: "130.319m² de Verde",
      description: "Áreas verdes preservadas + APP para máximo contato com a natureza"
    },
    {
      icon: Waves,
      title: "5km das Praias",
      description: "Proximidade privilegiada com as belas praias de Jauá e região"
    },
    {
      icon: Home,
      title: "Clube Exclusivo",
      description: "Piscina, academia, espaço gourmet e muito mais para sua família"
    },
    {
      icon: Leaf,
      title: "100% Sustentável",
      description: "Reuso de águas pluviais, painéis solares e gestão ambiental"
    },
    {
      icon: Car,
      title: "Acesso Fácil",
      description: "Localizado na Estrada do Coco (BA-099), a 20km de Salvador"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium mb-6">
            Destaques do Empreendimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra por que o Alphaville Litoral Norte 4 é o lugar perfeito para viver 
            com qualidade, segurança e em harmonia com a natureza
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-premium transition-all duration-300 hover:transform hover:scale-105 border border-border"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-primary p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-premium">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;