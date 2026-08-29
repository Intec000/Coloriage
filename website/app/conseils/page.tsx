import Link from "next/link";

const principles = [
  {
    title: "Un pronostic reste une estimation",
    text: "Même une analyse solide ne garantit jamais le résultat d'une rencontre. Utilisez les données pour mieux comprendre, pas pour rechercher une certitude.",
  },
  {
    title: "Fixer une limite",
    text: "Définissez à l'avance un budget et un temps consacrés aux paris. Ne dépassez pas une limite simplement pour essayer de récupérer une perte.",
  },
  {
    title: "Comparer les informations",
    text: "Regardez la forme, les résultats, les absences et le contexte avant de tirer une conclusion. Une seule statistique ne suffit pas.",
  },
  {
    title: "Savoir s'arrêter",
    text: "Si le jeu devient une source de stress, de conflit ou de difficultés financières, prenez du recul et cherchez de l'aide auprès d'un service adapté.",
  },
];

const checklist = [
  "Je connais ma limite avant de commencer.",
  "Je considère mes mises comme une dépense, pas comme un revenu.",
  "Je peux accepter de perdre sans augmenter ma mise.",
  "Je garde une trace de mes résultats avec recul.",
];

export default function ConseilsPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Conseils & éducation</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Mieux analyser. Mieux décider. Garder le contrôle.</h1>
          <p className="mt-6 text-lg leading-8 text-[#5d6962]">
            Cette page présente les principes de base pour lire une analyse sportive avec recul et adopter une pratique responsable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((item, index) => (
            <article key={item.title} className="rounded-3xl border border-[#17231d]/10 bg-white p-7 shadow-sm">
              <span className="text-sm font-black text-[#7a9b76]">0{index + 1}</span>
              <h2 className="mt-6 text-xl font-black">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#5d6962]">{item.text}</p>
            </article>
          ))}
        </div>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-3xl bg-[#17231d] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9cdb5]">Avant de jouer</p>
            <h2 className="mt-3 text-2xl font-black sm:text-3xl">Ma checklist</h2>
            <div className="mt-7 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 px-4 py-4 text-sm leading-6 text-white/80">
                  <span className="font-black text-[#b9cdb5]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#17231d]/10 bg-white p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">À retenir</p>
            <h2 className="mt-3 text-2xl font-black">Les données servent à contextualiser</h2>
            <p className="mt-5 leading-7 text-[#5d6962]">
              Une analyse peut réduire l'incertitude, mais elle ne supprime pas l'aléa. Évitez les promesses de gain certain et gardez toujours une limite personnelle.
            </p>
            <Link href="/classements" className="mt-7 inline-block rounded-full bg-[#17231d] px-6 py-3 text-sm font-bold text-white">
              Consulter les classements →
            </Link>
          </div>
        </section>
      </section>

      <footer className="border-t border-[#17231d]/10 bg-white px-6 py-8 text-center text-sm text-[#718078]">
        Coloriage — Information sportive et approche responsable • 18+
      </footer>
    </main>
  );
}
