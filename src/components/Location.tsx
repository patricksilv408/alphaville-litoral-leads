import { MapPin, Clock, Navigation, Plane } from "lucide-react";

const Location = () => {
  const locations = [
    {
      icon: Navigation,
      title: "Salvador",
      distance: "20 km",
      time: "25 min",
      description: "Capital da Bahia"
    },
    {
      icon: Navigation,
      title: "Praia de Jauá",
      distance: "5 km",
      time: "8 min", 
      description: "Belas praias do litoral"
    },
    {
      icon: Plane,
      title: "Aeroporto de Salvador",
      distance: "35 km",
      time: "40 min",
      description: "Acesso internacional"
    },
    {
      icon: MapPin,
      title: "Camaçari Centro",
      distance: "15 km",
      time: "20 min",
      description: "Centro da cidade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium mb-6">
            Localização Privilegiada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estrategicamente localizado em Abrantes, Camaçari, com acesso direto pela Estrada do Coco (BA-099). 
            Conecte-se facilmente a Salvador e às principais praias da região.
          </p>
        </div>
        
        {/* Main Location Info */}
        <div className="bg-card rounded-2xl p-8 shadow-premium mb-12 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <span className="text-lg font-semibold text-premium">Endereço</span>
              </div>
              <h3 className="text-2xl font-bold text-premium mb-2">
                Alphaville Litoral Norte 4
              </h3>
              <p className="text-muted-foreground mb-4">
                Abrantes, Camaçari - BA<br />
                Estrada do Coco (BA-099)
              </p>
              <div className="flex items-center text-accent">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-medium">Acesso rápido a Salvador e praias</span>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-sand" />
              <h4 className="text-xl font-bold mb-2">Localização Estratégica</h4>
              <p className="text-white/90">
                No coração do crescimento urbano da região metropolitana de Salvador
              </p>
            </div>
          </div>
        </div>
        
        {/* Distance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((location, index) => {
            const IconComponent = location.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300 border border-border hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="bg-gradient-primary p-4 rounded-lg mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-premium mb-2">
                    {location.title}
                  </h3>
                  
                  <div className="flex justify-center items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-accent">
                      {location.distance}
                    </span>
                    <span className="text-muted-foreground">
                      {location.time}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {location.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Benefits Section */}
        <div className="bg-premium rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Vantagens da Localização
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🏖️</div>
              <h4 className="font-bold mb-2">Praias Próximas</h4>
              <p className="text-white/90 text-sm">
                Acesso fácil às melhores praias do Litoral Norte
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🏙️</div>
              <h4 className="font-bold mb-2">Cidade Grande</h4>
              <p className="text-white/90 text-sm">
                Próximo a Salvador com toda comodidade urbana
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🌿</div>
              <h4 className="font-bold mb-2">Natureza Preservada</h4>
              <p className="text-white/90 text-sm">
                Ambiente natural com infraestrutura completa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;