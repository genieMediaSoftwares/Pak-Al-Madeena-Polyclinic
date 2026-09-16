import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
  onBookClick: () => void;
}

export default function Footer({ language, onBookClick }: FooterProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Clinic Brand & Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-extrabold shadow-md">
                PAM
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block leading-tight">
                  {isRtl ? CLINIC_INFO.nameArabic : CLINIC_INFO.name}
                </span>
                <span className="text-xs text-teal-400 font-medium">
                  {isRtl ? 'هور العنز، ديرة، دبي' : 'Hor Al Anz, Deira, Dubai'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                id="footer-call-link"
                href={CLINIC_INFO.telLink}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 hover:text-white hover:bg-teal-600 transition-colors"
                aria-label="Call Clinic"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                id="footer-wa-link"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
                aria-label="WhatsApp Clinic"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                id="footer-map-link"
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:text-white hover:bg-amber-600 transition-colors"
                aria-label="Clinic Directions on Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                <span>Licensed Outpatient Polyclinic · UAE Health Authority Compliant</span>
              </div>
            </div>
          </div>

          {/* Clinical Departments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Clinic Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-slate-400 hover:text-teal-300 transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-slate-400 hover:text-teal-300 transition-colors">
                  {t.nav.doctors}
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-400 hover:text-teal-300 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-teal-300 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-teal-400 hover:text-teal-300 font-bold transition-colors cursor-pointer"
                >
                  {t.nav.bookAppointment}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Details */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{CLINIC_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={CLINIC_INFO.telLink} className="hover:text-white font-bold">
                  {CLINIC_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-bold"
                >
                  WhatsApp: +971 50 110 4783
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1 text-[11px] text-slate-400">
                <div className="flex items-center gap-1 text-slate-300 font-semibold">
                  <Clock className="w-3 h-3 text-teal-400" />
                  <span>Working Hours:</span>
                </div>
                <p>{CLINIC_INFO.hours.weekdays}</p>
                <p>{CLINIC_INFO.hours.friday}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. {t.footer.copyright}</p>
          <p className="text-[11px] text-slate-500">{t.footer.emergencyNote}</p>
        </div>

      </div>
    </footer>
  );
}
