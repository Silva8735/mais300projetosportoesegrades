import { CheckCircle2, ArrowDown } from 'lucide-react';
import heroMockup from '../assets/images/hero_pack_completo_opt.jpg';

interface ProductVisualProofProps {
  onCtaClick: () => void;
}

export function ProductVisualProof({ onCtaClick }: ProductVisualProofProps) {
  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        {/* Header Block 2 */}
        <div className="text-center">
          <h2 className="reveal is-revealed font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-4xl md:text-5xl">
            Veja o que você passa a ter em mãos.
          </h2>
          <p className="reveal is-revealed reveal-d-1 mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Em vez de depender de um único modelo ou começar cada trabalho procurando uma nova referência, você terá uma biblioteca com <span className="font-bold text-white">300 projetos de portões e grades</span>.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="reveal is-revealed reveal-d-2 mt-8 rounded-xl border border-white/10 bg-[#141c28] p-6 sm:p-8 space-y-4 text-white/85">
          <p className="text-base sm:text-lg font-medium text-white">
            Imagine que um cliente chega e pergunta:
          </p>
          <div className="p-4 rounded-lg bg-black/40 border-l-4 border-[#f59e0b] text-lg sm:text-xl font-bold italic text-[#f59e0b]">
            “Você consegue fazer um portão nesse estilo?”
          </div>
          <div className="space-y-2 text-sm sm:text-base leading-relaxed text-white/80">
            <p>Você não precisa pensar apenas no último projeto que fez.</p>
            <p>Você tem uma coleção de modelos para consultar.</p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <li className="flex items-center gap-2 p-2.5 rounded bg-white/5 font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" /> Escolher.
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-white/5 font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" /> Adaptar ao trabalho.
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-white/5 font-semibold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" /> Apresentar como referência.
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/30 font-bold text-[#f59e0b]">
                <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" /> Fechar o serviço.
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Badge Triad */}
        <div className="reveal is-revealed reveal-d-3 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-4 rounded-lg bg-[#141c28] border border-[#f59e0b]/40">
            <span className="text-3xl font-black text-[#f59e0b] block">300</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">PROJETOS</span>
          </div>
          <div className="p-4 rounded-lg bg-[#141c28] border border-[#f59e0b]/40">
            <span className="text-2xl sm:text-3xl font-black text-[#f59e0b] block">PORTÕES + GRADES</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">VARIEDADE COMPLETA</span>
          </div>
          <div className="p-4 rounded-lg bg-[#141c28] border border-[#f59e0b]/40">
            <span className="text-xl sm:text-2xl font-black text-[#f59e0b] block">SERRALHERIA</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">RESIDENCIAL</span>
          </div>
        </div>

        {/* Bloco de Precificação */}
        <div className="reveal is-revealed reveal-d-4 mt-12 rounded-2xl border-2 border-[#f59e0b]/40 bg-[#141c28] p-6 sm:p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              E não para por aí.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
              A proposta também inclui uma <span className="font-bold text-[#f59e0b]">tabela de preço de material e mão de obra</span>.
            </p>
            <p className="mt-2 text-sm text-white/70 italic">
              Porque ter um projeto é uma coisa. Saber quanto considerar no orçamento é outra.
            </p>
            <p className="mt-2 text-sm text-white/90 font-medium">
              Aqui, as duas necessidades são colocadas lado a lado:
            </p>
          </div>

          {/* Flow Step-by-Step */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            <div className="w-full text-center p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs text-white/50 block font-mono">PASSO 1</span>
              <span className="text-base font-extrabold text-white uppercase">PROJETO</span>
            </div>
            <ArrowDown className="w-5 h-5 text-[#f59e0b] md:-rotate-90 shrink-0" />
            <div className="w-full text-center p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs text-white/50 block font-mono">PASSO 2</span>
              <span className="text-base font-extrabold text-white uppercase">MATERIAL</span>
            </div>
            <ArrowDown className="w-5 h-5 text-[#f59e0b] md:-rotate-90 shrink-0" />
            <div className="w-full text-center p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs text-white/50 block font-mono">PASSO 3</span>
              <span className="text-base font-extrabold text-white uppercase">MÃO DE OBRA</span>
            </div>
            <ArrowDown className="w-5 h-5 text-[#f59e0b] md:-rotate-90 shrink-0" />
            <div className="w-full text-center p-3.5 rounded-lg bg-[#f59e0b] text-black border border-[#f59e0b]">
              <span className="text-xs font-bold block">FINAL</span>
              <span className="text-base font-black uppercase">PREÇO CERTO</span>
            </div>
          </div>

          {/* Mockup visual reference */}
          <div className="mt-8 max-w-lg mx-auto rounded-xl overflow-hidden border border-white/10 bg-black/40 p-2 shadow-inner">
            <img
              src={heroMockup}
              alt="Projetos reais e tabela de preços de material e mão de obra"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>

          <p className="mt-6 text-center text-sm sm:text-base font-medium text-white/85 max-w-xl mx-auto">
            Você consulta o projeto que procura e utiliza a referência de custos para montar seu orçamento com mais clareza.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onCtaClick}
              className="btn-shine cta-pulse inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-8 py-3.5 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              QUERO ACESSAR OS 300 PROJETOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
