import Link from "next/link";
import { AFFILIATE_DISCLOSURE, AFFILIATE_LABEL, AFFILIATE_URL } from "@/lib/affiliate";

export default function AffiliateCTA() {
  const disabled = AFFILIATE_URL === "#";

  return (
    <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
      <Link
        href={AFFILIATE_URL}
        target={disabled ? undefined : "_blank"}
        rel={disabled ? undefined : "noreferrer"}
        aria-disabled={disabled}
        className={`inline-flex rounded-full px-6 py-3.5 text-sm font-bold transition ${
          disabled
            ? "cursor-not-allowed bg-[#d9ddd8] text-[#68736d]"
            : "bg-[#17231d] text-white hover:-translate-y-0.5 hover:bg-[#26372c]"
        }`}
      >
        {disabled ? "Lien partenaire à configurer" : `${AFFILIATE_LABEL} →`}
      </Link>
      <p className="max-w-md text-xs leading-5 text-[#68736d]">
        {AFFILIATE_DISCLOSURE} Réservé aux personnes majeures. Jouez de façon responsable et uniquement selon les règles applicables dans votre pays.
      </p>
    </div>
  );
}
