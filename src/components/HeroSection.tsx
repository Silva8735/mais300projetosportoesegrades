import heroMockup from '../assets/images/hero_pack_completo_opt.jpg';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8 sm:py-14 text-center">
      <h1 className="reveal is-revealed font-extrabold tracking-tight text-[#f59e0b] text-3xl sm:text-5xl md:text-6xl leading-[1.08] uppercase">
        300 Projetos de Portões e Grades para Fazer e Vender
      </h1>

      <p className="reveal is-revealed reveal-d-1 mt-4 text-base sm:text-xl font-bold text-white/95 leading-snug max-w-2xl mx-auto">
        Cansado de ter que começar cada projeto de portão ou grade praticamente do zero?
      </p>

      <p className="reveal is-revealed reveal-d-2 mt-3 text-sm sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
        Tenha <span className="font-bold text-white">300 projetos reais de serralheria residencial</span> para consultar, fazer e vender — com <span className="text-[#f59e0b] font-bold">tabela de material e mão de obra</span> para ajudar você a cobrar certo.
      </p>

      {/* Hero 3D Mockup Container */}
      <div className="reveal-scale is-revealed reveal-d-2 mt-7 overflow-hidden rounded-xl float-soft border border-white/10 bg-[#0f1620]/70 p-2 sm:p-3 shadow-[0_10px_45px_-15px_rgba(245,158,11,0.35)] max-w-[560px] mx-auto">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <img
            src={heroMockup}
            alt="300 Projetos de Portões e Grades para Fazer e Vender"
            width={1024}
            height={1024}
            className="img-premium w-full h-full object-cover block"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="reveal is-revealed reveal-d-3 mt-8">
        <div className="flex justify-center">
          <button
            onClick={onCtaClick}
            className="cta-pulse btn-shine relative inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wide text-black shadow-[0_4px_25px_rgba(245,158,11,0.4)] cursor-pointer transition-transform hover:scale-[1.02]"
            id="cta-hero-button"
          >
            QUERO ACESSAR OS 300 PROJETOS
          </button>
        </div>
        <p className="mt-3 text-xs sm:text-sm text-white/60">
          ⚡ Acesso digital imediato · Pagamento único · Sem mensalidades
        </p>
      </div>
    </section>
  );
}
