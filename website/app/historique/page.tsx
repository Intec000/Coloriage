import Link from "next/link";
import { demoHistory, type HistoryStatus } from "@/lib/history";

const labels: Record<HistoryStatus, string> = {
  pending: "En attente",
  won: "Validée",
  lost: "Non validée",
  void: "Annulée",
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">Coloriage<span className="text-[#7a9b76]">.</span></Link>
          <div className="flex gap-3">
            <Link href="/matchs" className="rounded-full border border-[#17231d]/10 px-5 py-2.5 text-sm font-bold">Matchs</Link>
            <Link href="/classements" className="rounded-full bg-[#17231d] px-5 py-2.5 text-sm font-bold text-white">Classements</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Historique V1</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Suivre les estimations dans le temps</h1>
          <p className="mt-5 text-lg leading-8 text-[#5d6962]">Un historique transparent permet de comparer les estimations passées aux résultats constatés. Les données affichées ici sont démonstratives.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#17231d]/10 bg-white p-5"><p className="text-sm text-[#68736d]">Entrées</p><p className="mt-2 text-3xl font-black">{demoHistory.length}</p></div>
          <div className="rounded-2xl border border-[#17231d]/10 bg-white p-5"><p className="text-sm text-[#68736d]">Validées</p><p className="mt-2 text-3xl font-black">{demoHistory.filter((item) => item.status === "won").length}</p></div>
          <div className="rounded-2xl border border-[#17231d]/10 bg-white p-5"><p className="text-sm text-[#68736d]">Confiance moyenne</p><p className="mt-2 text-3xl font-black">{Math.round(demoHistory.reduce((sum, item) => sum + item.confidence, 0) / demoHistory.length)}%</p></div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-[#17231d]/10 bg-white shadow-sm">
          <div className="hidden grid-cols-[120px_1.4fr_1fr_100px_140px] gap-4 border-b border-[#17231d]/10 bg-[#f5f5f1] px-6 py-4 text-xs font-black uppercase tracking-wider text-[#68736d] md:grid">
            <span>Date</span><span>Match</span><span>Estimation</span><span>Confiance</span><span>Statut</span>
          </div>
          {demoHistory.map((entry) => (
            <article key={entry.id} className="grid gap-3 border-b border-[#17231d]/10 px-6 py-5 last:border-b-0 md:grid-cols-[120px_1.4fr_1fr_100px_140px] md:items-center md:gap-4">
              <p className="text-sm font-semibold text-[#68736d]">{entry.date}</p>
              <div><p className="font-black">{entry.matchLabel}</p><p className="mt-1 text-sm text-[#68736d]">Résultat : {entry.result}</p></div>
              <p className="font-bold">{entry.prediction}</p>
              <p className="font-black">{entry.confidence}%</p>
              <span className="w-fit rounded-full bg-[#eef3eb] px-3 py-1 text-xs font-bold text-[#45604b]">{labels[entry.status]}</span>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-2xl border border-[#17231d]/10 bg-white p-5 text-sm leading-6 text-[#68736d]">L&apos;historique ne constitue pas une garantie de résultat. Il sert à mesurer les performances passées avec transparence.</p>
      </section>
    </main>
  );
}
