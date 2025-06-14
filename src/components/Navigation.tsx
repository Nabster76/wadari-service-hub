
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, Calendar, Settings, LogIn, UserPlus, ChevronDown, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/hooks/useAuth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { user, profile, signOut, loading } = useAuth();

  const navItems = [
    { name: t('services'), href: '/services', icon: Calendar },
    { name: t('howItWorks'), href: '#how-it-works', icon: Settings },
    { name: t('becomeProvider'), href: '/provider/register', icon: User },
    { name: t('support'), href: '/faq', icon: Settings }
  ];

  // Handle scroll effect for mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActiveRoute = (href: string) => {
    if (href.startsWith('#')) return false;
    return location.pathname === href;
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const getUserDisplayName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    }
    return user?.email?.split('@')[0] || 'Utilisateur';
  };

  const getUserInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || 'U';
  };

  return (
    <>
      {/* Mobile Navigation */}
      <nav className={`md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-background/98' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center group">
              <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-amber-600 transition-all">
                Wadari
              </div>
              <Badge variant="secondary" className="ml-2 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                Maroc
              </Badge>
            </Link>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              
              {/* Mobile Menu Trigger */}
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-10 w-10 p-0 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                  >
                    <Menu className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DrawerTrigger>
                
                <DrawerContent className="bg-background/98 backdrop-blur-md border-t-2 border-orange-200 dark:border-orange-800">
                  <div className="flex flex-col p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-border/50">
                      <div className="flex items-center">
                        <div className="text-lg font-semibold text-foreground">Menu</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsOpen(false)}
                        className="h-8 w-8 p-0 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Navigation Items */}
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 group ${
                            isActiveRoute(item.href)
                              ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
                              : 'hover:bg-orange-50 dark:hover:bg-orange-900/20 text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400'
                          }`}
                          onClick={() => setIsOpen(false)}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animation: isOpen ? 'slide-up 0.3s ease-out forwards' : 'none'
                          }}
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium text-base">{item.name}</span>
                          {isActiveRoute(item.href) && (
                            <div className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></div>
                          )}
                        </Link>
                      ))}
                    </div>

                    {/* Language Selector */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-sm font-medium text-muted-foreground">Language</span>
                      </div>
                      <LanguageSelector />
                    </div>

                    {/* Auth Buttons */}
                    <div className="space-y-3 pt-4 border-t border-border/50">
                      {user ? (
                        <>
                          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                            <Button 
                              variant="outline" 
                              className="w-full h-12 text-base font-medium border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300 dark:hover:border-orange-700"
                            >
                              <User className="h-5 w-5 mr-3" />
                              Dashboard
                            </Button>
                          </Link>
                          
                          <Button 
                            onClick={handleSignOut}
                            variant="outline"
                            className="w-full h-12 text-base font-medium border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-700 text-red-600 dark:text-red-400"
                          >
                            <LogOut className="h-5 w-5 mr-3" />
                            Déconnexion
                          </Button>
                        </>
                      ) : (
                        <>
                          <Link to="/auth" onClick={() => setIsOpen(false)}>
                            <Button 
                              variant="outline" 
                              className="w-full h-12 text-base font-medium border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300 dark:hover:border-orange-700"
                            >
                              <LogIn className="h-5 w-5 mr-3" />
                              {t('login')}
                            </Button>
                          </Link>
                          
                          <Link to="/auth" onClick={() => setIsOpen(false)}>
                            <Button className="w-full h-12 text-base font-medium bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all">
                              <UserPlus className="h-5 w-5 mr-3" />
                              {t('signup')}
                            </Button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
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
            <div className="flex items-center space-x-8">
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
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <LanguageSelector />
              
              {!loading && (
                user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt={getUserDisplayName()} />
                          <AvatarFallback className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200">
                            {getUserInitials()}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <div className="flex flex-col space-y-1 p-2">
                        <p className="text-sm font-medium leading-none">{getUserDisplayName()}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/dashboard" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          Profil
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
                        <LogOut className="mr-2 h-4 w-4" />
                        Déconnexion
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="ghost" className="text-muted-foreground hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20">
                        <LogIn className="h-4 w-4 mr-2" />
                        {t('login')}
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all">
                        <UserPlus className="h-4 w-4 mr-2" />
                        {t('signup')}
                      </Button>
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
