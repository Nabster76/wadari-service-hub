
import React, { useState } from 'react';
import { Search, MapPin, Star, ChevronRight, Clock, Shield, Heart } from 'lucide-react';
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
    description: 'Détente et bien-être chez vous',
    price: 'À partir de 300 MAD',
    duration: '60-90 min',
    icon: '💆‍♀️',
    image: '/placeholder.svg',
    rating: 4.8,
    providers: 156
  },
  {
    id: 2,
    name: 'Coiffure à domicile',
    description: 'Coupe, coloration et styling',
    price: 'À partir de 200 MAD',
    duration: '45-120 min',
    icon: '💇‍♀️',
    image: '/placeholder.svg',
    rating: 4.9,
    providers: 89
  },
  {
    id: 3,
    name: 'Manucure & Pédicure',
    description: 'Soins des ongles professionnels',
    price: 'À partir de 150 MAD',
    duration: '30-60 min',
    icon: '💅',
    image: '/placeholder.svg',
    rating: 4.7,
    providers: 124
  },
  {
    id: 4,
    name: 'Ménage à domicile',
    description: 'Nettoyage complet de votre maison',
    price: 'À partir de 80 MAD/h',
    duration: '2-4 heures',
    icon: '🧹',
    image: '/placeholder.svg',
    rating: 4.6,
    providers: 203
  },
  {
    id: 5,
    name: 'Baby-sitting',
    description: 'Garde d\'enfants qualifiée',
    price: 'À partir de 50 MAD/h',
    duration: 'Flexible',
    icon: '👶',
    image: '/placeholder.svg',
    rating: 4.9,
    providers: 67
  },
  {
    id: 6,
    name: 'Cours de fitness',
    description: 'Entraînement personnel à domicile',
    price: 'À partir de 250 MAD',
    duration: '45-60 min',
    icon: '🏋️‍♀️',
    image: '/placeholder.svg',
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
    comment: 'Service impeccable ! La masseuse était très professionnelle et ponctuelle.',
    service: 'Massage à domicile',
    avatar: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Youssef Alami',
    city: 'Rabat',
    rating: 5,
    comment: 'Excellent service de ménage. Mon appartement n\'a jamais été aussi propre !',
    service: 'Ménage à domicile',
    avatar: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Salma Tazi',
    city: 'Marrakech',
    rating: 5,
    comment: 'La coiffeuse a fait des merveilles. Je recommande vivement Wadari !',
    service: 'Coiffure à domicile',
    avatar: '/placeholder.svg'
  }
];

const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Agadir'];

const Index = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-amber-100/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Services à domicile
              <span className="block text-orange-600">au Maroc</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Réservez les meilleurs professionnels pour vos services beauté, bien-être et maison directement chez vous.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="h-14 text-left border-gray-200">
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
                    <SelectTrigger className="h-14 text-left border-gray-200">
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
                  className="h-14 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold"
                >
                  Rechercher
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600">Professionnels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10,000+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.8/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos services populaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de services professionnels à domicile
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Wadari ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Professionnels vérifiés</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Tous nos prestataires sont sélectionnés et vérifiés pour garantir la qualité du service.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Réservation facile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Réservez en quelques clics, 7j/7 et 24h/24, selon vos disponibilités.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Satisfaction garantie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Votre satisfaction est notre priorité. Support client disponible pour vous aider.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les avis de nos clients satisfaits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à réserver votre premier service ?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de clients satisfaits qui font confiance à Wadari pour leurs services à domicile.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
          >
            Commencer maintenant
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
