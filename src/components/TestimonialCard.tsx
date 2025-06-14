
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  comment: string;
  service: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900 hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
      
      <CardContent className="p-8">
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-200 dark:text-orange-800" />
          
          <div className="flex items-center space-x-1 mb-6 relative z-10">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-8 italic text-lg leading-relaxed relative z-10">
            "{testimonial.comment}"
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12 border-2 border-orange-200 dark:border-orange-800">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.city}</div>
              </div>
            </div>
            
            <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs">
              {testimonial.service}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
