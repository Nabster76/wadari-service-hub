
// App Configuration
// For sensitive keys (API keys, secrets), use Supabase Edge Functions with secrets
// For public configuration, store them here

export const config = {
  // App Information
  app: {
    name: 'Wadari',
    version: '1.0.0',
    description: 'Services à domicile au Maroc',
    url: window.location.origin,
  },

  // Supabase Configuration (public)
  supabase: {
    url: 'https://mjhhdkqxukfgvinmwwgl.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qaGhka3F4dWtmZ3Zpbm13d2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NDMwNzksImV4cCI6MjA2NTUxOTA3OX0.mKTZErb6O5USQPOwHewrRgofQH5Dm0cuRagdep2zbfk',
  },

  // Features Configuration
  features: {
    enableNotifications: true,
    enableRealtimeUpdates: true,
    enableGeolocation: true,
    enablePayments: false, // Will need to be enabled later
    enableReviews: true,
    enableChat: false, // For future messaging feature
  },

  // Business Configuration
  business: {
    currency: 'MAD',
    defaultCity: 'Casablanca',
    supportedCities: [
      'Casablanca', 'Rabat', 'Marrakech', 'Fès', 'Tangier', 
      'Agadir', 'Meknès', 'Oujda', 'Salé', 'Kénitra'
    ],
    serviceCategories: [
      'massage', 'coiffure', 'menage', 'babysitting', 
      'fitness', 'plomberie', 'electricite', 'jardinage'
    ],
    bookingTimeSlots: [
      '08:00', '09:00', '10:00', '11:00', '12:00', 
      '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
    ],
    maxBookingDaysAhead: 30,
    minBookingHoursAhead: 2,
  },

  // UI Configuration
  ui: {
    defaultLanguage: 'fr',
    supportedLanguages: ['fr', 'en', 'ar', 'es', 'de'],
    theme: {
      primaryColor: 'orange',
      secondaryColor: 'amber',
    },
    pagination: {
      itemsPerPage: 12,
      providersPerPage: 8,
    },
  },

  // API Configuration
  api: {
    timeout: 10000, // 10 seconds
    retryAttempts: 3,
    baseUrl: '/api/v1',
  },

  // Development Configuration
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  
  // For sensitive configuration, use Supabase Edge Functions
  // Example: Payment keys, external API keys, etc.
  // These should be stored as Supabase secrets and accessed via Edge Functions
};

export default config;
