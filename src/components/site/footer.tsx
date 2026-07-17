"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  const t = useTranslations("cloudzaFooter");

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute -left-32 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* Top */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black tracking-tight">
              CLOUDZA
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
              {t("description")}
            </p>

            {/* Secure payments */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-orange-400" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  {t("securePayments")}
                </span>
              </div>

              <div className="mt-5">
                <Image
                  src="/cards.png"
                  alt={t("cardsAlt")}
                  width={220}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              {t("legal.title")}
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <Link
                href="/legal/terminos"
                className="text-base text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {t("legal.terms")}
              </Link>

              <Link
                href="/legal/privacidad"
                className="text-base text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {t("legal.privacy")}
              </Link>

              <Link
                href="/legal/reembolsos"
                className="text-base text-slate-300 transition-colors duration-300 hover:text-white"
              >
                {t("legal.refunds")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              {t("contact.title")}
            </p>

            <div className="mt-8 space-y-7">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center bg-white/5 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {t("contact.email")}
                  </p>

                  <a
                    href="inicio@klyhost.com"
                    className="mt-2 block text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    inicio@klyhost.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center bg-white/5 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-orange-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {t("contact.phone")}
                  </p>

                  <a
                    href="tel:+5215552445641"
                    className="mt-2 block text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    +52 1 55 5244 5641
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-11 w-11 items-center justify-center bg-white/5 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {t("contact.address")}
                  </p>

                  <p className="mt-2 leading-7 text-slate-400">
                    {t("contact.addressValue")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright")}</p>

          <p>{t("madeInMexico")}</p>
        </div>
      </div>
    </footer>
  );
}