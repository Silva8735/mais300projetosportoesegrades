import { useState, useEffect } from 'react';

export function HeaderBanner() {
  const [dateText, setDateText] = useState('HOJE É O ÚLTIMO DIA DA PROMOÇÃO!');

  useEffect(() => {
    try {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long' 
      };
      const formatted = today.toLocaleDateString('pt-BR', options);
      setDateText(`HOJE (${formatted}) É O ÚLTIMO DIA DA PROMOÇÃO!`);
    } catch {
      setDateText('HOJE É O ÚLTIMO DIA DA PROMOÇÃO!');
    }
  }, []);

  return (
    <header className="relative w-full bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-center px-4 py-2.5 text-xs sm:text-sm font-bold shadow-lg animate-pulse tracking-wide select-none z-20">
      🔥 {dateText} 🔥
    </header>
  );
}
