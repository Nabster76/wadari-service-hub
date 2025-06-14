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
      
      // Regions
      casablancaSettatRegion: 'Région Casablanca-Settat',
      rabatSaleKenitiraRegion: 'Région Rabat-Salé-Kénitra',
      marrakechSafiRegion: 'Région Marrakech-Safi',
      fesMeknesRegion: 'Région Fès-Meknès',
      tangerTetouanAlHoceimaRegion: 'Région Tanger-Tétouan-Al Hoceïma',
      orientalRegion: 'Région de l\'Oriental',
      soussMassaRegion: 'Région Souss-Massa',
      beniMellalKheniframRegion: 'Région Béni Mellal-Khénifra',
      draaTafilaletRegion: 'Région Drâa-Tafilalet',
      laayouneSakiaElHamraRegion: 'Région Laâyoune-Sakia El Hamra',
      dakhlaOuedEdDahabRegion: 'Région Dakhla-Oued Ed-Dahab',
      guelmimOuedNounRegion: 'Région Guelmim-Oued Noun',
      
      // Casablanca-Settat Cities
      casablanca: 'Casablanca',
      settat: 'Settat',
      berrechid: 'Berrechid',
      mohammedia: 'Mohammedia',
      jadida: 'El Jadida',
      azemmour: 'Azemmour',
      benslimane: 'Benslimane',
      
      // Rabat-Salé-Kénitra Cities
      rabat: 'Rabat',
      sale: 'Salé',
      kenitra: 'Kénitra',
      temara: 'Témara',
      skhirat: 'Skhirat',
      khemisset: 'Khémisset',
      sidiKacem: 'Sidi Kacem',
      
      // Marrakech-Safi Cities
      marrakech: 'Marrakech',
      safi: 'Safi',
      essaouira: 'Essaouira',
      youssoufia: 'Youssoufia',
      chichaoua: 'Chichaoua',
      kelaaSraghna: 'Kelâa des Sraghna',
      
      // Fès-Meknès Cities
      fes: 'Fès',
      meknes: 'Meknès',
      taza: 'Taza',
      sefrou: 'Sefrou',
      ifrane: 'Ifrane',
      taounate: 'Taounate',
      moulayYacoub: 'Moulay Yacoub',
      
      // Tanger-Tétouan-Al Hoceïma Cities
      tangier: 'Tanger',
      tetouan: 'Tétouan',
      alHoceima: 'Al Hoceïma',
      larache: 'Larache',
      asilah: 'Asilah',
      chefchaouen: 'Chefchaouen',
      ouazzane: 'Ouazzane',
      
      // Oriental Cities
      oujda: 'Oujda',
      nador: 'Nador',
      berkane: 'Berkane',
      taourirt: 'Taourirt',
      jerada: 'Jerada',
      bouarfa: 'Bouarfa',
      figuig: 'Figuig',
      
      // Souss-Massa Cities
      agadir: 'Agadir',
      inezgane: 'Inezgane',
      tiznit: 'Tiznit',
      taroudant: 'Taroudant',
      ouarzazate: 'Ouarzazate',
      zagora: 'Zagora',
      
      // Béni Mellal-Khénifra Cities
      beniMellal: 'Béni Mellal',
      khenifra: 'Khénifra',
      khouribga: 'Khouribga',
      fqihBenSalah: 'Fqih Ben Salah',
      azilal: 'Azilal',
      
      // Drâa-Tafilalet Cities
      errachidia: 'Errachidia',
      midelt: 'Midelt',
      tinghir: 'Tinghir',
      rissani: 'Rissani',
      erfoud: 'Erfoud',
      
      // Laâyoune-Sakia El Hamra Cities
      laayoune: 'Laâyoune',
      boujdour: 'Boujdour',
      tarfaya: 'Tarfaya',
      
      // Dakhla-Oued Ed-Dahab Cities
      dakhla: 'Dakhla',
      aousserd: 'Aousserd',
      
      // Guelmim-Oued Noun Cities
      guelmim: 'Guelmim',
      tanTan: 'Tan-Tan',
      sidiIfni: 'Sidi Ifni',
      assaZag: 'Assa-Zag',
      
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
      
      // Regions
      casablancaSettatRegion: 'Casablanca-Settat Region',
      rabatSaleKenitiraRegion: 'Rabat-Salé-Kénitra Region',
      marrakechSafiRegion: 'Marrakech-Safi Region',
      fesMeknesRegion: 'Fès-Meknès Region',
      tangerTetouanAlHoceimaRegion: 'Tanger-Tétouan-Al Hoceïma Region',
      orientalRegion: 'Oriental Region',
      soussMassaRegion: 'Souss-Massa Region',
      beniMellalKheniframRegion: 'Béni Mellal-Khénifra Region',
      draaTafilaletRegion: 'Drâa-Tafilalet Region',
      laayouneSakiaElHamraRegion: 'Laâyoune-Sakia El Hamra Region',
      dakhlaOuedEdDahabRegion: 'Dakhla-Oued Ed-Dahab Region',
      guelmimOuedNounRegion: 'Guelmim-Oued Noun Region',
      
      // Cities
      casablanca: 'Casablanca',
      settat: 'Settat',
      berrechid: 'Berrechid',
      mohammedia: 'Mohammedia',
      jadida: 'El Jadida',
      azemmour: 'Azemmour',
      benslimane: 'Benslimane',
      rabat: 'Rabat',
      sale: 'Salé',
      kenitra: 'Kénitra',
      temara: 'Témara',
      skhirat: 'Skhirat',
      khemisset: 'Khémisset',
      sidiKacem: 'Sidi Kacem',
      marrakech: 'Marrakech',
      safi: 'Safi',
      essaouira: 'Essaouira',
      youssoufia: 'Youssoufia',
      chichaoua: 'Chichaoua',
      kelaaSraghna: 'Kelâa des Sraghna',
      fes: 'Fez',
      meknes: 'Meknes',
      taza: 'Taza',
      sefrou: 'Sefrou',
      ifrane: 'Ifrane',
      taounate: 'Taounate',
      moulayYacoub: 'Moulay Yacoub',
      tangier: 'Tangier',
      tetouan: 'Tetouan',
      alHoceima: 'Al Hoceima',
      larache: 'Larache',
      asilah: 'Asilah',
      chefchaouen: 'Chefchaouen',
      ouazzane: 'Ouazzane',
      oujda: 'Oujda',
      nador: 'Nador',
      berkane: 'Berkane',
      taourirt: 'Taourirt',
      jerada: 'Jerada',
      bouarfa: 'Bouarfa',
      figuig: 'Figuig',
      agadir: 'Agadir',
      inezgane: 'Inezgane',
      tiznit: 'Tiznit',
      taroudant: 'Taroudant',
      ouarzazate: 'Ouarzazate',
      zagora: 'Zagora',
      beniMellal: 'Beni Mellal',
      khenifra: 'Khenifra',
      khouribga: 'Khouribga',
      fqihBenSalah: 'Fqih Ben Salah',
      azilal: 'Azilal',
      errachidia: 'Errachidia',
      midelt: 'Midelt',
      tinghir: 'Tinghir',
      rissani: 'Rissani',
      erfoud: 'Erfoud',
      laayoune: 'Laayoune',
      boujdour: 'Boujdour',
      tarfaya: 'Tarfaya',
      dakhla: 'Dakhla',
      aousserd: 'Aousserd',
      guelmim: 'Guelmim',
      tanTan: 'Tan-Tan',
      sidiIfni: 'Sidi Ifni',
      assaZag: 'Assa-Zag',
      
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
      
      // Regions
      casablancaSettatRegion: 'جهة الدار البيضاء-سطات',
      rabatSaleKenitiraRegion: 'جهة الرباط-سلا-القنيطرة',
      marrakechSafiRegion: 'جهة مراكش-آسفي',
      fesMeknesRegion: 'جهة فاس-مكناس',
      tangerTetouanAlHoceimaRegion: 'جهة طنجة-تطوان-الحسيمة',
      orientalRegion: 'الجهة الشرقية',
      soussMassaRegion: 'جهة سوس-ماسة',
      beniMellalKheniframRegion: 'جهة بني ملال-خنيفرة',
      draaTafilaletRegion: 'جهة درعة-تافيلالت',
      laayouneSakiaElHamraRegion: 'جهة العيون-الساقية الحمراء',
      dakhlaOuedEdDahabRegion: 'جهة الداخلة-وادي الذهب',
      guelmimOuedNounRegion: 'جهة كلميم-وادي نون',
      
      // Cities
      casablanca: 'الدار البيضاء',
      settat: 'سطات',
      berrechid: 'برشيد',
      mohammedia: 'المحمدية',
      jadida: 'الجديدة',
      azemmour: 'أزمور',
      benslimane: 'بن سليمان',
      rabat: 'الرباط',
      sale: 'سلا',
      kenitra: 'القنيطرة',
      temara: 'تمارة',
      skhirat: 'الصخيرات',
      khemisset: 'الخميسات',
      sidiKacem: 'سيدي قاسم',
      marrakech: 'مراكش',
      safi: 'آسفي',
      essaouira: 'الصويرة',
      youssoufia: 'اليوسفية',
      chichaoua: 'شيشاوة',
      kelaaSraghna: 'قلعة السراغنة',
      fes: 'فاس',
      meknes: 'مكناس',
      taza: 'تازة',
      sefrou: 'صفرو',
      ifrane: 'إفران',
      taounate: 'تاونات',
      moulayYacoub: 'مولاي يعقوب',
      tangier: 'طنجة',
      tetouan: 'تطوان',
      alHoceima: 'الحسيمة',
      larache: 'العرائش',
      asilah: 'أصيلة',
      chefchaouen: 'شفشاون',
      ouazzane: 'وزان',
      oujda: 'وجدة',
      nador: 'الناظور',
      berkane: 'بركان',
      taourirt: 'تاوريرت',
      jerada: 'جرادة',
      bouarfa: 'بوعرفة',
      figuig: 'فجيج',
      agadir: 'أكادير',
      inezgane: 'إنزكان',
      tiznit: 'تيزنيت',
      taroudant: 'تارودانت',
      ouarzazate: 'ورزازات',
      zagora: 'زاكورة',
      beniMellal: 'بني ملال',
      khenifra: 'خنيفرة',
      khouribga: 'خريبكة',
      fqihBenSalah: 'الفقيه بن صالح',
      azilal: 'أزيلال',
      errachidia: 'الراشيدية',
      midelt: 'ميدلت',
      tinghir: 'تنغير',
      rissani: 'الريصاني',
      erfoud: 'أرفود',
      laayoune: 'العيون',
      boujdour: 'بوجدور',
      tarfaya: 'طرفاية',
      dakhla: 'الداخلة',
      aousserd: 'أوسرد',
      guelmim: 'كلميم',
      tanTan: 'طانطان',
      sidiIfni: 'سيدي إفني',
      assaZag: 'أسا الزاك',
      
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
      
      // Cities (use English names for Spanish)
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
      
      // Cities (use English names for German)
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
