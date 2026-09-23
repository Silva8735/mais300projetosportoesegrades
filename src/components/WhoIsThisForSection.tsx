import { CheckCircle2 } from 'lucide-react';

export function WhoIsThisForSection() {
  const points = [
    {
      number: '1',
      title: 'Ter mais modelos de portões e grades para apresentar',
      description: 'Tenha uma biblioteca com 300 projetos para consultar quando um cliente pedir uma referência ou quando você quiser apresentar novas opções.'
    },
    {
      number: '2',
      title: 'Parar de começar cada projeto do zero',
      description: 'Em vez de procurar uma nova inspiração sempre que surgir um trabalho, tenha diversos projetos reunidos em um único material.'
    },
    {
      number: '3',
      title: 'Encontrar projetos para fazer e vender',
      description: 'O foco não é apenas olhar modelos bonitos. É ter referências de projetos voltados para a prática da serralheria residencial.'
    },
    {
      number: '4',
      title: 'Ter uma referência para calcular seu orçamento',
      description: 'Além dos projetos, você terá uma tabela de material e mão de obra para ajudar na composição do preço do serviço.'
    },
    {
      number: '5',
      title: 'Cobrar seu trabalho com mais clareza',
      description: 'Se você já ficou na dúvida sobre quanto cobrar por determinado serviço, uma referência de material e mão de obra pode ajudar a organizar melhor essa conta.'
    },
    {
      number: '6',
      title: 'Ter mais opções para atender diferentes clientes',
      description: 'Cada cliente pode chegar com uma preferência diferente. Ter mais projetos disponíveis significa ter mais referências para iniciar essa conversa.'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
            PÚBLICO-ALVO
          </span>
          <h2 className="reveal is-revealed mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            Esse material é para você que deseja...
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="reveal is-revealed rounded-xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center shrink-0 font-extrabold text-sm text-[#f59e0b]">
                  {p.number}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed pl-11">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
