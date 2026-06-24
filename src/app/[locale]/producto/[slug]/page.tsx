"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { useProduct } from "@/hooks";
import {
  ChevronRight,
  ShoppingCart,
  Check,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { formatPrice } from "@/lib/price";
import { useLocale, useTranslations } from "next-intl";

export default function ProductPage() {
  const t = useTranslations("productDetail");

  const params = useParams();
  const slug = params.slug as string;
  const { product, loading, error } = useProduct(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const locale = useLocale();

  const productName =
    locale == "es"
      ? (product?.name as string)
      : (product?.name_english as unknown as string);

  const specs =
    locale == "es"
      ? (product?.specs as string[])
      : (product?.specs_english as unknown as string[]);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (product)
      addItem(
        {
          ...product,
          specs,
          name:
            locale == "es"
              ? product.name
              : (product.name_english as unknown as string),
        },
        quantity
      );
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-white overflow-x-hidden">
      <Header />

      <main className="pt-36 pb-16 relative">
        {/* GLOW BACKGROUND */}
        <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition">
              {t("breadcrumb.home")}
            </Link>

            <ChevronRight className="w-4 h-4 text-slate-700" />

            {loading ? (
              <Skeleton className="h-4 w-28 bg-slate-800" />
            ) : (
              <>
                <Link
                  href={`/categoria/${product?.category}`}
                  className="hover:text-cyan-300 transition capitalize"
                >
                  {product?.category}
                </Link>

                <ChevronRight className="w-4 h-4 text-slate-700" />

                <span className="text-white font-medium truncate max-w-[240px]">
                  {productName}
                </span>
              </>
            )}
          </nav>
        </div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="grid lg:grid-cols-2 gap-14">
              <Skeleton className="aspect-square rounded-3xl bg-slate-800" />
              <div className="space-y-6">
                <Skeleton className="h-8 w-3/4 bg-slate-800" />
                <Skeleton className="h-12 w-1/3 bg-slate-800" />
                <Skeleton className="h-24 w-full bg-slate-800" />
                <Skeleton className="h-14 w-full bg-slate-800" />
              </div>
            </div>
          ) : error || !product ? (
            <div className="text-center py-24">
              <p className="text-slate-400 text-lg mb-6">
                {t("notFound.title")}
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-400 transition"
              >
                <ArrowLeft className="w-5 h-5" />
                {t("notFound.backHome")}
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* IMAGE HERO PANEL */}
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl" />

                <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-slate-800 bg-[#0B0F16]/60 backdrop-blur-xl shadow-2xl">
                  <Image
                    src={product.image}
                    alt={productName}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                      drop-shadow-[0_0_25px_rgba(34,211,238,0.15)]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A0F] via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_55%)]" />
                </div>
              </div>

              {/* INFO */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  {productName}
                </h1>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-cyan-300">
                    ${formatPrice(product.price)}
                  </span>

                  <span className="text-slate-400 text-sm">
                    {t("priceLabel")}
                  </span>
                </div>

                {/* SPECS */}
                {specs && specs?.length > 0 && (
                  <div className="border border-slate-800 rounded-2xl p-5 bg-[#0B0F16]/60">
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 mb-4">
                      {t("specifications")}
                    </h3>

                    <ul className="space-y-3">
                      {specs.map((spec, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-slate-300 text-sm"
                        >
                          <Check className="w-4 h-4 text-cyan-400 mt-0.5" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* QUANTITY */}
                <div className="flex items-center justify-between border border-slate-800 bg-[#0B0F16]/60 rounded-2xl px-4 py-3">
                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    {t("quantity")}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={decrease}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition"
                    >
                      -
                    </button>

                    <span className="w-6 text-center text-white font-mono">
                      {quantity}
                    </span>

                    <button
                      onClick={increase}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-2xl bg-cyan-500 text-black font-bold flex items-center justify-center gap-3 hover:bg-cyan-400 transition shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t("addToCart")}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}