const features = [
  {
    title: "Analyses claires",
    text: "Des analyses structurées pour comprendre les rencontres avant de prendre une décision.",
  },
  {
    title: "Statistiques utiles",
    text: "Les chiffres essentiels réunis au même endroit pour comparer les équipes et leurs tendances.",
  },
  {
    title: "Lecture responsable",
    text: "Les pronostics restent des estimations : aucune sélection ne garantit un résultat.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-[#f8f7f3]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="text-xl font-black tracking-tight">
            Coloriage<span className="text-[#7a9b76]">.</span>
          </a>
          <a
            href="#analyses"
            className="rounded-full border border-[#17231d]/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-white"
          >
            Découvrir
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-[#dfe9dc] px-4 py-2 text-sm font-bold text-[#35533c]">
              Analyses • Statistiques • Pronostics
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Comprendre le match avant de jouer.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#536159] sm:text-xl">
              Coloriage rassemble analyses, statistiques et tendances sportives dans une expérience simple, lisible et pensée pour aller à l’essentiel.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#analyses"
                className="rounded-full bg-[#17231d] px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#26372c]"
              >
                Voir les analyses
              </a>
              <a
                href="#methode"
                className="rounded-full border border-[#17231d]/15 bg-white px-7 py-4 text-center font-bold transition hover:-translate-y-0.5"
              >
                Notre méthode
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-[#17231d]/10 bg-white p-5 shadow-[0_24px_70px_rgba(23,35,29,0.10)] sm:p-7">
              <div className="flex items-center justify-between border-b border-[#17231d]/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Focus match</p>
                  <h2 className="mt-1 text-xl font-black">Analyse du jour</h2>
                </div>
                <span className="rounded-full bg-[#eef3eb] px-3 py-1 text-xs font-bold text-[#45604b]">V1</span>
              </div>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
                <div className="rounded-2xl bg-[#f5f5f1] p-5 font-bold">Équipe A</div>
                <span className="text-sm font-black text-[#7a9b76]">VS</span>
                <div className="rounded-2xl bg-[#f5f5f1] p-5 font-bold">Équipe B</div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex justify-between rounded-xl bg-[#f8f7f3] px-4 py-3 text-sm"><span>Forme récente</span><strong>Analyse</strong></div>
                <div className="flex justify-between rounded-xl bg-[#f8f7f3] px-4 py-3 text-sm"><span>Confrontations</span><strong>Statistiques</strong></div>
                <div className="flex justify-between rounded-xl bg-[#f8f7f3] px-4 py-3 text-sm"><span>Tendance</span><strong>À surveiller</strong></div>
              </div>
              <p className="mt-5 text-xs leading-5 text-[#718078]">Exemple d’interface — les données réelles seront connectées dans les prochaines étapes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="analyses" className="border-y border-[#17231d]/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Ce que nous construisons</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Une base simple pour mieux lire les rencontres.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-[#17231d]/10 bg-[#f8f7f3] p-7">
                <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe9dc] font-black text-[#35533c]">✓</div>
                <h3 className="text-xl font-black">{feature.title}</h3>
                <p className="mt-3 leading-7 text-[#5d6962]">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="methode" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] bg-[#17231d] px-7 py-12 text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9cdb5]">Notre approche</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Des informations compréhensibles, sans promesse irréaliste.</h2>
            <p className="leading-7 text-white/70">Coloriage est conçu comme un outil d’information et d’analyse. Les résultats sportifs restent incertains et les décisions de jeu doivent rester maîtrisées.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#17231d]/10 px-6 py-8 text-center text-sm text-[#718078]">
        © 2026 Coloriage — Analyses et statistiques sportives.
      </footer>
    </main>
  );
}
