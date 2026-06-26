"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
      >
        <h3 className="text-lg font-bold leading-7 text-slate-950 md:text-xl">
          {question}
        </h3>

        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-blue-700 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden border-t border-slate-200 px-6 md:px-8">
          <p className="py-6 text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FaqsPage() {
  const t = useTranslations("cloudzaFaqPage");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faqs.0.question"),
      answer: t("faqs.0.answer"),
    },
    {
      question: t("faqs.1.question"),
      answer: t("faqs.1.answer"),
    },
    {
      question: t("faqs.2.question"),
      answer: t("faqs.2.answer"),
    },
    {
      question: t("faqs.3.question"),
      answer: t("faqs.3.answer"),
    },
    {
      question: t("faqs.4.question"),
      answer: t("faqs.4.answer"),
    },
    {
      question: t("faqs.5.question"),
      answer: t("faqs.5.answer"),
    },
    {
      question: t("faqs.6.question"),
      answer: t("faqs.6.answer"),
    },
    {
      question: t("faqs.7.question"),
      answer: t("faqs.7.answer"),
    },
    {
      question: t("faqs.8.question"),
      answer: t("faqs.8.answer"),
    },
    {
      question: t("faqs.9.question"),
      answer: t("faqs.9.answer"),
    },
  ];

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
              <p className="inline-flex items-center gap-3 border-l-4 border-orange-500 pl-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {t("hero.badge")}
              </p>

              <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
                {t("hero.title")}
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600 md:text-xl">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ list */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index
                  )
                }
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}