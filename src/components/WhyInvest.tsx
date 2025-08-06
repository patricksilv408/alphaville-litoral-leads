import { TrendingUp, Award, Heart, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyInvest = () => {
  const reasons = [
    {
      icon: Award,
      title: "Marca Alphaville",
      description: "Mais de 40 anos de tradição em empreendimentos de alto padrão e valorização garantida",
      stats: "40+ anos de mercado"
    },
    {
      icon: TrendingUp,
      title: "Valorização Imobiliária",
      description: "Localização estratégica em região de grande crescimento e desenvolvimento",
      stats: "Alta valorização"
    },
    {
      icon: Heart,
      title: "Qualidade de Vida",
      description: "Viva em harmonia com a natureza, próximo às praias e com toda infraestrutura",
      stats: "Bem-estar total"
    },
    {
      icon: Building2,
      title: "Infraestrutura Completa",
      description: "Clube, segurança, sustentabilidade e paisagismo exclusivo da Alphaville",
      stats: "Tudo incluso"
    }
  ];

  const whatsappNumber = "5571992117523";
  const whatsappMessage = "Olá, quero saber mais sobre o Alphaville Litoral Norte 4";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-premium text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que Investir Aqui?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Mais que um investimento, é uma escolha de estilo de vida premium 
            com a garantia e tradição da marca Alphaville
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-lg mx-auto mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/80 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  <div className="bg-accent/20 rounded-lg py-2 px-4 text-accent font-semibold text-sm">
                    {reason.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seja Parte desta Oportunidade Única
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Garante já seu lote no mais novo empreendimento Alphaville da Bahia
          </p>
          <Button 
            variant="whatsapp" 
            size="lg"
            onClick={handleWhatsAppClick}
            className="text-lg px-10 py-4"
          >
            Quero Investir Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;