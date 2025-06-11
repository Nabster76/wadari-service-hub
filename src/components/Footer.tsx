
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-orange-400 mb-4">Wadari</div>
            <p className="text-gray-300 mb-6 max-w-md">
              La plateforme leader pour les services à domicile au Maroc. 
              Trouvez des professionnels qualifiés près de chez vous.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Massage</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Coiffure</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Ménage</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Baby-sitting</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Fitness</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Nous contacter</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 text-gray-300">
            <MapPin className="h-5 w-5 text-orange-400" />
            <span>Casablanca, Maroc</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <Phone className="h-5 w-5 text-orange-400" />
            <span>+212 5XX-XXX-XXX</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-300">
            <Mail className="h-5 w-5 text-orange-400" />
            <span>contact@wadari.ma</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Wadari. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
