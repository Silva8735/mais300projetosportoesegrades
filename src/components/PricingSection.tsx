import { useState, useEffect } from 'react';
import { Check, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import packBasicoImg from '../assets/images/pack_basico_opt.jpg';
import packHeroImg from '../assets/images/hero_pack_completo_opt.jpg';

interface PricingSectionProps {
  onSelectKit: (kitType: 'basico' | 'completo') => void;
}

export function PricingSection({ onSelectKit }: PricingSectionProps) {
  // Countdown Timer starting at 24:38
  const [secondsLeft, setSecondsLeft] = useState(24 * 60 + 38);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 30 * 60;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const basicFeatures = [
    '300 Projetos de Portões e Grades para Fazer e Vender',
    'Projetos reais testados de serralheria residencial',
    'Tabela de preço de material',
    'Tabela de preço de mão de obra',
    'Acesso digital imediato e vitalício'
  ];

  const proFeatures = [
    '300 Projetos de Portões e Grades para Fazer e Vender',
    'Projetos reais testados de serralheria residencial',
    'Tabela de preço de material',
    'Tabela de preço de mão de obra',
    'BÔNUS #1: Catálogo de Modelos para Mostrar ao Cliente',
    'BÔNUS #2: Calculadora de Orçamento de Portões e Grades',
    'BÔNUS #3: Ficha de Medidas do Cliente',
    'BÔNUS #4: Checklist de Material para Fabricação',
    'Acesso digital imediato e vitalício'
  ];

  return (
    <section id="comprar" className="px-4 py-12 sm:py-16 bg-[#0a0a0a] scroll-mt-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="reveal is-revealed font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            Escolha como você quer acessar os projetos
          </h2>
          <p className="reveal is-revealed reveal-d-1 mt-3 text-sm sm:text-base text-white/80">
            Pagamento único · Acesso imediato · Sem mensalidades
          </p>
        </div>

        {/* Urgency Countdown Box */}
        <div className="reveal is-revealed mx-auto my-6 flex max-w-md flex-col items-center rounded-xl border border-red-500/40 bg-red-600/10 px-5 py-3 text-center shadow-[0_0_25px_rgba(239,68,68,0.2)]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
            <Clock className="w-4 h-4" />
            <span>A OFERTA COM DESCONTO TERMINA EM</span>
          </div>
          <span className="mt-1 font-mono text-3xl sm:text-4xl font-extrabold text-red-500 tabular-nums">
            {formattedTime} min
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto items-stretch">
          
          {/* PLANO BÁSICO */}
          <div className="reveal-scale is-revealed relative rounded-2xl p-6 sm:p-7 bg-[#141c28] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/40 flex flex-col justify-between">
            <div>
              <div className="aspect-square w-36 sm:w-44 mx-auto mb-4 overflow-hidden rounded-lg bg-black/30 p-2">
                <img
                  src={packBasicoImg}
                  alt="Plano Básico - 300 Projetos de Portões e Grades"
                  className="mx-auto w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest block text-center">
                OPÇÃO DE ENTRADA
              </span>
              <h3 className="text-center text-lg sm:text-xl font-extrabold tracking-wide text-white uppercase mt-1">
                PLANO BÁSICO
              </h3>
              <p className="text-xs text-center text-[#f59e0b] font-semibold mt-0.5">
                300 PROJETOS DE PORTÕES E GRADES
              </p>

              <div className="mt-4 text-center">
                <span className="text-xs text-white/50 line-through block">De R$ 67,00</span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-xl font-bold text-white/80">R$</span>
                  <span className="text-5xl font-black text-[#f59e0b]">17</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                  Pagamento único · Acesso vitalício
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                  Você recebe:
                </p>
                <ul className="space-y-2.5">
                  {basicFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#f59e0b]" strokeWidth={3} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7">
              <button
                onClick={() => onSelectKit('basico')}
                className="btn-shine flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white cursor-pointer w-full leading-tight transition-all"
                id="cta-basico"
              >
                <span>QUERO ACESSAR OS 300 PROJETOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-2 text-center text-[11px] text-white/50">
                Receba o acesso imediatamente por e-mail
              </p>
            </div>
          </div>

          {/* PLANO COMPLETO (Featured) */}
          <div className="reveal-scale is-revealed relative rounded-2xl p-6 sm:p-7 bg-[#141c28] border-2 border-[#f59e0b] shadow-[0_0_50px_-10px_rgba(245,158,11,0.45)] hover:shadow-[0_0_65px_-5px_rgba(245,158,11,0.6)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#f59e0b] text-black text-[11px] font-black uppercase tracking-wider shadow-lg">
              MAIS COMPLETO E RECOMENDADO
            </div>

            <div>
              <div className="aspect-square w-36 sm:w-44 mx-auto mb-4 overflow-hidden rounded-lg bg-black/30 p-2">
                <img
                  src={packHeroImg}
                  alt="Plano Completo - 300 Projetos + Bônus"
                  className="mx-auto w-full h-full object-contain float-soft"
                  loading="lazy"
                />
              </div>

              <span className="text-[11px] font-bold text-[#f59e0b] uppercase tracking-widest block text-center">
                PACOTE COMPLETO
              </span>
              <h3 className="text-center text-lg sm:text-xl font-extrabold tracking-wide text-white uppercase mt-1">
                PLANO COMPLETO
              </h3>
              <p className="text-xs text-center text-[#f59e0b] font-semibold mt-0.5">
                300 PROJETOS + 4 BÔNUS EXCLUSIVOS
              </p>

              <div className="mt-4 text-center">
                <span className="text-xs text-white/50 line-through block">De R$ 147,00</span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-xl font-bold text-white/80">R$</span>
                  <span className="text-5xl font-black text-[#f59e0b]">27</span>
                </div>
                <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                  Pagamento único · Acesso vitalício
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                  Você recebe:
                </p>
                <ul className="space-y-2.5">
                  {proFeatures.map((item, idx) => {
                    const isBonus = item.startsWith('BÔNUS');
                    return (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          isBonus
                            ? 'font-bold text-[#f59e0b]'
                            : 'text-white/85'
                        }`}
                      >
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-[#f59e0b]" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="mt-7">
              <button
                onClick={() => onSelectKit('completo')}
                className="btn-shine cta-pulse flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-4 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer w-full leading-tight transition-transform hover:scale-[1.01] shadow-[0_4px_25px_rgba(245,158,11,0.5)]"
                id="cta-pro"
              >
                <span>QUERO O PLANO COMPLETO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="mt-2 text-center text-[11px] text-white/60">
                Acesso imediato e vitalício com todos os bônus
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
