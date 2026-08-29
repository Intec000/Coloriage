export type MatchStatus = "scheduled" | "live" | "finished";

export type Match = {
  id: string;
  competition: string;
  kickoff: string;
  homeTeam: string;
  awayTeam: string;
  status: MatchStatus;
  featured?: boolean;
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
  },
  {
    id: "demo-002",
    competition: "Championnat — Démonstration",
    kickoff: "20:30",
    homeTeam: "Équipe C",
    awayTeam: "Équipe D",
    status: "scheduled",
  },
  {
    id: "demo-003",
    competition: "Championnat — Démonstration",
    kickoff: "21:00",
    homeTeam: "Équipe E",
    awayTeam: "Équipe F",
    status: "scheduled",
  },
];
