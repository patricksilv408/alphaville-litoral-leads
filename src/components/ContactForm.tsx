import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappNumber = "5571992117523";
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      
      // Send to WhatsApp
      const message = `Olá! Tenho interesse no Alphaville Litoral Norte 4.

Meus dados:
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Gostaria de receber mais informações.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '' });
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const message = "Olá! Tenho interesse no Alphaville Litoral Norte 4. Gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="formulario" className="py-20 bg-premium relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Garanta Seu Lote Agora
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Deixe seus dados e receba informações exclusivas sobre preços, 
            condições especiais e disponibilidade dos lotes.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Receba Informações Exclusivas
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Nome Completo *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-12 bg-white/90 border-white/30 text-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    E-mail *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-12 bg-white/90 border-white/30 text-foreground"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Telefone/WhatsApp *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-12 bg-white/90 border-white/30 text-foreground"
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Quero Saber Mais
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-white/70 text-sm mb-4">
                  Ou fale diretamente conosco:
                </p>
                <Button
                  variant="whatsapp"
                  onClick={handleWhatsAppDirect}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp Agora
                </Button>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-8">
                Por que Falar Conosco?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-lg mr-4 flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Atendimento Especializado</h4>
                    <p className="text-white/90">
                      Nossa equipe conhece cada detalhe do empreendimento e te orienta na melhor escolha.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary p-3 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Condições Exclusivas</h4>
                    <p className="text-white/90">
                      Ofertas especiais e condições diferenciadas para os primeiros interessados.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sand p-3 rounded-lg mr-4 flex-shrink-0">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Resposta Rápida</h4>
                    <p className="text-white/90">
                      Retornamos seu contato em até 1 hora, com todas as informações que precisa.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
                <h4 className="text-xl font-bold mb-4">Contatos Oficiais</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-accent" />
                    <span>0800 015 1963</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-3 text-accent" />
                    <span>WhatsApp: (71) 9 9211-7523</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-accent" />
                    <span>www.alphaville.com.br</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;