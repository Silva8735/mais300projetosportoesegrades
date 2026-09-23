import { ProjectPlan } from '../data/projects';
import { X, CheckCircle2, Layers, Wrench, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectPlan | null;
  onClose: () => void;
  onOrderNow: () => void;
}

export function ProjectModal({ project, onClose, onOrderNow }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0f1620] border border-[#f59e0b]/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141c28]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#f59e0b] bg-[#f59e0b]/10 px-2.5 py-0.5 rounded border border-[#f59e0b]/20">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-white mt-1">
              {project.name}
            </h3>
            <p className="text-xs text-white/60">
              Medidas do vão: <span className="text-white font-semibold">{project.dimensions}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 space-y-5">
          {/* Project Graphic / Image */}
          <div className="rounded-xl border border-white/10 overflow-hidden bg-black/60 max-w-lg mx-auto flex items-center justify-center shadow-inner p-2">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="max-h-[380px] w-auto max-w-full object-contain rounded-lg"
              />
            ) : project.renderSvg ? (
              project.renderSvg()
            ) : null}
          </div>

          {/* Reference Pricing Grid */}
          <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-[#141c28] border border-white/10 text-center">
            <div className="p-2.5 rounded-lg bg-black/30">
              <span className="text-[11px] text-white/60 block">Custo de Material:</span>
              <span className="text-sm sm:text-base font-extrabold text-white">{project.estimatedCost}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/30">
              <span className="text-[11px] text-white/60 block">Preço Sugerido:</span>
              <span className="text-sm sm:text-base font-extrabold text-[#f59e0b]">{project.suggestedPrice}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#f59e0b]/10 border border-[#f59e0b]/30">
              <span className="text-[11px] text-[#f59e0b] font-bold block">Lucro Estimado:</span>
              <span className="text-sm sm:text-base font-black text-[#f59e0b]">+{project.profit}</span>
            </div>
          </div>

          {/* Materials & Fabrication Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#141c28] border border-white/10">
              <h4 className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                <Layers className="w-4 h-4" />
                Materiais e Perfis
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                {project.materials.map((m, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-snug">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f59e0b] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#141c28] border border-white/10">
              <h4 className="text-xs font-bold text-[#f59e0b] uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                <Wrench className="w-4 h-4" />
                Passo a Passo de Fabricação
              </h4>
              <ul className="space-y-1.5 text-xs text-white/80">
                {project.steps.map((st, i) => (
                  <li key={i} className="leading-snug">
                    {st}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/25 text-xs text-[#f59e0b] leading-relaxed">
            💡 <span className="font-bold">Este é 1 dos 300 projetos inclusos</span> no acervo completo de serralheria residencial para você consultar, fabricar e vender.
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-[#141c28] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-xs font-bold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onClose();
              onOrderNow();
            }}
            className="cta-pulse btn-shine flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#f59e0b] text-black text-xs sm:text-sm font-black uppercase tracking-wide cursor-pointer"
          >
            <span>Acessar os 300 Projetos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
