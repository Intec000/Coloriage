export type MatchStatus = "scheduled" | "live" | "finished";

export type Prediction = {
  label: string;
  confidence: number;
  rationale: string;
};

export type Match = {
  id: string;
  competition: string;
  kickoff: string;
  homeTeam: string;
  awayTeam: string;
  status: MatchStatus;
  featured?: boolean;
  prediction?: Prediction;
};

/**
 * Temporary V1 data source.
 * This module is intentionally independent from the UI so it can later be
 * replaced by Supabase or an external provider without rewriting components.
 */
export const demoMatches: Match[] = [
  {
    id: "demo-001",
    competition: "Championnat — Démonstration",
    kickoff: "18:00",
    homeTeam: "Équipe A",
    awayTeam: "Équipe B",
    status: "scheduled",
    featured: true,
    prediction: {
      label: "Équipe A ou nul",
      confidence: 68,
      rationale: "Estimation illustrative basée sur une lecture simplifiée de la rencontre.",
    },
  },
  {
    id: "demo-002",
    competition: "Championnat — Démonstration",
    kickoff: "20:30",
    homeTeam: "Équipe C",
    awayTeam: "Équipe D",
    status: "scheduled",
    prediction: {
      label: "Plus de 1,5 buts",
      confidence: 61,
      rationale: "Exemple de projection V1 à remplacer par des données réelles.",
    },
  },
  {
    id: "demo-003",
    competition: "Championnat — Démonstration",
    kickoff: "21:00",
    homeTeam: "Équipe E",
    awayTeam: "Équipe F",
    status: "scheduled",
    prediction: {
      label: "Match équilibré",
      confidence: 54,
      rationale: "Aucune tendance forte n'est établie dans ces données de démonstration.",
    },
  },
];
