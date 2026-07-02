"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Search,
  ShoppingCart,
  Menu,
  Phone,
  MapPin,
  Cpu,
  Monitor,
  Gamepad2,
  HardDrive,
  Headphones,
  Truck,
  Mail,
  X,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { useCategories, useProducts } from "@/hooks";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/price";

const categoryIcons = [Cpu, Monitor, HardDrive, Gamepad2, Headphones];

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function Header() {
  const t = useTranslations("header");

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { categories } = useCategories();
  const { products, loading } = useProducts();
  const { total, itemCount } = useCart();
  const locale = useLocale()

  const mappedCategories = useMemo(() => {
    return categories.map((category, index) => {
      const Icon = categoryIcons[index % categoryIcons.length];

      return {
        ...category,
        Icon,
      };
    });
  }, [categories]);

  const filteredProducts = useMemo(() => {
    const q = normalizeText(searchQuery.trim());

    if (!q) return [];

    return products
      .filter((product) => {
        const searchable = normalizeText(
          [
            product.name,
            product.slug,
            product.category,
            product.description || "",
            ...(product.specs || []),
          ].join(" ")
        );

        return searchable.includes(q);
      })
      .sort((a, b) => {
        const aStarts = normalizeText(a.name).startsWith(q) ? 1 : 0;
        const bStarts = normalizeText(b.name).startsWith(q) ? 1 : 0;

        if (aStarts !== bStarts) return bStarts - aStarts;
        return a.name.localeCompare(b.name);
      })
      .slice(0, 8);
  }, [products, searchQuery]);

  const showResults = searchQuery.trim().length > 0;

  return (
    <>
      <header className="fixed w-full mb-24 top-2 z-50 px-3">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-[#0a0f18]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.08)]">
            {/* Top bar */}
            <div className="hidden md:flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-[#0f1724] via-[#111827] to-[#0f1724] px-5 py-2 text-xs">
              <div className="flex items-center gap-5 text-gray-300">
                <a
                  href="tel:5215553599895"
                  className="flex items-center gap-2 transition hover:text-cyan-300"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan-400" />
                  <span>+ 52 1 55 5359 9895</span>
                </a>

                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  <span>{t("topbar.address")}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Truck className="h-3.5 w-3.5 text-cyan-400" />
                <span>{t("topbar.tagline")}</span>
              </div>
            </div>

            {/* Main header */}
            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_45%)] pointer-events-none" />

              <div className="relative flex items-center justify-between gap-4 px-4 py-3 lg:px-5">
                {/* Logo */}
                <Link href="/" className="group relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

                  <div className="relative rounded-xl">
                    <Image
                      src="/title.png"
                      alt={t("logoAlt")}
                      width={250}
                      height={20}
                    />
                  </div>
                </Link>

                {/* Search desktop */}
                <div className="hidden lg:flex flex-1 max-w-2xl">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("search.placeholderDesktop")}
                      className="h-11 w-full rounded-xl border border-cyan-400/10 bg-[#0f1724]/90 px-4 pr-12 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    />

                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
                        aria-label={t("search.clear")}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-300 transition hover:text-cyan-200"
                        aria-label={t("search.search")}
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {/* Mobile search */}
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:hidden"
                    aria-label={t("search.open")}
                  >
                    <Search className="h-5 w-5" />
                  </button>

                  {/* Cart */}
                  <Link
                    href="/carrito"
                    className="group flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-gradient-to-b from-[#131c2b] to-[#0c121d] px-3 py-2 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_18px_rgba(34,211,238,0.12)]"
                  >
                    <div className="relative">
                      <ShoppingCart className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />

                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400 text-[10px] font-bold text-black">
                        {itemCount}
                      </span>
                    </div>

                    <div className="hidden sm:block leading-tight">
                      <span className="block text-[11px] text-gray-400">
                        {t("cart.label")}
                      </span>

                      <span className="text-sm font-semibold text-white">
                        ${formatPrice(total)}
                      </span>
                    </div>
                  </Link>

                  {/* Mobile menu */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <button
                        aria-label={t("menu.open")}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 lg:hidden"
                      >
                        <Menu className="h-5 w-5" />
                      </button>
                    </SheetTrigger>

                    <SheetContent
                      side="right"
                      className="w-80 border-l border-cyan-400/10 bg-[#0b1018] p-0 text-white"
                    >
                      <div className="flex h-full flex-col">
                        <div className="border-b border-white/5 p-5">
                          <Image
                            src="/title.png"
                            alt={t("logoAlt")}
                            width={130}
                            height={36}
                            className="h-8 w-auto"
                          />
                        </div>

                        <nav className="flex-1 overflow-auto p-4">
                          <ul className="space-y-2">
                            {mappedCategories.map(({ id, slug, Icon }) => (
                              <li key={id}>
                                <SheetClose asChild>
                                  <Link
                                    href={`/categoria/${slug}`}
                                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-white"
                                  >
                                    <Icon className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                                    <span className="capitalize">{slug}</span>
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}

                            <li className="my-3 border-t border-white/5" />

                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/paga-tu-envio"
                                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-cyan-400/10 hover:text-white"
                                >
                                  <Truck className="h-4 w-4 text-blue-400" />
                                  {t("nav.shipping")}
                                </Link>
                              </SheetClose>
                            </li>

                            <li>
                              <SheetClose asChild>
                                <Link
                                  href="/contacto"
                                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-cyan-400/10 hover:text-white"
                                >
                                  <Mail className="h-4 w-4 text-cyan-300" />
                                  {t("nav.contact")}
                                </Link>
                              </SheetClose>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>

              {/* Mobile search */}
              {searchOpen && (
                <div className="border-t border-white/5 px-4 pb-4 lg:hidden">
                  <div className="relative mt-3">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t("search.placeholderMobile")}
                      autoFocus
                      className="h-11 w-full rounded-xl border border-cyan-400/10 bg-[#0f1724]/90 px-4 pr-12 text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40"
                    />

                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                        aria-label={t("search.clear")}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-300"
                        aria-label={t("search.search")}
                      >
                        <Search className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Search results below header */}
              {showResults && (
                <div className="border-t border-white/5 bg-[#0b1018]/95 px-4 py-4 backdrop-blur-xl">
                  <div className="mx-auto max-w-7xl">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm text-gray-300">
                        {loading
                          ? t("search.searching")
                          : t("search.results", {
                              count: filteredProducts.length,
                            })}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-sm text-cyan-300 transition hover:text-cyan-200"
                      >
                        {t("search.clearButton")}
                      </button>
                    </div>

                    {!loading && filteredProducts.length === 0 ? (
                      <div className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-5 text-sm text-gray-400">
                        {t("search.noResults", {
                          query: searchQuery,
                        })}
                      </div>
                    ) : (
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                          <Link
                            key={product.id}
                            href={`/producto/${product.slug}`}
                            onClick={() => setSearchQuery("")}
                            className="group flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/10"
                          >
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-[#111827]">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="truncate text-sm font-semibold text-white group-hover:text-cyan-200">
                                {locale == "es" ? product.name : product.name_english}
                              </h3>

                              <p className="mt-1 text-sm font-semibold text-cyan-300">
                                ${formatPrice(product.price)}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Desktop navigation */}
              <nav className="hidden border-t border-white/5 bg-gradient-to-r from-[#0d131d] via-[#111827] to-[#0d131d] lg:block">
                <div className="mx-auto max-w-7xl px-3">
                  <ul className="flex items-center gap-1 overflow-x-auto">
                    {mappedCategories.map(({ id, name,slug, Icon }, index) => (
                      <li key={id}>
                        <Link
                          href={`/categoria/${slug}`}
                          className="group relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
                        >
                          <div className="absolute inset-x-2 bottom-1 h-px scale-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                          <Icon
                            className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                              index % 2 === 0 ? "text-cyan-300" : "text-blue-400"
                            }`}
                          />

                          <span className="capitalize whitespace-nowrap">
                            {name}
                          </span>
                        </Link>
                      </li>
                    ))}

                    <li className="ml-auto">
                      <Link
                        href="/paga-tu-envio"
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-cyan-400/10 hover:text-white"
                      >
                        <Truck className="h-4 w-4 text-cyan-300" />
                        {t("nav.shipping")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/contacto"
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-blue-400/10 hover:text-white"
                      >
                        <Mail className="h-4 w-4 text-blue-400" />
                        {t("nav.contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}