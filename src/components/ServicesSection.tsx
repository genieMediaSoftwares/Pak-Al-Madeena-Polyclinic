import { useState } from 'react';
import { 
  Stethoscope, 
  HeartPulse, 
  Smile, 
  Activity, 
  Microscope, 
  Check, 
  Calendar, 
  ArrowRight,
  UserCheck,
  MessageCircle,
  type LucideIcon
} from 'lucide-react';

import { SERVICES } from '../data/clinicData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  language: Language;
  onBookService: (serviceTitle: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Smile,
  Activity,
  Microscope,
};


export default function ServicesSection({ language, onBookService }: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const ActiveIcon = iconMap[activeService.iconName] || Stethoscope;

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            {isRtl ? 'الأقسام الطبية' : 'Departments & Specializations'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Mobile & Desktop Service Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
          {SERVICES.map((srv) => {
            const IconComponent = iconMap[srv.iconName] || Stethoscope;
            const isSelected = srv.id === selectedServiceId;
            return (
              <button
                key={srv.id}
                id={`service-tab-${srv.id}`}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left sm:text-center transition-all flex flex-col items-start sm:items-center justify-between border cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-700/20 ring-2 ring-teal-600/30'
                    : 'bg-white text-slate-700 hover:bg-teal-50/70 border-slate-200/90 shadow-xs'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-teal-50 text-teal-600'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-sm block leading-tight">
                    {srv.id === 'general-practice' ? (isRtl ? 'الطب العام' : 'General Practice') : ''}
                    {srv.id === 'gynecology' ? (isRtl ? 'النساء والتوليد' : 'Gynecology & Obs') : ''}
                    {srv.id === 'dentistry' ? (isRtl ? 'طب الأسنان' : 'Dentistry') : ''}
                    {srv.id === 'ultrasound' ? (isRtl ? 'الأشعة التلفزيونية' : 'Ultrasound Scans') : ''}
                    {srv.id === 'outpatient-lab' ? (isRtl ? 'العيادات والتحاليل' : 'Outpatient & Lab') : ''}
                  </span>
                  <span
                    className={`text-[11px] block mt-1 line-clamp-1 ${
                      isSelected ? 'text-teal-100' : 'text-slate-500'
                    }`}
                  >
                    {srv.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Description & Who it is for */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                    {activeService.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-700 mt-1">
                    {activeService.tagline}
                  </p>
                </div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                {activeService.description}
              </p>

              {/* Who it's for card */}
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-1.5">
                  <UserCheck className="w-4 h-4 text-teal-600" />
                  <span>{t.services.whoItsForLabel}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeService.whoItsFor}
                </p>
              </div>

              {/* Action Buttons for this service */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id={`book-service-${activeService.id}`}
                  onClick={() => onBookService(activeService.title)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isRtl ? `احجز موعد في قسم ${activeService.title}` : `Book Appointment for ${activeService.title}`}</span>
                </button>

                <a
                  id={`whatsapp-service-${activeService.id}`}
                  href={`https://wa.me/971501104783?text=${encodeURIComponent(`Hello Pak Al Madeena Polyclinic, I would like to inquire about your ${activeService.title} services.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{isRtl ? 'استفسار عبر واتساب' : 'Inquire via WhatsApp'}</span>
                </a>

              </div>
            </div>

            {/* Right Column: Key treatments & offers checklist */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-xl p-6 border border-slate-200 space-y-4">
              <h4 className="font-bold text-base text-slate-900 flex items-center justify-between pb-3 border-b border-slate-200">
                <span>{t.services.whatWeOfferLabel}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                  {activeService.features.length} Procedures
                </span>
              </h4>

              <ul className="space-y-3">
                {activeService.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

              {activeService.pricingNote && (
                <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Pricing policy:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                    {activeService.pricingNote}
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Quick Grid of all 4 main departments for quick scanning on mobile/print */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.slice(0, 4).map((srv) => {
            const IconC = iconMap[srv.iconName] || Stethoscope;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                    <IconC className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{srv.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">{srv.tagline}</p>
                </div>
                <button
                  id={`quick-book-${srv.id}`}
                  onClick={() => onBookService(srv.title)}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
                >
                  <span>{isRtl ? 'حجز موعد' : 'Book Consultation'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
