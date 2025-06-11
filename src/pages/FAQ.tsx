
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, HelpCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const { t } = useTranslation();

  const faqCategories = [
    {
      title: 'Réservations',
      items: [
        {
          question: 'Comment réserver un service ?',
          answer: 'Pour réserver un service, sélectionnez le service souhaité, choisissez votre ville, la date et l\'heure qui vous conviennent, puis confirmez votre réservation. Vous recevrez une confirmation par email et SMS.'
        },
        {
          question: 'Puis-je modifier ou annuler ma réservation ?',
          answer: 'Oui, vous pouvez modifier ou annuler votre réservation jusqu\'à 2 heures avant l\'heure prévue. Connectez-vous à votre compte et accédez à "Mes réservations" pour effectuer les modifications.'
        },
        {
          question: 'Que se passe-t-il si le prestataire annule ?',
          answer: 'Si un prestataire doit annuler, nous vous préviendrons immédiatement et vous proposerons un nouveau créneau avec le même prestataire ou un autre professionnel qualifié.'
        }
      ]
    },
    {
      title: 'Paiements',
      items: [
        {
          question: 'Quels modes de paiement acceptez-vous ?',
          answer: 'Nous acceptons les paiements en espèces à la fin du service. Bientôt, nous intégrerons les paiements par carte bancaire et mobile.'
        },
        {
          question: 'Quand dois-je payer ?',
          answer: 'Le paiement s\'effectue à la fin du service, directement au prestataire. Vous recevrez une facture détaillée par email.'
        },
        {
          question: 'Y a-t-il des frais cachés ?',
          answer: 'Non, tous nos prix sont transparents. Le prix affiché inclut tous les frais. Seuls les pourboires sont optionnels.'
        }
      ]
    },
    {
      title: 'Prestataires',
      items: [
        {
          question: 'Comment sont sélectionnés vos prestataires ?',
          answer: 'Tous nos prestataires passent par un processus de vérification rigoureux incluant la vérification de leurs qualifications, références et antécédents.'
        },
        {
          question: 'Puis-je choisir mon prestataire ?',
          answer: 'Oui, vous pouvez voir les profils des prestataires disponibles et choisir celui qui vous convient le mieux en fonction des avis et de l\'expérience.'
        },
        {
          question: 'Comment noter un prestataire ?',
          answer: 'Après chaque service, vous recevrez un email vous invitant à noter votre expérience et laisser un commentaire sur le prestataire.'
        }
      ]
    },
    {
      title: 'Compte utilisateur',
      items: [
        {
          question: 'Comment créer un compte ?',
          answer: 'Cliquez sur "S\'inscrire" en haut de la page, remplissez vos informations et validez votre email. Votre compte sera actif immédiatement.'
        },
        {
          question: 'J\'ai oublié mon mot de passe',
          answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Nous vous enverrons un lien pour réinitialiser votre mot de passe.'
        },
        {
          question: 'Comment modifier mes informations personnelles ?',
          answer: 'Connectez-vous à votre compte et accédez à la section "Profil" pour modifier vos informations personnelles.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                {t('faqTitle')}
              </h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions les plus fréquentes.
            </p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Rechercher dans la FAQ..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem 
                        key={itemIndex} 
                        value={`${categoryIndex}-${itemIndex}`}
                      >
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <Card className="mt-12 bg-orange-50 border-orange-200">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600 mb-4">
                Notre équipe support est là pour vous aider !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Nous contacter
                </a>
                <a
                  href="mailto:support@wadari.ma"
                  className="inline-flex items-center justify-center px-6 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-50 transition-colors"
                >
                  support@wadari.ma
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
