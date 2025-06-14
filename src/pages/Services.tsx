
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
    // Casablanca-Settat Region
    { value: 'casablanca', label: t('casablanca'), region: t('casablancaSettatRegion') },
    { value: 'settat', label: t('settat'), region: t('casablancaSettatRegion') },
    { value: 'berrechid', label: t('berrechid'), region: t('casablancaSettatRegion') },
    { value: 'mohammedia', label: t('mohammedia'), region: t('casablancaSettatRegion') },
    { value: 'jadida', label: t('jadida'), region: t('casablancaSettatRegion') },
    { value: 'azemmour', label: t('azemmour'), region: t('casablancaSettatRegion') },
    { value: 'benslimane', label: t('benslimane'), region: t('casablancaSettatRegion') },
    
    // Rabat-Salé-Kénitra Region
    { value: 'rabat', label: t('rabat'), region: t('rabatSaleKenitiraRegion') },
    { value: 'sale', label: t('sale'), region: t('rabatSaleKenitiraRegion') },
    { value: 'kenitra', label: t('kenitra'), region: t('rabatSaleKenitiraRegion') },
    { value: 'temara', label: t('temara'), region: t('rabatSaleKenitiraRegion') },
    { value: 'skhirat', label: t('skhirat'), region: t('rabatSaleKenitiraRegion') },
    { value: 'khemisset', label: t('khemisset'), region: t('rabatSaleKenitiraRegion') },
    { value: 'sidi-kacem', label: t('sidiKacem'), region: t('rabatSaleKenitiraRegion') },
    
    // Marrakech-Safi Region
    { value: 'marrakech', label: t('marrakech'), region: t('marrakechSafiRegion') },
    { value: 'safi', label: t('safi'), region: t('marrakechSafiRegion') },
    { value: 'essaouira', label: t('essaouira'), region: t('marrakechSafiRegion') },
    { value: 'youssoufia', label: t('youssoufia'), region: t('marrakechSafiRegion') },
    { value: 'chichaoua', label: t('chichaoua'), region: t('marrakechSafiRegion') },
    { value: 'kelaa-sraghna', label: t('kelaaSraghna'), region: t('marrakechSafiRegion') },
    
    // Fès-Meknès Region
    { value: 'fes', label: t('fes'), region: t('fesMeknesRegion') },
    { value: 'meknes', label: t('meknes'), region: t('fesMeknesRegion') },
    { value: 'taza', label: t('taza'), region: t('fesMeknesRegion') },
    { value: 'sefrou', label: t('sefrou'), region: t('fesMeknesRegion') },
    { value: 'ifrane', label: t('ifrane'), region: t('fesMeknesRegion') },
    { value: 'taounate', label: t('taounate'), region: t('fesMeknesRegion') },
    { value: 'moulay-yacoub', label: t('moulayYacoub'), region: t('fesMeknesRegion') },
    
    // Tanger-Tétouan-Al Hoceïma Region
    { value: 'tangier', label: t('tangier'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'tetouan', label: t('tetouan'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'al-hoceima', label: t('alHoceima'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'larache', label: t('larache'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'asilah', label: t('asilah'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'chefchaouen', label: t('chefchaouen'), region: t('tangerTetouanAlHoceimaRegion') },
    { value: 'ouazzane', label: t('ouazzane'), region: t('tangerTetouanAlHoceimaRegion') },
    
    // Oriental Region
    { value: 'oujda', label: t('oujda'), region: t('orientalRegion') },
    { value: 'nador', label: t('nador'), region: t('orientalRegion') },
    { value: 'berkane', label: t('berkane'), region: t('orientalRegion') },
    { value: 'taourirt', label: t('taourirt'), region: t('orientalRegion') },
    { value: 'jerada', label: t('jerada'), region: t('orientalRegion') },
    { value: 'bouarfa', label: t('bouarfa'), region: t('orientalRegion') },
    { value: 'figuig', label: t('figuig'), region: t('orientalRegion') },
    
    // Souss-Massa Region
    { value: 'agadir', label: t('agadir'), region: t('soussMassaRegion') },
    { value: 'inezgane', label: t('inezgane'), region: t('soussMassaRegion') },
    { value: 'tiznit', label: t('tiznit'), region: t('soussMassaRegion') },
    { value: 'taroudant', label: t('taroudant'), region: t('soussMassaRegion') },
    { value: 'ouarzazate', label: t('ouarzazate'), region: t('soussMassaRegion') },
    { value: 'zagora', label: t('zagora'), region: t('soussMassaRegion') },
    
    // Béni Mellal-Khénifra Region
    { value: 'beni-mellal', label: t('beniMellal'), region: t('beniMellalKheniframRegion') },
    { value: 'khenifra', label: t('khenifra'), region: t('beniMellalKheniframRegion') },
    { value: 'khouribga', label: t('khouribga'), region: t('beniMellalKheniframRegion') },
    { value: 'fqih-ben-salah', label: t('fqihBenSalah'), region: t('beniMellalKheniframRegion') },
    { value: 'azilal', label: t('azilal'), region: t('beniMellalKheniframRegion') },
    
    // Drâa-Tafilalet Region
    { value: 'errachidia', label: t('errachidia'), region: t('draaTafilaletRegion') },
    { value: 'midelt', label: t('midelt'), region: t('draaTafilaletRegion') },
    { value: 'tinghir', label: t('tinghir'), region: t('draaTafilaletRegion') },
    { value: 'rissani', label: t('rissani'), region: t('draaTafilaletRegion') },
    { value: 'erfoud', label: t('erfoud'), region: t('draaTafilaletRegion') },
    
    // Laâyoune-Sakia El Hamra Region
    { value: 'laayoune', label: t('laayoune'), region: t('laayouneSakiaElHamraRegion') },
    { value: 'boujdour', label: t('boujdour'), region: t('laayouneSakiaElHamraRegion') },
    { value: 'tarfaya', label: t('tarfaya'), region: t('laayouneSakiaElHamraRegion') },
    
    // Dakhla-Oued Ed-Dahab Region
    { value: 'dakhla', label: t('dakhla'), region: t('dakhlaOuedEdDahabRegion') },
    { value: 'aousserd', label: t('aousserd'), region: t('dakhlaOuedEdDahabRegion') },
    
    // Guelmim-Oued Noun Region
    { value: 'guelmim', label: t('guelmim'), region: t('guelmimOuedNounRegion') },
    { value: 'tan-tan', label: t('tanTan'), region: t('guelmimOuedNounRegion') },
    { value: 'sidi-ifni', label: t('sidiIfni'), region: t('guelmimOuedNounRegion') },
    { value: 'assa-zag', label: t('assaZag'), region: t('guelmimOuedNounRegion') }
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
                  <SelectContent className="max-h-[200px] overflow-y-auto">
                    <SelectItem value="all">Toutes les villes</SelectItem>
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
