
# Wadari - Services à domicile au Maroc

Wadari est une plateforme moderne pour la réservation de services à domicile au Maroc, inspirée de Wecasa mais adaptée au marché marocain.

## 🚀 Améliorations récentes

### Architecture et Performance
- **Centralisation des constantes** : Toutes les données statiques (villes, services, etc.) sont maintenant centralisées
- **Validation robuste** : Intégration de Zod pour la validation des formulaires avec des schémas réutilisables
- **Hooks personnalisés** : `useLocalStorage`, `useDebounce` pour une meilleure UX
- **Gestion d'erreurs** : ErrorBoundary global pour capturer et gérer les erreurs
- **Composants réutilisables** : LoadingSpinner, ImageWithFallback, SearchFilters

### UX/UI Améliorations
- **Recherche en temps réel** : Debounced search pour une meilleure performance
- **Filtres avancés** : Interface de filtrage améliorée avec reset et compteur de résultats
- **Images optimisées** : Fallback automatique et états de chargement
- **Formatage cohérent** : Prix, dates, et numéros de téléphone formatés selon les standards marocains

### Sécurité et Validation
- **Validation côté client** : Schémas Zod pour tous les formulaires
- **Regex marocains** : Validation spécifique pour les numéros de téléphone marocains
- **Sanitisation des données** : Nettoyage automatique des entrées utilisateur

## 🌟 Fonctionnalités

### Pour les clients
- **Réservation facile** : Interface intuitive en quelques clics
- **Services variés** : Massage, coiffure, ménage, baby-sitting, fitness
- **Géolocalisation** : Services disponibles à Casablanca, Rabat, Marrakech, Agadir
- **Professionnels vérifiés** : Tous les prestataires sont contrôlés
- **Tableau de bord** : Gestion des réservations et historique

### Pour les prestataires
- **Inscription simplifiée** : Processus de validation rapide
- **Gestion des disponibilités** : Planning flexible
- **Paiements sécurisés** : Règlement en MAD (Dirham marocain)
- **Tableau de bord professionnel** : Suivi des revenus et réservations

## 🚀 Technologies utilisées

- **Frontend** : React.js + TypeScript + Vite
- **Styling** : TailwindCSS + Shadcn/UI
- **Routing** : React Router
- **State Management** : TanStack Query
- **Icons** : Lucide React
- **Forms** : React Hook Form + Zod

## 🎨 Design System

Le design s'inspire de la culture marocaine avec :
- **Couleurs** : Orange terracotta (#f97316) et ambre (#f59e0b)
- **Typography** : Police Inter pour la lisibilité
- **Animations** : Transitions fluides et micro-interactions
- **Responsive** : Mobile-first design

## 📱 Pages principales

1. **Accueil** (`/`) - Hero section, services, témoignages
2. **Réservation** (`/booking`) - Processus étape par étape
3. **Tableau de bord** (`/dashboard`) - Gestion client
4. **Authentification** - Connexion/inscription (à implémenter)

## 🌍 Localisation

- **Langue principale** : Français
- **Devise** : MAD (Dirham marocain)
- **Support RTL** : Préparé pour l'arabe (futur)
- **Villes couvertes** : Casablanca, Rabat, Marrakech, Agadir

## 📦 Installation

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run build:dev    # Build de développement
npm run preview      # Prévisualisation du build
npm run lint         # Linting du code
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   └── ...             # Composants métier
├── hooks/              # Hooks personnalisés
├── lib/                # Utilitaires et configuration
│   ├── constants.ts    # Constantes centralisées
│   ├── validation.ts   # Schémas de validation
│   ├── formatters.ts   # Fonctions de formatage
│   └── ...
├── pages/              # Pages de l'application
└── ...
```

## 🔮 Fonctionnalités futures

- [ ] Système d'authentification complet
- [ ] Paiements en ligne (CMI, Stripe)
- [ ] Application mobile
- [ ] Support multilingue (Arabe)
- [ ] API backend complète
- [ ] Notifications push
- [ ] Système de chat en temps réel
- [ ] Programme de fidélité
- [ ] Tests unitaires et d'intégration
- [ ] PWA (Progressive Web App)
- [ ] Optimisation SEO avancée
- [ ] Analytics et tracking

## 📝 Notes techniques

- **Currency** : Tous les prix sont en MAD
- **Date format** : Format français (DD/MM/YYYY)
- **Phone format** : Format marocain (+212 6XX-XXX-XXX)
- **API Ready** : Structure préparée pour l'intégration backend

## 🤝 Contribution

Le projet est structuré de manière modulaire pour faciliter les contributions :
- Components réutilisables dans `/src/components`
- Pages dans `/src/pages`
- Hooks personnalisés dans `/src/hooks`
- Utilitaires dans `/src/lib`

## 📄 Licence

Ce projet est un prototype créé avec Lovable.dev pour démontrer les capacités de développement web moderne.

---

**Wadari** - Bringing professional home services to Morocco 🇲🇦
