
import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlertCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { SearchFilters } from '@/components/SearchFilters';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/useDebounce';
import { SERVICE_CATEGORIES } from '@/lib/constants';

const Services = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || 'all');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

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
      city: 'casablanca',
      priceValue: 250
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
      city: 'rabat',
      priceValue: 300
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
      city: 'casablanca',
      priceValue: 150
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
      city: 'marrakech',
      priceValue: 200
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
      city: 'agadir',
      priceValue: 180
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
      city: 'fes',
      priceValue: 120
    }
  ];

  const filteredAndSortedServices = useMemo(() => {
    let filtered = services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesCity = selectedCity === 'all' || service.city === selectedCity;
      const matchesSearch = debouncedSearchTerm === '' || 
        service.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const matchesPrice = priceRange === 'all' || 
        (priceRange === '0-150' && (service.priceValue || 0) <= 150) ||
        (priceRange === '150-300' && (service.priceValue || 0) > 150 && (service.priceValue || 0) <= 300) ||
        (priceRange === '300-500' && (service.priceValue || 0) > 300 && (service.priceValue || 0) <= 500) ||
        (priceRange === '500+' && (service.priceValue || 0) > 500);
      
      return matchesCategory && matchesCity && matchesSearch && matchesPrice;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.priceValue || 0) - (b.priceValue || 0);
        case 'providers':
          return b.providers - a.providers;
        case 'popularity':
          return (b.rating * b.providers) - (a.rating * a.providers);
        case 'rating':
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [services, selectedCategory, selectedCity, debouncedSearchTerm, priceRange, sortBy]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCity('all');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('rating');
  };

  const getCategoryTitle = () => {
    if (selectedCategory === 'all') return t('allServices');
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory);
    return categoryData ? categoryData.name : t('allServices');
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
            {selectedCategory !== 'all' && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-sm text-gray-900 dark:text-gray-100">{getCategoryTitle()}</span>
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

        <div className="mb-8">
          <SearchFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onReset={handleReset}
            resultsCount={filteredAndSortedServices.length}
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {/* Services Grid */}
        {!isLoading && filteredAndSortedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : !isLoading && (
          <div className="text-center py-16">
            <AlertCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t('noResults')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t('tryDifferentFilters')}
            </p>
            <Button
              onClick={handleReset}
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
