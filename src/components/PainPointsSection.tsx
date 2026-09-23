import { Pencil, Ruler, Wallet, UserX } from 'lucide-react';

export function PainPointsSection() {
  const painPoints = [
    {
      icon: <Pencil className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Pierdes horas dibujando',
      description: 'Te desgastas haciendo planos desde cero en papel o en la computadora, cuando ya podrías estar cortando y soldando.'
    },
    {
      icon: <Ruler className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Errores de medida que salen caros',
      description: 'Una medida mal tomada y se pierde el material, el tiempo y la ganancia. Otra vez a comprar metal.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Cobras a ojo y pierdes dinero',
      description: 'Sin conocer el costo real ni el precio de venta, terminas regalando tu trabajo y casi no te queda ganancia.'
    },
    {
      icon: <UserX className="h-6 w-6 text-[#f59e0b] icon-pop" strokeWidth={2.2} />,
      title: 'Pierdes clientes por tardarte',
      description: 'Mientras tú dibujas, el cliente ya se fue con la competencia que le mostró el modelo en el momento.'
    }
  ];

  return (
    <section className="bg-[#0f1620] px-4 py-12 sm:py-16 border-y border-white/5">
      <div className="mx-auto max-w-4xl">
        <h2 className="reveal is-revealed text-center font-extrabold tracking-tight text-[#f59e0b] text-2xl sm:text-3xl md:text-4xl">
          ¿TE PASA ESTO EN EL TALLER?
        </h2>
        <p className="reveal is-revealed reveal-d-1 mt-3 text-center text-sm sm:text-base text-white/80">
          Trabajas duro todos los días… y la ganancia nunca alcanza.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className={`reveal is-revealed reveal-d-${index + 1} rounded-lg border border-white/10 bg-[#141c28] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/40 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]`}
            >
              {item.icon}
              <h3 className="mt-3 font-bold text-base sm:text-lg text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal is-revealed reveal-d-5 mt-8 text-center text-sm sm:text-base text-white/85 italic max-w-2xl mx-auto bg-[#141c28]/60 p-4 rounded-lg border border-white/5">
          "El problema no es la falta de trabajo. Es no tener el proyecto correcto a la mano cuando llega el cliente."
        </p>
      </div>
    </section>
  );
}
