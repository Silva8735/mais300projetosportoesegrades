import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '1. O que é o produto?',
      a: 'É uma coleção com 300 projetos de portões e grades para fazer e vender, voltada para serralheria residencial.'
    },
    {
      q: '2. Os projetos são reais?',
      a: 'Sim. A concepção da oferta descreve os projetos como reais e testados de serralheria residencial.'
    },
    {
      q: '3. O material possui projetos de portões e grades?',
      a: 'Sim. A proposta é reunir 300 projetos de portões e grades em um único material organizado.'
    },
    {
      q: '4. Além dos projetos, o que eu recebo?',
      a: 'A oferta também prevê uma tabela de preço de material e mão de obra, criada para servir como referência na formação do orçamento.'
    },
    {
      q: '5. A tabela de preços significa que preciso cobrar exatamente aqueles valores?',
      a: 'Não necessariamente. A tabela deve ser tratada como referência, já que custos podem variar conforme região, material, condições do serviço e outros fatores.'
    },
    {
      q: '6. Posso usar os projetos para apresentar opções aos meus clientes?',
      a: 'A proposta do produto é justamente fornecer projetos para fazer e vender, portanto eles podem funcionar como referências para novos trabalhos, observadas as condições de uso do material.'
    },
    {
      q: '7. Como vou receber os projetos?',
      a: 'O acesso é 100% digital e imediato. Logo após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail para visualizar no celular ou computador e baixar tudo quando quiser.'
    },
    {
      q: '8. Quanto custa?',
      a: 'Você pode escolher entre o Plano Básico por apenas R$ 17 ou o Plano Completo com todos os 4 bônus exclusivos por R$ 27. Pagamento único, sem mensalidades.'
    },
    {
      q: '9. Existe garantia?',
      a: 'Sim! Você conta com garantia incondicional de 7 dias. Se por qualquer motivo achar que o material não é para você, basta solicitar o reembolso e devolvemos 100% do seu dinheiro sem complicação.'
    },
    {
      q: '10. O que está incluso na compra?',
      a: 'A concepção confirma os 300 projetos e a tabela de material e mão de obra. No Plano Completo, estão inclusos também o Catálogo de Modelos, Calculadora de Orçamento, Ficha de Medidas do Cliente e Checklist de Material.'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="reveal is-revealed mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            Ainda ficou com alguma dúvida?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Confira as respostas para as principais dúvidas sobre os 300 Projetos
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="reveal is-revealed rounded-xl border border-white/10 bg-[#141c28] overflow-hidden transition-colors duration-300 hover:border-[#f59e0b]/40"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left cursor-pointer select-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#f59e0b] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-4 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
