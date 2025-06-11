
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Star, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Services = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Mock services data - would come from API
  const services = [
    {
      id: 1,
      name: 'Massage Relaxant',
      description: 'Massage complet pour détente et bien-être',
      price: '250 MAD',
      duration: '60 min',
      icon: '💆‍♀️',
      image: '/placeholder.svg',
      rating: 4.8,
      providers: 15,
      category: 'massage',
      city: 'casablanca'
    },
    {
      id: 2,
      name: 'Massage Thérapeutique',
      description: 'Massage pour soulager tensions et douleurs',
      price: '300 MAD',
      duration: '75 min',
      icon: '🧘‍♀️',
      image: '/placeholder.svg',
      rating: 4.9,
      providers: 8,
      category: 'massage',
      city: 'rabat'
    },
    {
      id: 3,
      name: 'Coupe & Brushing',
      description: 'Coupe moderne et mise en forme',
      price: '150 MAD',
      duration: '45 min',
      icon: '✂️',
      image: '/placeholder.svg',
      rating: 4.7,
      providers: 22,
      category: 'coiffure',
      city: 'casablanca'
    },
    {
      id: 4,
      name: 'Ménage Complet',
      description: 'Nettoyage complet de votre logement',
      price: '200 MAD',
      duration: '3h',
      icon: '🧽',
      image: '/placeholder.svg',
      rating: 4.6,
      providers: 35,
      category: 'menage',
      city: 'marrakech'
    }
  ];

  const cities = [
    { value: 'casablanca', label: t('casablanca') },
    { value: 'rabat', label: t('rabat') },
    { value: 'marrakech', label: t('marrakech') },
    { value: 'agadir', label: t('agadir') }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = !category || service.category === category;
    const matchesCity = selectedCity === 'all' || service.city === selectedCity;
    return matchesCategory && matchesCity;
  });

  const getCategoryTitle = () => {
    if (!category) return 'Tous les services';
    return t(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600">
            {filteredServices.length} services disponibles
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ville</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les villes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    {cities.map(city => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Prix</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les prix</SelectItem>
                    <SelectItem value="0-200">0 - 200 MAD</SelectItem>
                    <SelectItem value="200-400">200 - 400 MAD</SelectItem>
                    <SelectItem value="400+">400+ MAD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Trier par</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Note</SelectItem>
                    <SelectItem value="price">Prix</SelectItem>
                    <SelectItem value="providers">Disponibilité</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Aucun service trouvé
            </h3>
            <p className="text-gray-600">
              Essayez de modifier vos filtres ou choisissez une autre ville.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
