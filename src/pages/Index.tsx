import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WhyInvest from "@/components/WhyInvest";
import Infrastructure from "@/components/Infrastructure";
import Location from "@/components/Location";
import PaymentPlans from "@/components/PaymentPlans";
import Documentation from "@/components/Documentation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Highlights />
      <WhyInvest />
      <Infrastructure />
      <Location />
      <PaymentPlans />
      <Documentation />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
