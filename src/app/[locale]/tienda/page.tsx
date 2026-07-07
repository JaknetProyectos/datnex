"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/cards/ProductCard";
import { useCategories, useProducts } from "@/hooks";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal, PackageOpen } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";

const PRODUCTS_PER_PAGE = 12; // Cantidad de productos por página simulada

export default function StorePage() {
    const { categories } = useCategories();
    const t = useTranslations("store");
    const { error, loading, products = [] } = useProducts({ category: "" });

    // Estados para Filtros y Paginación
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    // 1. Filtrado en tiempo real (por categoría seleccionada y término de búsqueda)
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === "all" ||
                product.category.toLowerCase() === selectedCategory.toLowerCase() ||
                product.slug.includes(selectedCategory); // Fallback por si mapeas por slug

            const matchesSearch = product.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [products, searchTerm, selectedCategory]);

    // 2. Lógica de Paginación Simulada sobre los productos filtrados
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

    // Ajustar la página actual si los filtros reducen drásticamente los resultados
    const sanitizedPage = Math.min(currentPage, totalPages || 1);

    const paginatedProducts = useMemo(() => {
        const startIndex = (sanitizedPage - 1) * PRODUCTS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    }, [filteredProducts, sanitizedPage]);

    // Manejadores de cambio de página
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
                <div className="relative h-12 w-12 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />
                <span className="sr-only">{t("loading")}</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#070b14] flex items-center justify-center px-4">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center max-w-md">
                    <p className="text-sm text-red-400 font-medium">{t("error")}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen  bg-[#070b14] text-slate-100 relative overflow-hidden pb-24 pt-32 mt-24 selection:bg-blue-500/30 selection:text-blue-200">

                {/* Luces de fondo ambientales - Paleta Azul de la Tienda */}
                <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
                <div className="pointer-events-none absolute bottom-1/3 right-10 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-[120px]" />

                <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

                    {/* Encabezado Principal */}
                    <div className="mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
                            {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">{t("titleAccent")}</span>
                        </h1>
                        <p className="mt-2 text-sm text-slate-400 max-w-xl">
                            {t("description")}
                        </p>
                    </div>

                    {/* Barra de Controles: Filtros y Buscador */}
                    <div className="mb-8 grid gap-4 md:grid-cols-12 items-center rounded-2xl border border-blue-500/10 bg-[#0d1322]/80 p-4 backdrop-blur-xl shadow-xl">

                        {/* Buscador de Producto por Nombre */}
                        <div className="relative md:col-span-5">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-blue-400">
                                <Search className="h-4 w-4" />
                            </span>
                            <input
                                type="text"
                                placeholder={t("searchPlaceholder")}
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1); // Reiniciar a la página 1 en cada búsqueda
                                }}
                                className="h-12 w-full rounded-xl border border-blue-500/15 bg-[#080d18] pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/5"
                            />
                        </div>

                        {/* Selector de Categorías */}
                        <div className="relative md:col-span-4">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                                <SlidersHorizontal className="h-4 w-4" />
                            </span>
                            <select
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value);
                                    setCurrentPage(1); // Reiniciar a la página 1 en cambio de categoría
                                }}
                                className="h-12 w-full appearance-none rounded-xl border border-blue-500/15 bg-[#080d18] pl-11 pr-10 text-sm text-slate-300 outline-none transition-all focus:border-blue-500/40 focus:ring-4 focus:ring-blue-500/5 cursor-pointer"
                            >
                                <option value="all">{t("allCategories")}</option>
                                {categories?.map((cat) => (
                                    <option key={cat.id} value={cat.slug || cat.name}>
                                        {cat.name} {cat.productCount ? `(${cat.productCount})` : ""}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-500">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                            </div>
                        </div>

                        {/* Contador de Resultados Informativo */}
                        <div className="md:col-span-3 text-right text-xs font-semibold tracking-wider text-blue-400 bg-blue-950/30 px-4 py-2 rounded-xl border border-blue-500/10 justify-self-stretch md:justify-self-end">
                            {filteredProducts.length} {filteredProducts.length === 1 ? t("resultSingular") : t("resultPlural")}
                        </div>
                    </div>

                    {/* Grid de Productos usando tu ProductCard original */}
                    {paginatedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {paginatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        /* Estado Vacío cuando no coinciden los filtros */
                        <div className="rounded-3xl border border-dashed border-blue-500/15 bg-[#0d1322]/40 p-16 text-center backdrop-blur-sm max-w-xl mx-auto my-12">
                            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950/60 text-blue-400 border border-blue-500/20 mb-4">
                                <PackageOpen className="h-6 w-6" />
                            </div>
                            <h3 className="text-base font-semibold text-white">{t("noResultsTitle")}</h3>
                            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                                {t("noResultsDescription")}
                            </p>
                        </div>
                    )}

                    {/* Componente de Paginación de Estilo Ticket / Dashboard */}
                    {totalPages > 1 && (
                        <div className="mt-14 flex items-center justify-center gap-2">

                            {/* Botón Anterior */}
                            <button
                                onClick={() => handlePageChange(sanitizedPage - 1)}
                                disabled={sanitizedPage === 1}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/10 bg-[#0d1322] text-slate-400 transition-all hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>

                            {/* Números de Páginas Dinámicos */}
                            {Array.from({ length: totalPages }, (_, idx) => {
                                const pageNum = idx + 1;
                                const isSelected = pageNum === sanitizedPage;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`h-10 px-4 text-xs font-bold rounded-xl transition-all border ${isSelected
                                            ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                                            : "border-blue-500/10 bg-[#0d1322] text-slate-400 hover:bg-blue-950/40 hover:text-white"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            {/* Botón Siguiente */}
                            <button
                                onClick={() => handlePageChange(sanitizedPage + 1)}
                                disabled={sanitizedPage === totalPages}
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/10 bg-[#0d1322] text-slate-400 transition-all hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </>
    );
}