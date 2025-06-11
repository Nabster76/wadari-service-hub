
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, User, CreditCard } from 'lucide-react';
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
  { id: 1, name: 'Massage relaxant', price: 300, duration: 60, description: 'Massage complet du corps pour la détente' },
  { id: 2, name: 'Massage thérapeutique', price: 400, duration: 90, description: 'Massage ciblé pour soulager les tensions' },
  { id: 3, name: 'Massage dos/nuque', price: 200, duration: 45, description: 'Massage concentré sur le haut du corps' }
];

const cities = ['Casablanca', 'Rabat', 'Marrakech', 'Agadir'];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: null,
    city: '',
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

  const nextStep = () => {
    if (currentStep < bookingSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceSelect = (service: any) => {
    setBookingData({ ...bookingData, service });
    nextStep();
  };

  const handleSubmit = () => {
    toast({
      title: "Réservation confirmée !",
      description: "Vous recevrez un SMS de confirmation dans quelques minutes.",
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Choisissez votre service</h2>
              <p className="text-gray-600">Sélectionnez le type de massage que vous souhaitez</p>
            </div>
            <div className="grid gap-4">
              {services.map((service) => (
                <Card 
                  key={service.id} 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-orange-300"
                  onClick={() => handleServiceSelect(service)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-3">{service.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration} min
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">{service.price} MAD</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Où souhaitez-vous le service ?</h2>
              <p className="text-gray-600">Indiquez votre adresse pour que le professionnel puisse se déplacer</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <Label htmlFor="city">Ville</Label>
                <Select value={bookingData.city} onValueChange={(value) => setBookingData({ ...bookingData, city: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="address">Adresse complète</Label>
                <Textarea
                  id="address"
                  placeholder="Rue, quartier, références..."
                  value={bookingData.address}
                  onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Quand souhaitez-vous le service ?</h2>
              <p className="text-gray-600">Choisissez la date et l'heure qui vous conviennent</p>
            </div>
            <div className="space-y-6 max-w-md mx-auto">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label>Heure</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={bookingData.time === time ? "default" : "outline"}
                      onClick={() => setBookingData({ ...bookingData, time })}
                      className={bookingData.time === time ? "bg-orange-600 hover:bg-orange-700" : ""}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Vos informations</h2>
              <p className="text-gray-600">Renseignez vos coordonnées pour finaliser la réservation</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+212 6XX-XXX-XXX"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes (optionnel)</Label>
                <Textarea
                  id="notes"
                  placeholder="Informations complémentaires..."
                  value={bookingData.notes}
                  onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Confirmation de réservation</h2>
              <p className="text-gray-600">Vérifiez les détails de votre réservation</p>
            </div>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{bookingData.service?.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-medium">{bookingData.service?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Durée:</span>
                  <span className="font-medium">{bookingData.service?.duration} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Heure:</span>
                  <span className="font-medium">{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ville:</span>
                  <span className="font-medium">{bookingData.city}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-orange-600">{bookingData.service?.price} MAD</span>
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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {bookingSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-orange-600 border-orange-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-orange-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < bookingSteps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-orange-600' : 'bg-gray-300'
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
            className="flex items-center"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>
          
          {currentStep < bookingSteps.length ? (
            <Button
              onClick={nextStep}
              className="bg-orange-600 hover:bg-orange-700 text-white flex items-center"
              disabled={
                (currentStep === 1 && !bookingData.service) ||
                (currentStep === 2 && (!bookingData.city || !bookingData.address)) ||
                (currentStep === 3 && (!bookingData.date || !bookingData.time)) ||
                (currentStep === 4 && (!bookingData.firstName || !bookingData.lastName || !bookingData.phone))
              }
            >
              Suivant
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center"
            >
              Confirmer la réservation
              <CreditCard className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
