import { ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export function Footer({ onCtaClick }: FooterProps) {
  return (
    <footer className="bg-[#070b10] border-t border-white/10 px-4 py-12 text-center text-xs text-white/60">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Bloco 10 Call to action */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1620] border border-[#f59e0b]/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#f59e0b] uppercase tracking-wide">
            300 Projetos de Portões e Grades para Fazer e Vender
          </h3>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Uma biblioteca de projetos de serralheria residencial para você consultar, encontrar referências para novos trabalhos e utilizar uma tabela de material e mão de obra como apoio na formação dos seus orçamentos.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onCtaClick}
              className="btn-shine cta-pulse inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wide text-black cursor-pointer shadow-lg hover:scale-102 transition-transform"
            >
              QUERO ACESSAR OS 300 PROJETOS
            </button>
          </div>
        </div>

        {/* Informações importantes e avisos legais */}
        <div className="space-y-3 pt-4 border-t border-white/5 text-[11px] sm:text-xs text-white/50 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            <strong>Informações importantes:</strong> os projetos e a tabela devem ser utilizados como material de referência. Valores de materiais e mão de obra podem variar conforme região, fornecedor, especificações do serviço e condições de execução.
          </p>

          <p>
            Todos os direitos sobre a obra “300 Projetos de Portões e Grades para Fazer e Vender” são reservados nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais). A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios, constitui violação dos direitos autorais (Art. 184 do Código Penal e Lei 9.610/98), sujeitando os infratores às sanções civis e criminais previstas na legislação aplicável.
          </p>

          <p className="pt-3 text-[10px] text-white/40 text-center">
            300 Projetos de Portões e Grades © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
