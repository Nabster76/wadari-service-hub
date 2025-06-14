
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, ArrowLeft, Calendar as CalendarIcon, Upload } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const ProviderRegister = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [birthDate, setBirthDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    services: '',
    experience: '',
    description: '',
    password: '',
    confirmPassword: ''
  });

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

  const serviceCategories = [
    { value: 'massage', label: 'Massage' },
    { value: 'coiffure', label: 'Coiffure' },
    { value: 'beaute', label: 'Beauté' },
    { value: 'menage', label: 'Ménage' },
    { value: 'babysitting', label: 'Baby-sitting' },
    { value: 'fitness', label: 'Fitness' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (!birthDate) {
      alert('Veuillez sélectionner votre date de naissance');
      return;
    }
    console.log('Provider registration attempt:', { ...formData, birthDate });
    // TODO: Implement actual registration logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl font-bold text-orange-600">Wadari</h1>
            <Badge variant="secondary" className="ml-2 text-xs">Maroc</Badge>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Inscription Prestataire</CardTitle>
            <CardDescription>
              Rejoignez notre réseau de professionnels qualifiés
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Prénom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t('phone')}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 6XX-XXX-XXX"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Date de naissance</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !birthDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {birthDate ? format(birthDate, "dd/MM/yyyy") : <span>Date de naissance</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={birthDate}
                        onSelect={setBirthDate}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">{t('city')}</Label>
                  <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez votre ville" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px] overflow-y-auto">
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

                <div className="space-y-2">
                  <Label htmlFor="services">Services proposés</Label>
                  <Select value={formData.services} onValueChange={(value) => setFormData({...formData, services: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez vos services" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map(service => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Années d'expérience</Label>
                <Input
                  id="experience"
                  name="experience"
                  type="number"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Ex: 5"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description de vos services</Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Décrivez votre expérience et vos spécialités..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">{t('password')}</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t('confirmPassword')}</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Documents d'identité (optionnel)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Cliquez pour télécharger ou glissez vos documents ici
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF jusqu'à 10MB</p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                Créer mon compte prestataire
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Déjà un compte prestataire ?{' '}
                <Link
                  to="/login"
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Se connecter
                </Link>
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link
                to="/register"
                className="text-sm text-orange-600 hover:text-orange-700"
              >
                S'inscrire comme client
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProviderRegister;
