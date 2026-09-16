import { ClinicInfo, Doctor, Review, ServiceItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Pak Al Madeena Polyclinic',
  nameArabic: 'مجمع باك المدينة الطبي',
  tagline: 'Trusted & Affordable Healthcare for Dubai Families',
  taglineArabic: 'رعاية صحية موثوقة وميسورة التكلفة لعائلات دبي',
  address: '103 Abu Baker Al Siddique St, Hor Al Anz, Deira, Dubai, UAE',
  addressArabic: '١٠٣ شارع أبو بكر الصديق، هور العنز، ديرة، دبي، الإمارات',
  area: 'Hor Al Anz, Deira, Dubai',
  phone: '+971501104783',
  displayPhone: '+971 50 110 4783',
  whatsapp: '971501104783',
  whatsappLink: 'https://wa.me/971501104783?text=Hello%20Pak%20Al%20Madeena%20Polyclinic,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.',
  telLink: 'tel:+971501104783',
  email: 'info@pakalmadeenapolyclinic.com',
  googleRating: 4.5,
  reviewCount: 195,
  // Google Maps embed URL using the specific address in Hor Al Anz Deira
  mapEmbedUrl: 'https://maps.google.com/maps?q=103+Abu+Baker+Al+Siddique+St,+Hor+Al+Anz,+Deira,+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=103+Abu+Baker+Al+Siddique+St+Hor+Al+Anz+Deira+Dubai',
  metroStation: 'Near Abu Baker Al Siddique Metro Station (Green Line) - 4 min walk',
  hours: {
    weekdays: 'Saturday – Thursday: 8:30 AM – 10:00 PM',
    friday: 'Friday: 2:00 PM – 10:00 PM',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-practice',
    title: 'General Practice & Family Medicine',
    tagline: 'Comprehensive primary care for adults and children',
    iconName: 'Stethoscope',
    description:
      'Our General Practice department provides compassionate, continuous primary care for patients of all ages. From sudden seasonal viral infections to chronic conditions such as hypertension and diabetes, our experienced physicians deliver personalized treatment plans.',
    whoItsFor:
      'Individuals and families requiring medical evaluations, health checkups, sick leave certifications, lab tests, blood pressure management, and chronic disease follow-ups.',
    features: [
      'Acute illness diagnostics & symptom relief',
      'Diabetes, cholesterol & blood pressure management',
      'Routine health screenings & general wellness checks',
      'Blood tests, lab screenings & rapid diagnostic panels',
      'Minor wound dressings, sutures & first aid',
    ],
    pricingNote: 'Transparent & affordable consultation fees',
  },
  {
    id: 'gynecology',
    title: 'Gynecology & Obstetrics',
    tagline: "Dedicated women's health and maternity care",
    iconName: 'HeartPulse',
    description:
      "A safe, supportive, and private clinical environment for women through all life stages. We provide expert antenatal checkups, routine gynecological screenings, menstrual irregularity management, fertility counseling, and maternal wellness care.",
    whoItsFor:
      'Expectant mothers seeking trusted prenatal care, women experiencing reproductive health concerns, hormonal imbalances, pelvic discomfort, or seeking routine wellness exams.',
    features: [
      'Comprehensive prenatal & antenatal pregnancy care',
      'High-resolution obstetric fetal growth monitoring',
      'Management of PCOS, menstrual irregularities & fibroids',
      'Pelvic ultrasound & cervical health screenings',
      'Pre-conception guidance & post-natal wellness checks',
    ],
    pricingNote: 'Affordable maternity packages & scans',
  },
  {
    id: 'dentistry',
    title: 'Dentistry & Oral Care',
    tagline: 'Modern, gentle dental solutions for the entire family',
    iconName: 'Smile',
    description:
      'Our dental clinic offers gentle, pain-managed dental procedures utilizing modern sterilized instruments. Whether you need an emergency toothache treatment, deep tartar scaling, cavity filling, or a smile makeover, we ensure maximum comfort.',
    whoItsFor:
      'Patients experiencing toothache, sensitive gums, bad breath, dental cavities, chipped teeth, or seeking preventive dental cleanings and cosmetic brightening.',
    features: [
      'Ultrasonic teeth scaling, polishing & plaque removal',
      'Composite aesthetic tooth-colored fillings',
      'Root canal treatments & emergency pain alleviation',
      'Crowns, bridges, dental extractions & restorations',
      'Pediatric dental care & preventive fluoride treatments',
    ],
    pricingNote: 'Special pricing on scaling & polishing',
  },
  {
    id: 'ultrasound',
    title: 'Ultrasound & Fetal Medicine Scans',
    tagline: 'Precision diagnostic imaging with state-of-the-art sonography',
    iconName: 'Activity',
    description:
      'Equipped with advanced diagnostic ultrasound machines, our imaging unit delivers clear, high-resolution sonograms for pregnancy monitoring, pelvic evaluations, abdominal diagnostics, and soft tissue assessments with same-day reports.',
    whoItsFor:
      'Expectant parents looking to monitor fetal health and milestones, as well as patients referred for abdominal pain, gallbladder/liver checks, kidney evaluations, and thyroid scans.',
    features: [
      '2D/3D Obstetric pregnancy ultrasound & anomaly scans',
      'Fetal wellbeing, gestational age & growth assessments',
      'Complete pelvic & transvaginal ultrasound imaging',
      'Abdominal, liver, gallbladder & renal tract sonography',
      'Fast, same-day digital scan reports & doctor consultation',
    ],
    pricingNote: 'Immediate report delivery after scan',
  },
  {
    id: 'outpatient-lab',
    title: 'Outpatient Consultations & Diagnostics',
    tagline: 'Fast turnaround lab work, ECG, and immediate outpatient care',
    iconName: 'Microscope',
    description:
      'Convenient walk-in outpatient medical consultations with on-site rapid diagnostic testing, ECG recordings, nebulizer treatments, glucose monitoring, and medication administration.',
    whoItsFor:
      'Patients seeking quick walk-in doctor evaluations without long waiting times in Deira, including urgent pain relief, lab investigations, or medical fitness checks.',
    features: [
      'On-site 12-lead ECG & cardiac rhythm screening',
      'Rapid blood glucose, HbA1c & lipid panels',
      'Nebulization for asthma & acute respiratory distress',
      'Urinalysis, complete blood count (CBC) & kidney function',
      'Walk-in availability with minimal wait times',
    ],
    pricingNote: 'Quick test results & doctor review',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-fatima',
    name: 'Dr. Fatima Al-Zahra',
    role: 'Specialist Obstetrician & Gynecologist',
    specialty: 'Gynecology & Fetal Ultrasound',
    qualifications: 'MBBS, MD (Obs & Gynae), Fellowship in Fetal Medicine',
    experienceYears: 15,
    languages: ['English', 'Arabic', 'Urdu'],
    bio: 'Renowned for her gentle bedside manner and attentive patient care. Dr. Fatima specializes in high-risk pregnancy management, early fetal screenings, and women’s hormonal health with over 15 years in clinical practice.',
    image: 'https://images.unsplash.com/photo-1594824813689-ff3b715694c7?auto=format&fit=crop&w=600&q=80',
    availableDays: 'Saturday to Thursday (9:00 AM - 6:00 PM)',
  },
  {
    id: 'dr-tariq',
    name: 'Dr. Muhammad Tariq Khan',
    role: 'Senior General Physician & Family Practitioner',
    specialty: 'Family Medicine & Chronic Disease Care',
    qualifications: 'MBBS, MRCGP (Int.), Dip. in Diabetes Management',
    experienceYears: 14,
    languages: ['English', 'Urdu', 'Hindi', 'Punjabi', 'Basic Arabic'],
    bio: 'Dr. Tariq is widely trusted in the Deira community for thorough diagnostic assessments, compassionate preventative care, and managing hypertension and metabolic disorders across multicultural families.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    availableDays: 'Saturday to Thursday (8:30 AM - 9:30 PM)',
  },
  {
    id: 'dr-ayesha',
    name: 'Dr. Ayesha Siddiqui',
    role: 'Dental Surgeon & Aesthetic Specialist',
    specialty: 'Dentistry & Pain-Free Restorations',
    qualifications: 'BDS, Certified in Aesthetic & Endodontic Dentistry',
    experienceYears: 10,
    languages: ['English', 'Urdu', 'Hindi'],
    bio: 'Specializing in pain-managed dentistry, Dr. Ayesha is praised by patients for her gentle touch during cleanings, root canal treatments, and cosmetic fillings that bring back healthy smiles.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    availableDays: 'Saturday to Thursday (10:00 AM - 8:00 PM)',
  },
  {
    id: 'dr-ramesh',
    name: 'Dr. Ramesh K. Verma',
    role: 'Specialist Sonologist & Radiologist',
    specialty: 'Diagnostic Ultrasound & Fetal Scans',
    qualifications: 'MBBS, DMRD, Consultant Radiologist',
    experienceYears: 16,
    languages: ['English', 'Hindi', 'Urdu', 'Basic Arabic'],
    bio: 'An expert in obstetric Doppler and abdominal sonography, Dr. Ramesh provides rapid, high-accuracy diagnostic imaging and clear clinical explanations to referring doctors and patients.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    availableDays: 'Saturday to Thursday (9:30 AM - 7:30 PM)',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Zubair Ahmed',
    rating: 5,
    date: '3 weeks ago',
    service: 'General Practice',
    comment:
      'Very professional doctors and courteous reception staff. Came in with severe viral fever, the doctor diagnosed me promptly and prescribed the right treatment. The consultation fee is very reasonable compared to other clinics in Deira.',
    avatarBg: 'bg-emerald-600',
    verified: true,
    highlightTag: 'Fair Pricing',
  },
  {
    id: 'rev-2',
    author: 'Mariam Al Balooshi',
    rating: 5,
    date: '1 month ago',
    service: 'Gynecology & Ultrasound',
    comment:
      'Dr. Fatima was so warm, reassuring, and thorough during my pregnancy ultrasound scan. The clinic is spotlessly clean and very well organized. I felt totally safe and supported. Highly recommend for any expectant mothers in Hor Al Anz!',
    avatarBg: 'bg-teal-600',
    verified: true,
    highlightTag: 'Cleanliness',
  },
  {
    id: 'rev-3',
    author: 'Kamran Sheikh',
    rating: 5,
    date: '2 months ago',
    service: 'Dentistry',
    comment:
      'I have severe dental anxiety, but Dr. Ayesha made the tooth filling and scaling completely painless. The front desk staff are polite and spoke in Urdu and English so clearly. Excellent customer care and clean equipment.',
    avatarBg: 'bg-blue-600',
    verified: true,
    highlightTag: 'Friendly Staff',
  },
  {
    id: 'rev-4',
    author: 'Sunil Menon',
    rating: 5,
    date: '2 months ago',
    service: 'General Practice & ECG',
    comment:
      'Walked in without prior booking for my father’s high blood pressure check. We were attended to within 10 minutes. Doctor Tariq took time to explain everything patiently. Great service and genuinely honest pricing.',
    avatarBg: 'bg-indigo-600',
    verified: true,
    highlightTag: 'Doctor Care',
  },
  {
    id: 'rev-5',
    author: 'Fatima Noor',
    rating: 5,
    date: '3 months ago',
    service: 'Ultrasound Scan',
    comment:
      'Got my anomaly scan done here. High-resolution machine and received printed reports and images immediately without waiting days. Clean waiting area and very convenient location right on Abu Baker Al Siddique street.',
    avatarBg: 'bg-rose-600',
    verified: true,
    highlightTag: 'Cleanliness',
  },
  {
    id: 'rev-6',
    author: 'Adnan Qureshi',
    rating: 4,
    date: '4 months ago',
    service: 'Dental & Outpatient',
    comment:
      'Very helpful clinic for families in Hor Al Anz / Deira area. Professional doctors, clear bills without hidden charges, and quick WhatsApp communication for appointment timings. 5-star experience overall.',
    avatarBg: 'bg-amber-600',
    verified: true,
    highlightTag: 'Friendly Staff',
  },
];

export const FAQS = [
  {
    q: 'Do I need an appointment or do you accept walk-in patients?',
    a: 'We warmly welcome walk-in patients throughout our working hours! However, for specialized Gynecology consultations, detailed Ultrasound scans, or Dental procedures, booking an appointment in advance via WhatsApp or our booking form minimizes your waiting time.',
  },
  {
    q: 'Where is Pak Al Madeena Polyclinic located in Dubai?',
    a: 'We are centrally located at 103 Abu Baker Al Siddique St in Hor Al Anz, Deira, Dubai. We are conveniently situated just a short 4-minute walk from the Abu Baker Al Siddique Metro Station (Green Line) with roadside parking available.',
  },
  {
    q: 'What languages do your doctors and reception staff speak?',
    a: 'To best serve Dubai’s multicultural South Asian and Arab communities, our staff and doctors fluently speak English, Urdu, Hindi, Punjabi, and Arabic.',
  },
  {
    q: 'Are consultation and scan rates affordable?',
    a: 'Yes! Pak Al Madeena Polyclinic is renowned in Deira for providing high-quality, transparent, and pocket-friendly medical consultations, dental care, and ultrasound scans with no surprise charges.',
  },
  {
    q: 'What are the clinic opening hours?',
    a: 'We are open Saturday through Thursday from 8:30 AM to 10:00 PM, and on Fridays from 2:00 PM to 10:00 PM. Our WhatsApp support is also active for scheduling inquiries.',
  },
];
