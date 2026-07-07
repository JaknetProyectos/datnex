"use client";

import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/cards/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

import { useProducts, useCategory } from "@/hooks";
import type { Product } from "@/types";
import { useCart } from "@/context/CartContext";

export default function CategoryPage() {
  const t = useTranslations("categoryPage");

  const params = useParams();
  const slug = params.slug as string;

  const { category, loading: categoryLoading } = useCategory(slug);
  const { products, loading: productsLoading } = useProducts({
    category: slug,
  });

  const { addItem } = useCart();
  const locale = useLocale();

  const loading = categoryLoading || productsLoading;

  const handleAddToCart = (product: Product) => {
    if (product)
      addItem(
        {
          ...product,
          specs:
            locale == "es"
              ? product.specs
              : (product.specs_english as unknown as string[]),
          name:
            locale == "es"
              ? product.name
              : (product.name_english as unknown as string),
        },
        1
      );
  };

  return (
    <div className="min-h-screen bg-[#0b0f12] text-white overflow-x-hidden">
      <Header />

      <main className="pt-44 mt-24">
        {/* HERO / CATEGORY HEADER */}
        <section className="relative border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f12] via-[#0b0f12] to-[#0b0f12]" />
          <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#00d4ff]/10 blur-[120px]" />

          <div className="max-w-7xl mx-6 pt-4 relative">
            {/* breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
              <Link
                href="/"
                className="hover:text-[#00d4ff] transition-colors"
              >
                {t("breadcrumb.home")}
              </Link>

              <ChevronRight className="w-4 h-4 opacity-40" />

              {loading ? (
                <Skeleton className="h-4 w-24 bg-white/10" />
              ) : (
                <span className="text-white/80">{category?.name}</span>
              )}
            </nav>

            {/* title */}
            <div className="flex flex-col gap-2">
              {loading ? (
                <Skeleton className="h-10 w-56 bg-white/10" />
              ) : (
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  {category?.name}
                </h1>
              )}

              <div className="text-sm text-white/40">
                {loading ? (
                  <Skeleton className="h-4 w-32 bg-white/10" />
                ) : (
                  t("availableProducts", {
                    count: products.length,
                  })
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                >
                  <Skeleton className="aspect-square bg-white/10" />

                  <div className="p-4 space-y-3">
                    <Skeleton className="h-4 w-full bg-white/10" />
                    <Skeleton className="h-4 w-3/4 bg-white/10" />
                    <Skeleton className="h-6 w-1/2 bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5">
              <p className="text-white/60">
                {t("emptyState.message")}
              </p>

              <Link
                href="/"
                className="inline-flex mt-6 px-6 py-3 rounded-xl bg-[#00d4ff] text-black font-semibold hover:shadow-[0_0_25px_rgba(0,212,255,0.25)] transition-all"
              >
                {t("emptyState.backHome")}
              </Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}