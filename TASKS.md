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
Statut : 🔵 En cours
Objectif : créer une structure propre pour afficher les matchs sans dépendre d'une API sportive payante.
Première étape : définir le modèle TypeScript des matchs et alimenter une liste de démonstration côté site.
Critère de fin : liste des matchs accessible depuis l'accueil, structure prête à être remplacée plus tard par Supabase ou une source externe.

## Règle
Une tâche doit être terminée et testée avant de passer à la suivante.
