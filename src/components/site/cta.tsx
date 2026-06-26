"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function CTASection() {
  const t = useTranslations("cloudzaCta");

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute -left-32 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              {t("eyebrow")}
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
              {t("description")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="
                group inline-flex items-center justify-center gap-3
                bg-orange-500 px-8 py-5
                text-sm font-bold uppercase tracking-[0.18em]
                text-white transition-all duration-300
                hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/20
              "
            >
              {t("contactButton")}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#planes"
              className="
                inline-flex items-center justify-center
                border border-white/15 bg-white/5
                px-8 py-5 text-sm font-bold uppercase
                tracking-[0.18em] text-white
                backdrop-blur-sm transition-all duration-300
                hover:border-blue-400 hover:bg-blue-600/10
              "
            >
              {t("plansButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}