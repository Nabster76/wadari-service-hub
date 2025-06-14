
import React from 'react';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-900 overflow-hidden hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-gray-900 font-semibold">
            {service.icon}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-white text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-semibold">{service.rating}</span>
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {service.name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {service.description}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              {service.duration}
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <Users className="h-4 w-4 mr-2" />
              {service.providers} disponibles
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {service.price}
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold group/btn"
            >
              Réserver
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
