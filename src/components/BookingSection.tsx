import { useState, useEffect, FormEvent } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  Stethoscope,
  X
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS } from '../data/clinicData';
import { AppointmentFormData, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BookingSectionProps {
  language: Language;
  preselectedService?: string;
  preselectedDoctor?: string;
  onClearPreselection?: () => void;
}

export default function BookingSection({
  language,
  preselectedService,
  preselectedDoctor,
  onClearPreselection,
}: BookingSectionProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || SERVICES[0].title,
    doctor: preselectedDoctor || '',
    date: '',
    timeSlot: 'morning',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update when preselection props change
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctor: preselectedDoctor }));
    }
  }, [preselectedService, preselectedDoctor]);

  // Set default minimum date to today (or tomorrow)
  const todayDateString = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable booking dispatch
    setTimeout(() => {
      const generatedRef = 'PAM-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Appointment Request - Pak Al Madeena Polyclinic*\n\n` +
      `*Patient Name:* ${formData.fullName || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Doctor:* ${formData.doctor || 'Any Available'}\n` +
      `*Preferred Date:* ${formData.date || 'Earliest available'}\n` +
      `*Time Window:* ${formData.timeSlot}\n` +
      `*Notes:* ${formData.notes || 'None'}\n\n` +
      `Please confirm availability. Thank you!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/971501104783?text=${encoded}`, '_blank');
  };

  return (
    <section id="book" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            {isRtl ? 'حجز المواعيد' : 'Easy Online Scheduling'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.booking.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.booking.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            
            {(preselectedService || preselectedDoctor) && (
              <div className="mb-6 p-3 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between text-xs text-teal-900">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-teal-700" />
                  <span>
                    Selected:{' '}
                    <strong>
                      {preselectedService || ''} {preselectedDoctor ? `with ${preselectedDoctor}` : ''}
                    </strong>
                  </span>
                </div>
                {onClearPreselection && (
                  <button
                    onClick={onClearPreselection}
                    className="text-teal-700 hover:text-teal-900 font-bold p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {t.booking.successTitle}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm">
                  {t.booking.successMessage}
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Reference Code:</span>
                    <span className="font-extrabold text-teal-800">{referenceId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Patient:</span>
                    <span className="font-bold text-slate-900">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Service:</span>
                    <span className="font-bold text-slate-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Date & Time:</span>
                    <span className="font-bold text-slate-900">
                      {formData.date || 'Today/Soon'} ({formData.timeSlot})
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp for Instant Confirmation</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        service: SERVICES[0].title,
                        doctor: '',
                        date: '',
                        timeSlot: 'morning',
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="patient-full-name"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.fullName}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-full-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.booking.fullNamePlaceholder}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="patient-phone"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.phone}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="patient-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.booking.phonePlaceholder}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Service & Doctor selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-service-select"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.selectService}
                    </label>
                    <select
                      id="booking-service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 bg-white"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-doctor-select"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.selectDoctor}
                    </label>
                    <select
                      id="booking-doctor-select"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 bg-white"
                    >
                      <option value="">{t.booking.anyDoctor}</option>
                      {DOCTORS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.specialty})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.preferredDate}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        min={todayDateString}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-time-slot"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      {t.booking.preferredTime}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="booking-time-slot"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900 bg-white"
                      >
                        <option value="morning">{t.booking.morning}</option>
                        <option value="afternoon">{t.booking.afternoon}</option>
                        <option value="evening">{t.booking.evening}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Optional Notes */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    {t.booking.notes}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.booking.notesPlaceholder}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Form Submit & Direct WhatsApp Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    id="submit-appointment-request"
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Submitting...' : t.booking.submitBtn}</span>
                  </button>

                  <button
                    id="send-via-whatsapp-instant"
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>

                {/* Urgent notice */}
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{t.booking.urgentNotice}</span>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Direct Help & Clinic Promises */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact & WhatsApp card */}
            <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-2xl p-6 sm:p-7 text-white shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {isRtl ? 'حجز سريع عبر الهاتف والواتساب' : 'Fast Booking & Inquiries'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                {isRtl
                  ? 'قسم الاستقبال في مجمع باك المدينة الطبي جاهز دائماً لمساعدتك في تحديد موعد مناسب أو الرد على استفساراتك الطبية.'
                  : 'Prefer speaking directly with our Hor Al Anz reception desk? Call or chat with us instantly on WhatsApp.'}
              </p>

              <div className="space-y-3">
                <a
                  id="booking-side-call"
                  href={CLINIC_INFO.telLink}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500 text-white flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-300 block">{isRtl ? 'اتصال مباشر' : 'Call Reception'}</span>
                      <span className="font-bold text-sm text-white">{CLINIC_INFO.displayPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-300">{isRtl ? 'اتصال' : 'Call'} →</span>
                </a>

                <a
                  id="booking-side-whatsapp"
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-400/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-emerald-200 block">{isRtl ? 'محادثة فورية' : 'WhatsApp Support'}</span>
                      <span className="font-bold text-sm text-white">{CLINIC_INFO.displayPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300">{isRtl ? 'محادثة' : 'Chat'} →</span>
                </a>
              </div>
            </div>

            {/* Clinic Guarantees */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3.5 text-xs text-slate-700">
              <h4 className="font-bold text-sm text-slate-900 pb-2 border-b border-slate-200">
                {isRtl ? 'معلومات هامة للمراجعين' : 'Patient Convenience Assurances'}
              </h4>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Walk-ins Welcome:</strong> While appointments reduce wait times, walk-in general consultations are always accommodated.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Immediate Scan Reports:</strong> Ultrasound sonography reports and imaging films are provided on the same day.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Multilingual Staff:</strong> Fluent in English, Arabic, Urdu, Hindi, and Punjabi to make every family feel at home.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
