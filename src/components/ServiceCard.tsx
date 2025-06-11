
import React from 'react';
import { Star, Clock, Users, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  image: string;
  rating: number;
  providers: number;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
          <span className="text-6xl">{service.icon}</span>
        </div>
        <Badge className="absolute top-3 right-3 bg-white text-orange-600 hover:bg-white">
          {service.rating} ⭐
        </Badge>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{service.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Users className="h-4 w-4" />
              <span>{service.providers} pros</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-orange-600">
              {service.price}
            </div>
            <Button 
              size="sm" 
              className="bg-orange-600 hover:bg-orange-700 text-white group-hover:bg-orange-700"
            >
              Réserver
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
