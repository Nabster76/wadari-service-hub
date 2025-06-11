
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, Settings, User, LogOut, CreditCard, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';

const mockBookings = [
  {
    id: 1,
    service: 'Massage relaxant',
    provider: 'Sarah Benali',
    date: '2024-06-15',
    time: '14:00',
    status: 'confirmé',
    price: 300,
    rating: null
  },
  {
    id: 2,
    service: 'Coiffure à domicile',
    provider: 'Aicha Tazi',
    date: '2024-06-10',
    time: '10:00',
    status: 'terminé',
    price: 250,
    rating: 5
  },
  {
    id: 3,
    service: 'Ménage',
    provider: 'Fatima Alami',
    date: '2024-06-08',
    time: '09:00',
    status: 'terminé',
    price: 160,
    rating: 4
  }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmé':
        return <Badge className="bg-green-100 text-green-800">Confirmé</Badge>;
      case 'terminé':
        return <Badge className="bg-blue-100 text-blue-800">Terminé</Badge>;
      case 'annulé':
        return <Badge className="bg-red-100 text-red-800">Annulé</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mon tableau de bord</h1>
              <p className="text-gray-600">Gérez vos réservations et votre profil</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-orange-100 text-orange-600">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Réservations actives</CardTitle>
                <Calendar className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">+1 ce mois</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Services utilisés</CardTitle>
                <User className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Depuis l'inscription</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
                <Star className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">Basé sur 6 avis</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Économies totales</CardTitle>
                <CreditCard className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">450 MAD</div>
                <p className="text-xs text-muted-foreground">Grâce aux promotions</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="bookings">Mes réservations</TabsTrigger>
              <TabsTrigger value="history">Historique</TabsTrigger>
              <TabsTrigger value="profile">Mon profil</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Réservations en cours</CardTitle>
                  <CardDescription>Vos prochains rendez-vous</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBookings.filter(b => b.status === 'confirmé').map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{booking.service}</h3>
                          <p className="text-sm text-gray-600">avec {booking.provider}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {booking.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {booking.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {getStatusBadge(booking.status)}
                          <div className="text-right">
                            <div className="font-medium text-orange-600">{booking.price} MAD</div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Modifier</Button>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                              Annuler
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Historique des services</CardTitle>
                  <CardDescription>Tous vos services passés</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockBookings.filter(b => b.status === 'terminé').map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{booking.service}</h3>
                          <p className="text-sm text-gray-600">avec {booking.provider}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {booking.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {booking.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {getStatusBadge(booking.status)}
                          <div className="text-right">
                            <div className="font-medium">{booking.price} MAD</div>
                            {booking.rating && (
                              <div className="flex items-center text-sm text-yellow-600">
                                <Star className="h-3 w-3 mr-1 fill-current" />
                                {booking.rating}/5
                              </div>
                            )}
                          </div>
                          <Button size="sm" variant="outline">Réserver à nouveau</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations personnelles</CardTitle>
                  <CardDescription>Gérez vos informations de profil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-orange-100 text-orange-600 text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium">John Doe</h3>
                      <p className="text-gray-600">john.doe@email.com</p>
                      <p className="text-gray-600">+212 6XX-XXX-XXX</p>
                    </div>
                  </div>
                  <Button variant="outline">Modifier le profil</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres du compte</CardTitle>
                  <CardDescription>Gérez vos préférences et paramètres</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notifications par email</h4>
                        <p className="text-sm text-gray-600">Recevez des emails pour vos réservations</p>
                      </div>
                      <Button variant="outline" size="sm">Configurer</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Notifications SMS</h4>
                        <p className="text-sm text-gray-600">Recevez des SMS pour vos rappels</p>
                      </div>
                      <Button variant="outline" size="sm">Configurer</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Changer le mot de passe</h4>
                        <p className="text-sm text-gray-600">Sécurisez votre compte</p>
                      </div>
                      <Button variant="outline" size="sm">Modifier</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
