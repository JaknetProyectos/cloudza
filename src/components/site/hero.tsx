"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute -left-32 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 border-l-4 border-orange-500 pl-4">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t("eyebrow")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              {t("title")}{" "}
              <span className="text-blue-700">
                {t("titleHighlight")}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600 md:text-xl">
              {t("description")}
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <Image
              width={400}
              height={1000}
              src="https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={t("imageAlt")}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}