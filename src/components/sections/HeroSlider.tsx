"use client";

import { useState, useEffect, useCallback } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Cpu,
  Monitor,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

export function HeroSlider() {
  const t = useTranslations("heroSlider");

  const heroSlides = [
    {
      id: "1",
      title: t("slides.1.title"),
      subtitle: t("slides.1.subtitle"),
      buttonText: t("slides.1.buttonText"),
      buttonLink: "/categoria/memorias",
      backgroundImage:
        "https://webapi3.adata.com/storage/quiktips/ddr4_vs_ddr5_a_960x6501736824868.jpg",
      icon: Cpu,
      accent: "cyan",
    },
    {
      id: "2",
      title: t("slides.2.title"),
      subtitle: t("slides.2.subtitle"),
      buttonText: t("slides.2.buttonText"),
      buttonLink: "/categoria/monitores",
      backgroundImage:
        "https://www.asus.com/WebsitesBanner/MX/banners/f1su5vvblrx3skua/f1su5vvblrx3skua-0_0_tablet_0_2X.jpg?webp",
      icon: Monitor,
      accent: "blue",
    },
    {
      id: "3",
      title: t("slides.3.title"),
      subtitle: t("slides.3.subtitle"),
      buttonText: t("slides.3.buttonText"),
      buttonLink: "/categoria/tarjetas",
      backgroundImage:
        "https://www.nvidia.com/content/nvidiaGDC/la/es_LA/geforce/graphics-cards/_jcr_content/root/responsivegrid/nv_container_1965276325/nv_teaser_copy_1362348342.coreimg.100.850.jpeg/1735961992580/geforce-rtx-40-series-new.jpeg",
      icon: Zap,
      accent: "violet",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);

    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative overflow-hidden px-3 pt-3 lg:px-5">
      <div className="relative mx-auto h-[420px] max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-[#0b1119] shadow-[0_0_60px_rgba(34,211,238,0.08)] md:h-[520px]">
        {heroSlides.map((slide, index) => {
          const Icon = slide.icon;

          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700",
                index === currentSlide
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-0 z-0 scale-[1.03]"
              )}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms]"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  transform:
                    index === currentSlide
                      ? "scale(1.06)"
                      : "scale(1)",
                }}
              />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,0.96)_0%,rgba(7,12,20,0.82)_38%,rgba(0,0,0,0.38)_100%)]" />

              <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-full w-[40%] bg-cyan-400/10 blur-3xl" />
                <div className="absolute right-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              </div>

              <div className="relative z-10 mx-10 flex h-full items-center">
                <div className="mx-auto flex w-full max-w-7xl px-10">
                  <div className="max-w-[620px]">
                    <h1 className="max-w-[560px] text-4xl font-black uppercase leading-none tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.12)] md:text-6xl lg:text-7xl">
                      {slide.title}
                    </h1>

                    <div className="mt-5 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.7)]" />

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link
                        href={slide.buttonLink}
                        className="group inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-gradient-to-b from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
                      >
                        {slide.buttonText}

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

        <button
          onClick={prevSlide}
          aria-label={t("navigation.previous")}
          className="group absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label={t("navigation.next")}
          className="group absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
        >
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={t("navigation.goToSlide", {
                slide: index + 1,
              })}
              className={cn(
                "relative h-2.5 rounded-full transition-all duration-300",
                currentSlide === index
                  ? "w-10 bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}