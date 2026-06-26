"use client";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { useTranslations } from "next-intl";
import {
  Award,
  Brain,
  Building2,
  CheckCircle2,
  Clock3,
  Eye,
  Handshake,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const pillarsConfig = [
  {
    key: "mission",
    icon: TargetIcon,
  },
  {
    key: "vision",
    icon: Eye,
  },
];

const valuesConfig = [
  {
    key: "commitment",
    icon: Handshake,
  },
  {
    key: "innovation",
    icon: Sparkles,
  },
  {
    key: "transparency",
    icon: MessageSquareText,
  },
  {
    key: "reliability",
    icon: ShieldCheck,
  },
  {
    key: "growth",
    icon: LineChart,
  },
];

const timelineConfig = [
  {
    key: "understanding",
    icon: Brain,
  },
  {
    key: "solutions",
    icon: Building2,
  },
  {
    key: "implementation",
    icon: CheckCircle2,
  },
  {
    key: "support",
    icon: Clock3,
  },
];

function TargetIcon({ className }: { className?: string }) {
  return <Award className={className} />;
}

export default function AboutPage() {
  const t = useTranslations("cloudzaAbout");

  return (
    <>
      <Header />

      <main className="bg-white text-slate-950 lg:pl-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

            <div className="absolute -left-32 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />

            <div className="absolute right-0 top-24 h-[28rem] w-[28rem] bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
            <div className="max-w-4xl">
              <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
                {t("hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Essence + Pillars */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* First column */}
            <div>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-orange-500" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  {t("essence.eyebrow")}
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                {t("essence.title")}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
                {t("essence.description1")}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
                {t("essence.description2")}
              </p>
            </div>

            {/* Second column cards */}
            <div className="grid gap-6">
              {pillarsConfig.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.key}
                    className="border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center bg-blue-700 text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>

                      <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-950">
                      {t(`pillars.${pillar.key}.title`)}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-600">
                      {t(`pillars.${pillar.key}.description`)}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-blue-600" />

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
                  {t("values.eyebrow")}
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                {t("values.title")}
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {valuesConfig.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.key}
                    className="border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-orange-500 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {t(`values.items.${value.key}.title`)}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {t(`values.items.${value.key}.description`)}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-orange-500" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t("timeline.eyebrow")}
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {t("timeline.title")}
            </h2>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {timelineConfig.map((step, idx) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.key}
                  className="relative border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-700 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-950">
                    {t(`timeline.steps.${step.key}.title`)}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {t(`timeline.steps.${step.key}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}