# TASKS.md

## Phase 0 — Planification

### TASK-001 — Choisir la stack
Statut : 🟢 Terminé
Décision : Next.js + TypeScript, Tailwind CSS, backend Next.js, Supabase/PostgreSQL, GitHub, Vercel. Pas d'API sportive payante en V1.

### TASK-002 — Finaliser le schéma de données
Statut : 🟢 Terminé
Objectif : définir les tables, champs et relations V1.
Livrables : DATABASE.md et database/schema-v1.sql.

### TASK-003 — Créer le dépôt et la structure
Statut : 🟢 Terminé
Objectif : initialiser le projet conformément à ARCHITECTURE.md.
Critère de fin : projet démarre localement.
Validation : serveur Next.js lancé avec succès en local sur http://localhost:3000 le 29/08/2026.

### TASK-004 — Construire la page d'accueil
Statut : 🟢 Terminé
Objectif : créer la première vraie page d'accueil de Coloriage, responsive et cohérente avec l'identité du projet.
Livrables : hero, navigation, présentation des analyses/statistiques, aperçu des matchs, approche responsable et footer.
Validation : page testée localement et validée visuellement le 29/08/2026.

### TASK-005 — Gestion des matchs V1
Statut : 🟢 Terminé
Objectif : créer une structure propre pour afficher les matchs sans dépendre d'une API sportive payante.
Validation : modèle TypeScript, données de démonstration, page liste `/matchs` et intégration sur l'accueil présentes.

### TASK-006 — Fiche match V1
Statut : 🟢 Terminé
Objectif : permettre d'ouvrir une fiche détaillée depuis chaque match.
Validation : route dynamique `/matchs/[id]`, gestion du match introuvable, présentation des équipes, statut, statistiques essentielles, verdict et historique à venir.

### TASK-007 — Pronostics V1
Statut : 🔵 En cours
Objectif : préparer une section de pronostic clairement présentée comme une estimation et non comme une garantie.
Première étape : définir une structure de pronostic liée à un match et l'afficher dans la fiche match.
Critère de fin : chaque fiche match peut afficher un pronostic V1 avec niveau de confiance et avertissement responsable.

## Règle
Une tâche doit être terminée et testée avant de passer à la suivante.
