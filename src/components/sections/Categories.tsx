"use client";

import { useTranslations } from "next-intl";

import { CategoryCard } from "@/components/cards/CategoryCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories } from "@/hooks";

export function Categories() {
  const t = useTranslations("categories");

  const { categories, loading } = useCategories();

  return (
    <section className="relative overflow-hidden bg-[#0b1119] px-4 py-14 md:px-6">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-80px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-60px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {t("title")}
          </h2>

          <div className="mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />

          <p className="mt-4 text-sm text-gray-400 md:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`cat-skeleton-${i}`}
                  className="overflow-hidden rounded-[1.8rem] border border-cyan-400/10 bg-gradient-to-b from-[#131c2b] to-[#0d141d] p-[1px]"
                >
                  <div className="rounded-[calc(1.8rem-1px)] bg-[#0b1119] p-5">
                    <Skeleton className="aspect-square rounded-2xl bg-white/5" />

                    <Skeleton className="mx-auto mt-5 h-5 w-2/3 bg-white/5" />
                  </div>
                </div>
              ))
            : categories.map((category, index) => (
                <div
                  key={category.id}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 70}ms`,
                  }}
                >
                  {/* Animated border glow */}
                  <div className="pointer-events-none absolute -inset-[1px] rounded-[1.9rem] bg-gradient-to-br from-cyan-400/0 via-cyan-400/20 to-blue-500/0 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.02]" />

                  {/* Floating effect */}
                  <div className="transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.01]">
                    <CategoryCard category={category} />
                  </div>

                  {/* Hover light sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.9rem]">
                    <div className="absolute left-[-120%] top-0 h-full w-[40%] rotate-12 bg-white/[0.06] blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}