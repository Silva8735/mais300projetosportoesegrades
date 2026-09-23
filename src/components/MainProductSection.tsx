import { Check, ArrowRight, ShieldCheck, DollarSign, Layers } from 'lucide-react';

interface MainProductSectionProps {
  onCtaClick: () => void;
}

export function MainProductSection({ onCtaClick }: MainProductSectionProps) {
  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        {/* Header Bloco 6 */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
            PRODUTO PRINCIPAL
          </span>
          <h2 className="reveal is-revealed mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            Dentro do seu acesso, você encontrará 300 projetos de portões e grades
          </h2>
          <p className="reveal is-revealed reveal-d-1 mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
            Projetos reais testados de serralheria residencial para você consultar como referência, fazer e vender.
          </p>
        </div>

        {/* 3 Main Deliverables Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: 300 Projetos */}
          <div className="rounded-xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all hover:border-[#f59e0b]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] font-black text-lg mb-4">
                300
              </div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-wide">
                Projetos de Portões e Grades
              </h3>
              
              <div className="mt-4 space-y-3 text-xs sm:text-sm text-white/80">
                <div className="p-2.5 rounded bg-black/30 border border-white/5">
                  <span className="font-bold text-[#f59e0b] block mb-0.5">PORTÕES</span>
                  <p className="text-white/70">
                    Uma coleção de projetos para você consultar quando precisar de referências para novos trabalhos de serralheria residencial.
                  </p>
                </div>
                <div className="p-2.5 rounded bg-black/30 border border-white/5">
                  <span className="font-bold text-[#f59e0b] block mb-0.5">GRADES</span>
                  <p className="text-white/70">
                    Mais opções de projetos para apresentar, adaptar à necessidade do cliente e utilizar como referência para novos serviços.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Tabela de Preço de Material */}
          <div className="rounded-xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all hover:border-[#f59e0b]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-wide">
                Tabela de Preço de Material
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                Uma referência para ajudar você a visualizar os custos relacionados aos materiais utilizados na composição do serviço.
              </p>

              <div className="mt-4 p-3 rounded bg-black/40 border border-[#f59e0b]/20 text-xs">
                <span className="font-bold text-[#f59e0b] block">Objetivo:</span>
                <span className="text-white/80">Facilitar a organização do orçamento sem esquecer itens.</span>
              </div>
            </div>
          </div>

          {/* Card 3: Tabela de Mão de Obra */}
          <div className="rounded-xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all hover:border-[#f59e0b]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-center text-[#f59e0b] mb-4">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-wide">
                Tabela de Mão de Obra
              </h3>
              
              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                Uma referência para considerar também o valor do seu trabalho na hora de montar o preço.
              </p>

              <div className="mt-4 p-3 rounded bg-black/40 border border-[#f59e0b]/20 text-xs">
                <span className="font-bold text-[#f59e0b] block">Objetivo:</span>
                <span className="text-white/80">Evitar olhar apenas para o custo do material e esquecer a mão de obra na composição do orçamento.</span>
              </div>
            </div>
          </div>
        </div>

        {/* A Lógica do Material */}
        <div className="reveal is-revealed mt-10 rounded-2xl border-2 border-[#f59e0b]/30 bg-[#141c28] p-6 sm:p-8">
          <h3 className="text-center text-lg sm:text-xl font-extrabold text-[#f59e0b] uppercase tracking-wider">
            A LÓGICA DO MATERIAL
          </h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs font-bold text-[#f59e0b] block">PROJETO</span>
              <p className="text-sm font-semibold text-white mt-1">→ O que você pode fazer</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs font-bold text-[#f59e0b] block">MATERIAL</span>
              <p className="text-sm font-semibold text-white mt-1">→ O que precisa considerar no custo</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#0f1620] border border-white/10">
              <span className="text-xs font-bold text-[#f59e0b] block">MÃO DE OBRA</span>
              <p className="text-sm font-semibold text-white mt-1">→ O valor do seu trabalho</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/40">
              <span className="text-xs font-bold text-[#f59e0b] block">PREÇO</span>
              <p className="text-sm font-bold text-[#f59e0b] mt-1">→ O que precisa considerar ao montar o orçamento</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center max-w-xl mx-auto space-y-2">
            <p className="text-base sm:text-lg font-extrabold text-white">
              300 projetos + referência de material + referência de mão de obra.
            </p>
            <p className="text-xs sm:text-sm text-white/75">
              Tudo pensado para ajudar você a transformar referências de serralheria em possibilidades reais de trabalho.
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onCtaClick}
              className="btn-shine cta-pulse inline-flex items-center justify-center gap-2 rounded-md bg-[#f59e0b] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              <span>QUERO ACESSAR O MATERIAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
