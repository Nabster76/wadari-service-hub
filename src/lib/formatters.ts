import { CURRENCY, LOCALE } from './constants';

export const formatPrice = (amount: number, currency: string = CURRENCY): string => {
  return new Intl.NumberFormat(LOCALE, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('MAD', 'MAD');
};

export const formatDate = (date: Date | string, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }).format(dateObj);
};

export const formatTime = (time: string): string => {
  return time;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // Handle Moroccan numbers
  if (digits.startsWith('212')) {
    const number = digits.slice(3);
    return `+212 ${number.slice(0, 1)}${number.slice(1, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
  } else if (digits.startsWith('0')) {
    const number = digits.slice(1);
    return `+212 ${number.slice(0, 1)}${number.slice(1, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;
  }
  
  return phone;
};

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return `${hours}h`;
  }
  
  return `${hours}h${remainingMinutes}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};