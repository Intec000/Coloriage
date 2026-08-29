# PROJECT.md — Portail de pronostics sportifs

## 1. Vision
Construire progressivement un portail de pronostics sportifs orienté contenu, analyses, statistiques, communauté Telegram et acquisition via affiliation.

Le produit doit être utile même sans inscription : le contenu sportif et éducatif est le produit principal. L'affiliation est un canal de monétisation, pas l'unique raison de visiter le site.

## 2. Objectif V1
Lancer une première version simple, fonctionnelle et maintenable, sans API sportive payante au départ.

V1 :
- Accueil
- Matchs du jour (saisie/gestion interne au départ)
- Fiches de matchs
- Pronostics et analyses
- Statistiques disponibles manuellement
- Classements
- Astuces / éducation
- Historique transparent des pronostics
- Liens vers Telegram
- Parcours d'affiliation
- Dashboard admin minimal

Hors V1 :
- Scores live
- Alertes Telegram avancées
- Comparateur de cotes
- Comptes utilisateurs
- IA d'analyse automatisée
- API sportives

## 3. Positionnement
Pronostics sportifs + analyses + statistiques + communauté + contenu éducatif.

Ne jamais présenter les paris comme des gains garantis, de l'argent facile ou une méthode sûre de gagner.

## 4. Audience
Adultes de 18 ans et plus intéressés par le sport et les analyses/pronostics sportifs, dans les marchés où la promotion et le service sont légalement autorisés.

## 5. Monétisation
Source prévue : affiliation sportive, conformément aux conditions du programme et aux règles applicables.

Le programme communautaire envisagé (Top 3 hebdomadaire) doit être validé avant lancement : conditions d'affiliation, réglementation, plateformes et jeu responsable.

## 6. Architecture cible
Site → Backend → Base de données. n8n et Telegram sont des services périphériques. Une API sportive pourra être ajoutée plus tard.

## 7. Principes de développement
1. Une fonctionnalité à la fois.
2. Tester avant de continuer.
3. Pas de gros bloc de code incompris.
4. Ne pas changer l'architecture sans documenter la décision.
5. Toute IA doit lire la documentation avant de coder.
6. Le site V1 doit fonctionner sans n8n.

## 8. Continuité entre IA
Toujours transmettre PROJECT.md, ROADMAP.md, ARCHITECTURE.md, TASKS.md, DECISIONS.md, CHANGELOG.md et le module concerné.

Instruction standard : « Lis d'abord la documentation du projet. Respecte l'architecture et les décisions existantes. Ne change pas l'architecture sans me prévenir. Travaille uniquement sur la tâche demandée. À la fin, indique les fichiers modifiés, les tests effectués et les problèmes restants. »

## 9. Sécurité et conformité
18+ uniquement. Jeu responsable. Respect des lois, restrictions locales, conditions d'affiliation et licences des données. Pas de promesses de gains ni de fausses performances.

## 10. État actuel
Phase : PLANIFICATION. TASK-001 validée. TASK-002 en préparation.
