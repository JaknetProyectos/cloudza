"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  User,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Truck,
  BadgeInfo,
  ReceiptText,
  Sparkles,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

import { processOctanoPayment } from "@/lib/payment";
import { formatPrice } from "@/lib/price";

const VALID_COUPONS = [
  { code: "MED10", discount: 0.1 },
  { code: "CONFIANZA15", discount: 0.15 },
  { code: "PROMO20", discount: 0.2 },
];

type Step = 1 | 2 | 3;

function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-slate-200 bg-white shadow-sm transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
      <div className="flex h-9 w-9 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <h3 className="text-xs font-black uppercase tracking-[0.24em] text-slate-800">
          {title}
        </h3>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  className = "",
  maxLength,
  mono = false,
  inputClassName = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  mono?: boolean;
  inputClassName?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
          mono ? "font-mono" : ""
        } ${inputClassName}`}
      />
    </div>
  );
}

export default function CarritoCheckoutPage() {
  const t = useTranslations("cartPage");
  const locale = useLocale();

  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<any>(null);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);
  const [couponError, setCouponError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    direccion: "",
    direccion2: "",
    ciudad: "",
    estado: "",
    cp: "",
    pais: "MX",
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
  });

  const discountAmount = appliedCoupon ? total * appliedCoupon.discount : 0;
  const totalWithDiscount = total - discountAmount;
  const iva = totalWithDiscount * 0.16;
  const grandTotal = totalWithDiscount + iva;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyCoupon = (e: FormEvent) => {
    e.preventDefault();
    setCouponError("");

    const found = VALID_COUPONS.find(
      (c) => c.code === couponInput.trim().toUpperCase()
    );

    if (found) {
      setAppliedCoupon(found);
      setCouponInput("");
      return;
    }

    setCouponError(t("financial.couponInvalid"));
  };

  const handleCheckoutSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    const uniqueOrderId = `MC-${Date.now()}`;

    const paymentPayload = {
      amount: Number(grandTotal.toFixed(2)),
      orderId: uniqueOrderId,
      cardData: {
        number: formData.cardNumber.replace(/\s/g, ""),
        name: formData.cardName.trim(),
        month: formData.cardMonth.padStart(2, "0"),
        year: formData.cardYear.trim(),
        cvv: formData.cardCvv.trim(),
      },
      customer: {
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        direccion: formData.direccion.trim(),
        direccion2: formData.direccion2.trim() || undefined,
        ciudad: formData.ciudad.trim(),
        estado: formData.estado.trim(),
        pais: formData.pais,
        cp: formData.cp.trim(),
        empresa: formData.empresa.trim() || undefined,
      },
      metadata: {
        notes: appliedCoupon
          ? `${t("metadata.couponApplied")}: ${appliedCoupon.code}`
          : t("metadata.standardSale"),
      },
    };

    try {
      const response = await processOctanoPayment(paymentPayload);

      if (response.success) {
        setSuccessData(response.data);

        console.log({
          orderId: uniqueOrderId,
          amount: paymentPayload.amount,
          customer: paymentPayload.customer,
          items,
          metadata: paymentPayload.metadata,
        });

        try {
          await fetch(`/${locale ?? "es"}/api/checkout`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderId: uniqueOrderId,
              amount: paymentPayload.amount,
              customer: paymentPayload.customer,
              items,
              metadata: paymentPayload.metadata,
            }),
          });
        } catch (emailError) {
          console.error("⚠️ Falló el despacho de correos informativos:", emailError);
        }

        clearCart();
        setStep(3);
      } else {
        setErrorMessage(response.error || t("errors.declined"));
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(t("errors.connection"));
    } finally {
      setIsProcessing(false);
    }
  };

  if (step === 3) {
    return (
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header />

        <main className="flex-1 lg:pl-20">
          <section className="relative overflow-hidden border-b border-slate-200 bg-white">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
              <div className="absolute -left-24 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
              <div className="absolute right-0 top-24 h-[28rem] w-[28rem] bg-blue-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-blue-200 bg-blue-50 text-blue-700">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <p className="inline-flex border-l-4 border-orange-500 pl-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                {t("success.transactionStatus")}
              </p>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
                {t("success.title")}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                {t("success.description")}
              </p>

              <div className="mt-12 grid w-full gap-6 md:grid-cols-2">
                <CardShell className="p-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        {t("success.transactionStatus")}
                      </p>
                      <p className="mt-1 text-lg font-black text-slate-950">
                        {t("success.approved")}
                      </p>
                    </div>
                  </div>
                </CardShell>

                <CardShell className="p-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-orange-100 bg-orange-50 text-orange-600">
                      <ReceiptText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        {t("financial.netTotal")}
                      </p>
                      <p className="mt-1 text-lg font-black text-slate-950">
                        {formatPrice(grandTotal, "MXN", true)}
                      </p>
                    </div>
                  </div>
                </CardShell>
              </div>

              <div className="mt-10 w-full">
                <Link href="/" className="block w-full">
                  <Button className="flex h-14 w-full items-center justify-center gap-2 border border-blue-700 bg-blue-700 px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-blue-800 hover:bg-blue-800">
                    {t("success.backToCatalog")}
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500">
                <span className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-2">
                  <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                  {t("success.approved")}
                </span>
                <span className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-2">
                  <BadgeInfo className="h-3.5 w-3.5 text-blue-600" />
                  {t("success.transactionStatus")}
                </span>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="lg:pl-20">
        {/* Sticky top bar */}
        <div className="sticky top-0 z-10 border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              <Link href="/" className="transition-colors hover:text-slate-950">
                {t("breadcrumb.home")}
              </Link>
              <span>/</span>
              <span className={step === 1 ? "text-blue-700" : ""}>
                {t("breadcrumb.summary")}
              </span>
              <span>/</span>
              <span className={step === 2 ? "text-blue-700" : ""}>
                {t("breadcrumb.shippingPayment")}
              </span>
            </nav>

            <div className="flex items-center gap-3">
              <div
                className={`h-3 w-3 ${step >= 1 ? "bg-blue-700" : "bg-slate-200"}`}
              />
              <div
                className={`h-1 w-12 ${step >= 2 ? "bg-blue-700" : "bg-slate-200"}`}
              />
              <div
                className={`h-3 w-3 ${step >= 2 ? "bg-blue-700" : "bg-slate-200"}`}
              />
            </div>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-8 md:py-12 sm:px-6 lg:px-8">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
            <div className="absolute -left-24 top-0 h-96 w-96 bg-orange-500/10 blur-3xl" />
            <div className="absolute right-0 top-24 h-[30rem] w-[30rem] bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {items.length === 0 ? (
              <CardShell className="mx-auto max-w-xl p-10 text-center md:p-12">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center border border-slate-200 bg-slate-50 text-slate-300">
                  <ShoppingBag className="h-10 w-10" />
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  {t("empty.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
                  {t("empty.description")}
                </p>

                <div className="mt-8">
                  <Link href="/store" className="block w-full">
                    <Button className="flex h-14 w-full items-center justify-center border border-blue-700 bg-blue-700 px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-blue-800 hover:bg-blue-800">
                      {t("empty.goToStore")}
                    </Button>
                  </Link>
                </div>
              </CardShell>
            ) : (
              <div className="grid items-start gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  {errorMessage && (
                    <div className="flex items-start gap-3 border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6">
                      <CardShell className="flex items-center justify-between p-5">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                            {t("order.title")}
                          </p>
                          <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                            {t("order.title")}
                          </h2>
                        </div>

                        <button
                          type="button"
                          onClick={clearCart}
                          className="inline-flex items-center gap-2 border border-red-200 bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-700 transition-all hover:border-red-300 hover:bg-red-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          {t("order.clear")}
                        </button>
                      </CardShell>

                      <div className="grid gap-4">
                        {items.map((item) => (
                          <CardShell
                            key={item.product.slug}
                            className="flex gap-4 p-4 md:p-5"
                          >
                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden border border-slate-200 bg-slate-100">
                              <Image
                                src={"/logo.png"}
                                alt={item.product.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                              />
                            </div>

                            <div className="flex min-w-0 flex-1 flex-col justify-between">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <h3 className="line-clamp-1 text-lg font-black tracking-tight text-slate-950">
                                    {item.product.name}
                                  </h3>
                                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    {item.product.slug}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => removeItem(item.product.slug)}
                                  className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-slate-400 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>

                              <div className="mt-4 flex items-end justify-between gap-4">
                                <div className="flex items-center border border-slate-200 bg-slate-50">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(item.product.slug, item.quantity - 1)
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-slate-700 transition hover:bg-white hover:text-slate-950"
                                  >
                                    <Minus className="h-3.5 w-3.5" />
                                  </button>

                                  <span className="flex h-10 min-w-12 items-center justify-center border-x border-slate-200 px-3 text-sm font-black text-slate-950">
                                    {item.quantity}
                                  </span>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(item.product.slug, item.quantity + 1)
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-slate-700 transition hover:bg-white hover:text-slate-950"
                                  >
                                    <Plus className="h-3.5 w-3.5" />
                                  </button>
                                </div>

                                <div className="text-right">
                                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                                    {t("financial.subtotal")}
                                  </p>
                                  <p className="mt-1 text-xl font-black text-slate-950">
                                    {formatPrice(item.product.price * item.quantity, "MXN", true)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardShell>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <form
                      id="octano-payment-form"
                      onSubmit={handleCheckoutSubmit}
                      className="space-y-6"
                    >
                      <CardShell className="space-y-4 p-6 md:p-8">
                        <SectionTitle icon={User} title={t("form.buyerTitle")} />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field
                            label={t("form.firstName")}
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.lastName")}
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.email")}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.phone")}
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.company")}
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleInputChange}
                            className="sm:col-span-2"
                          />
                        </div>
                      </CardShell>

                      <CardShell className="space-y-4 p-6 md:p-8">
                        <SectionTitle icon={MapPin} title={t("form.addressTitle")} />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Field
                            label={t("form.streetAddress")}
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.streetAddressPlaceholder")}
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.neighborhood")}
                            name="direccion2"
                            value={formData.direccion2}
                            onChange={handleInputChange}
                            placeholder={t("form.neighborhoodPlaceholder")}
                            className="sm:col-span-2"
                          />
                          <Field
                            label={t("form.city")}
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleInputChange}
                            required
                          />
                          <Field
                            label={t("form.state")}
                            name="estado"
                            value={formData.estado}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.statePlaceholder")}
                          />
                          <Field
                            label={t("form.postalCode")}
                            name="cp"
                            value={formData.cp}
                            onChange={handleInputChange}
                            required
                          />
                          <div>
                            <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                              {t("form.country")}
                            </label>
                            <select
                              name="pais"
                              value={formData.pais}
                              onChange={handleInputChange}
                              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            >
                              <option value="MX">{t("form.mexico")}</option>
                            </select>
                          </div>
                        </div>
                      </CardShell>

                      <CardShell className="space-y-4 p-6 md:p-8">
                        <SectionTitle icon={CreditCard} title={t("form.paymentTitle")} />
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                          <Field
                            label={t("form.cardNumber")}
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                            maxLength={19}
                            placeholder={t("form.cardNumberPlaceholder")}
                            className="sm:col-span-3"
                            mono
                            inputClassName="tracking-widest"
                          />
                          <Field
                            label={t("form.cardHolderName")}
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                            placeholder={t("form.cardHolderPlaceholder")}
                            className="sm:col-span-3"
                          />
                          <Field
                            label={t("form.expiryMonth")}
                            name="cardMonth"
                            value={formData.cardMonth}
                            onChange={handleInputChange}
                            required
                            maxLength={2}
                            placeholder={t("form.expiryMonthPlaceholder")}
                            mono
                            inputClassName="text-center"
                          />
                          <Field
                            label={t("form.expiryYear")}
                            name="cardYear"
                            value={formData.cardYear}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            placeholder={t("form.expiryYearPlaceholder")}
                            mono
                            inputClassName="text-center"
                          />
                          <Field
                            label={t("form.cvv")}
                            name="cardCvv"
                            type="password"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            required
                            maxLength={4}
                            placeholder={t("form.cvvPlaceholder")}
                            mono
                            inputClassName="text-center"
                          />
                        </div>
                      </CardShell>
                    </form>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6 border border-slate-200 bg-white p-6 shadow-sm">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        {t("financial.title")}
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                        {t("financial.title")}
                      </h2>
                    </div>

                    <CardShell className="border-slate-200 bg-slate-50 p-4 shadow-none">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between gap-4">
                          <span className="text-slate-600">{t("financial.subtotal")}</span>
                          <span className="font-bold text-slate-950">
                            {formatPrice(total, "MXN", true)}
                          </span>
                        </div>

                        {appliedCoupon && (
                          <div className="flex justify-between gap-4">
                            <span className="text-slate-600">
                              {t("metadata.couponApplied")}
                            </span>
                            <span className="font-bold text-emerald-700">
                              -{formatPrice(discountAmount, "MXN", true)}
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
                          <span className="font-bold text-slate-950">
                            {t("financial.netTotal")}
                          </span>
                          <span className="text-2xl font-black text-slate-950">
                            {formatPrice(grandTotal, "MXN", true)}
                          </span>
                        </div>

                        <p className="text-right text-[10px] text-slate-500">
                          {t("financial.tax", {
                            tax: formatPrice(iva, "MXN", true),
                          })}
                        </p>
                      </div>
                    </CardShell>

                    <CardShell className="space-y-4 p-5 shadow-none">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
                          <Truck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-950">
                            {t("security.note")}
                          </p>
                        </div>
                      </div>
                    </CardShell>

                    <CardShell className="space-y-4 p-5 shadow-none">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center border border-orange-100 bg-orange-50 text-orange-600">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-950">
                            {t("security.note")}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white">
                            <BadgeInfo className="h-5 w-5 text-slate-700" />
                          </div>
                          <p className="text-xs leading-6 text-slate-600">
                            {t("financial.couponInvalid")}
                          </p>
                        </div>
                      </div>
                    </CardShell>

                    {step === 1 ? (
                      <Button
                        onClick={() => setStep(2)}
                        className="flex h-14 w-full items-center justify-center gap-2 border border-blue-700 bg-blue-700 px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-blue-800 hover:bg-blue-800"
                      >
                        {t("actions.proceedToPayment")}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <div className="space-y-3">
                        <Button
                          type="submit"
                          form="octano-payment-form"
                          disabled={isProcessing}
                          className={`flex h-14 w-full items-center justify-center gap-2 border px-6 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 ${
                            isProcessing
                              ? "cursor-wait border-slate-400 bg-slate-400"
                              : "border-blue-700 bg-blue-700 hover:border-blue-800 hover:bg-blue-800"
                          }`}
                        >
                          {isProcessing
                            ? t("actions.processing")
                            : t("actions.payAmount", {
                                amount: formatPrice(grandTotal, "MXN", true),
                              })}
                        </Button>

                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() => setStep(1)}
                          className="flex w-full items-center justify-center gap-1 py-1 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-500 transition hover:text-slate-950"
                        >
                          <ChevronLeft className="h-3.5 w-3.5" />
                          {t("actions.backToCart")}
                        </button>
                      </div>
                    )}

                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-center text-[10px] font-medium text-slate-500">
                        {t("security.note")}
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center border border-slate-200 bg-white p-4">
                          <Image
                            src="/octano.png"
                            alt={t("images.octanoAlt")}
                            width={150}
                            height={30}
                          />
                        </div>
                        <div className="flex items-center justify-center border border-slate-200 bg-white p-4">
                          <Image
                            src="/secure-payment.png"
                            alt={t("images.securePaymentAlt")}
                            width={150}
                            height={30}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}