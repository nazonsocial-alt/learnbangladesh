type Props = { value: number; max: number; label: string; size?: number };

/** অগ্রগতি রিং। রঙের পাশাপাশি সংখ্যা ও লেবেল আছে, তাই শুধু রঙের উপর নির্ভর করে না। */
export function ProgressRing({ value, max, label, size = 72 }: Props) {
  const r = 30, c = 2 * Math.PI * r;
  const pct = max === 0 ? 0 : Math.min(1, value / max);
  const nf = new Intl.NumberFormat("bn-BD");
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} aria-label={label}
         className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 72 72" width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="7" />
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round"
                strokeDasharray={c} strokeDashoffset={c * (1 - pct)} style={{ transition: "stroke-dashoffset .5s" }} />
      </svg>
      <span className="absolute text-sm font-semibold">{nf.format(value)}/{nf.format(max)}</span>
    </div>
  );
}
