import { MapPin, Phone, MessageCircle, Clock, Navigation, Train, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactAndMapProps {
  language: Language;
}

export default function ContactAndMap({ language }: ContactAndMapProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            {isRtl ? 'الموقع والتواصل' : 'Location & Clinic Hours'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards, Hours & Metro Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-slate-900">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    {isRtl ? CLINIC_INFO.addressArabic : CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Hor Al Anz, Deira, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-teal-800 font-semibold">
                  <Train className="w-3.5 h-3.5 text-teal-600" />
                  <span>Near Abu Baker Al Siddique Metro</span>
                </div>
                <a
                  id="directions-link-action"
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>{t.contact.getDirections}</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {t.contact.phoneTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isRtl ? 'اتصل أو راسلنا عبر الواتساب' : 'Call directly or chat on WhatsApp'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  id="contact-box-tel"
                  href={CLINIC_INFO.telLink}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>{CLINIC_INFO.displayPhone}</span>
                </a>

                <a
                  id="contact-box-whatsapp"
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Clinic Consultation Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {t.contact.hoursTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {isRtl ? 'أوقات الاستشارات والزيارات اليومية' : 'Daily outpatient consultation hours'}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50">
                  <span className="font-semibold text-slate-700">Saturday – Thursday:</span>
                  <span className="font-extrabold text-slate-900">8:30 AM – 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-teal-50/70 border border-teal-100">
                  <span className="font-semibold text-teal-900">Friday (After Prayers):</span>
                  <span className="font-extrabold text-teal-900">2:00 PM – 10:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-3 shadow-xs flex flex-col min-h-[420px]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">
                  103 Abu Baker Al Siddique St, Hor Al Anz, Deira
                </span>
              </div>
              <a
                id="view-large-map-btn"
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>

            {/* Responsive Iframe Container */}
            <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-100 min-h-[350px]">
              <iframe
                title="Pak Al Madeena Polyclinic Hor Al Anz Deira Location Map"
                src={CLINIC_INFO.mapEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            
            <div className="mt-3 px-3 py-2 bg-slate-50 rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-2">
              <span>Parking: Roadside RTA parking is readily available in front of the clinic.</span>
              <span className="font-bold text-teal-700">Metro: Green Line, Abu Baker Al Siddique</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
