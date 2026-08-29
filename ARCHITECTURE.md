# ARCHITECTURE.md

## V1 provisoire

### Frontend
Accueil, matchs, fiche match, pronostics, conseils, classements, historique, CTA Telegram/affiliation.

### Backend
Gestion des matchs, pronostics, statistiques internes, articles, classement, administration.

### Base de données
Entités initiales : matches, teams, predictions, prediction_results, articles, rankings, site_settings, admin_users.

### Automatisation
n8n reste séparé du cœur applicatif. La base de données reste la source de vérité.

### API
Aucune API sportive payante obligatoire pour V1. Une API sera ajoutée seulement si elle devient nécessaire et si sa licence autorise l'usage prévu.

### Principe
Le site V1 doit rester fonctionnel si n8n ou une API externe est indisponible.
