import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface NotificationData {
  name: string;
  city: string;
  product: string;
  timeAgo: string;
}

export function SalesNotificationToast() {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const notifications: NotificationData[] = [
    { name: 'Carlos M.', city: 'Campinas - SP', product: 'Plano Completo (R$ 27)', timeAgo: 'há 2 minutos' },
    { name: 'Antônio S.', city: 'Belo Horizonte - MG', product: 'Plano Completo (R$ 27)', timeAgo: 'há 4 minutos' },
    { name: 'Rodrigo F.', city: 'Curitiba - PR', product: 'Plano Básico (R$ 17)', timeAgo: 'há 6 minutos' },
    { name: 'Marcos L.', city: 'Goiânia - GO', product: 'Plano Completo (R$ 27)', timeAgo: 'há 8 minutos' },
    { name: 'José Roberto', city: 'Ribeirão Preto - SP', product: 'Plano Completo (R$ 27)', timeAgo: 'há 11 minutos' },
    { name: 'Valdecir T.', city: 'Joinville - SC', product: 'Plano Básico (R$ 17)', timeAgo: 'há 15 minutos' },
    { name: 'Fábio H.', city: 'Porto Alegre - RS', product: 'Plano Completo (R$ 27)', timeAgo: 'há 3 minutos' },
    { name: 'Luciano P.', city: 'Fortaleza - CE', product: 'Plano Completo (R$ 27)', timeAgo: 'há 1 minuto' }
  ];

  useEffect(() => {
    let index = 0;
    const triggerNotification = () => {
      setNotification(notifications[index % notifications.length]);
      setVisible(true);
      index++;

      setTimeout(() => {
        setVisible(false);
      }, 5500);
    };

    const initialTimeout = setTimeout(triggerNotification, 4000);
    const interval = setInterval(triggerNotification, 16000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm rounded-xl border border-emerald-500/40 bg-[#141c28]/95 p-3.5 shadow-2xl backdrop-blur-md transition-all duration-500 animate-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <ShoppingBag className="h-5 w-5" />
        </div>
        <div className="text-xs">
          <div className="flex items-center gap-1 font-bold text-white">
            <span>{notification.name}</span>
            <span className="text-white/50 font-normal">({notification.city})</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 ml-1 inline" />
          </div>
          <p className="text-[#f59e0b] font-semibold text-[11px] leading-tight mt-0.5">
            Comprou {notification.product}
          </p>
          <span className="text-[10px] text-white/50">{notification.timeAgo}</span>
        </div>
      </div>
    </div>
  );
}
