"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import {
  planTabsSpanish,
  planTabsEnglish,
} from "@/data/plans";
import { Link } from "@/i18n/routing";
import { formatPrice } from "@/lib/price";
import { cn } from "@/lib/utils";
import { type Plan } from "@/types/plan";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cloud,
  HardDrive,
  Server,
  Share2,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

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

export function PlanCard({
  plan,
  featured = false,
}: {
  plan: Plan;
  featured?: boolean;
}) {
  const t = useTranslations("productCard");
  const { addItem } = useCart();
  const locale = useLocale();

  const planTabs =
    locale === "es" ? planTabsSpanish : planTabsEnglish;

  const tab = planTabs.find((t) => t.id === plan.category);
  const Icon = tab ? iconMap[tab.icon] : Server;

  const isCustomPlan =
    plan.slug === "ID496" || plan.slug === "servicio-a-la-medida";

  const handleAdd = () => {
    addItem({
      slug: plan.slug,
      name: plan.name,
      price: plan.price,
      icon: plan.icon,
    });
  };

  return (
    <motion.article
      variants={containerVariants}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border transition-all duration-300",
        featured
          ? "border-blue-700 bg-slate-950 text-white shadow-2xl shadow-blue-700/20"
          : "border-slate-200 bg-white text-slate-950 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
      )}
    >
      {/* Top accent bar */}
      <div
        className={cn(
          "h-1 w-full",
          featured
            ? "bg-[linear-gradient(90deg,rgba(249,115,22,1),rgba(37,99,235,1))]"
            : "bg-[linear-gradient(90deg,rgba(37,99,235,1),rgba(249,115,22,0.95))]"
        )}
      />

      {/* Glow */}
      {featured && (
        <>
          <div className="absolute -left-24 top-0 h-64 w-64 bg-orange-500/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-56 w-56 bg-blue-500/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        </>
      )}

      <div className="relative z-10 flex h-full flex-col p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center border transition-all duration-300",
                featured
                  ? "border-white/10 bg-white/10 text-white backdrop-blur-sm"
                  : "border-blue-100 bg-blue-50 text-blue-700 group-hover:border-blue-200 group-hover:bg-blue-100"
              )}
            >
              <Icon className="h-6 w-6" strokeWidth={1.8} />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <span
                className={cn(
                  "px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]",
                  featured
                    ? "bg-white/10 text-white"
                    : "bg-slate-100 text-slate-700"
                )}
              >
                {tab?.label}
              </span>

              <span
                className={cn(
                  "px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em]",
                  featured
                    ? "bg-orange-500/15 text-orange-200"
                    : "bg-blue-50 text-blue-700"
                )}
              >
                {plan.slug}
              </span>
            </div>
          </div>

          {/* {featured && (
            <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-200">
              {t("recommended")}
            </div>
          )} */}
        </div>

        {/* Title + price */}
        <div className="mt-8">
          {!isCustomPlan && (
            <h3 className="text-2xl font-black tracking-tight md:text-3xl">
              {plan.name}
            </h3>
          )}

          <div className="mt-4 flex items-end gap-2">
            <span className="text-5xl font-black tracking-tight">
              {isCustomPlan
                ? plan.name
                : `$${formatPrice(plan.price)}`}
            </span>

            {!isCustomPlan && (
              <span
                className={cn(
                  "pb-2 text-sm font-semibold uppercase tracking-[0.18em]",
                  featured ? "text-blue-100" : "text-slate-500"
                )}
              >
                MXN {t("tax")}
              </span>
            )}
          </div>

          <p
            className={cn(
              "mt-5 text-sm leading-7 md:text-base md:leading-8",
              featured ? "text-slate-300" : "text-slate-600"
            )}
          >
            {plan.description}
          </p>
        </div>

        {/* Includes */}
        <div className="mt-8">
          {plan.includes.length > 0 && (
            <p
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.22em]",
                featured ? "text-orange-300" : "text-slate-500"
              )}
            >
              {t("includes")}
            </p>
          )}

          <ul className="mt-5 space-y-4">
            {plan.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border",
                    featured
                      ? "border-white/15 bg-white/10"
                      : "border-blue-100 bg-blue-50"
                  )}
                >
                  <Check
                    className={cn(
                      "h-3.5 w-3.5",
                      featured ? "text-white" : "text-blue-700"
                    )}
                    strokeWidth={3}
                  />
                </div>

                <span
                  className={cn(
                    "text-sm leading-relaxed md:text-[15px] md:leading-7",
                    featured ? "text-white" : "text-slate-700"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" />

        {/* CTA */}
        {isCustomPlan ? (
          <Button
            asChild
            size="lg"
            className={cn(
              "mt-10 h-14 w-full rounded-none border px-5 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300",
              featured
                ? "border-white bg-white text-blue-700 hover:bg-orange-50 hover:text-blue-800"
                : "border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800"
            )}
          >
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2"
            >
              {t("requestQuote")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button
            onClick={handleAdd}
            size="lg"
            className={cn(
              "mt-10 h-14 w-full rounded-none border px-5 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300",
              featured
                ? "border-white bg-white text-blue-700 hover:bg-orange-50 hover:text-blue-800"
                : "border-blue-700 bg-blue-700 text-white hover:border-blue-800 hover:bg-blue-800"
            )}
          >
            {t("addToCart")}
          </Button>
        )}
      </div>
    </motion.article>
  );
}