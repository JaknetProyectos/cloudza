"use client";

import { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { useLocaleContext } from "@/context/LangContext";

export default function LangSwitcher() {
  const { locale, switchLanguage, isPending } = useLocaleContext();

  const [isOpen, setIsOpen] = useState(false);
  const switchTo = locale === "es" ? "Cambiar a" : "Switch to";
  const idioma = locale === "es" ? "Idioma" : "Language";

  const nextLang = locale === "es" ? "en" : "es";

  const currentLabel = locale === "es" ? "Español" : "English";
  const nextLabel = nextLang === "es" ? "Español" : "English";

  const handleToggle = () => {
    if (isPending) return;
    switchLanguage(nextLang);
  };

  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        group
      "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Panel */}
      <div
        className={`
          absolute bottom-[72px] right-0
          w-[240px]

          overflow-hidden

          border border-slate-200/80
          bg-white/92
          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(15,23,42,0.18)]

          transition-all duration-300 ease-out

          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-4 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Top gradient line */}
        <div
          className="
            h-[3px] w-full
            bg-gradient-to-r
            from-blue-600
            via-sky-400
            to-orange-500
          "
        />

        <div className="p-4">
 
          {/* Toggle Option */}
          <button
            type="button"
            onClick={handleToggle}
            disabled={isPending}
            className="
              relative w-full overflow-hidden

              border border-slate-200

              bg-gradient-to-r
              from-white
              to-slate-50

              px-4 py-3

              text-left

              transition-all duration-300

              hover:border-blue-200
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]
              hover:-translate-y-0.5

              active:scale-[0.99]

              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            {/* Hover glow */}
            <div
              className="
                absolute inset-0

                bg-gradient-to-r
                from-blue-500/0
                via-blue-400/5
                to-orange-400/10

                opacity-0
                transition-opacity duration-300

                hover:opacity-100
              "
            />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  {switchTo}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    {nextLabel}
                  </span>

                  <div
                    className="
                      border border-blue-200
                      bg-blue-50

                      px-2 py-0.5

                      text-[10px]
                      font-bold
                      tracking-wide
                      text-blue-700
                    "
                  >
                    {nextLang.toUpperCase()}
                  </div>
                </div>
              </div>

              <div
                className={`
                  flex h-9 w-9 items-center justify-center

                  border border-slate-200
                  bg-white

                  transition-all duration-300

                  ${
                    isPending
                      ? "rotate-180 border-orange-200"
                      : "group-hover:border-blue-200"
                  }
                `}
              >
                <ChevronDown
                  className={`
                    h-4 w-4 text-slate-600
                    transition-transform duration-300

                    ${
                      isOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        disabled={isPending}
        aria-label="Cambiar idioma"
        className={`
          relative overflow-hidden

          flex items-center gap-3

          border border-slate-200/80

          bg-white

          px-4 py-3

          shadow-[0_12px_40px_rgba(15,23,42,0.14)]

          transition-all duration-300 ease-out

          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-[0_16px_50px_rgba(37,99,235,0.18)]

          active:scale-[0.98]
        `}
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0

            bg-gradient-to-r
            from-blue-500/0
            via-blue-400/5
            to-orange-400/10

            opacity-0
            transition-opacity duration-300

            group-hover:opacity-100
          "
        />

        {/* Icon */}
        <div
          className={`
            relative flex h-11 w-11 items-center justify-center

            border border-blue-400/10

            bg-gradient-to-br
            from-blue-600
            to-sky-400

            shadow-lg
            shadow-blue-500/20

            transition-all duration-300

            ${
              isOpen
                ? "rotate-6 scale-105"
                : ""
            }
          `}
        >
          <Languages className="h-5 w-5 text-white" />
        </div>

        {/* Text */}
        <div className="relative flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
            {idioma}
          </span>

          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-900">
              {currentLabel}
            </span>

            <div
              className="
                border border-blue-200
                bg-blue-50

                px-2 py-0.5

                text-[10px]
                font-bold
                tracking-wide
                text-blue-700
              "
            >
              {locale.toUpperCase()}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <ChevronDown
          className={`
            relative h-4 w-4 text-slate-500

            transition-transform duration-300

            ${
              isOpen
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>
    </div>
  );
}