import { z } from 'zod';
import { MOROCCAN_PHONE_REGEX } from './constants';

// Common validation schemas
export const phoneSchema = z.string()
  .regex(MOROCCAN_PHONE_REGEX, 'Format de téléphone marocain invalide (+212 6XX-XXX-XXX)');

export const emailSchema = z.string()
  .email('Adresse email invalide')
  .min(1, 'Email requis');

export const passwordSchema = z.string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre');

export const nameSchema = z.string()
  .min(2, 'Le nom doit contenir au moins 2 caractères')
  .max(50, 'Le nom ne peut pas dépasser 50 caractères')
  .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets');

// User registration schema
export const userRegistrationSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  city: z.string().min(1, 'Ville requise'),
  password: passwordSchema,
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

// Provider registration schema
export const providerRegistrationSchema = userRegistrationSchema.extend({
  services: z.string().min(1, 'Service requis'),
  experience: z.number().min(0, 'L\'expérience ne peut pas être négative').max(50, 'Expérience maximale de 50 ans'),
  description: z.string().min(50, 'La description doit contenir au moins 50 caractères').max(500, 'La description ne peut pas dépasser 500 caractères'),
  birthDate: z.date().refine((date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 18 && age <= 80;
  }, 'Vous devez avoir entre 18 et 80 ans')
});

// Booking schema
export const bookingSchema = z.object({
  serviceId: z.number().positive('Service requis'),
  city: z.string().min(1, 'Ville requise'),
  address: z.string().min(10, 'Adresse complète requise'),
  date: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'La date ne peut pas être dans le passé'),
  time: z.string().min(1, 'Heure requise'),
  firstName: nameSchema,
  lastName: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  notes: z.string().max(200, 'Les notes ne peuvent pas dépasser 200 caractères').optional()
});

// Contact form schema
export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères').max(100, 'Le sujet ne peut pas dépasser 100 caractères'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères').max(1000, 'Le message ne peut pas dépasser 1000 caractères')
});

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
export type ProviderRegistration = z.infer<typeof providerRegistrationSchema>;
export type BookingData = z.infer<typeof bookingSchema>;
export type ContactData = z.infer<typeof contactSchema>;