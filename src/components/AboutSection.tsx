import heroMockup from '../assets/images/pack_hero_mockup_1790119117855.jpg';

interface AboutSectionProps {
  onCtaClick: () => void;
}

export function AboutSection({ onCtaClick }: AboutSectionProps) {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="reveal is-revealed text-center font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
          ¿QUÉ ES EL PACK TESORO DEL HERRERO?
        </h2>

        <p className="reveal is-revealed reveal-d-1 mt-4 text-center text-sm sm:text-base text-white/80 leading-relaxed">
          Es una <span className="font-bold text-white">biblioteca digital con +4.000 proyectos de herrería</span> organizados por categoría: portones, rejas, muebles industriales, remolques, estructuras metálicas, galpones, escaleras, barandales y mucho más.
        </p>

        <p className="reveal is-revealed reveal-d-2 mt-4 text-center text-sm sm:text-base text-white/75 leading-relaxed">
          Cada proyecto incluye todo lo que necesitas para fabricar y vender: medidas exactas, esquema de corte, lista de materiales, tipo de perfil y espesor, costo de producción, precio de venta sugerido y ganancia estimada.
        </p>

        <div className="mt-5 p-4 rounded-lg bg-[#0f1620] border border-[#f59e0b]/30 text-center">
          <p className="reveal is-revealed reveal-d-3 text-base sm:text-lg font-bold text-[#f59e0b]">
            Abres el proyecto en el celular, copias las medidas, lo fabricas y lo vendes. Así de simple.
          </p>
        </div>

        <div className="reveal-scale is-revealed reveal-d-3 mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#0f1620]/60 p-2 shadow-[0_10px_40px_-15px_rgba(245,158,11,0.25)]">
          <div className="relative aspect-square w-full max-w-[520px] mx-auto overflow-hidden rounded-lg">
            <img
              src={heroMockup}
              alt="Tesoro del Herrero - +4.000 proyectos listos"
              width={1024}
              height={1024}
              className="img-premium w-full h-full object-cover block"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="reveal is-revealed reveal-d-4 mt-10">
          <div className="flex justify-center">
            <button
              onClick={onCtaClick}
              className="cta-pulse btn-shine relative inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-wide text-black shadow-lg cursor-pointer transition-transform hover:scale-[1.02]"
              id="cta-about-button"
            >
              VER EL PAQUETE COMPLETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
