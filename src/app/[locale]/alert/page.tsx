"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useAlert } from "@/context/AlertContext";

export default function AlertTest() {
    const { showAlert } = useAlert();

    return (
        <>
            <Header />
            <div className="p-10 mt-32 flex flex-col gap-4 max-w-sm">

                <button
                    onClick={() =>
                        showAlert({
                            type: "success",
                            title: "Pago completado",
                            message: "Tu compra fue procesada correctamente.",
                        })
                    }
                    className="bg-[#03807a] text-white py-3 rounded-full"
                >
                    Success
                </button>

                <button
                    onClick={() =>
                        showAlert({
                            type: "error",
                            title: "Error en el pago",
                            message: "No se pudo procesar la transacción.",
                        })
                    }
                    className="bg-red-500 text-white py-3 rounded-full"
                >
                    Error
                </button>

                <button
                    onClick={() =>
                        showAlert({
                            type: "warning",
                            title: "Atención",
                            message: "Revisa los datos antes de continuar.",
                        })
                    }
                    className="bg-[#e87b1c] text-white py-3 rounded-full"
                >
                    Warning
                </button>

                <button
                    onClick={() =>
                        showAlert({
                            type: "info",
                            title: "Información",
                            message: "Puedes modificar esto más adelante.",
                        })
                    }
                    className="bg-[#08aab9] text-white py-3 rounded-full"
                >
                    Info
                </button>
            </div>
            <Footer />
        </>
    );
}