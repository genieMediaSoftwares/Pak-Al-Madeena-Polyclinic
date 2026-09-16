export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  whoItsFor: string;
  features: string[];
  pricingNote?: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  qualifications: string;
  experienceYears: number;
  languages: string[];
  bio: string;
  image: string;
  availableDays: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  avatarBg: string;
  verified: boolean;
  highlightTag?: 'Friendly Staff' | 'Cleanliness' | 'Doctor Care' | 'Fair Pricing';
}

export interface ClinicInfo {
  name: string;
  nameArabic: string;
  tagline: string;
  taglineArabic: string;
  address: string;
  addressArabic: string;
  area: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  whatsappLink: string;
  telLink: string;
  email: string;
  googleRating: number;
  reviewCount: number;
  mapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  metroStation: string;
  hours: {
    weekdays: string;
    friday: string;
  };
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  doctor?: string;
  date: string;
  timeSlot: string;
  notes: string;
}
