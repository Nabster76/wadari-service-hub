
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
