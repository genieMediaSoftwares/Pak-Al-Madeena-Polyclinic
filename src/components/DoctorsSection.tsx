import { Calendar, Globe2, Award, Clock } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { Doctor, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface DoctorsSectionProps {
  language: Language;
  onSelectDoctor: (doctorName: string, specialty: string) => void;
}

export default function DoctorsSection({ language, onSelectDoctor }: DoctorsSectionProps) {
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  return (
    <section id="doctors" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            {isRtl ? 'الفريق الطبي' : 'Experienced Medical Professionals'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.doctors.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.doctors.sectionSubtitle}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DOCTORS.map((doc: Doctor) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group"
            >
              {/* Doctor Avatar/Photo */}
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-teal-600/90 backdrop-blur-xs font-bold">
                      {doc.experienceYears}+ {isRtl ? 'سنوات خبرة' : 'Years Experience'}
                    </span>
                    <span className="px-2 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs font-medium text-[11px]">
                      MOHAP / DHA
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-600 mt-0.5">
                      {doc.role}
                    </p>
                    <p className="text-[11px] text-slate-700 mt-1 line-clamp-1">
                      {doc.qualifications}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  {/* Languages Spoken (Key for multicultural Dubai community) */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium mb-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{t.doctors.languages}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {doc.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-700 pt-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{doc.availableDays}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  id={`book-doctor-${doc.id}`}
                  onClick={() => onSelectDoctor(doc.name, doc.specialty)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white border border-teal-200 hover:border-teal-600 font-bold text-xs transition-all shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'طلب موعد مع الطبيب' : 'Book with Doctor'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                {isRtl ? 'أطباء مرخصون وممارسون معتمدون' : 'Licensed & DHA-Registered Medical Staff'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {isRtl ? 'جميع أطبائنا يحملون تراخيص رسمية ويلتزمون بأعلى المعايير الصحية' : 'All practitioners strictly adhere to clinical protocols and evidence-based medicine.'}
              </p>
            </div>
          </div>

          <button
            id="consult-desk-action"
            onClick={() => onSelectDoctor('First Available Doctor', 'General Consultation')}
            className="whitespace-nowrap px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all"
          >
            {isRtl ? 'استشارة عامة سريعة' : 'Consult Available Doctor'}
          </button>
        </div>

      </div>
    </section>
  );
}
