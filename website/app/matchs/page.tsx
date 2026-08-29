import Link from "next/link";
import { demoMatches } from "@/lib/matches";

export default function MatchesPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-[#f8f7f3]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            Coloriage<span className="text-[#7a9b76]">.</span>
          </Link>
          <Link href="/" className="rounded-full border border-[#17231d]/10 bg-white px-5 py-2.5 text-sm font-bold transition hover:shadow-md">
            ← Accueil
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Centre des matchs</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Les matchs à analyser</h1>
          <p className="mt-5 text-lg leading-8 text-[#5d6962]">
            Retrouvez ici les rencontres sélectionnées pour l&apos;analyse. Cette première version utilise des données de démonstration avant la connexion à la base de données.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            ["Tous", true],
            ["À venir", false],
            ["En direct", false],
            ["Terminés", false],
          ].map(([label, active]) => (
            <button key={label as string} type="button" className={`rounded-full px-5 py-2.5 text-sm font-bold ${active ? "bg-[#17231d] text-white" : "border border-[#17231d]/10 bg-white text-[#536159]"}`}>
              {label as string}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demoMatches.map((match) => (
            <article key={match.id} className="rounded-3xl border border-[#17231d]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17231d]/5">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-[#7a9b76]">{match.competition}</span>
                <span className="rounded-full bg-[#eef3eb] px-3 py-1 text-[#45604b]">{match.status}</span>
              </div>

              <p className="mt-5 text-sm font-semibold text-[#68736d]">
                {new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(match.kickoff))}
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-[#f5f5f1] px-5 py-4 text-center text-lg font-black">{match.homeTeam}</div>
                <div className="text-center text-xs font-black text-[#7a9b76]">VS</div>
                <div className="rounded-2xl bg-[#f5f5f1] px-5 py-4 text-center text-lg font-black">{match.awayTeam}</div>
              </div>

              <Link href={`/matchs/${match.id}`} className="mt-6 block rounded-xl bg-[#17231d] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#26372c]">
                Ouvrir l&apos;analyse →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
