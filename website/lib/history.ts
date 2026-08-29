export type HistoryStatus = "pending" | "won" | "lost" | "void";

export type HistoryEntry = {
  id: string;
  date: string;
  matchLabel: string;
  prediction: string;
  confidence: number;
  status: HistoryStatus;
  result: string;
};

export const demoHistory: HistoryEntry[] = [
  {
    id: "history-001",
    date: "2026-08-28",
    matchLabel: "Équipe A — Équipe B",
    prediction: "Équipe A ou nul",
    confidence: 68,
    status: "won",
    result: "Estimation validée",
  },
  {
    id: "history-002",
    date: "2026-08-27",
    matchLabel: "Équipe C — Équipe D",
    prediction: "Plus de 1,5 buts",
    confidence: 61,
    status: "lost",
    result: "Estimation non validée",
  },
  {
    id: "history-003",
    date: "2026-08-26",
    matchLabel: "Équipe E — Équipe F",
    prediction: "Match équilibré",
    confidence: 54,
    status: "pending",
    result: "Résultat en attente",
  },
];
