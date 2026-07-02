"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useContact } from "@/hooks/useContact";
import { useTranslations } from "next-intl";

import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useAlert } from "@/context/AlertContext";

export default function ContactPage() {
  const t = useTranslations("contact");

  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    asunto: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { showAlert } = useAlert();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await sendContactForm({
      nombre: `${formData.nombre} ${formData.apellidos}`.trim(),
      asunto: formData.asunto,
      email: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
    });

    if (response.success) {
      setSubmitted(true);

      setFormData({
        nombre: "",
        apellidos: "",
        asunto: "",
        email: "",
        telefono: "",
        mensaje: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      showAlert({
        title: t("alert.error.title"),
        message:
          response.error || t("alert.error.defaultMessage"),
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactCards = [
    {
      icon: Phone,
      title: t("cards.phone.title"),
      value: "+ 52 1 55 5359 9895",
      href: "tel:5215553599895",
    },
    {
      icon: Mail,
      title: t("cards.email.title"),
      value: "asistencia@datnex.com.mx",
      href: "mailto:asistencia@datnex.com.mx",
    },
    {
      icon: MapPin,
      title: t("cards.address.title"),
      value: "Boulevard Periférico Manuel Ávila Camacho 235, CDMX",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070A0F] text-white overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-20 relative">
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] pointer-events-none" />

        {/* HERO */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="border border-slate-800 bg-[#0B0F16]/80 backdrop-blur-xl rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10 px-6 md:px-12 py-20 md:py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                  {t("hero.title")}
                  <span className="block text-cyan-300">
                    {t("hero.subtitle")}
                  </span>
                </h1>

                <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
                  {t("hero.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-6 mt-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0B0F16]/70 backdrop-blur-xl p-6 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-6 h-6 text-cyan-300" />
                        </div>

                        <div>
                          <h3 className="font-bold text-white mb-1">
                            {item.title}
                          </h3>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-slate-400 hover:text-cyan-300 transition-colors text-sm leading-relaxed"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FORM */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-[3rem]" />

              <div className="relative border border-slate-800 bg-[#0B0F16]/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:30px_30px]" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
                      {t("form.badge")}
                    </div>

                    <h2 className="text-3xl font-black tracking-tight">
                      {t("form.title")}
                    </h2>

                    <p className="text-slate-400 text-sm mt-3">
                      {t("form.subtitle")}
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-16 text-center">
                      <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <Send className="w-9 h-9 text-cyan-300" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {t("form.success.title")}
                      </h3>

                      <p className="text-slate-400">
                        {t("form.success.text")}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                            {t("form.fields.name.label")}
                          </label>

                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            placeholder={t("form.fields.name.placeholder")}
                            className="w-full bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                            {t("form.fields.lastname.label")}
                          </label>

                          <input
                            type="text"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                            required
                            placeholder={t("form.fields.lastname.placeholder")}
                            className="w-full bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                          {t("form.fields.subject.label")}
                        </label>

                        <input
                          type="text"
                          name="asunto"
                          value={formData.asunto}
                          onChange={handleChange}
                          required
                          placeholder={t("form.fields.subject.placeholder")}
                          className="w-full bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                            {t("form.fields.email.label")}
                          </label>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder={t("form.fields.email.placeholder")}
                            className="w-full bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                            {t("form.fields.phone.label")}
                          </label>

                          <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            placeholder={t("form.fields.phone.placeholder")}
                            className="w-full bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold tracking-wide text-slate-400 mb-2">
                          {t("form.fields.message.label")}
                        </label>

                        <textarea
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder={t("form.fields.message.placeholder")}
                          className="w-full resize-none bg-[#070A0F]/80 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

                        {isLoading
                          ? t("form.sending")
                          : t("form.send")}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* DO NOT CHANGE */}
      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4172327364236!2d-99.2128709!3d19.4375699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2022269d2076f%3A0x6b4e7cf1ca3e43d5!2sPerif.%20Blvd.%20Manuel%20%C3%81vila%20Camacho%20235-interior%20202%2C%20Polanco%2C%20Militar%2C%20Miguel%20Hidalgo%2C%2011510%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1782238520409!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" ></iframe>

      <Footer />
    </div>
  );
}