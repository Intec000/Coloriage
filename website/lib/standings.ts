export type StandingRow = {
  position: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
};

export type StandingsTable = {
  competition: string;
  rows: StandingRow[];
};

/**
 * Temporary V1 standings data.
 * Independent from the UI so it can later be replaced by a database query.
 */
export const demoStandings: StandingsTable = {
  competition: "Championnat — Démonstration",
  rows: [
    { position: 1, team: "Équipe A", played: 5, wins: 3, draws: 1, losses: 1, goalsFor: 9, goalsAgainst: 5, points: 10 },
    { position: 2, team: "Équipe C", played: 5, wins: 3, draws: 1, losses: 1, goalsFor: 10, goalsAgainst: 6, points: 10 },
    { position: 3, team: "Équipe E", played: 5, wins: 2, draws: 2, losses: 1, goalsFor: 6, goalsAgainst: 6, points: 8 },
    { position: 4, team: "Équipe B", played: 5, wins: 2, draws: 1, losses: 2, goalsFor: 7, goalsAgainst: 7, points: 7 },
    { position: 5, team: "Équipe D", played: 5, wins: 2, draws: 1, losses: 2, goalsFor: 8, goalsAgainst: 9, points: 7 },
    { position: 6, team: "Équipe F", played: 5, wins: 1, draws: 3, losses: 1, goalsFor: 7, goalsAgainst: 6, points: 6 },
  ],
};
