import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import TelegramCTA from "../components/TelegramCTA";

type Prediction = {
  id: number;
  competition_name: string | null;
  competition_cluster: string | null;
  home_team: string | null;
  away_team: string | null;
  prediction: string | null;
  status: string | null;
  start_date: string | null;
  odds_1: number | null;
  odds_x: number | null;
  odds_2: number | null;
  odds_12: number | null;
  odds_1x: number | null;
  odds_x2: number | null;
  is_expired: boolean | null;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}

function formatTime(date: string) {
  return new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" }).format(new Date(date));
}

function getPredictionOdd(prediction: string | null, item: Prediction) {
  if (!prediction) return null;
  const odds: Record<string, number | null> = { "1": item.odds_1, X: item.odds_x, "2": item.odds_2, "12": item.odds_12, "1X": item.odds_1x, X2: item.odds_x2 };
  return odds[prediction] ?? null;
}

export const dynamic = "force-dynamic";

export default async function MatchesPage() {
  const supabase = await createClient();
  const { data: predictions, error } = await supabase
    .from("rapidapi_predictions")
    .select("id, competition_name, competition_cluster, home_team, away_team, prediction, status, start_date, odds_1, odds_x, odds_2, odds_12, odds_1x, odds_x2, is_expired")
    .eq("is_expired", false)
    .order("start_date", { ascending: true });

  const grouped = new Map<string, Prediction[]>();
  for (const prediction of (predictions ?? []) as Prediction[]) {
    if (!prediction.start_date) continue;
    const dateKey = new Date(prediction.start_date).toISOString().slice(0, 10);
    grouped.set(dateKey, [...(grouped.get(dateKey) ?? []), prediction]);
  }
  const days = Array.from(grouped.entries());

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-[#f8f7f3]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">Coloriage<span className="text-[#7a9b76]">.</span></Link>
          <div className="flex items-center gap-3"><TelegramCTA compact /><Link href="/" className="rounded-full border border-[#17231d]/10 bg-white px-5 py-2.5 text-sm font-bold transition hover:shadow-md">← Accueil</Link></div>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Pronostics</p><h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Les pronostics</h1><p className="mt-5 text-lg leading-8 text-[#5d6962]">Les pronostics sont automatiquement alimentés depuis Supabase et classés par date.</p></div>
        {error ? (
          <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700">Impossible de charger les pronostics pour le moment.</div>
        ) : days.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-[#17231d]/10 bg-white p-10 text-center shadow-sm"><h2 className="text-2xl font-black">Aucun pronostic disponible</h2><p className="mt-2 text-[#68736d]">Les prochaines prédictions apparaîtront automatiquement ici.</p></div>
        ) : (
          <div className="mt-12 space-y-14">{days.map(([dateKey, dayPredictions]) => (<section key={dateKey}><div className="mb-6 flex items-end justify-between gap-4 border-b border-[#17231d]/10 pb-4"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Date</p><h2 className="mt-1 text-2xl font-black capitalize sm:text-3xl">{formatDate(dayPredictions[0].start_date!)}</h2></div><span className="rounded-full bg-[#17231d] px-4 py-2 text-xs font-bold text-white">{dayPredictions.length} pronostic{dayPredictions.length > 1 ? "s" : ""}</span></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{dayPredictions.map((match) => { const odd = getPredictionOdd(match.prediction, match); return (<article key={match.id} className="rounded-3xl border border-[#17231d]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17231d]/5"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider"><span className="text-[#7a9b76]">{match.competition_name ?? match.competition_cluster ?? "Football"}</span><span className="rounded-full bg-[#eef3eb] px-3 py-1 text-[#45604b]">À venir</span></div><p className="mt-5 text-sm font-semibold text-[#68736d]">Coup d&apos;envoi : {formatTime(match.start_date!)}</p><div className="mt-5 space-y-3"><div className="rounded-2xl bg-[#f5f5f1] px-5 py-4 text-center text-lg font-black">{match.home_team ?? "Équipe domicile"}</div><div className="text-center text-xs font-black text-[#7a9b76]">VS</div><div className="rounded-2xl bg-[#f5f5f1] px-5 py-4 text-center text-lg font-black">{match.away_team ?? "Équipe extérieure"}</div></div><div className="mt-5 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#eef3eb] p-4 text-center"><p className="text-xs font-bold uppercase tracking-wider text-[#68736d]">Pronostic</p><p className="mt-1 text-2xl font-black">{match.prediction ?? "-"}</p></div><div className="rounded-2xl bg-[#eef3eb] p-4 text-center"><p className="text-xs font-bold uppercase tracking-wider text-[#68736d]">Cote</p><p className="mt-1 text-2xl font-black">{odd ?? "-"}</p></div></div><Link href={`/matchs/${match.id}`} className="mt-6 block rounded-xl bg-[#17231d] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#26372c]">Voir le pronostic →</Link></article>); })}</div></section>))}</div>
        )}
        <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-[#17231d]/10 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Telegram</p><h2 className="mt-2 text-2xl font-black">Ne ratez pas les prochaines analyses.</h2><p className="mt-2 text-[#68736d]">Retrouvez les publications et nouveautés du projet dans la communauté.</p></div><TelegramCTA /></div>
      </section>
    </main>
  );
}
