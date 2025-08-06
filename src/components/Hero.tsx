import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, TreePine } from "lucide-react";
import heroImage from "@/assets/alphaville-hero.jpg";

const Hero = () => {
  const whatsappNumber = "5571999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Tenho interesse no Alphaville Litoral Norte 4. Gostaria de mais informações.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{ backgroundImage: `url(/lovable-uploads/e4b27dd0-fef9-4d77-9619-4cee4f6ed457.png)` }}
        />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-pulse"
          style={{ 
            backgroundImage: `url(/lovable-uploads/5d899d07-420b-47f9-9f76-da942587384f.png)`,
            animationDelay: '4s',
            animationDuration: '8s'
          }}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-premium/80 via-primary/60 to-accent/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <TreePine className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Novo Lançamento Alphaville</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Seu Refúgio de
            <span className="block bg-gradient-to-r from-sand to-accent bg-clip-text text-transparent">
              Exclusividade
            </span>
            na Natureza
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Lotes residenciais de 360m² a 798m² no mais novo empreendimento Alphaville
          </p>
          
          {/* Location highlight */}
          <div className="flex items-center justify-center gap-2 mb-8 text-lg">
            <MapPin className="h-5 w-5 text-accent" />
            <span>Abrantes, Camaçari - BA | 20km de Salvador | 5km da Praia de Jauá</span>
          </div>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">205</div>
              <div className="text-sm">Lotes Residenciais</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-sand mb-2">70.970m²</div>
              <div className="text-sm">Áreas Verdes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-primary mb-2">15%</div>
              <div className="text-sm">Entrada + 48x</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Agora no WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Saber Mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;