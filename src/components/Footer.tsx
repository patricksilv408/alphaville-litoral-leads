import { Phone, MessageCircle, Globe, MapPin, FileText, Shield } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5571999999999";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre o Alphaville Litoral Norte 4";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-premium text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Alphaville Litoral Norte 4</h3>
              <p className="text-white/80">
                Seu refúgio de exclusividade na natureza. Lotes residenciais de alto padrão 
                em Abrantes, Camaçari - BA.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-bold mb-3">Localização</h4>
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 text-accent mt-0.5" />
                <div>
                  <p>Abrantes, Camaçari - BA</p>
                  <p className="text-white/80 text-sm">Estrada do Coco (BA-099)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contatos</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <div>
                  <p className="font-medium">0800 015 1963</p>
                  <p className="text-white/80 text-sm">Ligação gratuita</p>
                </div>
              </div>
              
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center text-left hover:text-green-400 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-3 text-green-400" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-white/80 text-sm">Atendimento online</p>
                </div>
              </button>
              
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-accent" />
                <div>
                  <a 
                    href="https://www.alphaville.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent transition-colors"
                  >
                    www.alphaville.com.br
                  </a>
                  <p className="text-white/80 text-sm">Site oficial</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Legal Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Informações Legais</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start">
                <FileText className="h-4 w-4 mr-2 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-white">Registro de Imóvel</p>
                  <p>Matrícula nº 42.810 - R.02</p>
                  <p>1º CRI Camaçari</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-4 w-4 mr-2 text-accent mt-0.5" />
                <div>
                  <p className="font-medium text-white">Aprovação Municipal</p>
                  <p>Decreto nº 8108/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Keywords */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center text-white/60 text-sm">
            <p className="mb-2">
              <strong>Encontre-nos por:</strong> Lotes Alphaville Camaçari • Alphaville Litoral Norte 4 • 
              Terrenos perto de Salvador • Lotes em Abrantes BA • Comprar terreno Alphaville Bahia
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Alphaville Litoral Norte 4. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                <span className="text-accent font-bold text-lg">ALPHAVILLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;