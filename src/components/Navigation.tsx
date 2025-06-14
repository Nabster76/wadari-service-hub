
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, Calendar, Settings, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('services'), href: '/services' },
    { name: t('howItWorks'), href: '#how-it-works' },
    { name: t('becomeProvider'), href: '/provider/register' },
    { name: t('support'), href: '/faq' }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-amber-600 transition-all">
              Wadari
            </div>
            <Badge variant="secondary" className="ml-2 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
              Maroc
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons & Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                <LogIn className="h-4 w-4 mr-2" />
                {t('login')}
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all">
                <UserPlus className="h-4 w-4 mr-2" />
                {t('signup')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-900/20">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 font-medium py-3 transition-all duration-200 border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="border-t border-border/50 pt-6 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <ThemeToggle />
                      <LanguageSelector />
                    </div>
                    
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                        <LogIn className="h-4 w-4 mr-2" />
                        {t('login')}
                      </Button>
                    </Link>
                    
                    <Link to="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-md">
                        <UserPlus className="h-4 w-4 mr-2" />
                        {t('signup')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
