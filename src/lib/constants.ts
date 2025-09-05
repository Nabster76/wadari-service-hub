// Centralized constants for better maintainability
export const MOROCCAN_CITIES = [
  // Casablanca-Settat Region
  { value: 'casablanca', label: 'Casablanca', region: 'Casablanca-Settat', population: 3359818 },
  { value: 'settat', label: 'Settat', region: 'Casablanca-Settat', population: 142250 },
  { value: 'berrechid', label: 'Berrechid', region: 'Casablanca-Settat', population: 136634 },
  { value: 'mohammedia', label: 'Mohammedia', region: 'Casablanca-Settat', population: 208612 },
  { value: 'jadida', label: 'El Jadida', region: 'Casablanca-Settat', population: 194934 },
  
  // Rabat-Salé-Kénitra Region
  { value: 'rabat', label: 'Rabat', region: 'Rabat-Salé-Kénitra', population: 577827 },
  { value: 'sale', label: 'Salé', region: 'Rabat-Salé-Kénitra', population: 890403 },
  { value: 'kenitra', label: 'Kénitra', region: 'Rabat-Salé-Kénitra', population: 431282 },
  { value: 'temara', label: 'Témara', region: 'Rabat-Salé-Kénitra', population: 313510 },
  
  // Marrakech-Safi Region
  { value: 'marrakech', label: 'Marrakech', region: 'Marrakech-Safi', population: 928850 },
  { value: 'safi', label: 'Safi', region: 'Marrakech-Safi', population: 308508 },
  { value: 'essaouira', label: 'Essaouira', region: 'Marrakech-Safi', population: 77966 },
  
  // Fès-Meknès Region
  { value: 'fes', label: 'Fès', region: 'Fès-Meknès', population: 1112072 },
  { value: 'meknes', label: 'Meknès', region: 'Fès-Meknès', population: 632079 },
  
  // Tanger-Tétouan-Al Hoceïma Region
  { value: 'tangier', label: 'Tanger', region: 'Tanger-Tétouan-Al Hoceïma', population: 947952 },
  { value: 'tetouan', label: 'Tétouan', region: 'Tanger-Tétouan-Al Hoceïma', population: 380787 },
  
  // Oriental Region
  { value: 'oujda', label: 'Oujda', region: 'Oriental', population: 494252 },
  
  // Souss-Massa Region
  { value: 'agadir', label: 'Agadir', region: 'Souss-Massa', population: 421844 }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'massage',
    name: 'Massage',
    icon: '💆‍♀️',
    description: 'Services de massage et bien-être à domicile',
    basePrice: 250,
    duration: '60-90 min'
  },
  {
    id: 'coiffure',
    name: 'Coiffure',
    icon: '✂️',
    description: 'Services de coiffure professionnels',
    basePrice: 150,
    duration: '45-120 min'
  },
  {
    id: 'beaute',
    name: 'Beauté',
    icon: '💅',
    description: 'Soins esthétiques et manucure',
    basePrice: 120,
    duration: '30-90 min'
  },
  {
    id: 'menage',
    name: 'Ménage',
    icon: '🧹',
    description: 'Services de nettoyage à domicile',
    basePrice: 80,
    duration: '2-4 heures',
    priceType: 'hourly'
  },
  {
    id: 'babysitting',
    name: 'Baby-sitting',
    icon: '👶',
    description: 'Garde d\'enfants qualifiée',
    basePrice: 50,
    duration: 'Flexible',
    priceType: 'hourly'
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: '💪',
    description: 'Coaching sportif personnel',
    basePrice: 200,
    duration: '45-60 min'
  }
];

export const TIME_SLOTS = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const;

export const MOROCCAN_PHONE_REGEX = /^(\+212|0)[5-7][0-9]{8}$/;
export const MOROCCAN_PHONE_FORMAT = '+212 6XX-XXX-XXX';

export const CURRENCY = 'MAD';
export const LOCALE = 'fr-MA';