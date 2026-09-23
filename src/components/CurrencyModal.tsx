import { X, Check } from 'lucide-react';

interface CurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectKit: (kit: 'basico' | 'profesional') => void;
}

export function CurrencyModal({ isOpen, onClose, onSelectKit }: CurrencyModalProps) {
  if (!isOpen) return null;

  const conversions = [
    { country: 'México', flag: '🇲🇽', currency: 'MXN', basico: '$39 MXN', pro: '$99 MXN', note: 'OXXO, Tarjeta, Mercado Pago' },
    { country: 'Colombia', flag: '🇨🇴', currency: 'COP', basico: '$8.200 COP', pro: '$19.900 COP', note: 'PSE, Tarjeta, Efecty' },
    { country: 'Argentina', flag: '🇦🇷', currency: 'ARS', basico: '$2.400 ARS', pro: '$5.900 ARS', note: 'Tarjeta, Mercado Pago' },
    { country: 'Chile', flag: '🇨🇱', currency: 'CLP', basico: '$1.950 CLP', pro: '$4.800 CLP', note: 'Webpay, Sencillito, Tarjeta' },
    { country: 'Perú', flag: '🇵🇪', currency: 'PEN', basico: 'S/ 7.50', pro: 'S/ 18.90', note: 'PagoEfectivo, Tarjeta, Yape' },
    { country: 'España / Europa', flag: '🇪🇸', currency: 'EUR', basico: '1,89 €', pro: '4,69 €', note: 'Tarjeta, PayPal' },
    { country: 'Brasil', flag: '🇧🇷', currency: 'BRL', basico: 'R$ 10,90', pro: 'R$ 27,90', note: 'Pix, Boleto, Cartão' },
    { country: 'Estados Unidos / Global', flag: '🇺🇸', currency: 'USD', basico: '$1.99 USD', pro: '$4.99 USD', note: 'Credit/Debit Card, PayPal' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0f1620] border border-[#f59e0b]/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141c28]">
          <div className="flex items-center gap-2">
            <span className="text-xl">💱</span>
            <h3 className="text-base sm:text-lg font-extrabold text-white">
              Conversión a tu Moneda Local
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-5 space-y-4">
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Al ir al checkout, la pasarela de pago oficial de Hotmart detecta automáticamente tu país y te permite abonar en tu moneda local con métodos de pago nacionales (tarjeta, efectivo local o transferencias bancarias).
          </p>

          <div className="rounded-lg border border-white/10 overflow-hidden divide-y divide-white/5 bg-[#141c28]">
            <div className="grid grid-cols-12 px-3 py-2 text-[11px] font-bold text-white/50 uppercase bg-black/30">
              <span className="col-span-5">País / Moneda</span>
              <span className="col-span-3 text-center">Kit Básico</span>
              <span className="col-span-4 text-right text-[#f59e0b]">Kit Profesional 🔥</span>
            </div>

            {conversions.map((c, i) => (
              <div key={i} className="grid grid-cols-12 px-3 py-2.5 items-center text-xs hover:bg-white/5 transition-colors">
                <div className="col-span-5 flex items-center gap-2">
                  <span className="text-base">{c.flag}</span>
                  <div>
                    <span className="font-bold text-white block">{c.country}</span>
                    <span className="text-[10px] text-white/50 block">{c.note}</span>
                  </div>
                </div>
                <div className="col-span-3 text-center font-medium text-white/80">
                  {c.basico}
                </div>
                <div className="col-span-4 text-right font-extrabold text-[#f59e0b]">
                  {c.pro}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Todos los precios son de <strong>pago único</strong> para acceso de por vida. Sin mensualidades ni cobros ocultos.</span>
          </div>
        </div>

        <div className="px-5 py-3.5 border-t border-white/10 bg-[#141c28] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-md text-xs font-bold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            Entendido
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectKit('profesional');
            }}
            className="cta-pulse btn-shine px-5 py-2.5 rounded-md bg-[#f59e0b] text-black text-xs sm:text-sm font-black uppercase tracking-wide cursor-pointer"
          >
            Asegurar Kit Profesional ($4.99)
          </button>
        </div>
      </div>
    </div>
  );
}
