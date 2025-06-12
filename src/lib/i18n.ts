
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      services: 'Services',
      howItWorks: 'Comment ça marche',
      becomeProvider: 'Devenir prestataire',
      support: 'Support',
      login: 'Connexion',
      signup: "S'inscrire",
      
      // Hero section
      heroTitle: 'Services à domicile au Maroc',
      heroSubtitle: 'Réservez les meilleurs professionnels pour vos services à domicile en quelques clics',
      searchPlaceholder: 'Que cherchez-vous ?',
      searchButton: 'Rechercher',
      
      // Services
      massage: 'Massage',
      massageDesc: 'Massage relaxant et thérapeutique à domicile',
      coiffure: 'Coiffure',
      coiffureDesc: 'Coupe, coloration et soins capillaires',
      menage: 'Ménage',
      menageDesc: 'Nettoyage complet de votre domicile',
      babysitting: 'Baby-sitting',
      babysittingDesc: 'Garde d\'enfants professionnelle',
      fitness: 'Fitness',
      fitnessDesc: 'Coach sportif personnel à domicile',
      
      // Common
      book: 'Réserver',
      price: 'Prix',
      duration: 'Durée',
      providers: 'prestataires',
      from: 'À partir de',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      agadir: 'Agadir',
      
      // Forms
      name: 'Nom',
      email: 'Email',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      phone: 'Téléphone',
      address: 'Adresse',
      city: 'Ville',
      submit: 'Envoyer',
      save: 'Sauvegarder',
      
      // Booking
      selectService: 'Choisir un service',
      selectDate: 'Choisir une date',
      selectTime: 'Choisir une heure',
      confirmBooking: 'Confirmer la réservation',
      bookingSuccess: 'Réservation confirmée !',
      
      // Profile
      profile: 'Profil',
      editProfile: 'Modifier le profil',
      myBookings: 'Mes réservations',
      settings: 'Paramètres',
      
      // Contact
      contact: 'Contact',
      contactUs: 'Contactez-nous',
      message: 'Message',
      subject: 'Sujet',
      
      // FAQ
      faq: 'Questions fréquentes',
      faqTitle: 'Aide et support'
    }
  },
  en: {
    translation: {
      // Navigation
      services: 'Services',
      howItWorks: 'How it works',
      becomeProvider: 'Become a provider',
      support: 'Support',
      login: 'Login',
      signup: 'Sign up',
      
      // Hero section
      heroTitle: 'Home services in Morocco',
      heroSubtitle: 'Book the best professionals for your home services with just a few clicks',
      searchPlaceholder: 'What are you looking for?',
      searchButton: 'Search',
      
      // Services
      massage: 'Massage',
      massageDesc: 'Relaxing and therapeutic massage at home',
      coiffure: 'Hair styling',
      coiffureDesc: 'Cut, coloring and hair care',
      menage: 'Cleaning',
      menageDesc: 'Complete home cleaning',
      babysitting: 'Babysitting',
      babysittingDesc: 'Professional childcare',
      fitness: 'Fitness',
      fitnessDesc: 'Personal trainer at home',
      
      // Common
      book: 'Book',
      price: 'Price',
      duration: 'Duration',
      providers: 'providers',
      from: 'From',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      agadir: 'Agadir',
      
      // Forms
      name: 'Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      submit: 'Submit',
      save: 'Save',
      
      // Booking
      selectService: 'Select a service',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      confirmBooking: 'Confirm booking',
      bookingSuccess: 'Booking confirmed!',
      
      // Profile
      profile: 'Profile',
      editProfile: 'Edit profile',
      myBookings: 'My bookings',
      settings: 'Settings',
      
      // Contact
      contact: 'Contact',
      contactUs: 'Contact us',
      message: 'Message',
      subject: 'Subject',
      
      // FAQ
      faq: 'FAQ',
      faqTitle: 'Help and support'
    }
  },
  ar: {
    translation: {
      // Navigation
      services: 'الخدمات',
      howItWorks: 'كيف يعمل',
      becomeProvider: 'أصبح مقدم خدمة',
      support: 'الدعم',
      login: 'تسجيل الدخول',
      signup: 'التسجيل',
      
      // Hero section
      heroTitle: 'خدمات منزلية في المغرب',
      heroSubtitle: 'احجز أفضل المهنيين لخدماتك المنزلية بنقرات قليلة',
      searchPlaceholder: 'ماذا تبحث عنه؟',
      searchButton: 'بحث',
      
      // Services
      massage: 'التدليك',
      massageDesc: 'تدليك مريح وعلاجي في المنزل',
      coiffure: 'تصفيف الشعر',
      coiffureDesc: 'قص وصبغ وعناية بالشعر',
      menage: 'التنظيف',
      menageDesc: 'تنظيف شامل لمنزلك',
      babysitting: 'رعاية الأطفال',
      babysittingDesc: 'رعاية أطفال محترفة',
      fitness: 'اللياقة البدنية',
      fitnessDesc: 'مدرب رياضي شخصي في المنزل',
      
      // Common
      book: 'احجز',
      price: 'السعر',
      duration: 'المدة',
      providers: 'مقدمو الخدمة',
      from: 'ابتداء من',
      
      // Cities
      casablanca: 'الدار البيضاء',
      rabat: 'الرباط',
      marrakech: 'مراكش',
      agadir: 'أكادير',
      
      // Forms
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      phone: 'الهاتف',
      address: 'العنوان',
      city: 'المدينة',
      submit: 'إرسال',
      save: 'حفظ',
      
      // Booking
      selectService: 'اختر خدمة',
      selectDate: 'اختر تاريخ',
      selectTime: 'اختر وقت',
      confirmBooking: 'تأكيد الحجز',
      bookingSuccess: 'تم تأكيد الحجز!',
      
      // Profile
      profile: 'الملف الشخصي',
      editProfile: 'تعديل الملف الشخصي',
      myBookings: 'حجوزاتي',
      settings: 'الإعدادات',
      
      // Contact
      contact: 'الاتصال',
      contactUs: 'اتصل بنا',
      message: 'الرسالة',
      subject: 'الموضوع',
      
      // FAQ
      faq: 'الأسئلة الشائعة',
      faqTitle: 'المساعدة والدعم'
    }
  },
  es: {
    translation: {
      // Navigation
      services: 'Servicios',
      howItWorks: 'Cómo funciona',
      becomeProvider: 'Convertirse en proveedor',
      support: 'Soporte',
      login: 'Iniciar sesión',
      signup: 'Registrarse',
      
      // Hero section
      heroTitle: 'Servicios domiciliarios en Marruecos',
      heroSubtitle: 'Reserve a los mejores profesionales para sus servicios domiciliarios con solo unos clics',
      searchPlaceholder: '¿Qué está buscando?',
      searchButton: 'Buscar',
      
      // Services
      massage: 'Masaje',
      massageDesc: 'Masaje relajante y terapéutico a domicilio',
      coiffure: 'Peluquería',
      coiffureDesc: 'Corte, coloración y cuidado capilar',
      menage: 'Limpieza',
      menageDesc: 'Limpieza completa de su hogar',
      babysitting: 'Cuidado de niños',
      babysittingDesc: 'Cuidado infantil profesional',
      fitness: 'Fitness',
      fitnessDesc: 'Entrenador personal a domicilio',
      
      // Common
      book: 'Reservar',
      price: 'Precio',
      duration: 'Duración',
      providers: 'proveedores',
      from: 'Desde',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      agadir: 'Agadir',
      
      // Forms
      name: 'Nombre',
      email: 'Email',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      phone: 'Teléfono',
      address: 'Dirección',
      city: 'Ciudad',
      submit: 'Enviar',
      save: 'Guardar',
      
      // Booking
      selectService: 'Seleccionar un servicio',
      selectDate: 'Seleccionar una fecha',
      selectTime: 'Seleccionar una hora',
      confirmBooking: 'Confirmar reserva',
      bookingSuccess: '¡Reserva confirmada!',
      
      // Profile
      profile: 'Perfil',
      editProfile: 'Editar perfil',
      myBookings: 'Mis reservas',
      settings: 'Configuración',
      
      // Contact
      contact: 'Contacto',
      contactUs: 'Contáctanos',
      message: 'Mensaje',
      subject: 'Asunto',
      
      // FAQ
      faq: 'Preguntas frecuentes',
      faqTitle: 'Ayuda y soporte'
    }
  },
  de: {
    translation: {
      // Navigation
      services: 'Dienstleistungen',
      howItWorks: 'Wie es funktioniert',
      becomeProvider: 'Anbieter werden',
      support: 'Support',
      login: 'Anmelden',
      signup: 'Registrieren',
      
      // Hero section
      heroTitle: 'Haushaltsdienstleistungen in Marokko',
      heroSubtitle: 'Buchen Sie die besten Fachkräfte für Ihre Haushaltsdienstleistungen mit nur wenigen Klicks',
      searchPlaceholder: 'Wonach suchen Sie?',
      searchButton: 'Suchen',
      
      // Services
      massage: 'Massage',
      massageDesc: 'Entspannende und therapeutische Massage zu Hause',
      coiffure: 'Friseur',
      coiffureDesc: 'Schnitt, Färbung und Haarpflege',
      menage: 'Reinigung',
      menageDesc: 'Vollständige Hausreinigung',
      babysitting: 'Babysitting',
      babysittingDesc: 'Professionelle Kinderbetreuung',
      fitness: 'Fitness',
      fitnessDesc: 'Personal Trainer zu Hause',
      
      // Common
      book: 'Buchen',
      price: 'Preis',
      duration: 'Dauer',
      providers: 'Anbieter',
      from: 'Ab',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakesch',
      agadir: 'Agadir',
      
      // Forms
      name: 'Name',
      email: 'E-Mail',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      phone: 'Telefon',
      address: 'Adresse',
      city: 'Stadt',
      submit: 'Senden',
      save: 'Speichern',
      
      // Booking
      selectService: 'Service auswählen',
      selectDate: 'Datum auswählen',
      selectTime: 'Zeit auswählen',
      confirmBooking: 'Buchung bestätigen',
      bookingSuccess: 'Buchung bestätigt!',
      
      // Profile
      profile: 'Profil',
      editProfile: 'Profil bearbeiten',
      myBookings: 'Meine Buchungen',
      settings: 'Einstellungen',
      
      // Contact
      contact: 'Kontakt',
      contactUs: 'Kontaktieren Sie uns',
      message: 'Nachricht',
      subject: 'Betreff',
      
      // FAQ
      faq: 'Häufig gestellte Fragen',
      faqTitle: 'Hilfe und Support'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
