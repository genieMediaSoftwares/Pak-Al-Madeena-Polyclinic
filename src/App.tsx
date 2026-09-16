import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import DoctorsSection from './components/DoctorsSection';
import ReviewsSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import ContactAndMap from './components/ContactAndMap';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>();

  // Sync RTL / LTR document direction with chosen language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const scrollToBooking = (service?: string, doctor?: string) => {
    if (service) setPreselectedService(service);
    if (doctor) setPreselectedDoctor(doctor);
    
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceTitle: string) => {
    scrollToBooking(serviceTitle, undefined);
  };

  const handleSelectDoctor = (doctorName: string, specialty: string) => {
    scrollToBooking(specialty, doctorName);
  };

  const handleClearPreselection = () => {
    setPreselectedService(undefined);
    setPreselectedDoctor(undefined);
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
      {/* Sticky Header with Navigation & Mobile Quick Call */}
      <Header
        language={language}
        setLanguage={setLanguage}
        onBookClick={() => scrollToBooking()}
      />

      {/* Hero Section */}
      <Hero
        language={language}
        onBookClick={() => scrollToBooking()}
      />

      {/* Trust & Google Reviews Bar */}
      <TrustBar language={language} />

      {/* Services Departments */}
      <ServicesSection
        language={language}
        onBookService={handleBookService}
      />

      {/* Medical Doctors & Team */}
      <DoctorsSection
        language={language}
        onSelectDoctor={handleSelectDoctor}
      />

      {/* Google Patient Reviews & Ratings */}
      <ReviewsSection language={language} />

      {/* Interactive Appointment Booking Form */}
      <BookingSection
        language={language}
        preselectedService={preselectedService}
        preselectedDoctor={preselectedDoctor}
        onClearPreselection={handleClearPreselection}
      />

      {/* Contact, Working Hours & Embedded Google Map */}
      <ContactAndMap language={language} />

      {/* Frequently Asked Questions */}
      <FAQSection language={language} />

      {/* Footer */}
      <Footer
        language={language}
        onBookClick={() => scrollToBooking()}
      />

      {/* Mobile-only persistent bottom conversion bar */}
      <MobileStickyBar
        language={language}
        onBookClick={() => scrollToBooking()}
      />
    </div>
  );
}
