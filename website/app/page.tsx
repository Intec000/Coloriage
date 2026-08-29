const features = [
  {
    number: "01",
    title: "Analyses claires",
    text: "Une lecture structurée des rencontres pour comprendre les éléments importants avant de décider.",
  },
  {
    number: "02",
    title: "Statistiques utiles",
    text: "Les chiffres essentiels réunis au même endroit pour comparer forme, tendances et performances.",
  },
  {
    number: "03",
    title: "Historique transparent",
    text: "Les résultats passés seront conservés pour pouvoir évaluer les analyses avec recul.",
  },
];

const upcoming = [
  { time: "18:00", home: "Équipe A", away: "Équipe B", tag: "Analyse" },
  { time: "20:30", home: "Équipe C", away: "Équipe D", tag: "À venir" },
  { time: "21:00", home: "Équipe E", away: "Équipe F", tag: "À surveiller" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] text-[#17231d]">
      <header className="sticky top-0 z-20 border-b border-[#17231d]/10 bg-[#f8f7f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-xl font-black tracking-tight">
            Coloriage<span className="text-[#7a9b76]">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#analyses" className="transition hover:text-[#7a9b76]">Analyses</a>
            <a href="#matchs" className="transition hover:text-[#7a9b76]">Matchs</a>
            <a href="#methode" className="transition hover:text-[#7a9b76]">Méthode</a>
          </nav>
          <a href="#matchs" className="rounded-full bg-[#17231d] px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#26372c]">
            Voir les matchs
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="pointer-events-none absolute -right-32 -top-24 h-80 w-80 rounded-full bg-[#dfe9dc] blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
          <div className="relative">
            <p className="mb-6 inline-flex rounded-full border border-[#7a9b76]/25 bg-[#dfe9dc] px-4 py-2 text-sm font-bold text-[#35533c]">
              ⚽ Analyses • Statistiques • Pronostics
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Comprendre le match avant de jouer.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#536159] sm:text-xl">
              Une plateforme pensée pour lire les rencontres simplement : forme récente, statistiques, tendances et analyses réunies au même endroit.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#matchs" className="rounded-full bg-[#17231d] px-7 py-4 text-center font-bold text-white shadow-lg shadow-[#17231d]/10 transition hover:-translate-y-0.5 hover:bg-[#26372c]">
                Explorer les matchs →
              </a>
              <a href="#methode" className="rounded-full border border-[#17231d]/15 bg-white px-7 py-4 text-center font-bold transition hover:-translate-y-0.5 hover:shadow-md">
                Comment ça marche
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#657169]">
              <span>✓ Lecture simple</span>
              <span>✓ Données structurées</span>
              <span>✓ Approche responsable</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#dfe9dc]/70 blur-2xl" />
            <div className="relative rounded-[2rem] border border-[#17231d]/10 bg-white p-5 shadow-[0_30px_80px_rgba(23,35,29,0.12)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#17231d]/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Focus match</p>
                  <h2 className="mt-1 text-xl font-black">Analyse du jour</h2>
                </div>
                <span className="rounded-full bg-[#eef3eb] px-3 py-1 text-xs font-bold text-[#45604b]">V1</span>
              </div>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
                <div className="rounded-2xl bg-[#f5f5f1] p-5 font-bold">Équipe A</div>
                <span className="text-sm font-black text-[#7a9b76]">VS</span>
                <div className="rounded-2xl bg-[#f5f5f1] p-5 font-bold">Équipe B</div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  ["Forme récente", "Analyse"],
                  ["Confrontations", "Statistiques"],
                  ["Tendance", "À surveiller"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-xl bg-[#f8f7f3] px-4 py-3 text-sm">
                    <span className="text-[#5d6962]">{label}</span><strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-[#17231d]/10 px-4 py-3">
                <span className="text-sm font-semibold">Confiance de lecture</span>
                <span className="font-black text-[#7a9b76]">—</span>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#718078]">Interface de démonstration. Les données réelles seront connectées dans les prochaines étapes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="analyses" className="border-y border-[#17231d]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Pourquoi Coloriage</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Moins de bruit. Plus de contexte.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#68736d]">Une base conçue pour évoluer progressivement vers un véritable portail d'analyses sportives.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.number} className="group rounded-3xl border border-[#17231d]/10 bg-[#f8f7f3] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#17231d]/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#7a9b76]">{feature.number}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dfe9dc] font-black text-[#35533c]">✓</span>
                </div>
                <h3 className="mt-8 text-xl font-black">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#5d6962]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="matchs" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Aperçu</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Matchs à analyser</h2>
          </div>
          <span className="rounded-full border border-[#17231d]/10 bg-white px-4 py-2 text-sm font-semibold text-[#68736d]">Données de démonstration</span>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {upcoming.map((match) => (
            <article key={match.time} className="rounded-3xl border border-[#17231d]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7a9b76]">
                <span>{match.time}</span><span>{match.tag}</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 rounded-2xl bg-[#f5f5f1] p-4 text-center font-bold">{match.home}</div>
                <span className="text-xs font-black text-[#7a9b76]">VS</span>
                <div className="flex-1 rounded-2xl bg-[#f5f5f1] p-4 text-center font-bold">{match.away}</div>
              </div>
              <button type="button" className="mt-5 w-full rounded-xl border border-[#17231d]/10 px-4 py-3 text-sm font-bold transition hover:bg-[#f8f7f3]">
                Voir l’analyse
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="methode" className="bg-[#17231d]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9cdb5]">Notre approche</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Des informations compréhensibles, sans promesse irréaliste.</h2>
            </div>
            <div className="space-y-5 text-white/70">
              <p className="leading-7">Coloriage est conçu comme un outil d'information et d'analyse. Un pronostic reste une estimation : aucun résultat n'est garanti.</p>
              <p className="leading-7">Le site sera développé progressivement avec un historique transparent et des données clairement présentées.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#17231d] px-6 py-8 text-center text-sm text-white/50">
        © 2026 Coloriage — Analyses et statistiques sportives. 18+ • Jeu responsable.
      </footer>
    </main>
  );
}
