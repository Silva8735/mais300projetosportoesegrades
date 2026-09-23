import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-12 sm:py-16 border-t border-white/5">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-2">
          <ShieldCheck className="h-10 w-10 text-[#f59e0b] icon-pop" strokeWidth={2.2} />
        </div>
        
        <h2 className="reveal is-revealed reveal-d-1 mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl uppercase">
          GARANTIA INCONDICIONAL DE 7 DIAS
        </h2>

        <p className="reveal is-revealed reveal-d-2 mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
          Acesse os 300 Projetos de Portões e Grades, examine a tabela de material e mão de obra e todos os bônus por 7 dias. Se você achar que o material não é para você, basta nos enviar um e-mail e devolveremos <span className="font-bold text-white">100% do seu dinheiro</span>. Sem perguntas e sem complicações.
        </p>
      </div>
    </section>
  );
}
