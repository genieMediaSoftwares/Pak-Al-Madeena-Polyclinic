import { useState } from 'react';
import { Star, ExternalLink, ThumbsUp, ShieldCheck, Filter } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { Language, Review } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ReviewsSectionProps {
  language: Language;
}

export default function ReviewsSection({ language }: ReviewsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const t = TRANSLATIONS[language];
  const isRtl = language === 'ar';

  const filterOptions = [
    { key: 'all', label: t.reviews.filterAll },
    { key: 'Friendly Staff', label: t.reviews.filterStaff },
    { key: 'Cleanliness', label: t.reviews.filterCleanliness },
    { key: 'Doctor Care', label: t.reviews.filterDoctors },
    { key: 'Fair Pricing', label: t.reviews.filterPricing },
  ];

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.highlightTag === activeFilter);

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-3">
            {isRtl ? 'آراء وتجارب المرضى' : 'Real Patient Testimonials'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.reviews.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {t.reviews.sectionSubtitle}
          </p>
        </div>

        {/* Google Reviews Overview Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              {/* Google stylized G */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-slate-900 leading-none">4.5</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-700 font-medium mt-1">
                  {isRtl ? 'بناءً على أكثر من 195 مراجعة معتمدة على خرائط جوجل' : 'Based on 195+ reviews on Google Maps'}
                </p>
              </div>
            </div>

            <div className="hidden lg:block h-12 w-px bg-slate-200" />

            <div className="hidden lg:flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-100">
                ✓ Doctors’ Professionalism
              </span>
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-100">
                ✓ Friendly Reception
              </span>
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-100">
                ✓ Cleanliness & Hygiene
              </span>
              <span className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-100">
                ✓ Reasonable Pricing
              </span>
            </div>
          </div>

          <a
            id="google-reviews-external-cta"
            href={CLINIC_INFO.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap"
          >
            <span>{t.trust.viewOnGoogle}</span>
            <ExternalLink className="w-4 h-4 text-teal-700" />
          </a>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          <span className="text-xs font-bold text-slate-700 flex items-center gap-1 pl-1 pr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {filterOptions.map((f) => (
            <button
              key={f.key}
              id={`filter-rev-${f.key.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f.key
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev: Review) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-xs`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-tight">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <span>{rev.date}</span>
                        <span>•</span>
                        <span className="text-teal-700 font-semibold">{rev.service}</span>
                      </div>
                    </div>
                  </div>

                  {rev.highlightTag && (
                    <span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 text-[10px] font-bold border border-teal-200">
                      {rev.highlightTag}
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.reviews.verifiedPatient}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-600">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
