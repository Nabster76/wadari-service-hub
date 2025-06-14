
import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Star, Filter, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Services = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock services data - would come from API
  const services = [
    {
      id: 1,
      name: t('massage'),
      description: t('massageDesc'),
      price: '250 MAD',
      priceValue: 250,
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
      priceValue: 300,
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
      name: t('coiffure'),
      description: t('coiffureDesc'),
      price: '150 MAD',
      priceValue: 150,
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
      name: t('menage'),
      description: t('menageDesc'),
      price: '200 MAD',
      priceValue: 200,
      duration: '3h',
      icon: '🧽',
      image: '/placeholder.svg',
      rating: 4.6,
      providers: 35,
      category: 'menage',
      city: 'marrakech'
    },
    {
      id: 5,
      name: t('fitness'),
      description: t('fitnessDesc'),
      price: '180 MAD',
      priceValue: 180,
      duration: '60 min',
      icon: '💪',
      image: '/placeholder.svg',
      rating: 4.5,
      providers: 12,
      category: 'fitness',
      city: 'agadir'
    },
    {
      id: 6,
      name: t('babysitting'),
      description: t('babysittingDesc'),
      price: '120 MAD',
      priceValue: 120,
      duration: '4h',
      icon: '👶',
      image: '/placeholder.svg',
      rating: 4.8,
      providers: 18,
      category: 'babysitting',
      city: 'fes'
    }
  ];

  const cities = [
    { value: 'casablanca', label: t('casablanca'), region: t('casablancaSettatRegion') },
    { value: 'rabat', label: t('rabat'), region: t('rabatSaleKenitiraRegion') },
    { value: 'marrakech', label: t('marrakech'), region: t('marrakechSafiRegion') },
    { value: 'agadir', label: t('agadir'), region: t('soussMassaRegion') },
    { value: 'fes', label: t('fes'), region: t('fesMeknesRegion') },
    { value: 'tangier', label: t('tangier'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'meknes', label: t('meknes'), region: t('fesMeknesRegion') },
    { value: 'sale', label: t('sale'), region: t('rabatSaleKenitiraRegion') },
    { value: 'kenitra', label: t('kenitra'), region: t('rabatSaleKenitiraRegion') },
    { value: 'oujda', label: t('oujda'), region: t('orientalRegion') }
  ];

  const filteredAndSortedServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = !category || service.category === category;
      const matchesCity = selectedCity === 'all' || service.city === selectedCity;
      const matchesSearch = searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = priceRange === 'all' || 
        (priceRange === '0-200' && service.priceValue <= 200) ||
        (priceRange === '200-400' && service.priceValue > 200 && service.priceValue <= 400) ||
        (priceRange === '400+' && service.priceValue > 400);
      
      return matchesCategory && matchesCity && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.priceValue - b.priceValue;
        case 'providers':
          return b.providers - a.providers;
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [services, category, selectedCity, searchTerm, priceRange, sortBy]);

  const getCategoryTitle = () => {
    if (!category) return t('allServices');
    return t(category);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="text-orange-600 hover:text-orange-700 text-sm">
              Wadari
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">{t('services')}</span>
            {category && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-sm text-gray-900 dark:text-gray-100">{t(category)}</span>
              </>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {getCategoryTitle()}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredAndSortedServices.length} {t('services').toLowerCase()} {t('available')}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Filter className="h-5 w-5 text-orange-600" />
              {t('filters')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {t('searchButton')}
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {t('city')}
                </label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('allCities')} />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] overflow-y-auto bg-white dark:bg-gray-800">
                    <SelectItem value="all">{t('allCities')}</SelectItem>
                    {cities.map(city => (
                      <SelectItem key={city.value} value={city.value}>
                        <div className="flex flex-col">
                          <span>{city.label}</span>
                          <span className="text-xs text-muted-foreground">{city.region}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {t('price')}
                </label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800">
                    <SelectItem value="all">{t('allPrices')}</SelectItem>
                    <SelectItem value="0-200">0 - 200 MAD</SelectItem>
                    <SelectItem value="200-400">200 - 400 MAD</SelectItem>
                    <SelectItem value="400+">400+ MAD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Sort */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {t('sort')}
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800">
                    <SelectItem value="rating">{t('rating')}</SelectItem>
                    <SelectItem value="price">{t('price')}</SelectItem>
                    <SelectItem value="providers">{t('availability')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        {filteredAndSortedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('noResults')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('tryDifferentFilters')}
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCity('all');
                setPriceRange('all');
              }}
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
