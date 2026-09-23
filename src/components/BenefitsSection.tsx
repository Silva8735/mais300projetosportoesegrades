import { 
  FolderSearch, 
  Lightbulb, 
  Clock, 
  Table, 
  ShieldCheck, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export function BenefitsSection({ onCtaClick }: BenefitsSectionProps) {
  const benefits = [
    {
      icon: <FolderSearch className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 1',
      title: 'Tenha 300 projetos para consultar',
      description: 'Em vez de ficar limitado aos mesmos modelos de sempre, você terá uma grande variedade de projetos de portões e grades para servir como referência.'
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 2',
      title: 'Encontre novas ideias para apresentar aos clientes',
      description: 'Às vezes o cliente sabe que quer um portão novo, mas não sabe exatamente qual modelo. Ter diferentes projetos para mostrar pode facilitar essa conversa.'
    },
    {
      icon: <Clock className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 3',
      title: 'Economize tempo procurando referências',
      description: 'Você não precisa começar cada novo trabalho procurando uma referência diferente. Os projetos ficam reunidos em um único material.'
    },
    {
      icon: <Table className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 4',
      title: 'Tenha uma referência para material e mão de obra',
      description: 'Além do projeto, você conta com uma tabela destinada a material e mão de obra para ajudar na formação do orçamento.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 5',
      title: 'Tenha mais segurança na hora de cobrar',
      description: 'Você já deve ter pensado: “Quanto será que eu devo cobrar nesse serviço?” A tabela serve como uma referência para ajudar você a estruturar esse cálculo.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      num: 'BENEFÍCIO 6',
      title: 'Transforme projetos em oportunidades de venda',
      description: 'O objetivo não é simplesmente guardar 300 projetos. É ter modelos que podem servir de referência para trabalhos que você pode fazer e vender.'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
            MAIS POSSIBILIDADES
          </span>
          <h2 className="reveal is-revealed mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            Não é só ter mais projetos. É ter mais possibilidades para trabalhar.
          </h2>
        </div>

        {/* Benefits Grid 6 items */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="reveal is-revealed rounded-xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  {b.icon}
                  <span className="text-[11px] font-mono font-bold text-[#f59e0b] bg-[#f59e0b]/10 px-2 py-0.5 rounded border border-[#f59e0b]/20">
                    {b.num}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-base sm:text-lg text-white leading-snug">
                  {b.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-white/75 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento do Bloco 3 */}
        <div className="reveal is-revealed mt-12 p-6 rounded-2xl bg-[#0f1620] border border-[#f59e0b]/30 text-center max-w-2xl mx-auto">
          <div className="space-y-1.5 text-base sm:text-lg font-bold text-white">
            <p className="text-[#f59e0b]">✓ Mais projetos para consultar.</p>
            <p className="text-[#f59e0b]">✓ Mais referências para apresentar.</p>
            <p className="text-[#f59e0b]">✓ Mais clareza para montar seu orçamento.</p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={onCtaClick}
              className="btn-shine cta-pulse inline-flex items-center justify-center gap-2 rounded-md bg-[#f59e0b] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              <span>QUERO ACESSAR OS 300 PROJETOS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
