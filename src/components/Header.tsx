import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, Calendar, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onBookClick: (serviceId?: string) => void;
}

export default function Header({ language, setLanguage, onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#doctors', label: t.nav.doctors },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick contact & hours */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span>{isRtl ? 'مفتوح اليوم حتى ١٠:٠٠ مساءً' : 'Open Today: 8:30 AM – 10:00 PM'}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{isRtl ? 'ديرة، هور العنز، دبي' : 'Hor Al Anz, Deira, Dubai'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="topbar-call"
              href={CLINIC_INFO.telLink}
              className="flex items-center gap-1 text-slate-200 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              <span className="font-semibold">{CLINIC_INFO.displayPhone}</span>
            </a>

            <button
              id="lang-toggle-top"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-slate-700 transition-all text-xs font-semibold"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Clinic Brand */}
            <a
              id="clinic-logo-home"
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-xl tracking-tighter">PAM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight group-hover:text-teal-700 transition-colors">
                  {isRtl ? CLINIC_INFO.nameArabic : CLINIC_INFO.name}
                </span>
                <span className="text-xs text-slate-700 font-medium">
                  {isRtl ? 'رعاية طبية موثوقة · ديرة دبي' : 'Deira, Dubai · General Practice, Gynae, Dental & Ultrasound'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="header-whatsapp-btn"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold text-sm transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
                <span>{t.nav.whatsapp}</span>
              </a>

              <a
                id="header-call-btn"
                href={CLINIC_INFO.telLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{t.nav.callNow}</span>
              </a>

              <button
                id="header-book-btn"
                onClick={() => onBookClick()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm shadow-sm transition-all hover:shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>

            {/* Mobile Actions: Call Button & Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                id="mobile-header-call"
                href={CLINIC_INFO.telLink}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold"
                aria-label="Call clinic directly"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>{t.nav.callNow}</span>
              </a>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>{CLINIC_INFO.hours.weekdays}</span>
              </div>
              <button
                id="mobile-lang-btn"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded border border-teal-200"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left w-full px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                id="mobile-menu-wa"
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                id="mobile-menu-book"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-teal-600 text-white font-semibold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookAppointment}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
