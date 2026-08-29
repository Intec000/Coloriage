import Link from "next/link";
import { demoStandings } from "@/lib/standings";

export default function StandingsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            Coloriage<span className="text-[#7a9b76]">.</span>
          </Link>
          <Link href="/matchs" className="rounded-full border border-[#17231d]/10 px-5 py-2.5 text-sm font-bold">
            Matchs →
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Classement V1</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">{demoStandings.competition}</h1>
          <p className="mt-5 text-lg leading-8 text-[#5d6962]">
            Une vue simple du classement, pensée pour être remplacée plus tard par des données réelles sans modifier l&apos;interface.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#17231d]/10 bg-white shadow-sm">
          <div className="grid grid-cols-[52px_1fr_repeat(3,60px)_80px] gap-2 border-b border-[#17231d]/10 bg-[#f5f5f1] px-5 py-4 text-xs font-black uppercase tracking-wider text-[#68736d] sm:grid-cols-[60px_1fr_repeat(5,70px)_90px]">
            <span>#</span><span>Équipe</span><span>J</span><span>G</span><span>N</span><span className="hidden sm:block">D</span><span className="hidden sm:block">Diff.</span><span>Pts</span>
          </div>

          <div>
            {demoStandings.rows.map((row) => (
              <div key={row.team} className="grid grid-cols-[52px_1fr_repeat(3,60px)_80px] items-center gap-2 border-b border-[#17231d]/10 px-5 py-4 text-sm last:border-b-0 sm:grid-cols-[60px_1fr_repeat(5,70px)_90px]">
                <span className="font-black text-[#7a9b76]">{row.position}</span>
                <span className="font-bold">{row.team}</span>
                <span>{row.played}</span>
                <span>{row.wins}</span>
                <span>{row.draws}</span>
                <span className="hidden sm:block">{row.losses}</span>
                <span className="hidden sm:block">{row.goalsFor - row.goalsAgainst > 0 ? `+${row.goalsFor - row.goalsAgainst}` : row.goalsFor - row.goalsAgainst}</span>
                <span className="font-black">{row.points}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#17231d]/10 bg-white p-5 text-sm leading-6 text-[#68736d]">
          Données de démonstration uniquement. Le classement réel sera alimenté par la source de données connectée au projet.
        </div>
      </section>
    </main>
  );
}
