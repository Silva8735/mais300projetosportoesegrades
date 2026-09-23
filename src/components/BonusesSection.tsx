import { Gift, BookOpen, Calculator, ClipboardList, CheckSquare } from 'lucide-react';
import bonus1Img from '../assets/images/bonus1.png';
import bonus2Img from '../assets/images/bonus2.png';
import bonus3Img from '../assets/images/bonus3.png';
import bonus4Img from '../assets/images/bonus4.png';

export function BonusesSection() {
  const bonuses = [
    {
      num: '#1',
      title: 'Catálogo de Modelos para Mostrar ao Cliente',
      desc: 'Uma versão mais comercial dos projetos, organizada para facilitar a apresentação de opções ao cliente. Pode mostrar diferentes modelos e ajudar o cliente a escolher o que deseja fazer.',
      image: bonus1Img,
      icon: <BookOpen className="w-5 h-5 text-[#f59e0b]" />
    },
    {
      num: '#2',
      title: 'Calculadora de Orçamento de Portões e Grades',
      desc: 'Uma planilha/ficha simples para preencher medidas, material, mão de obra e outros custos e chegar a uma referência de preço. Facilita a montagem do orçamento e reduz o risco de esquecer algum componente do custo.',
      image: bonus2Img,
      icon: <Calculator className="w-5 h-5 text-[#f59e0b]" />
    },
    {
      num: '#3',
      title: 'Ficha de Medidas do Cliente',
      desc: 'Uma ficha pronta para registrar largura, altura, tipo de abertura, modelo escolhido, observações e outras informações do serviço. Ajuda a organizar as informações antes de iniciar a fabricação.',
      image: bonus3Img,
      icon: <ClipboardList className="w-5 h-5 text-[#f59e0b]" />
    },
    {
      num: '#4',
      title: 'Checklist de Material para Fabricação',
      desc: 'Para conferir os materiais necessários antes de começar cada projeto e evitar esquecimentos.',
      image: bonus4Img,
      icon: <CheckSquare className="w-5 h-5 text-[#f59e0b]" />
    }
  ];

  return (
    <section className="bg-[#0a0a0a] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Gift className="w-4 h-4" />
            <span>EXCLUSIVO NO PLANO COMPLETO</span>
          </div>
          <h2 className="reveal is-revealed font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl uppercase">
            BÔNUS DA OFERTA
          </h2>
          <p className="reveal is-revealed reveal-d-1 mt-3 text-sm sm:text-base text-white/80">
            Ferramentas práticas e prontas para você agilizar o atendimento, não errar nas medidas e nunca mais ter prejuízo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {bonuses.map((b, idx) => (
            <div
              key={idx}
              className="reveal is-revealed rounded-2xl border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all duration-300 hover:border-[#f59e0b]/50 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#f59e0b] text-black text-xs font-black uppercase tracking-wider">
                    BÔNUS {b.num}
                  </span>
                  <div className="p-2 rounded-lg bg-[#0f1620] border border-white/10">
                    {b.icon}
                  </div>
                </div>

                <div className="aspect-square w-full max-w-[280px] sm:max-w-[320px] mx-auto mb-5 overflow-hidden rounded-xl bg-black/40 p-2 border border-white/5 shadow-lg">
                  <img
                    src={b.image}
                    alt={b.title}
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-lg"
                    loading="lazy"
                  />
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-white leading-snug">
                  {b.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
