"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Headphones,
  TrendingUp,
  BadgeCheck,
  Zap,
} from "lucide-react";

const iconMap = {
  security: ShieldCheck,
  support: Headphones,
  scalability: TrendingUp,
  trust: BadgeCheck,
  performance: Zap,
} as const;

export default function WhyChooseUsSection() {
  const t = useTranslations("cloudzaWhyChooseUs");

  const [index, setIndex] = useState(0);

  const features = [
    {
      key: "security",
      icon: iconMap.security,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      key: "support",
      icon: iconMap.support,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      key: "scalability",
      icon: iconMap.scalability,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      key: "trust",
      icon: iconMap.trust,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    },
    {
      key: "performance",
      icon: iconMap.performance,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            {t("eyebrow")}
          </p>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            {t("title")}
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative mt-20 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {[...features, ...features].map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={`${feature.key}-${idx}`}
                  className="min-w-full"
                >
                  <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[520px] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={t(`features.${feature.key}.title`)}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                      <div className="absolute bottom-10 left-10">
                        <span className="bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
                          {t(`features.${feature.key}.badge`)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-xl">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center bg-blue-600 text-white">
                          <Icon
                            className="h-8 w-8"
                            strokeWidth={1.8}
                          />
                        </div>

                        <div className="h-px flex-1 bg-slate-200" />
                      </div>

                      <h3 className="mt-10 text-4xl font-black tracking-tight text-slate-950">
                        {t(`features.${feature.key}.title`)}
                      </h3>

                      <p className="mt-8 text-lg leading-9 text-slate-600">
                        {t(`features.${feature.key}.description`)}
                      </p>

                      <div className="mt-10 flex items-center gap-4">
                        <div className="h-1 w-20 bg-orange-500" />

                        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                          {t("premiumInfrastructure")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}