"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { Link } from "@/i18n/routing";

function InfoCard({
  icon: Icon,
  title,
  value,
  href,
  className,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const inner = (
    <div
      className={`
        group rounded-[1.75rem] border border-slate-200 bg-white
        p-5 shadow-sm transition-all duration-300
        hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl
        ${className ?? ""}
      `}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
          <Icon className="h-5 w-5" strokeWidth={1.9} />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <p className="text-base font-bold tracking-tight text-slate-900">
            {title}
          </p>

          <p className="mt-1 break-words text-sm leading-6 text-slate-600">
            {value}
          </p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export default function ContactPage() {
  const t = useTranslations("cloudzaContactPage");

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <Header />

      <main className="lg:pl-20">
        <PageHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
        />

        <ContactForm />

        <Footer />
      </main>
    </div>
  );
}