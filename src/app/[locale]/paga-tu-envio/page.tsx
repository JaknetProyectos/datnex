"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  ArrowRight,
  AlertCircle,
  Loader2,
  DollarSign,
} from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useCart } from "@/context/CartContext";

export default function CustomProductPage() {
  const t = useTranslations("customPlan");
  const router = useRouter();
  const { addItem } = useCart();

  const [quoteNumber, setQuoteNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | "">("");
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const finalPrice = Number(totalPrice) || 0;

    if (!quoteNumber.trim()) {
      setError(t("errors.quoteRequired"));
      return;
    }

    if (finalPrice <= 0) {
      setError(t("errors.invalidAmount"));
      return;
    }

    setIsAdding(true);

    const folioUpper = quoteNumber.trim().toUpperCase();

    addItem(
      {
        image: "/logo-dark.png",
        category: "custom",
        id: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
        name: `Custom - ${folioUpper}`,
        price: finalPrice,
        slug: `custom-quote-${quoteNumber.trim().toLowerCase()}`,
      },
      1
    );

    setTimeout(() => {
      setIsAdding(false);
      router.push("/carrito");
    }, 1000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b12] text-slate-100 selection:bg-cyan-300 selection:text-[#070b12]">
      <Header />

      <main className="relative pb-24 pt-44">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[620px] w-[620px] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute bottom-0 left-[-10%] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[140px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        {/* Content */}
        <section className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="overflow-hidden w-full rounded-[2rem] border border-cyan-400/10 bg-[#0b111a]/80 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            {/* Right panel */}
            <div className="p-6 w-full sm:p-8 lg:p-12">
              <div className="w-full">
                <div className="mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-300">
                    {t("form.badge")}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {t("form.title")}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {t("authorized.description")}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="quoteNumber"
                      className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400"
                    >
                      {t("form.quoteLabel")}
                    </label>

                    <input
                      id="quoteNumber"
                      type="text"
                      required
                      placeholder={t("form.quotePlaceholder")}
                      value={quoteNumber}
                      onChange={(e) => setQuoteNumber(e.target.value)}
                      className="h-14 w-full rounded-2xl border border-white/5 bg-[#081019]/85 px-5 text-sm font-mono uppercase tracking-[0.18em] text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/30 focus:ring-4 focus:ring-cyan-400/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="totalPrice"
                      className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400"
                    >
                      {t("form.amountLabel")}
                    </label>

                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-cyan-300">
                        <DollarSign className="h-4 w-4" />
                      </div>

                      <input
                        id="totalPrice"
                        type="number"
                        required
                        step="0.01"
                        min="0.01"
                        placeholder={t("form.amountPlaceholder")}
                        value={totalPrice}
                        onChange={(e) =>
                          setTotalPrice(
                            e.target.value !== "" ? Number(e.target.value) : ""
                          )
                        }
                        className="h-14 w-full rounded-2xl border border-white/5 bg-[#081019]/85 pl-11 pr-16 text-sm font-semibold text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/30 focus:ring-4 focus:ring-cyan-400/10"
                      />

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5">
                        <span className="text-xs font-bold tracking-[0.2em] text-slate-500">
                          MXN
                        </span>
                      </div>
                    </div>

                    <p className="pl-1 text-[11px] text-slate-500">
                      {t("form.taxNote")}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isAdding}
                      className={[
                        "group flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-all duration-300",
                        isAdding
                          ? "cursor-not-allowed bg-slate-800 text-slate-500"
                          : "bg-cyan-300 text-[#071018] hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(34,211,238,0.28)]",
                      ].join(" ")}
                    >
                      {isAdding ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>{t("buttons.adding")}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("buttons.addToCart")}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}