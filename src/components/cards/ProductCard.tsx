"use client";

import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";

import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { formatPrice } from "@/lib/price";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const locale = useLocale()
  const t = useTranslations("ProductCard")
  const { addItem } = useCart()


  return (
    <div
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-[1.8rem]
        border border-cyan-400/10
        bg-gradient-to-b from-[#131c2b] to-[#0b1119]
        transition-all duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
      "
    >
      {/* CLICKABLE LAYER (entire card navigation) */}
      <a
        href={`/producto/${product.slug}`}
        className="absolute inset-0 z-10"
        aria-label={product.name}
      />

      {/* Metallic scanline effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-40%] top-0 h-full w-[120px] rotate-12 bg-white/[0.03] blur-2xl transition-transform duration-700 group-hover:translate-x-[320%]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* IMAGE FULL TOP */}
      <div className="relative h-56 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_55%)] border-b border-white/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1119] via-transparent to-transparent opacity-70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-200 transition-colors group-hover:text-cyan-300">
          {locale == "es" ? product.name : product.name_english}
        </h3>

        {/* PRICE + ACTIONS */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              {t("price")}
            </span>

            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-white">
                ${formatPrice(product.price)}
              </span>

              <span className="mb-1 text-xs text-cyan-300">
                MXN {t("tax")}
              </span>
            </div>
          </div>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product)
            }}
            className="
              relative z-30
              flex h-11 w-11 items-center justify-center
              rounded-2xl
              border border-cyan-400/20
              bg-cyan-400/10
              text-cyan-300
              transition-all duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-400
              hover:text-black
              hover:shadow-[0_0_18px_rgba(34,211,238,0.4)]
            "
            aria-label="Agregar al carrito"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* CORNER GLOW */}
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}