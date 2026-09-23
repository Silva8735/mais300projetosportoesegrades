import { Camera, Image, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface NextClientSectionProps {
  onCtaClick: () => void;
}

export function NextClientSection({ onCtaClick }: NextClientSectionProps) {
  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
            PRÓXIMO CLIENTE
          </span>
          <h2 className="reveal is-revealed mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            O próximo cliente pode pedir justamente um modelo que você ainda não tem.
          </h2>
          <p className="reveal is-revealed reveal-d-1 mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Em vez de deixar cada novo orçamento depender de uma busca do zero, tenha uma biblioteca com <span className="font-bold text-white">300 projetos de portões e grades</span> para consultar quando precisar.
          </p>
        </div>

        <div className="reveal is-revealed reveal-d-2 mt-8 rounded-2xl border border-white/10 bg-[#141c28] p-6 sm:p-8">
          <p className="text-base sm:text-lg font-medium text-white/90">
            Porque na serralheria, muitas vezes o cliente chega com uma ideia:
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10 text-center">
              <Sparkles className="w-5 h-5 text-[#f59e0b] mx-auto mb-2" />
              <span className="text-sm font-bold text-white">Uma ideia.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10 text-center">
              <Camera className="w-5 h-5 text-[#f59e0b] mx-auto mb-2" />
              <span className="text-sm font-bold text-white">Uma foto.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10 text-center">
              <Image className="w-5 h-5 text-[#f59e0b] mx-auto mb-2" />
              <span className="text-sm font-bold text-white">Um modelo.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10 text-center">
              <Layers className="w-5 h-5 text-[#f59e0b] mx-auto mb-2" />
              <span className="text-sm font-bold text-white">Uma referência.</span>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base font-semibold text-[#f59e0b]">
            E você precisa transformar aquilo em uma possibilidade de trabalho.
          </p>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-white/80 leading-relaxed border-t border-white/10 pt-4">
            <p>
              Quanto mais referências você tem à disposição, mais fácil fica apresentar opções e conversar sobre o que pode ser feito.
            </p>
            <p>
              E com uma tabela de material e mão de obra, você também tem uma referência para estruturar o orçamento com precisão e segurança.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onCtaClick}
              className="btn-shine cta-pulse inline-flex items-center justify-center gap-2 rounded-md bg-[#f59e0b] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              <span>QUERO TER OS 300 PROJETOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
