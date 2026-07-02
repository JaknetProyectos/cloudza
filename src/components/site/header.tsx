"use client";

import { useCart } from "@/context/CartContext";
import { useLocaleContext } from "@/context/LangContext";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  Home,
  Building2,
  HelpCircle,
  Phone,
  ShoppingCart,
  X,
  Menu,
  Languages,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const t = useTranslations("header");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const { itemCount } = useCart();


  const { switchLanguage, locale } = useLocaleContext()
  const nextLang = locale === "es" ? "en" : "es";

  const navLinks = [
    { label: t("nav.home"), href: "/", icon: Home },
    { label: t("nav.about"), href: "/about", icon: Building2 },
    { label: t("nav.faq"), href: "/faq", icon: HelpCircle },
    { label: t("nav.contact"), href: "/contact", icon: Phone },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile header */}
      <header
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-all duration-300 lg:hidden",
          scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center">
              <Image
                src="/logo.png"
                width={44}
                height={44}
                alt={t("logoAlt")}
                className="h-11 w-11 object-contain"
              />
            </div>

            <div className="flex flex-col leading-none">
              <Image
                src="/title.png"
                width={124}
                height={44}
                alt={t("logoAlt")}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/carrito"
              aria-label={t("cart")}
              className="relative flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-slate-800 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              <ShoppingCart className="h-5 w-5" />

              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center bg-blue-600 px-1 text-[11px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              aria-label={open ? t("closeMenu") : t("openMenu")}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-white text-slate-800 transition-all hover:bg-slate-100"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300",
            open
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "border-l-4 px-4 py-3 text-sm font-semibold transition-all",
                  isActive(link.href)
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                switchLanguage(nextLang)
              }}
              className={cn(
                "border-l-4 px-4 py-3 text-sm font-semibold transition-all",
                "border-blue-600 bg-blue-50 text-blue-700",
              )}
            >
              {t("nav.lang")}
            </button>
          </nav>
        </div>
      </header>

      {/* Desktop vertical sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-20 border-r border-slate-200 bg-white/95 backdrop-blur-sm lg:flex">
        <div className="flex h-full w-full flex-col items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex h-12 w-12 items-center justify-center">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt={t("logoAlt")}
              className="h-10 w-10 object-contain"
            />
          </Link>

          <div className="my-6 h-px w-10 bg-slate-200" />

          {/* Nav */}
          <nav className="flex flex-1 flex-col items-center gap-3">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "group relative flex h-12 w-12 items-center justify-center transition-all duration-200",
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-700"
                  )}
                >
                  <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                    {label}
                  </span>
                </Link>
              );
            })}
            <button
              onClick={() => {
                switchLanguage(nextLang)
              }}
              className={cn(
                "group relative flex h-12 w-12 items-center justify-center transition-all duration-200",
                "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
              )}
            >
              <Languages className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />

              {/* Tooltip */}
              <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
                {t("nav.lang")}
              </span>
            </button>
          </nav>

          {/* Cart */}
          <Link
            href="/carrito"
            aria-label={t("cart")}
            className="relative mb-16 flex h-12 w-12 items-center justify-center border border-slate-200 bg-white text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700"
          >
            <ShoppingCart className="h-5 w-5" />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center bg-blue-600 px-1 text-[11px] font-semibold text-white">
              {itemCount}
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
}