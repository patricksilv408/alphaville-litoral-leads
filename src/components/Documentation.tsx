import { useState } from "react";
import { FileText, Building, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState<'pf' | 'pj'>('pf');

  const pfDocuments = [
    "RG (Registro Geral)",
    "CPF (Cadastro de Pessoa Física)",
    "Comprovante de endereço atualizado",
    "Comprovante de renda (últimos 3 meses)",
    "Certidão de estado civil"
  ];

  const pjDocuments = [
    "Contrato social da empresa",
    "CNPJ (Cadastro Nacional da Pessoa Jurídica)",
    "Documentos pessoais dos sócios (RG e CPF)",
    "Comprovante de renda da empresa (DRE ou Balanço Patrimonial)",
    "Certidão de regularidade fiscal"
  ];

  const whatsappNumber = "5571999999999";
  const whatsappMessage = "Gostaria de tirar dúvidas sobre a documentação necessária para compra no Alphaville Litoral Norte 4";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium mb-6">
            Documentação para Compra
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preparamos um guia completo com toda documentação necessária 
            para pessoa física e jurídica. Processo simples e transparente.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-xl p-2 shadow-card border border-border">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('pf')}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'pf' 
                      ? 'bg-primary text-white shadow-soft' 
                      : 'text-muted-foreground hover:text-premium'
                  }`}
                >
                  <User className="h-5 w-5 mr-2" />
                  Pessoa Física
                </button>
                <button
                  onClick={() => setActiveTab('pj')}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'pj' 
                      ? 'bg-primary text-white shadow-soft' 
                      : 'text-muted-foreground hover:text-premium'
                  }`}
                >
                  <Building className="h-5 w-5 mr-2" />
                  Pessoa Jurídica
                </button>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-card rounded-2xl p-8 shadow-premium border border-border">
            <div className="text-center mb-8">
              <div className="bg-gradient-primary p-4 rounded-lg mx-auto mb-4 w-fit">
                {activeTab === 'pf' ? (
                  <User className="h-8 w-8 text-white" />
                ) : (
                  <Building className="h-8 w-8 text-white" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-premium mb-2">
                {activeTab === 'pf' ? 'Documentação Pessoa Física' : 'Documentação Pessoa Jurídica'}
              </h3>
              <p className="text-muted-foreground">
                {activeTab === 'pf' 
                  ? 'Documentos necessários para pessoas físicas' 
                  : 'Documentos necessários para empresas'
                }
              </p>
            </div>
            
            {/* Documents List */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-bold text-premium mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Documentos Obrigatórios
                </h4>
                <ul className="space-y-3">
                  {(activeTab === 'pf' ? pfDocuments : pjDocuments).map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-section rounded-xl p-6">
                <h4 className="text-lg font-bold text-premium mb-4">
                  Dicas Importantes
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Documentos devem estar atualizados e legíveis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Comprovantes de renda dos últimos 3 meses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Nossa equipe te orienta em todo processo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Análise rápida e segura da documentação</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center bg-premium rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                Precisa de Ajuda com a Documentação?
              </h4>
              <p className="text-white/90 mb-4">
                Nossa equipe especializada está pronta para orientar você em todo o processo
              </p>
              <Button 
                variant="whatsapp" 
                onClick={handleWhatsAppClick}
                className="bg-white text-green-600 hover:bg-white/90 font-semibold"
              >
                Tirar Dúvidas no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;