import { Star } from 'lucide-react';
import avatar1 from '../assets/images/avatar_carlos_blacksmith_1790119149624.jpg';
import avatar2 from '../assets/images/avatar_miguel_artisan_1790119159595.jpg';
import avatar3 from '../assets/images/avatar_andres_welder_1790119214482.jpg';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Carlos Gutiérrez',
      location: 'Buenos Aires, Argentina',
      avatar: avatar1,
      quote: 'Ya hice más de 30 proyectos del pack. Los que más venden son los portones y las rejas. ¡Material de primera calidad!'
    },
    {
      name: 'Miguel Hernández',
      location: 'Ciudad de México, México',
      avatar: avatar2,
      quote: 'La mejor inversión que hice. Los proyectos vienen con todo: medidas, materiales, costo. Solo hay que fabricar y vender.'
    },
    {
      name: 'Andrés Ramírez',
      location: 'Bogotá, Colombia',
      avatar: avatar3,
      quote: 'Yo no tenía idea de qué fabricar. Con el pack, comencé a producir escaleras y barandales. ¡Mi facturación se triplicó!'
    }
  ];

  return (
    <div className="cv-auto">
      <section className="px-4 py-12 sm:py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl">
          <h2 className="reveal is-revealed text-center font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
            QUIENES YA COMPRARON LO APRUEBAN:
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`reveal-scale is-revealed reveal-d-${idx + 1} rounded-lg border border-white/10 bg-[#141c28] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#f59e0b]/40 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(245,158,11,0.35)]`}
              >
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  <p className="mt-3.5 text-sm sm:text-base italic text-white/85 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden border border-[#f59e0b]/40 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-[#f59e0b]/80">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
