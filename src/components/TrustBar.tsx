import { Star, ExternalLink, Award, Sparkles, HeartHandshake, CircleDollarSign } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface TrustBarProps {
  language: Language;
}

export default function TrustBar({ language }: TrustBarProps) {
  const isRtl = language === 'ar';

  const trustHighlights = [
    {
      icon: Award,
      title: isRtl ? 'مهنية طبية عالية' : "Doctors' Professionalism",
      desc: isRtl ? 'أطباء ذوو خبرة واهتمام حقيقي بالمريض' : 'Experienced, attentive specialists',
    },
    {
      icon: HeartHandshake,
      title: isRtl ? 'طاقم استقبال ودود' : 'Friendly Reception Staff',
      desc: isRtl ? 'ترحيب حار ومساعدة سريعة باللغات المتعددة' : 'Warm welcome & multilingual guidance',
    },
    {
      icon: Sparkles,
      title: isRtl ? 'نظافة وتعقيم فائق' : 'Immaculate Cleanliness',
      desc: isRtl ? 'بيئة طبية نظيفة ومعدات معقمة دائماً' : 'Sanitized rooms & modern sterile tools',
    },
    {
      icon: CircleDollarSign,
      title: isRtl ? 'أسعار مناسبة وشفافة' : 'Fair, Honest Pricing',
      desc: isRtl ? 'تكلفة علاجية ميسورة وبدون رسوم مفاجئة' : 'Pocket-friendly rates for Dubai families',
    },
  ];

  return (
    <section className="bg-white py-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Card / Google Badge */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-2xl font-black text-amber-400">4.5</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {isRtl ? 'تقييم 4.5 نجوم على خرائط جوجل' : 'Rated 4.5 ★ on Google Reviews'}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                    {isRtl ? 'أكثر من ١٩٥ مراجعة موثقة' : '195+ Verified Reviews'}
                  </span>
                </div>
                <p className="text-sm text-slate-300 max-w-2xl">
                  {isRtl
                    ? 'المراجعون يثنون باستمرار على دقة تشخيص الأطباء، وحسن المعاملة في الاستقبال، والبيئة النظيفة والأسعار المناسبة في ديرة دبي.'
                    : 'Patients frequently praise our doctors’ professionalism, compassionate bedside manner, polite reception team, and transparent outpatient prices.'}
                </p>
              </div>
            </div>

            <a
              id="trust-google-reviews-link"
              href={CLINIC_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-teal-50 font-bold text-sm shadow-md transition-all whitespace-nowrap"
            >
              <span>{isRtl ? 'عرض المراجعات على جوجل' : 'Read 195+ Google Reviews'}</span>
              <ExternalLink className="w-4 h-4 text-teal-600" />
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-teal-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
