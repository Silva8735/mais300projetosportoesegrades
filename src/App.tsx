import { useState, useEffect } from 'react';
import { HeaderBanner } from './components/HeaderBanner';
import { HeroSection } from './components/HeroSection';
import { ProductVisualProof } from './components/ProductVisualProof';
import { BlueprintShowcase } from './components/BlueprintShowcase';
import { BenefitsSection } from './components/BenefitsSection';
import { NextClientSection } from './components/NextClientSection';
import { WhoIsThisForSection } from './components/WhoIsThisForSection';
import { MainProductSection } from './components/MainProductSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SalesNotificationToast } from './components/SalesNotificationToast';
import { ProjectModal } from './components/ProjectModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ProjectPlan } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectPlan | null>(null);
  const [checkoutKit, setCheckoutKit] = useState<'basico' | 'completo' | null>(null);

  // Smooth scroll handler to the pricing section
  const scrollToPricing = () => {
    const el = document.getElementById('comprar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectKit = (kit: 'basico' | 'completo') => {
    setCheckoutKit(kit);
  };

  // Intersection observer to animate reveal elements on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#f59e0b] selection:text-black relative">
      {/* TOPO / AVISO: Urgência */}
      <HeaderBanner />

      {/* BLOCO 1: HERO */}
      <HeroSection onCtaClick={scrollToPricing} />

      {/* BLOCO 2: PROVA VISUAL DO PRODUTO + BLOCO DE PRECIFICAÇÃO */}
      <ProductVisualProof onCtaClick={scrollToPricing} />

      {/* PROJETOS REAIS EM DESTAQUE (Blueprint Showcase) */}
      <BlueprintShowcase
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* BLOCO 3: BENEFÍCIOS */}
      <BenefitsSection onCtaClick={scrollToPricing} />

      {/* BLOCO 4: O PRÓXIMO CLIENTE */}
      <NextClientSection onCtaClick={scrollToPricing} />

      {/* BLOCO 5: ESSE MATERIAL É PARA VOCÊ QUE DESEJA... */}
      <WhoIsThisForSection />

      {/* BLOCO 6: PRODUTO PRINCIPAL & A LÓGICA DO MATERIAL */}
      <MainProductSection onCtaClick={scrollToPricing} />

      {/* BLOCO 7: BÔNUS DA OFERTA */}
      <BonusesSection />

      {/* BLOCO 8: OFERTA E VALORES (Plano Básico R$ 17 / Plano Completo R$ 27) */}
      <PricingSection onSelectKit={handleSelectKit} />

      {/* GARANTIA INCONDICIONAL DE 7 DIAS */}
      <GuaranteeSection />

      {/* BLOCO 9: PERGUNTAS FREQUENTES (10 Perguntas) */}
      <FaqSection />

      {/* BLOCO 10: RODAPÉ & AVISOS LEGAIS */}
      <Footer onCtaClick={scrollToPricing} />

      {/* Notificações de Vendas em Tempo Real (Cidades Brasileiras) */}
      <SalesNotificationToast />

      {/* Modal de Detalhes do Projeto / Planta Técnica */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOrderNow={() => {
          setSelectedProject(null);
          scrollToPricing();
        }}
      />

      {/* Modal de Checkout / Inscrição R$ 17 ou R$ 27 */}
      <CheckoutModal
        isOpen={checkoutKit !== null}
        selectedKit={checkoutKit || 'completo'}
        onClose={() => setCheckoutKit(null)}
      />
    </main>
  );
}
