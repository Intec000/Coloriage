import Link from "next/link";

const modules = [
  { title: "Matchs", text: "Créer, modifier et organiser les rencontres.", href: "/matchs" },
  { title: "Analyses", text: "Préparer et publier les analyses associées aux matchs.", href: "/" },
  { title: "Pronostics", text: "Suivre les estimations et leurs niveaux de confiance.", href: "/matchs" },
  { title: "Historique", text: "Contrôler les résultats et mesurer la qualité des estimations.", href: "/historique" },
  { title: "Contenus", text: "Préparer les contenus pédagogiques et éditoriaux.", href: "/conseils" },
];

const kpis = [
  ["Matchs V1", "3"],
  ["Analyses", "3"],
  ["Pronostics", "3"],
  ["Historique", "3"],
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#17231d]">
      <header className="border-b border-[#17231d]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Coloriage</p>
            <h1 className="text-xl font-black">Dashboard admin</h1>
          </div>
          <Link href="/" className="rounded-full border border-[#17231d]/10 px-5 py-2.5 text-sm font-bold">← Site public</Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl bg-[#17231d] p-8 text-white sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9cdb5]">Espace interne V1</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Piloter le contenu de Coloriage depuis un seul endroit.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/70">Cette interface est une base de travail. L&apos;authentification et la persistance Supabase seront ajoutées avant toute utilisation en production.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-[#17231d]/10 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#68736d]">{label}</p>
              <p className="mt-2 text-3xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="rounded-3xl border border-[#17231d]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7a9b76]">Module</p>
              <h3 className="mt-2 text-xl font-black">{module.title}</h3>
              <p className="mt-3 leading-7 text-[#5d6962]">{module.text}</p>
              <Link href={module.href} className="mt-6 inline-flex rounded-full border border-[#17231d]/10 px-4 py-2.5 text-sm font-bold hover:bg-[#f8f7f3]">Ouvrir →</Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#17231d]/10 bg-white p-6 text-sm leading-6 text-[#68736d]">
          Sécurité V1 : cette page n&apos;autorise encore aucune écriture ni action sensible. Elle sert uniquement de structure visuelle en attendant l&apos;authentification et les contrôles d&apos;accès.
        </div>
      </section>
    </main>
  );
}
