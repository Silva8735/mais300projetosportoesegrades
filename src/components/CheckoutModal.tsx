import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ShieldCheck, Zap, CreditCard, QrCode } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKit: 'basico' | 'completo';
}

export function CheckoutModal({ isOpen, onClose, selectedKit: initialKit }: CheckoutModalProps) {
  const [currentKit, setCurrentKit] = useState<'basico' | 'completo'>(initialKit);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Sync state if prop changes
  React.useEffect(() => {
    setCurrentKit(initialKit);
  }, [initialKit]);

  if (!isOpen) return null;

  const price = currentKit === 'completo' ? 'R$ 27,00' : 'R$ 17,00';
  const planName = currentKit === 'completo' 
    ? 'Plano Completo (300 Projetos + 4 Bônus Exclusivos)' 
    : 'Plano Básico (300 Projetos + Tabela de Material e Mão de Obra)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0f1620] border border-[#f59e0b]/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#141c28]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
              Ambiente Seguro e Criptografado
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-white uppercase">
                Acesso Liberado com Sucesso!
              </h3>
              <p className="text-sm text-white/80 max-w-sm mx-auto leading-relaxed">
                Enviamos os dados de acesso e o link para download da biblioteca completa para o e-mail:
              </p>
              <div className="p-3 rounded-lg bg-black/40 border border-[#f59e0b]/30 text-sm font-mono font-bold text-[#f59e0b]">
                {email || 'seu-email@exemplo.com'}
              </div>
              <p className="text-xs text-white/60">
                Verifique também sua caixa de spam ou lixo eletrônico. Bons projetos e boas vendas!
              </p>
              <button
                onClick={onClose}
                className="btn-shine w-full py-3.5 rounded-lg bg-[#f59e0b] text-black font-extrabold text-sm uppercase tracking-wide cursor-pointer mt-4"
              >
                Concluir e Voltar
              </button>
            </div>
          ) : (
            <>
              {/* Product summary banner */}
              <div className="p-4 rounded-xl bg-[#141c28] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white/60">PRODUTO:</span>
                  <span className="text-xl font-black text-[#f59e0b]">{price}</span>
                </div>
                <h4 className="text-sm font-bold text-white leading-snug">
                  {planName}
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold pt-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Acesso digital imediato no seu e-mail</span>
                </div>
              </div>

              {/* Upgrade switch if basic is chosen */}
              {currentKit === 'basico' && (
                <div 
                  onClick={() => setCurrentKit('completo')}
                  className="p-3.5 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/40 cursor-pointer hover:bg-[#f59e0b]/15 transition-all flex items-center justify-between gap-3"
                >
                  <div className="text-xs">
                    <span className="font-black text-[#f59e0b] block uppercase">
                      Levar Plano Completo por apenas +R$ 10?
                    </span>
                    <span className="text-white/80 text-[11px]">
                      Inclui Catálogo de Modelos, Calculadora de Orçamento, Ficha de Medidas e Checklist.
                    </span>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded bg-[#f59e0b] text-black text-xs font-black uppercase">
                    Mudar para R$ 27
                  </span>
                </div>
              )}

              {/* Payment tabs */}
              <div>
                <label className="text-xs font-bold uppercase text-white/70 block mb-2">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-sm'
                        : 'bg-black/30 border-white/10 text-white/70 hover:border-white/30'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Pix (Imediato)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#f59e0b]/20 border-[#f59e0b] text-[#f59e0b] shadow-sm'
                        : 'bg-black/30 border-white/10 text-white/70 hover:border-white/30'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-1">
                    Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: João da Silva Serralheiro"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-1">
                    E-mail (onde você receberá os projetos):
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: seu-email@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/80 block mb-1">
                    WhatsApp / Telefone com DDD:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-sm text-white focus:outline-none focus:border-[#f59e0b]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn-shine cta-pulse w-full py-4 rounded-lg bg-[#f59e0b] hover:bg-[#d97706] text-black font-black text-sm uppercase tracking-wider cursor-pointer transition-all shadow-[0_4px_25px_rgba(245,158,11,0.4)] mt-2"
                >
                  {isProcessing ? 'Processando Inscrição...' : `FINALIZAR PAGAMENTO DE ${price}`}
                </button>
              </form>

              {/* Guarantees */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-white/60 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Garantia de 7 dias</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pagamento Seguro</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
