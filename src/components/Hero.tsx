import { Phone, MessageCircle, Calendar, Star, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  language: Language;
  onBookClick: () => void;
}

export default function Hero({ language, onBookClick }: HeroProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-slate-50 to-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-slate-200/80"
    >
      {/* Subtle medical background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Rating Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-teal-200/80 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-teal-900">{CLINIC_INFO.googleRating} ★</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-700">{isRtl ? 'أكثر من ١٩٥ مراجعة على جوجل' : '195+ Patient Reviews on Google'}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {isRtl ? (
                  <>
                    مجمع <span className="text-teal-700">باك المدينة</span> الطبي
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 mt-2">
                      رعايتك الصحية الموثوقة في هور العنز، ديرة دبي
                    </span>
                  </>
                ) : (
                  <>
                    Quality Medical Care You Can Trust at{' '}
                    <span className="text-teal-700">Pak Al Madeena</span> Polyclinic
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                {isRtl ? t.hero.subtitle : 'Comprehensive General Practice, Gynecology, Gentle Dentistry, and High-Resolution Ultrasound scans. Praised by the Deira community for medical professionalism, friendly reception, immaculate cleanliness, and transparent, affordable rates.'}
              </p>
            </div>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                t.hero.feature1,
                t.hero.feature2,
                t.hero.feature3,
                t.hero.feature4,
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Prominent CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-book-btn"
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all transform active:scale-98"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.hero.bookBtn}</span>
              </button>

              <a
                id="hero-call-btn"
                href={CLINIC_INFO.telLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>{isRtl ? 'اتصل بنا: 0501104783' : 'Call: +971 50 110 4783'}</span>
              </a>

              <a
                id="hero-whatsapp-btn"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.hero.whatsappBtn}</span>
              </a>
            </div>

            {/* Quick Location & Metro Distance Note */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>103 Abu Baker Al Siddique St, Hor Al Anz, Deira</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Near Abu Baker Al Siddique Metro (Green Line)</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary featured clinic card */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                    alt="Pak Al Madeena Polyclinic Hor Al Anz Deira"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-teal-300 font-bold">
                          {isRtl ? 'هور العنز، دبي' : 'Hor Al Anz, Deira'}
                        </p>
                        <h3 className="text-lg font-bold text-white">
                          {isRtl ? CLINIC_INFO.nameArabic : CLINIC_INFO.name}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        {isRtl ? 'مفتوح الآن' : 'Open Today'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid inside card */}
                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-100">
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        <Star className="w-4 h-4 fill-amber-400" />
                        <span className="font-extrabold text-slate-900 text-base">4.5 / 5.0</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">195+ Google Reviews</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-1 text-teal-600 mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="font-extrabold text-slate-900 text-base">Affordable</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">Clear & Fair Pricing</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{isRtl ? 'ساعات الدوام (السبت-الخميس):' : 'Sat – Thu Hours:'}</span>
                      <span className="font-bold text-slate-800">8:30 AM – 10:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{isRtl ? 'ساعات الجمعة:' : 'Friday Hours:'}</span>
                      <span className="font-bold text-slate-800">2:00 PM – 10:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700">{isRtl ? 'اللغات المحكية:' : 'Spoken Languages:'}</span>
                      <span className="font-bold text-teal-700">English, Arabic, Urdu, Hindi</span>
                    </div>
                  </div>

                  {/* Fast Action */}
                  <div className="pt-2">
                    <a
                      id="hero-card-call-action"
                      href={CLINIC_INFO.telLink}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-sm border border-teal-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-teal-600" />
                      <span>{isRtl ? 'اتصل بالاستقبال: 0501104783' : 'Direct Reception: +971 50 110 4783'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
