
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
      logout: 'Déconnexion',
      profile: 'Profil',
      dashboard: 'Tableau de bord',
      
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
      plomberie: 'Plomberie',
      plomberieDesc: 'Réparations et installations de plomberie',
      electricite: 'Électricité',
      electriciteDesc: 'Installation et réparation électrique',
      jardinage: 'Jardinage',
      jardinageDesc: 'Entretien de jardin et espaces verts',
      
      // Booking
      book: 'Réserver',
      booking: 'Réservation',
      bookings: 'Réservations',
      selectService: 'Choisir un service',
      selectProvider: 'Choisir un prestataire',
      selectDate: 'Choisir une date',
      selectTime: 'Choisir une heure',
      confirmBooking: 'Confirmer la réservation',
      bookingSuccess: 'Réservation confirmée !',
      bookingConfirmed: 'Réservation confirmée',
      bookingDetails: 'Détails de la réservation',
      service: 'Service',
      provider: 'Prestataire',
      date: 'Date',
      time: 'Heure',
      location: 'Localisation',
      total: 'Total',
      status: 'Statut',
      pending: 'En attente',
      confirmed: 'Confirmée',
      completed: 'Terminée',
      cancelled: 'Annulée',
      
      // Common
      price: 'Prix',
      duration: 'Durée',
      providers: 'prestataires',
      from: 'À partir de',
      available: 'disponibles',
      filters: 'Filtres',
      sort: 'Trier par',
      all: 'Tous',
      allServices: 'Tous les services',
      allCities: 'Toutes les villes',
      allPrices: 'Tous les prix',
      rating: 'Note',
      reviews: 'Avis',
      availability: 'Disponibilité',
      noResults: 'Aucun résultat trouvé',
      tryDifferentFilters: 'Essayez de modifier vos filtres ou choisissez une autre ville.',
      viewDetails: 'Voir les détails',
      selectThis: 'Sélectionner',
      
      // Forms
      name: 'Nom',
      firstName: 'Prénom',
      lastName: 'Nom de famille',
      email: 'Email',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      phone: 'Téléphone',
      address: 'Adresse',
      city: 'Ville',
      submit: 'Envoyer',
      save: 'Sauvegarder',
      edit: 'Modifier',
      delete: 'Supprimer',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      next: 'Suivant',
      previous: 'Précédent',
      notes: 'Notes',
      description: 'Description',
      optional: 'optionnel',
      required: 'requis',
      
      // Authentication
      signIn: 'Se connecter',
      signUp: 'S\'inscrire',
      signOut: 'Se déconnecter',
      alreadyHaveAccount: 'Vous avez déjà un compte ?',
      dontHaveAccount: 'Vous n\'avez pas de compte ?',
      forgotPassword: 'Mot de passe oublié ?',
      resetPassword: 'Réinitialiser le mot de passe',
      
      // Steps
      step: 'Étape',
      of: 'sur',
      
      // Errors and messages
      error: 'Erreur',
      success: 'Succès',
      loading: 'Chargement...',
      pleaseWait: 'Veuillez patienter...',
      invalidCredentials: 'Identifiants invalides',
      emailAlreadyExists: 'Cette adresse email existe déjà',
      passwordTooShort: 'Le mot de passe est trop court',
      fillRequiredFields: 'Veuillez remplir tous les champs requis',
      
      // Profile
      editProfile: 'Modifier le profil',
      myBookings: 'Mes réservations',
      myServices: 'Mes services',
      settings: 'Paramètres',
      personalInfo: 'Informations personnelles',
      
      // Contact
      contact: 'Contact',
      contactUs: 'Contactez-nous',
      message: 'Message',
      subject: 'Sujet',
      
      // FAQ
      faq: 'Questions fréquentes',
      faqTitle: 'Aide et support',
      
      // Provider
      becomeProviderTitle: 'Devenir prestataire',
      providerApplication: 'Candidature prestataire',
      serviceArea: 'Zone de service',
      experience: 'Expérience',
      portfolio: 'Portfolio',
      certifications: 'Certifications',
      
      // Dashboard
      dashboardTitle: 'Tableau de bord',
      upcomingBookings: 'Prochaines réservations',
      recentActivity: 'Activité récente',
      earnings: 'Revenus',
      
      // Cities and Regions
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      fes: 'Fès',
      tangier: 'Tanger',
      agadir: 'Agadir',
      meknes: 'Meknès',
      oujda: 'Oujda',
      sale: 'Salé',
      kenitra: 'Kénitra'
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
      logout: 'Logout',
      profile: 'Profile',
      dashboard: 'Dashboard',
      
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
      plomberie: 'Plumbing',
      plomberieDesc: 'Plumbing repairs and installations',
      electricite: 'Electrical',
      electriciteDesc: 'Electrical installation and repair',
      jardinage: 'Gardening',
      jardinageDesc: 'Garden maintenance and landscaping',
      
      // Booking
      book: 'Book',
      booking: 'Booking',
      bookings: 'Bookings',
      selectService: 'Select a service',
      selectProvider: 'Select a provider',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      confirmBooking: 'Confirm booking',
      bookingSuccess: 'Booking confirmed!',
      bookingConfirmed: 'Booking confirmed',
      bookingDetails: 'Booking details',
      service: 'Service',
      provider: 'Provider',
      date: 'Date',
      time: 'Time',
      location: 'Location',
      total: 'Total',
      status: 'Status',
      pending: 'Pending',
      confirmed: 'Confirmed',
      completed: 'Completed',
      cancelled: 'Cancelled',
      
      // Common
      price: 'Price',
      duration: 'Duration',
      providers: 'providers',
      from: 'From',
      available: 'available',
      filters: 'Filters',
      sort: 'Sort by',
      all: 'All',
      allServices: 'All services',
      allCities: 'All cities',
      allPrices: 'All prices',
      rating: 'Rating',
      reviews: 'Reviews',
      availability: 'Availability',
      noResults: 'No results found',
      tryDifferentFilters: 'Try adjusting your filters or choose a different city.',
      viewDetails: 'View details',
      selectThis: 'Select',
      
      // Forms
      name: 'Name',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      phone: 'Phone',
      address: 'Address',
      city: 'City',
      submit: 'Submit',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      next: 'Next',
      previous: 'Previous',
      notes: 'Notes',
      description: 'Description',
      optional: 'optional',
      required: 'required',
      
      // Authentication
      signIn: 'Sign in',
      signUp: 'Sign up',
      signOut: 'Sign out',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: 'Don\'t have an account?',
      forgotPassword: 'Forgot password?',
      resetPassword: 'Reset password',
      
      // Steps
      step: 'Step',
      of: 'of',
      
      // Errors and messages
      error: 'Error',
      success: 'Success',
      loading: 'Loading...',
      pleaseWait: 'Please wait...',
      invalidCredentials: 'Invalid credentials',
      emailAlreadyExists: 'Email already exists',
      passwordTooShort: 'Password is too short',
      fillRequiredFields: 'Please fill all required fields',
      
      // Profile
      editProfile: 'Edit profile',
      myBookings: 'My bookings',
      myServices: 'My services',
      settings: 'Settings',
      personalInfo: 'Personal information',
      
      // Contact
      contact: 'Contact',
      contactUs: 'Contact us',
      message: 'Message',
      subject: 'Subject',
      
      // FAQ
      faq: 'FAQ',
      faqTitle: 'Help and support',
      
      // Provider
      becomeProviderTitle: 'Become a provider',
      providerApplication: 'Provider application',
      serviceArea: 'Service area',
      experience: 'Experience',
      portfolio: 'Portfolio',
      certifications: 'Certifications',
      
      // Dashboard
      dashboardTitle: 'Dashboard',
      upcomingBookings: 'Upcoming bookings',
      recentActivity: 'Recent activity',
      earnings: 'Earnings',
      
      // Cities and Regions
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      fes: 'Fez',
      tangier: 'Tangier',
      agadir: 'Agadir',
      meknes: 'Meknes',
      oujda: 'Oujda',
      sale: 'Sale',
      kenitra: 'Kenitra'
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
      logout: 'تسجيل الخروج',
      profile: 'الملف الشخصي',
      dashboard: 'لوحة التحكم',
      
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
      plomberie: 'السباكة',
      plomberieDesc: 'إصلاحات وتركيبات السباكة',
      electricite: 'الكهرباء',
      electriciteDesc: 'تركيب وإصلاح الكهرباء',
      jardinage: 'البستنة',
      jardinageDesc: 'صيانة الحدائق والمساحات الخضراء',
      
      // Booking
      book: 'احجز',
      booking: 'الحجز',
      bookings: 'الحجوزات',
      selectService: 'اختر خدمة',
      selectProvider: 'اختر مقدم خدمة',
      selectDate: 'اختر تاريخ',
      selectTime: 'اختر وقت',
      confirmBooking: 'تأكيد الحجز',
      bookingSuccess: 'تم تأكيد الحجز!',
      bookingConfirmed: 'تم تأكيد الحجز',
      bookingDetails: 'تفاصيل الحجز',
      service: 'الخدمة',
      provider: 'مقدم الخدمة',
      date: 'التاريخ',
      time: 'الوقت',
      location: 'الموقع',
      total: 'المجموع',
      status: 'الحالة',
      pending: 'في الانتظار',
      confirmed: 'مؤكد',
      completed: 'مكتمل',
      cancelled: 'ملغي',
      
      // Common
      price: 'السعر',
      duration: 'المدة',
      providers: 'مقدمو الخدمة',
      from: 'ابتداء من',
      available: 'متوفر',
      filters: 'المرشحات',
      sort: 'ترتيب حسب',
      all: 'الكل',
      allServices: 'جميع الخدمات',
      allCities: 'جميع المدن',
      allPrices: 'جميع الأسعار',
      rating: 'التقييم',
      reviews: 'المراجعات',
      availability: 'التوفر',
      noResults: 'لا توجد نتائج',
      tryDifferentFilters: 'جرب تعديل المرشحات أو اختر مدينة أخرى.',
      viewDetails: 'عرض التفاصيل',
      selectThis: 'اختيار',
      
      // Forms
      name: 'الاسم',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      phone: 'الهاتف',
      address: 'العنوان',
      city: 'المدينة',
      submit: 'إرسال',
      save: 'حفظ',
      edit: 'تعديل',
      delete: 'حذف',
      cancel: 'إلغاء',
      confirm: 'تأكيد',
      next: 'التالي',
      previous: 'السابق',
      notes: 'ملاحظات',
      description: 'الوصف',
      optional: 'اختياري',
      required: 'مطلوب',
      
      // Authentication
      signIn: 'تسجيل الدخول',
      signUp: 'إنشاء حساب',
      signOut: 'تسجيل الخروج',
      alreadyHaveAccount: 'لديك حساب بالفعل؟',
      dontHaveAccount: 'ليس لديك حساب؟',
      forgotPassword: 'نسيت كلمة المرور؟',
      resetPassword: 'إعادة تعيين كلمة المرور',
      
      // Steps
      step: 'الخطوة',
      of: 'من',
      
      // Errors and messages
      error: 'خطأ',
      success: 'نجح',
      loading: 'جارٍ التحميل...',
      pleaseWait: 'يرجى الانتظار...',
      invalidCredentials: 'بيانات اعتماد غير صالحة',
      emailAlreadyExists: 'البريد الإلكتروني موجود بالفعل',
      passwordTooShort: 'كلمة المرور قصيرة جداً',
      fillRequiredFields: 'يرجى ملء جميع الحقول المطلوبة',
      
      // Profile
      editProfile: 'تعديل الملف الشخصي',
      myBookings: 'حجوزاتي',
      myServices: 'خدماتي',
      settings: 'الإعدادات',
      personalInfo: 'المعلومات الشخصية',
      
      // Contact
      contact: 'الاتصال',
      contactUs: 'اتصل بنا',
      message: 'الرسالة',
      subject: 'الموضوع',
      
      // FAQ
      faq: 'الأسئلة الشائعة',
      faqTitle: 'المساعدة والدعم',
      
      // Provider
      becomeProviderTitle: 'أصبح مقدم خدمة',
      providerApplication: 'طلب مقدم خدمة',
      serviceArea: 'منطقة الخدمة',
      experience: 'الخبرة',
      portfolio: 'معرض الأعمال',
      certifications: 'الشهادات',
      
      // Dashboard
      dashboardTitle: 'لوحة التحكم',
      upcomingBookings: 'الحجوزات القادمة',
      recentActivity: 'النشاط الحديث',
      earnings: 'الأرباح',
      
      // Cities and Regions
      casablanca: 'الدار البيضاء',
      rabat: 'الرباط',
      marrakech: 'مراكش',
      fes: 'فاس',
      tangier: 'طنجة',
      agadir: 'أكادير',
      meknes: 'مكناس',
      oujda: 'وجدة',
      sale: 'سلا',
      kenitra: 'القنيطرة'
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
      logout: 'Cerrar sesión',
      profile: 'Perfil',
      dashboard: 'Panel de control',
      
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
      
      // Booking
      book: 'Reservar',
      booking: 'Reserva',
      bookings: 'Reservas',
      selectService: 'Seleccionar un servicio',
      selectProvider: 'Seleccionar un proveedor',
      selectDate: 'Seleccionar una fecha',
      selectTime: 'Seleccionar una hora',
      confirmBooking: 'Confirmar reserva',
      bookingSuccess: '¡Reserva confirmada!',
      bookingConfirmed: 'Reserva confirmada',
      bookingDetails: 'Detalles de la reserva',
      service: 'Servicio',
      provider: 'Proveedor',
      date: 'Fecha',
      time: 'Hora',
      location: 'Ubicación',
      total: 'Total',
      status: 'Estado',
      pending: 'Pendiente',
      confirmed: 'Confirmada',
      completed: 'Completada',
      cancelled: 'Cancelada',
      
      // Common
      price: 'Precio',
      duration: 'Duración',
      providers: 'proveedores',
      from: 'Desde',
      available: 'disponibles',
      filters: 'Filtros',
      sort: 'Ordenar por',
      all: 'Todos',
      allServices: 'Todos los servicios',
      allCities: 'Todas las ciudades',
      allPrices: 'Todos los precios',
      rating: 'Calificación',
      reviews: 'Reseñas',
      availability: 'Disponibilidad',
      noResults: 'No se encontraron resultados',
      tryDifferentFilters: 'Pruebe ajustar sus filtros o elija una ciudad diferente.',
      viewDetails: 'Ver detalles',
      selectThis: 'Seleccionar',
      
      // Forms
      name: 'Nombre',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Email',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      phone: 'Teléfono',
      address: 'Dirección',
      city: 'Ciudad',
      submit: 'Enviar',
      save: 'Guardar',
      edit: 'Editar',
      delete: 'Eliminar',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      next: 'Siguiente',
      previous: 'Anterior',
      notes: 'Notas',
      description: 'Descripción',
      optional: 'opcional',
      required: 'requerido',
      
      // Authentication
      signIn: 'Iniciar sesión',
      signUp: 'Registrarse',
      signOut: 'Cerrar sesión',
      alreadyHaveAccount: '¿Ya tienes una cuenta?',
      dontHaveAccount: '¿No tienes una cuenta?',
      forgotPassword: '¿Olvidaste tu contraseña?',
      resetPassword: 'Restablecer contraseña',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakech',
      agadir: 'Agadir',
      fes: 'Fez',
      meknes: 'Meknes',
      tangier: 'Tánger',
      oujda: 'Oujda'
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
      logout: 'Abmelden',
      profile: 'Profil',
      dashboard: 'Dashboard',
      
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
      
      // Booking
      book: 'Buchen',
      booking: 'Buchung',
      bookings: 'Buchungen',
      selectService: 'Service auswählen',
      selectProvider: 'Anbieter auswählen',
      selectDate: 'Datum auswählen',
      selectTime: 'Zeit auswählen',
      confirmBooking: 'Buchung bestätigen',
      bookingSuccess: 'Buchung bestätigt!',
      bookingConfirmed: 'Buchung bestätigt',
      bookingDetails: 'Buchungsdetails',
      service: 'Service',
      provider: 'Anbieter',
      date: 'Datum',
      time: 'Zeit',
      location: 'Standort',
      total: 'Gesamt',
      status: 'Status',
      pending: 'Ausstehend',
      confirmed: 'Bestätigt',
      completed: 'Abgeschlossen',
      cancelled: 'Storniert',
      
      // Common
      price: 'Preis',
      duration: 'Dauer',
      providers: 'Anbieter',
      from: 'Ab',
      available: 'verfügbar',
      filters: 'Filter',
      sort: 'Sortieren nach',
      all: 'Alle',
      allServices: 'Alle Services',
      allCities: 'Alle Städte',
      allPrices: 'Alle Preise',
      rating: 'Bewertung',
      reviews: 'Bewertungen',
      availability: 'Verfügbarkeit',
      noResults: 'Keine Ergebnisse gefunden',
      tryDifferentFilters: 'Versuchen Sie, Ihre Filter anzupassen oder wählen Sie eine andere Stadt.',
      viewDetails: 'Details anzeigen',
      selectThis: 'Auswählen',
      
      // Forms
      name: 'Name',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      password: 'Passwort',
      confirmPassword: 'Passwort bestätigen',
      phone: 'Telefon',
      address: 'Adresse',
      city: 'Stadt',
      submit: 'Senden',
      save: 'Speichern',
      edit: 'Bearbeiten',
      delete: 'Löschen',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      next: 'Weiter',
      previous: 'Zurück',
      notes: 'Notizen',
      description: 'Beschreibung',
      optional: 'optional',
      required: 'erforderlich',
      
      // Authentication
      signIn: 'Anmelden',
      signUp: 'Registrieren',
      signOut: 'Abmelden',
      alreadyHaveAccount: 'Haben Sie bereits ein Konto?',
      dontHaveAccount: 'Haben Sie noch kein Konto?',
      forgotPassword: 'Passwort vergessen?',
      resetPassword: 'Passwort zurücksetzen',
      
      // Cities
      casablanca: 'Casablanca',
      rabat: 'Rabat',
      marrakech: 'Marrakesch',
      agadir: 'Agadir',
      fes: 'Fez',
      meknes: 'Meknes',
      tangier: 'Tanger',
      oujda: 'Oujda'
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
