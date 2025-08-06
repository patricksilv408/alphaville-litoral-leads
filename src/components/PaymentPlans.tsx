import { Check, CreditCard, Percent, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentPlans = () => {
  const plans = [
    {
      icon: Calendar,
      title: "Opção 1",
      subtitle: "Parcelamento Simples",
      entry: "15%",
      installments: "48x mensais",
      highlight: "Mais Popular",
      benefits: [
        "Entrada de apenas 15%",
        "48 parcelas mensais fixas",
        "Correção pelo IPCA",
        "Sem correção INCC",
        "Facilidade no pagamento"
      ]
    },
    {
      icon: CreditCard,
      title: "Opção 2",
      subtitle: "Mista com Anuais",
      entry: "15%",
      installments: "48x mensais + 4 anuais",
      highlight: "Flexibilidade",
      benefits: [
        "Entrada de 15%",
        "48 parcelas mensais",
        "4 parcelas anuais",
        "Anuais ≤ 4x parcela mensal + R$100",
        "Maior flexibilidade"
      ]
    },
    {
      icon: Percent,
      title: "À Vista",
      subtitle: "Desconto Especial",
      entry: "85%",
      installments: "15% de desconto",
      highlight: "Melhor Preço",
      benefits: [
        "15% de desconto total",
        "Pagamento à vista",
        "Maior economia",
        "Documentação mais ágil",
        "Prioridade na escolha"
      ]
    }
  ];

  const whatsappNumber = "5571992117523";
  const whatsappMessage = "Olá, quero saber mais sobre o Alphaville Litoral Norte 4";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-premium mb-6">
            Condições de Pagamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planos flexíveis para facilitar a realização do seu sonho. 
            Escolha a modalidade que melhor se adapta ao seu perfil.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const isPopular = plan.highlight === "Mais Popular";
            
            return (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-card border transition-all duration-300 hover:transform hover:scale-105 ${
                  isPopular 
                    ? 'border-primary shadow-premium ring-2 ring-primary/20' 
                    : 'border-border hover:shadow-soft'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      {plan.highlight}
                    </div>
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-primary p-4 rounded-lg mx-auto mb-4 w-fit">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-premium mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.subtitle}
                  </p>
                  
                  <div className="bg-gradient-section rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {plan.entry}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      entrada
                    </div>
                    <div className="text-lg font-semibold text-premium mt-2">
                      {plan.installments}
                    </div>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Button 
                  variant={isPopular ? "premium" : "outline"}
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  Consultar Preços
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* Additional Info */}
        <div className="bg-sand/20 rounded-2xl p-8 border border-sand">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-premium mb-4">
                Informações Importantes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  Correção pelo IPCA (sem INCC)
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  Documentação necessária: RG, CPF, comprovante de renda
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  Registro de Imóvel: Matrícula nº 42.810 - R.02
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  Aprovação Municipal: Decreto nº 8108/2024
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-primary rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">
                  Simulação Personalizada
                </h4>
                <p className="text-white/90 mb-4">
                  Fale conosco e receba uma proposta personalizada para o seu perfil
                </p>
                <Button 
                  variant="whatsapp" 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-green-600 hover:bg-white/90"
                >
                  Simular Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;