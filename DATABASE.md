# DATABASE.md — Modèle de données V1

## Objectif
Définir une base simple pour alimenter le site sans API sportive payante. Les données sont saisies/gérées depuis l'administration au départ.

## Relations principales

```
teams 1 ─── N matches N ─── 1 competitions

matches 1 ─── N predictions
matches 1 ─── N match_stats

predictions 1 ─── 0..1 prediction_results

articles N ─── 1 article_categories

community_members 1 ─── N community_points
community_members 1 ─── N reward_periods
```

## Tables V1

### competitions
- id
- name
- slug
- country
- active
- created_at

### teams
- id
- name
- slug
- logo_url (nullable)
- country
- created_at

### matches
- id
- competition_id
- home_team_id
- away_team_id
- scheduled_at
- status (scheduled, live, finished, postponed, cancelled)
- home_score (nullable)
- away_score (nullable)
- featured
- created_at
- updated_at

### match_stats
- id
- match_id
- home_possession (nullable)
- away_possession (nullable)
- home_shots (nullable)
- away_shots (nullable)
- home_shots_on_target (nullable)
- away_shots_on_target (nullable)
- home_corners (nullable)
- away_corners (nullable)
- source_note (nullable)
- created_at
- updated_at

### predictions
- id
- match_id
- title
- market_type
- selection
- odds (nullable)
- confidence (nullable)
- analysis
- status (draft, published, won, lost, void)
- published_at (nullable)
- created_at
- updated_at

### prediction_results
- id
- prediction_id
- result (won, lost, void)
- settled_at
- note (nullable)

### article_categories
- id
- name
- slug

### articles
- id
- category_id
- title
- slug
- excerpt
- content
- status (draft, published)
- published_at (nullable)
- created_at
- updated_at

### community_members
- id
- telegram_username (nullable)
- display_name
- active
- created_at

### community_points
- id
- member_id
- points
- reason
- created_at

### reward_periods
- id
- period_start
- period_end
- status (open, closed, paid)
- reward_pool_amount (nullable)
- currency (nullable)
- created_at

### reward_rankings
- id
- reward_period_id
- member_id
- rank
- points
- reward_amount (nullable)
- created_at

## Règles importantes

1. Les scores et statistiques peuvent être NULL avant saisie.
2. Un match possède exactement une compétition et deux équipes.
3. Une prédiction appartient à un match.
4. Une prédiction publiée doit conserver son historique et son résultat final.
5. Les performances affichées au public doivent être calculées à partir des résultats enregistrés, jamais modifiées après coup.
6. Le classement communautaire est séparé des données de paris.
7. Le montant misé n'est pas stocké dans le classement V1.
8. Le système de récompenses reste désactivé tant que ses règles de conformité/affiliation ne sont pas validées.
9. Les URLs de logos et données externes doivent respecter les droits/licences de leur fournisseur.
