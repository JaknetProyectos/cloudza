"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  PlanCategory,
  plansEnglish,
  plansSpanish,
  planTabsEnglish,
  planTabsSpanish,
} from "@/data/plans";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Cloud,
  HardDrive,
  Server,
  Share2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { PlanCard } from "./product-card";
import { SectionBadge } from "./section-badge";

const iconMap = {
  server: Server,
  cloud: Cloud,
  rack: HardDrive,
  share: Share2,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const plans = locale === "es" ? plansSpanish : plansEnglish;
  const planTabs = locale === "es" ? planTabsSpanish : planTabsEnglish;

  return (
    <section
      id="plans"
      className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute -left-24 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-[30rem] w-[30rem] bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <SectionBadge>{t("badge")}</SectionBadge>

          <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t("description")}
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="destacados" className="mt-14">
          <TabsList className="flex h-auto w-full flex-wrap gap-2 border border-slate-200 bg-white p-2 shadow-sm">
            {planTabs.map((tab) => {
              const TabIcon = iconMap[tab.icon];

              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "flex items-center gap-2 border px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300",
                    "border-transparent text-slate-600 data-[state=active]:border-blue-700 data-[state=active]:bg-blue-700 data-[state=active]:text-white"
                  )}
                >
                  <TabIcon className="h-4 w-4" strokeWidth={1.8} />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Plans */}
          {planTabs.map((tab) => {
            const filteredPlans = plans.filter(
              (p) => p.category === (tab.id as PlanCategory)
            );

            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-10">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid gap-6 lg:grid-cols-3"
                >
                  {filteredPlans.map((plan) => (
                    <PlanCard
                      key={plan.slug}
                      plan={plan}
                      featured={plan.featured}
                    />
                  ))}
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}