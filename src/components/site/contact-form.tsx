"use client";

import { useState } from "react";
import {
  Check,
  ArrowRight,
  Mail,
  MessageSquare,
  User,
  PencilLine,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { useContact } from "@/hooks/useContact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const t = useTranslations("cloudzaContactForm");

  const { isLoading, sendContactForm } = useContact();

  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    asunto: "",
  });

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setSent(false);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    const response =
      await sendContactForm(formData);

    if (response.success) {
      setSent(true);

      setSuccessMessage(
        t("messages.success")
      );

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
        asunto: "",
      });

      return;
    }

    setSent(false);

    setErrorMessage(
      response.error || t("messages.error")
    );
  };

  const field =
    "peer w-full border border-slate-200 bg-white px-5 py-4 pl-14 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white";

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-white px-4 py-24 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute -left-24 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />

        <div className="absolute right-0 top-24 h-[30rem] w-[30rem] bg-blue-600/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-7xl"
      >
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left content */}
          <div>
            <span className="inline-flex border-l-4 border-orange-500 pl-4 text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              {t("badge")}
            </span>

            <h2 className="mt-8 text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
              {t("description")}
            </p>

            {/* Decorative blocks */}
            <div className="mt-12 flex gap-4">
              <div className="h-24 w-24 bg-blue-600" />

              <div className="h-24 w-24 bg-orange-500" />

              <div className="hidden h-24 w-24 bg-slate-950 md:block" />
            </div>
          </div>

          {/* Form */}
          <div className="relative border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">
            {/* Top line */}
            <div className="h-1 w-full bg-[linear-gradient(90deg,rgba(37,99,235,1),rgba(249,115,22,1))]" />

            {/* Glow */}
            <div className="absolute -right-20 top-0 h-64 w-64 bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 bg-orange-500/10 blur-3xl" />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-6 p-8 md:p-10"
            >
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("form.nameLabel")}
                </label>

                <div className="relative">
                  <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-blue-700" />

                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    required
                    placeholder={t(
                      "form.namePlaceholder"
                    )}
                    value={formData.nombre}
                    onChange={handleChange}
                    className={field}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("form.emailLabel")}
                </label>

                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-blue-700" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder={t(
                      "form.emailPlaceholder"
                    )}
                    value={formData.email}
                    onChange={handleChange}
                    className={field}
                  />
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="asunto"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("form.subjectLabel")}
                </label>

                <div className="relative">
                  <PencilLine className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors peer-focus:text-blue-700" />

                  <input
                    id="asunto"
                    type="text"
                    name="asunto"
                    required
                    placeholder={t(
                      "form.subjectPlaceholder"
                    )}
                    value={formData.asunto}
                    onChange={handleChange}
                    className={field}
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  {t("form.messageLabel")}
                </label>

                <div className="relative">
                  <MessageSquare className="absolute left-5 top-6 h-5 w-5 text-slate-400 transition-colors peer-focus:text-blue-700" />

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={6}
                    placeholder={t(
                      "form.messagePlaceholder"
                    )}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={cn(
                      field,
                      "resize-none pt-5"
                    )}
                  />
                </div>
              </div>

              {/* Success */}
              {successMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700"
                >
                  {successMessage}
                </motion.div>
              )}

              {/* Error */}
              {errorMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
                >
                  {errorMessage}
                </motion.div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "group flex h-14 w-full items-center justify-center gap-3 border text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300",
                  "border-blue-700 bg-blue-700 text-white hover:bg-slate-950 hover:border-slate-950",
                  "disabled:cursor-not-allowed disabled:opacity-60"
                )}
              >
                {isLoading ? (
                  t("buttons.sending")
                ) : sent ? (
                  <>
                    <Check className="h-4 w-4 text-orange-300" />
                    {t("buttons.sent")}
                  </>
                ) : (
                  <>
                    {t("buttons.send")}

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}