import { useState } from 'react';
import { PROJECTS, ProjectPlan } from '../data/projects';
import { Search, ZoomIn } from 'lucide-react';

interface BlueprintShowcaseProps {
  onSelectProject: (project: ProjectPlan) => void;
}

export function BlueprintShowcase({ onSelectProject }: BlueprintShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os 300 Projetos' },
    { id: 'Portões Basculantes', label: 'Portões Basculantes' },
    { id: 'Portões Deslizantes', label: 'Portões Deslizantes' },
    { id: 'Portões Sociais', label: 'Portões Sociais' },
    { id: 'Grades Residenciais', label: 'Grades Residenciais' },
    { id: 'Grades Pantográficas', label: 'Grades Pantográficas' }
  ];

  const filteredProjects =
    activeCategory === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  // Divide the 15 projects across 2 marquee rows
  const row1 = PROJECTS.slice(0, 8);
  const row2 = PROJECTS.slice(8, 15);

  return (
    <div className="cv-auto">
      <section className="px-4 py-12 sm:py-16 bg-[#0f1620] border-y border-white/5 relative overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b] bg-[#f59e0b]/10 px-3 py-1 rounded-full border border-[#f59e0b]/20">
              PROJETOS REAIS TESTADOS
            </span>
            <h2 className="mt-3 font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl uppercase">
              Veja alguns dos 300 projetos do acervo
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80">
              Projetos detalhados de portões basculantes, deslizantes, pivotantes e grades residenciais prontos para você consultar, fabricar e vender.
            </p>
          </div>

          {/* Quick filter tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#f59e0b] text-black font-extrabold border-[#f59e0b]'
                    : 'bg-[#141c28] text-white/75 border-white/10 hover:border-[#f59e0b]/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-white/60 italic flex items-center justify-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-[#f59e0b]" />
            Clique em qualquer imagem para abrir a ficha técnica completa com medidas, materiais e referência de orçamento
          </p>
        </div>

        {/* Marquee Showcase Carousel when 'todos' is active */}
        {activeCategory === 'todos' ? (
          <div className="mt-8 relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#0f1620] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#0f1620] to-transparent" />

            <div className="flex flex-col gap-4 sm:gap-6">
              {/* ROW 1 */}
              <div className="relative overflow-hidden py-1">
                <div className="flex gap-4 sm:gap-6 w-max items-center marquee">
                  {[...row1, ...row1].map((p, idx) => {
                    const floatClass = idx % 2 === 0 ? 'float-0' : 'float-1';
                    return (
                      <div
                        key={`r1-${idx}`}
                        onClick={() => onSelectProject(p)}
                        className={`shrink-0 w-52 sm:w-64 h-64 sm:h-80 ${floatClass} cursor-pointer group transition-transform duration-300 hover:scale-105 hover:z-20`}
                        title={`Ver detalhes de ${p.name}`}
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-[#141c28] border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.6)] relative flex flex-col justify-between group-hover:border-[#f59e0b]/60 transition-colors">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-black/30 to-transparent flex flex-col justify-end p-3.5">
                            <span className="text-[10px] uppercase font-bold text-[#f59e0b] tracking-wider mb-0.5">
                              {p.category}
                            </span>
                            <span className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2">
                              {p.name}
                            </span>
                            <div className="mt-1.5 flex items-center justify-between text-[11px]">
                              <span className="text-emerald-400 font-bold">
                                Lucro: +{p.profit}
                              </span>
                              <span className="inline-flex items-center gap-1 bg-[#f59e0b] text-black font-extrabold px-2 py-0.5 rounded text-[10px] shadow">
                                <ZoomIn className="w-3 h-3" />
                                Abrir
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ROW 2 */}
              <div className="relative overflow-hidden py-1">
                <div className="flex gap-4 sm:gap-6 w-max items-center marquee-rev">
                  {[...row2, ...row2].map((p, idx) => {
                    const floatClass = idx % 2 === 1 ? 'float-0' : 'float-1';
                    return (
                      <div
                        key={`r2-${idx}`}
                        onClick={() => onSelectProject(p)}
                        className={`shrink-0 w-52 sm:w-64 h-64 sm:h-80 ${floatClass} cursor-pointer group transition-transform duration-300 hover:scale-105 hover:z-20`}
                        title={`Ver detalhes de ${p.name}`}
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-[#141c28] border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.6)] relative flex flex-col justify-between group-hover:border-[#f59e0b]/60 transition-colors">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18]/95 via-black/30 to-transparent flex flex-col justify-end p-3.5">
                            <span className="text-[10px] uppercase font-bold text-[#f59e0b] tracking-wider mb-0.5">
                              {p.category}
                            </span>
                            <span className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2">
                              {p.name}
                            </span>
                            <div className="mt-1.5 flex items-center justify-between text-[11px]">
                              <span className="text-emerald-400 font-bold">
                                Lucro: +{p.profit}
                              </span>
                              <span className="inline-flex items-center gap-1 bg-[#f59e0b] text-black font-extrabold px-2 py-0.5 rounded text-[10px] shadow">
                                <ZoomIn className="w-3 h-3" />
                                Abrir
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Grid View */
          <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="cursor-pointer group rounded-2xl overflow-hidden bg-[#141c28] border border-white/10 hover:border-[#f59e0b]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/40 relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[10px] text-[#f59e0b] font-bold">
                    {p.id.toUpperCase()}
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] uppercase font-bold text-[#f59e0b] tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-white mt-1 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-white/60 mt-1 line-clamp-1">
                    {p.dimensions}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 block">Lucro Estimado</span>
                      <span className="text-xs font-black text-emerald-400">+{p.profit}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-[#f59e0b] text-black font-extrabold px-2.5 py-1 rounded text-[11px]">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Ver Ficha
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
