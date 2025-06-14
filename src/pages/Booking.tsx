
import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, User, CreditCard, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const bookingSteps = [
  { id: 1, title: 'Service', icon: '💆‍♀️' },
  { id: 2, title: 'Localisation', icon: '📍' },
  { id: 3, title: 'Date & Heure', icon: '📅' },
  { id: 4, title: 'Informations', icon: '👤' },
  { id: 5, title: 'Confirmation', icon: '✅' }
];

const services = [
  { 
    id: 1, 
    name: 'Massage relaxant', 
    price: 300, 
    duration: 60, 
    description: 'Massage complet du corps pour la détente',
    category: 'massage'
  },
  { 
    id: 2, 
    name: 'Massage thérapeutique', 
    price: 400, 
    duration: 90, 
    description: 'Massage ciblé pour soulager les tensions',
    category: 'massage'
  },
  { 
    id: 3, 
    name: 'Massage dos/nuque', 
    price: 200, 
    duration: 45, 
    description: 'Massage concentré sur le haut du corps',
    category: 'massage'
  },
  { 
    id: 4, 
    name: 'Coupe & Brushing', 
    price: 150, 
    duration: 45, 
    description: 'Coupe moderne et mise en forme',
    category: 'coiffure'
  },
  { 
    id: 5, 
    name: 'Ménage complet', 
    price: 250, 
    duration: 180, 
    description: 'Nettoyage complet de votre domicile',
    category: 'menage'
  }
];

const cities = [
  'Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Fès', 'Tanger', 'Meknès', 'Salé'
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const Booking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingData, setBookingData] = useState({
    service: null as any,
    city: searchParams.get('city') || '',
    address: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const { toast } = useToast();

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!bookingData.service) {
          newErrors.service = 'Veuillez sélectionner un service';
        }
        break;
      case 2:
        if (!bookingData.city) {
          newErrors.city = 'Veuillez sélectionner une ville';
        }
        if (!bookingData.address.trim()) {
          newErrors.address = 'Veuillez saisir votre adresse';
        }
        break;
      case 3:
        if (!bookingData.date) {
          newErrors.date = 'Veuillez sélectionner une date';
        }
        if (!bookingData.time) {
          newErrors.time = 'Veuillez sélectionner un horaire';
        }
        break;
      case 4:
        if (!bookingData.firstName.trim()) {
          newErrors.firstName = 'Prénom requis';
        }
        if (!bookingData.lastName.trim()) {
          newErrors.lastName = 'Nom requis';
        }
        if (!bookingData.phone.trim()) {
          newErrors.phone = 'Téléphone requis';
        }
        if (!bookingData.email.trim()) {
          newErrors.email = 'Email requis';
        } else if (!/\S+@\S+\.\S+/.test(bookingData.email)) {
          newErrors.email = 'Email invalide';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < bookingSteps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleServiceSelect = (service: any) => {
    setBookingData({ ...bookingData, service });
    setErrors({});
    setTimeout(() => nextStep(), 300);
  };

  const handleSubmit = () => {
    if (validateStep(4)) {
      toast({
        title: t('bookingSuccess'),
        description: "Vous recevrez un SMS de confirmation dans quelques minutes.",
      });
      
      // Redirect to success page or dashboard
      setTimeout(() => {
        navigate('/profile?tab=bookings');
      }, 2000);
    }
  };

  const updateBookingData = (field: string, value: string) => {
    setBookingData({ ...bookingData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t('selectService')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Sélectionnez le type de service que vous souhaitez
              </p>
            </div>
            {errors.service && (
              <div className="text-red-500 text-sm text-center mb-4">{errors.service}</div>
            )}
            <div className="grid gap-4 max-w-2xl mx-auto">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-orange-300 ${
                    bookingData.service?.id === service.id ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' : ''
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{service.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration} min
                          </div>
                          <Badge variant="secondary">{service.category}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                          {service.price} MAD
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Où souhaitez-vous le service ?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Indiquez votre adresse pour que le professionnel puisse se déplacer
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <Label htmlFor="city">{t('city')} *</Label>
                <Select value={bookingData.city} onValueChange={(value) => updateBookingData('city', value)}>
                  <SelectTrigger className={errors.city ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Sélectionnez votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && <div className="text-red-500 text-sm mt-1">{errors.city}</div>}
              </div>
              <div>
                <Label htmlFor="address">{t('address')} *</Label>
                <Textarea
                  id="address"
                  placeholder="Rue, quartier, références..."
                  value={bookingData.address}
                  onChange={(e) => updateBookingData('address', e.target.value)}
                  className={errors.address ? 'border-red-500' : ''}
                />
                {errors.address && <div className="text-red-500 text-sm mt-1">{errors.address}</div>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Quand souhaitez-vous le service ?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Choisissez la date et l'heure qui vous conviennent
              </p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <Label htmlFor="date">{t('date')} *</Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => updateBookingData('date', e.target.value)}
                  min={getMinDate()}
                  className={errors.date ? 'border-red-500' : ''}
                />
                {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
              </div>
              <div>
                <Label>{t('time')} *</Label>
                {errors.time && <div className="text-red-500 text-sm mt-1">{errors.time}</div>}
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={bookingData.time === time ? "default" : "outline"}
                      onClick={() => updateBookingData('time', time)}
                      className={`${
                        bookingData.time === time 
                          ? "bg-orange-600 hover:bg-orange-700 text-white" 
                          : "hover:bg-orange-50 dark:hover:bg-orange-900/20"
                      } ${errors.time ? 'border-red-500' : ''}`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Vos informations
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Renseignez vos coordonnées pour finaliser la réservation
              </p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">{t('firstName')} *</Label>
                  <Input
                    id="firstName"
                    value={bookingData.firstName}
                    onChange={(e) => updateBookingData('firstName', e.target.value)}
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
                </div>
                <div>
                  <Label htmlFor="lastName">{t('lastName')} *</Label>
                  <Input
                    id="lastName"
                    value={bookingData.lastName}
                    onChange={(e) => updateBookingData('lastName', e.target.value)}
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
                </div>
              </div>
              <div>
                <Label htmlFor="phone">{t('phone')} *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+212 6XX-XXX-XXX"
                  value={bookingData.phone}
                  onChange={(e) => updateBookingData('phone', e.target.value)}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
              </div>
              <div>
                <Label htmlFor="email">{t('email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => updateBookingData('email', e.target.value)}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div>
                <Label htmlFor="notes">{t('notes')} ({t('optional')})</Label>
                <Textarea
                  id="notes"
                  placeholder="Informations complémentaires..."
                  value={bookingData.notes}
                  onChange={(e) => updateBookingData('notes', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t('bookingConfirmed')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Vérifiez les détails de votre réservation
              </p>
            </div>
            <Card className="max-w-md mx-auto shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{bookingData.service?.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('service')}:</span>
                  <span className="font-medium">{bookingData.service?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('duration')}:</span>
                  <span className="font-medium">{bookingData.service?.duration} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('date')}:</span>
                  <span className="font-medium">
                    {new Date(bookingData.date).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('time')}:</span>
                  <span className="font-medium">{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">{t('location')}:</span>
                  <span className="font-medium">{bookingData.city}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>{t('total')}:</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      {bookingData.service?.price} MAD
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/services" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux services
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {bookingSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                  currentStep >= step.id 
                    ? 'bg-orange-600 border-orange-600 text-white' 
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-400'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium transition-colors ${
                    currentStep >= step.id ? 'text-orange-600 dark:text-orange-400' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {t('step')} {step.id} {t('of')} {bookingSteps.length}
                  </div>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 mx-4 transition-colors ${
                    currentStep > step.id ? 'bg-orange-600' : 'bg-gray-300 dark:bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="max-w-4xl mx-auto mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center disabled:opacity-50"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            {t('previous')}
          </Button>
          
          {currentStep < bookingSteps.length ? (
            <Button
              onClick={nextStep}
              className="bg-orange-600 hover:bg-orange-700 text-white flex items-center"
            >
              {t('next')}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center"
            >
              {t('confirmBooking')}
              <CreditCard className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
