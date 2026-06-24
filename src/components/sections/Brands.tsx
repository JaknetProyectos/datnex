"use client";

import { useLocale } from "next-intl";
import Image from "next/image";

const brands = [
  {
    id: "samsung",
    name: "Samsung",
    logo: "/logos/samsung.png",
  },
  {
    id: "amd",
    name: "AMD",
    logo: "/logos/amd.webp",
  },
  {
    id: "nvidia",
    name: "NVIDIA",
    logo: "/logos/nvidia.png",
  },
  {
    id: "lenovo",
    name: "Lenovo",
    logo: "/logos/lenovo.webp",
  },
  {
    id: "xpg",
    name: "XPG",
    logo: "/logos/xpg.webp",
  },
  {
    id: "kingston",
    name: "Kington",
    logo: "/logos/kingston.png",
  },
  {
    id: "dell",
    name: "Dell",
    logo: "/logos/dell.webp",
  },
  {
    id: "hp",
    name: "HP",
    logo: "/logos/hp.png",
  },
];

export function Brands() {
  const locale = useLocale()

  const duplicatedBrands = [
    ...brands,
    ...brands,
    ...brands,
  ];

  return (
    <section className="relative overflow-hidden bg-[#090d14] px-4 py-14 md:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-80px] h-[280px] w-[280px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-80px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#090d14] to-transparent" />

        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#090d14] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-center text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
            {locale == "es" ? "Mejores Marcas" : "Best Brands"}
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex min-w-max animate-[brands-scroll_16s_linear_infinite] items-center">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="group flex-shrink-0 px-5 md:px-8"
              >
                <div className="relative flex h-28 w-[180px] items-center justify-center overflow-hidden rounded-[1.8rem] border border-cyan-400/10 bg-gradient-to-b from-[#131c2b] to-[#0b1119] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]">
                  {/* Animated shine */}
                  <div className="pointer-events-none absolute left-[-120%] top-0 h-full w-[40%] rotate-12 bg-white/[0.05] blur-2xl transition-all duration-1000 group-hover:left-[140%]" />

                  {/* Glow */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={140}
                    height={60}
                    className="relative h-12 w-auto object-contain brightness-200 transition-all duration-500 group-hover:scale-110 md:h-14"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind 3 custom animation */}
      <style jsx>{`
        @keyframes brands-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}