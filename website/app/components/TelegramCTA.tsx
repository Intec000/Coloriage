import Link from "next/link";
import { TELEGRAM_LABEL, TELEGRAM_URL } from "@/lib/telegram";

type TelegramCTAProps = {
  compact?: boolean;
};

export default function TelegramCTA({ compact = false }: TelegramCTAProps) {
  return (
    <Link
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={
        compact
          ? "inline-flex rounded-full border border-[#17231d]/10 bg-white px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md"
          : "inline-flex rounded-full bg-[#17231d] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#26372c]"
      }
    >
      {TELEGRAM_LABEL} →
    </Link>
  );
}
