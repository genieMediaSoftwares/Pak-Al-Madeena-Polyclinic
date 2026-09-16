import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface MobileStickyBarProps {
  language: Language;
  onBookClick: () => void;
}

export default function MobileStickyBar({ language, onBookClick }: MobileStickyBarProps) {
  const isRtl = language === 'ar';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          id="mobile-sticky-call"
          href={CLINIC_INFO.telLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white active:bg-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-400 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">
            {isRtl ? 'اتصال' : 'Call'}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-sticky-whatsapp"
          href={CLINIC_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          id="mobile-sticky-book"
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-600 text-white active:bg-teal-700 transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">
            {isRtl ? 'حجز موعد' : 'Book'}
          </span>
        </button>
      </div>
    </div>
  );
}
