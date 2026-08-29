import Link from "next/link";
import { demoMatches } from "@/lib/matches";

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const match = demoMatches.find((item) => item.id === id);

  if (!match) {
    return (
      <main className="min-h-screen bg-[#f8f7f3] px-6 py-20 text-[#17231d]">
        <div className="mx-auto max-w-2xl rounded-3xl border border-[#17231d]/10 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Match introuvable</p>
          <h1 className="mt-3 text-3xl font-black">Cette rencontre n&apos;existe pas.</h1>
          <Link href="/matchs" className="mt-7 inline-block rounded-full bg-[#17231d] px-6 py-3 font-bold text-white">← Retour aux matchs</Link>
        </div>
      </main>
    );
  }

  const stats = [
    ["Forme récente", "À analyser"],
    ["Buts marqués", "Données à venir"],
    ["Buts encaissés", "Données à venir"],
    ["Confrontations", "Données à venir"],
  ];

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">Coloriage<span className="text-[#7a9b76]">.</span></Link>
          <Link href="/matchs" className="rounded-full border border-[#17231d]/10 px-5 py-2.5 text-sm font-bold">← Tous les matchs</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">{match.competition}</p>
          <p className="mt-3 text-sm font-semibold text-[#68736d]">{match.kickoff} • {match.status === "scheduled" ? "À venir" : match.status}</p>
          <div className="mx-auto mt-8 grid max-w-4xl items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#17231d]/10 sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dfe9dc] text-2xl font-black">A</div>
              <h1 className="mt-5 text-2xl font-black sm:text-3xl">{match.homeTeam}</h1>
            </div>
            <span className="text-lg font-black text-[#7a9b76]">VS</span>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#17231d]/10 sm:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dfe9dc] text-2xl font-black">B</div>
              <h2 className="mt-5 text-2xl font-black sm:text-3xl">{match.awayTeam}</h2>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <section className="rounded-3xl border border-[#17231d]/10 bg-white p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Lecture du match</p>
            <h2 className="mt-3 text-2xl font-black">Statistiques essentielles</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {stats.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#f8f7f3] p-5">
                  <p className="text-sm font-semibold text-[#68736d]">{label}</p>
                  <p className="mt-2 font-black">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl bg-[#17231d] p-7 text-white sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9cdb5]">Analyse</p>
            <h2 className="mt-3 text-2xl font-black">Verdict</h2>
            <div className="mt-7 rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-white/60">Niveau de confiance</p>
              <p className="mt-2 text-3xl font-black">—</p>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/65">L&apos;analyse automatique sera ajoutée lorsque les données réelles seront connectées.</p>
          </aside>
        </div>

        <section className="mt-6 rounded-3xl border border-[#17231d]/10 bg-white p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Historique</p>
          <h2 className="mt-3 text-2xl font-black">Forme et tendances</h2>
          <div className="mt-6 rounded-2xl bg-[#f8f7f3] p-6 text-sm leading-7 text-[#5d6962]">
            Les cinq derniers matchs, les buts marqués/encaissés, les absences et les confrontations directes seront affichés ici après branchement de la source de données.
          </div>
        </section>
      </section>
    </main>
  );
}
