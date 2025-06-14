
import React, { useState } from 'react';
import { Search, MapPin, Star, ChevronRight, Clock, Shield, Heart, CheckCircle, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const services = [
  {
    id: 1,
    name: 'Massage à domicile',
    description: 'Détente et bien-être chez vous avec nos thérapeutes certifiés',
    price: 'À partir de 300 MAD',
    duration: '60-90 min',
    icon: '💆‍♀️',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    rating: 4.8,
    providers: 156
  },
  {
    id: 2,
    name: 'Coiffure à domicile',
    description: 'Coupe, coloration et styling par des professionnels',
    price: 'À partir de 200 MAD',
    duration: '45-120 min',
    icon: '💇‍♀️',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
    rating: 4.9,
    providers: 89
  },
  {
    id: 3,
    name: 'Manucure & Pédicure',
    description: 'Soins des ongles professionnels et relaxants',
    price: 'À partir de 150 MAD',
    duration: '30-60 min',
    icon: '💅',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
    rating: 4.7,
    providers: 124
  },
  {
    id: 4,
    name: 'Ménage à domicile',
    description: 'Nettoyage complet et minutieux de votre maison',
    price: 'À partir de 80 MAD/h',
    duration: '2-4 heures',
    icon: '🧹',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
    rating: 4.6,
    providers: 203
  },
  {
    id: 5,
    name: 'Baby-sitting',
    description: 'Garde d\'enfants qualifiée et de confiance',
    price: 'À partir de 50 MAD/h',
    duration: 'Flexible',
    icon: '👶',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400',
    rating: 4.9,
    providers: 67
  },
  {
    id: 6,
    name: 'Coach fitness',
    description: 'Entraînement personnel adapté à vos objectifs',
    price: 'À partir de 250 MAD',
    duration: '45-60 min',
    icon: '🏋️‍♀️',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    rating: 4.8,
    providers: 45
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Aicha Benali',
    city: 'Casablanca',
    rating: 5,
    comment: 'Service impeccable ! La masseuse était très professionnelle et ponctuelle. Je recommande vivement Wadari.',
    service: 'Massage à domicile',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b5b99aee?w=100'
  },
  {
    id: 2,
    name: 'Youssef Alami',
    city: 'Rabat',
    rating: 5,
    comment: 'Excellent service de ménage. Mon appartement n\'a jamais été aussi propre ! Équipe très fiable.',
    service: 'Ménage à domicile',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
  },
  {
    id: 3,
    name: 'Salma Tazi',
    city: 'Marrakech',
    rating: 5,
    comment: 'La coiffeuse a fait des merveilles. Résultat parfait et service très professionnel.',
    service: 'Coiffure à domicile',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  }
];

const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Fès', 'Tanger'];

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/5 dark:to-amber-500/5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Plateforme #1 au Maroc
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Services à domicile
              <span className="block bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                de qualité supérieure
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Réservez les meilleurs professionnels certifiés pour vos services beauté, bien-être et maison. 
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                Satisfaction garantie ou remboursé.
              </span>
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="h-16 text-left border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <Search className="h-5 w-5 text-gray-400" />
                        <SelectValue placeholder="Quel service recherchez-vous ?" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.name}>
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{service.icon}</span>
                            <span>{service.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="h-16 text-left border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <SelectValue placeholder="Votre ville" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  size="lg" 
                  className="h-16 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-lg"
                >
                  Rechercher
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Réservation instantanée • Sans engagement • Paiement sécurisé
              </div>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Professionnels certifiés</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">15,000+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Clients satisfaits</div>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">4.9/5</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Services populaires
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Découvrez nos services
              <span className="block text-orange-600 dark:text-orange-400">de qualité premium</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des professionnels vérifiés et certifiés pour tous vos besoins à domicile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi choisir Wadari ?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une expérience unique pensée pour votre confort et votre sécurité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-2xl font-bold">Professionnels vérifiés</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Tous nos prestataires sont rigoureusement sélectionnés, vérifiés et certifiés pour garantir un service d'excellence.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-2xl font-bold">Réservation instantanée</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Réservez en quelques clics, 24h/7j, selon vos disponibilités. Confirmation immédiate et rappels automatiques.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-2xl font-bold">Satisfaction garantie</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Votre satisfaction est notre priorité absolue. Support client dédié et garantie remboursement si non satisfait.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-6">
              <Users className="w-4 h-4 mr-2" />
              Témoignages clients
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Plus de 15,000 clients nous font confiance au quotidien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à réserver votre premier service ?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Rejoignez des milliers de clients satisfaits qui font confiance à Wadari pour leurs services à domicile. 
            Réservation en 2 minutes, service garanti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl"
            >
              Commencer maintenant
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 text-lg"
            >
              Devenir prestataire
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
