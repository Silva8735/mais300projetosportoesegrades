import {
  Ruler,
  Package,
  Scissors,
  Layers,
  ListOrdered,
  DollarSign,
  Tags,
  TrendingUp,
  Gift
} from 'lucide-react';

import bonus1Img from '../assets/images/bonus_metalon_book_1790119173680.jpg';
import bonus2Img from '../assets/images/bonus_precios_book_1790119182269.jpg';
import bonus3Img from '../assets/images/bonus_errores_book_1790119192223.jpg';
import bonus4Img from '../assets/images/bonus_acero_book_1790119203108.jpg';

export function FeaturesAndBonuses() {
  const features = [
    { icon: <Ruler className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Medidas exactas de cada pieza' },
    { icon: <Package className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Lista completa de materiales' },
    { icon: <Scissors className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Esquema de corte detallado' },
    { icon: <Layers className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Tipo de perfil y espesor recomendado' },
    { icon: <ListOrdered className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Secuencia de fabricación paso a paso' },
    { icon: <DollarSign className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Costo promedio de producción' },
    { icon: <Tags className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Precio de venta sugerido' },
    { icon: <TrendingUp className="h-5 w-5 shrink-0 text-[#f59e0b] icon-pop" strokeWidth={2.2} />, label: 'Ganancia estimada por pieza' },
  ];

  const bonuses = [
    {
      number: '1',
      title: 'Guía para presentar muebles de metalón',
      image: bonus1Img,
      desc: 'Fotografía profesional, iluminación, composición y técnicas para que tus muebles destaquen en catálogo y redes.'
    },
    {
      number: '2',
      title: 'Guía completa de precios para muebles industriales',
      image: bonus2Img,
      desc: 'Calculadora de costos de mano de obra, luz, consumibles y márgenes para nunca más cobrar por debajo del mercado.'
    },
    {
      number: '3',
      title: 'Los 10 mayores errores de un herrero principiante',
      image: bonus3Img,
      desc: 'Aprende a evitar deformaciones por calor, fallas de penetración en soldadura y pérdida de tiempo valioso.'
    },
    {
      number: '4',
      title: 'Tipos de acero y sus aplicaciones',
      image: bonus4Img,
      desc: 'Clasificación de perfiles, calibres según carga estructural, tubos estructurales vs mecánicos y protección anticorrosiva.'
    }
  ];

  return (
    <div className="cv-auto">
      <section className="px-4 py-12 sm:py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl">
          <h2 className="reveal is-revealed text-center font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            ¿QUÉ TRAE CADA PROYECTO?
          </h2>

          <p className="reveal is-revealed reveal-d-1 mt-3 text-center text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Todo lo que necesitas para abrir el archivo, fabricar la pieza y venderla con ganancia. Sin perder tiempo dibujando ni calculando.
          </p>

          {/* 8 Features Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feat, index) => (
              <div
                key={index}
                className={`reveal is-revealed reveal-d-${(index % 8) + 1} flex items-center gap-3 rounded-lg border border-white/10 bg-[#141c28] px-4 py-3.5 transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-0.5`}
              >
                {feat.icon}
                <span className="text-sm font-medium text-white leading-tight">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Bonuses Box */}
          <div className="reveal-scale is-revealed reveal-d-2 mt-12 rounded-xl border border-[#f59e0b]/40 bg-[#0f1620] p-5 sm:p-7 shadow-[0_0_40px_-15px_rgba(245,158,11,0.35)]">
            <div className="flex items-center justify-center gap-2">
              <Gift className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />
              <h3 className="text-center font-extrabold tracking-tight text-[#f59e0b] text-xl sm:text-2xl">
                4 BONOS DE REGALO
              </h3>
            </div>
            <p className="mt-2 text-center text-xs sm:text-sm text-white/70">
              Incluidos sin costo extra al asegurar tu Pack Tesoro del Herrero
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bonuses.map((bonus, bIdx) => (
                <div
                  key={bIdx}
                  className={`reveal is-revealed reveal-d-${bIdx + 1} flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-[#141c28] p-4 transition-all duration-300 hover:border-[#f59e0b]/50 hover:-translate-y-0.5 group`}
                >
                  <div className="relative w-44 sm:w-52 aspect-square overflow-hidden rounded-md bg-black/40">
                    <img
                      src={bonus.image}
                      alt={`Bono ${bonus.number}: ${bonus.title}`}
                      width={320}
                      height={320}
                      className="w-full h-full object-contain img-premium group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center w-full">
                    <p className="text-xs sm:text-sm font-extrabold tracking-wide text-[#f59e0b]">
                      BONO {bonus.number}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white leading-tight mt-1">
                      {bonus.title}
                    </p>
                    <p className="text-xs text-white/60 mt-1 leading-snug">
                      {bonus.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
