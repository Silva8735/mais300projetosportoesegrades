import { Clock, Wallet, FolderOpen, Rocket } from 'lucide-react';

export function WorkshopTransformation() {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Fabricas mucho más rápido',
      desc: 'Abres el proyecto, copias las medidas, cortas y armas. Sin perder tiempo pensando ni dibujando.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Cobras con seguridad',
      desc: 'Costo de material, precio sugerido y ganancia estimada en cada proyecto. Se acabó cobrar a ojo.'
    },
    {
      icon: <FolderOpen className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Tu taller bien organizado',
      desc: '+4.000 proyectos clasificados por categoría: portones, muebles, remolques, estructuras y mucho más.'
    },
    {
      icon: <Rocket className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Más ideas para vender',
      desc: 'Le muestras al cliente el modelo listo y cierras el trato al instante. Sin hacerlo esperar.'
    }
  ];

  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        <h2 className="reveal is-revealed text-center font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
          LO QUE CAMBIA EN TU TALLER
        </h2>
        <p className="reveal is-revealed reveal-d-1 mt-3 text-center text-sm sm:text-base text-white/80">
          Menos tiempo perdido. Más piezas fabricadas. Más dinero en tu bolsillo.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`reveal is-revealed reveal-d-${index + 1} rounded-lg border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/40 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]`}
            >
              {benefit.icon}
              <h3 className="mt-3 font-bold text-base sm:text-lg text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
