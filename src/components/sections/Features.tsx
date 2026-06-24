"use client";

import { useTranslations } from "next-intl";
import {
  Settings,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  settings: Settings,
  truck: Truck,
  shield: Shield,
  headphones: Headphones,
};

export function Features() {
  const t = useTranslations("features");

  const features = [
    {
      id: "1",
      title: t("items.1.title"),
      description: t("items.1.description"),
      icon: "settings",
    },
    {
      id: "2",
      title: t("items.2.title"),
      description: t("items.2.description"),
      icon: "truck",
    },
    {
      id: "3",
      title: t("items.3.title"),
      description: t("items.3.description"),
      icon: "shield",
    },
    {
      id: "4",
      title: t("items.4.title"),
      description: t("items.4.description"),
      icon: "headphones",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0e141d] px-4 py-14 md:px-6">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-80px] h-[260px] w-[260px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-80px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent =
              iconMap[feature.icon] || Settings;

            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-[1.8rem] border border-cyan-400/10 bg-gradient-to-b from-[#131c2b] to-[#0b1119] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.14)]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Animated glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                  <div className="absolute left-[-120%] top-0 h-full w-[35%] rotate-12 bg-white/[0.05] blur-2xl transition-all duration-1000 group-hover:left-[140%]" />
                </div>

                {/* Content */}
                <div className="relative flex h-full gap-4 rounded-[calc(1.8rem-1px)] bg-[#0b1119] p-5">
                  {/* Icon */}
                  <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10">
                    <div className="absolute inset-0 scale-75 rounded-2xl bg-cyan-400/10 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

                    <IconComponent className="relative h-6 w-6 text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}