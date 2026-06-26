export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-24 lg:pt-44">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft top background */}
        <div className="absolute inset-x-0 top-0 h-[420px] bg-slate-50" />

        {/* Blue accent */}
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-60" />

        {/* Grid */}
        <div
          className="
            absolute inset-0 opacity-[0.035]
            [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-slate-600 sm:text-xl">
          {subtitle}
        </p>

        {/* Bottom separator */}
        <div className="mx-auto mt-14 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>
    </section>
  );
}