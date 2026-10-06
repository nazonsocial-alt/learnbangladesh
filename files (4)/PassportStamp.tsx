type Props = { district: string; date?: Date; xp?: number; earned: boolean };

/** পাসপোর্ট স্ট্যাম্প। অর্জিত না হলে ফিকে ও ড্যাশড বর্ডার, সঙ্গে "অর্জিত হয়নি" লেখা। */
export function PassportStamp({ district, date, xp, earned }: Props) {
  const nf = new Intl.NumberFormat("bn-BD");
  const df = new Intl.DateTimeFormat("bn-BD", { dateStyle: "medium" });
  return (
    <figure
      className={`grid aspect-square place-items-center rounded-lg p-3 text-center ${
        earned ? "border-2 border-primary bg-primary-soft text-primary" : "border-2 border-dashed border-border text-muted opacity-70"
      }`}
      style={{ transform: earned ? "rotate(-4deg)" : undefined }}
    >
      <figcaption className="flex flex-col items-center gap-1">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" style={{ opacity: earned ? 1 : 0.3 }} />
        <strong className="font-display text-lg">{district}</strong>
        {earned && date ? <span className="text-sm">{df.format(date)} · {nf.format(xp ?? 0)} XP</span>
                         : <span className="text-sm">অর্জিত হয়নি</span>}
      </figcaption>
    </figure>
  );
}
