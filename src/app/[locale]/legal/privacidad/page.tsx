"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function LegalEs() {
  return (
    <div className="legal-container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .legal-container {
  background-color: #06121f;
  color: #ffffff;
  line-height: 1.7;
  font-family: sans-serif;
  padding: 2rem;
}

.legal-container section {
  margin-bottom: 3rem;
}

.legal-container h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #1e90ff;
  color: #66b3ff;
  text-shadow: 0 0 8px rgba(30, 144, 255, 0.6);
}

.legal-container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #4da6ff;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.5);
}

.legal-container h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  color: #99ccff;
}

.legal-container p {
  margin-bottom: 1.2rem;
  text-align: justify;
  color: #eaeaea;
}

.legal-container ul {
  margin-bottom: 1.2rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.legal-container li {
  margin-bottom: 0.5rem;
  color: #d8d8d8;
}

.legal-container a {
  color: #4da6ff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-container a:hover {
  color: #99ccff;
  text-decoration: underline;
}
    `,
        }}
      />

      <section className="legal-container">

        <h1>Aviso de Privacidad</h1>

        <section>
          <h2>I. ¿Quiénes somos?</h2>

          <ul>
            <li>
              {" "}<strong>Denominación legal:</strong>{" "}
              CODEWAVE TECHNOLOGIES, S.A. DE C.V.
            </li>

            <li>
              {" "}<strong>Marca comercial:</strong>{" "}
              DATNEX
            </li>

            <li>
              {" "}<strong>Giro principal:</strong>{" "}
              Venta de equipos de cómputo, accesorios y tecnología.
            </li>

            <li>
              {" "}<strong>Canal digital:</strong>{" "}
              {" "}<a
                href="https://datnex.com.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datnex.com.mx
              </a>{" "}
            </li>

            <li>
              {" "}<strong>Contacto especializado:</strong>{" "}
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
            </li>
          </ul>

          <p>
            Nos especializamos en computadoras de escritorio y portátiles,
            componentes de cómputo, accesorios tecnológicos y gaming,
            software y servicios de configuración.
          </p>
        </section>

        <section>
          <h2>II. ¿Qué información recopilamos?</h2>

          <ul>
            <li>
              {" "}<strong>Datos de compras:</strong>{" "}
              nombre, dirección de entrega, teléfono,
              correo electrónico, datos fiscales.
            </li>

            <li>
              {" "}<strong>Datos de navegación:</strong>{" "}
              páginas visitadas, carrito de compras,
              dispositivo y navegador utilizado, ubicación aproximada.
            </li>

            <li>
              {" "}<strong>Datos de soporte:</strong>{" "}
              descripción de problemas, modelo y número de serie del producto,
              fecha de compra, historial de consultas previas.
            </li>
          </ul>
        </section>

        <section>
          <h2>III. ¿Para qué usamos su información?</h2>

          <p>
            {" "}<strong>Proceso de compra:</strong>{" "}
            validar pedidos, procesar pagos,
            coordinar envíos y dar seguimiento hasta la entrega.
          </p>

          <p>
            {" "}<strong>Mejora de servicios:</strong>{" "}
            analizar productos más populares,
            optimizar navegación, personalizar ofertas y medir la satisfacción del cliente.
          </p>

          <p>
            {" "}<strong>Comunicaciones obligatorias:</strong>{" "}
            confirmaciones, facturas,
            garantías y avisos de servicio.
          </p>

          <p>
            {" "}<strong>Comunicaciones secundarias (con consentimiento):</strong>{" "}
            promociones, encuestas y prospección comercial.
          </p>
        </section>

        <section>
          <h2>IV. ¿Con quién compartimos sus datos?</h2>

          <ul>
            <li>
              {" "}<strong>Paquetería:</strong>{" "}
              datos de entrega necesarios para envío.
            </li>

            <li>
              {" "}<strong>Procesadores de pago:</strong>{" "}
              datos de transacción para cobros seguros.
            </li>

            <li>
              {" "}<strong>Fabricantes/distribuidores:</strong>{" "}
              información técnica para soporte o garantías.
            </li>

            <li>
              {" "}<strong>Autoridades:</strong>{" "}
              únicamente cuando la ley lo requiera.
            </li>
          </ul>

          <p>
            Nunca compartimos datos con competidores,
            telemarketing, brokers comerciales ni terceros sin su consentimiento expreso.
          </p>
        </section>

        <section>
          <h2>V. ¿Cuáles son sus derechos como cliente?</h2>

          <p>Usted tiene derecho a:</p>

          <ul>
            <li>
              {" "}<strong>Acceso:</strong>{" "}
              conocer qué datos tenemos y cómo los usamos.
            </li>

            <li>
              {" "}<strong>Rectificación:</strong>{" "}
              corregir información inexacta o desactualizada.
            </li>

            <li>
              {" "}<strong>Cancelación:</strong>{" "}
              eliminar datos no necesarios, salvo los exigidos por ley.
            </li>

            <li>
              {" "}<strong>Oposición:</strong>{" "}
              limitar el uso de sus datos para fines comerciales o de análisis.
            </li>
          </ul>

          <h3>Cómo ejercerlos:</h3>

          <p>
            Envíe un correo a
            {" "}<a href="mailto:asistencia@datnex.com.mx">
              asistencia@datnex.com.mx
            </a>{" "}
            con identificación oficial y descripción del derecho que desea ejercer.
            Tiempo de respuesta: máximo 20 días hábiles.
          </p>
        </section>

        <section>
          <h2>VI. ¿Qué pasa con las cookies y la navegación?</h2>

          <ul>
            <li>
              {" "}<strong>Esenciales:</strong>{" "}
              necesarias para carrito y sesión,
              se eliminan al cerrar navegador.
            </li>

            <li>
              {" "}<strong>Rendimiento:</strong>{" "}
              miden velocidad y funcionamiento,
              vigencia hasta 12 meses.
            </li>

            <li>
              {" "}<strong>Personalización:</strong>{" "}
              recuerdan preferencias y productos vistos,
              vigencia hasta 24 meses.
            </li>
          </ul>

          <p>
            El usuario puede aceptar todas,
            rechazar las no esenciales o configurarlas desde su navegador en cualquier momento.
          </p>
        </section>

        <section>
          <h2>VII. ¿Por cuánto tiempo conservamos su información?</h2>

          <ul>
            <li>
              {" "}<strong>Clientes activos:</strong>{" "}
              durante la relación comercial + 12 meses.
            </li>

            <li>
              {" "}<strong>Transacciones fiscales:</strong>{" "}
              5 años (según ley).
            </li>

            <li>
              {" "}<strong>Datos de pago:</strong>{" "}
              eliminados al procesarse la transacción.
            </li>

            <li>
              {" "}<strong>Soporte técnico:</strong>{" "}
              2 años tras la resolución.
            </li>

            <li>
              {" "}<strong>Navegación:</strong>{" "}
              hasta 12 meses.
            </li>

            <li>
              {" "}<strong>Garantías:</strong>{" "}
              durante su vigencia + 6 meses.
            </li>
          </ul>

          <p>
            Los datos se eliminan automáticamente al cumplirse el periodo,
            cuando dejan de ser necesarios o cuando usted lo solicite (si procede).
          </p>
        </section>

        <section>
          <h2>VIII. ¿Qué ocurre con los menores de edad?</h2>

          <ul>
            <li>
              En caso de detectar datos de menores sin autorización,
              serán eliminados de inmediato.
            </li>
          </ul>
        </section>

        <section>
          <h2>IX. ¿Cuándo cambia este aviso?</h2>

          <p>
            Podemos actualizar este aviso en cualquier momento por:
            cambios en la ley, nuevos servicios, mejoras de seguridad
            o requerimientos de autoridad.
          </p>

          <p>
            Usted puede aceptar los cambios,
            oponerse a finalidades específicas o cancelar su cuenta si no está de acuerdo.
          </p>
        </section>

        <section>
          <h2>X. ¿Cómo puede contactarnos?</h2>

          <ul>
            <li>
              {" "}<strong>Correo electrónico:</strong>{" "}
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
              (asunto: “Privacidad”).
            </li>

            <li>
              {" "}<strong>Horario de atención:</strong>{" "}
              lunes a viernes, 9:00 – 18:00 hrs.
            </li>

            <li>
              {" "}<strong>Tiempo de respuesta:</strong>{" "}
              máximo 48 horas.
            </li>
          </ul>

          <p>
            {" "}<strong>Autoridad de control:</strong>{" "}
            Instituto Nacional de Transparencia,
            Acceso a la Información y Protección de Datos Personales (INAI).
            Portal:
            {" "}<a
              href="https://www.inai.org.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.inai.org.mx
            </a>{" "}
            | Teléfono: 55-5004-2400
          </p>

          <p>
            Este aviso cumple con la Ley Federal de Protección de Datos Personales
            en Posesión de Particulares y su Reglamento,
            aplicables en México.
          </p>
        </section>

        <p>
          {" "}<strong>Tienda en línea:</strong>{" "}
          {" "}<a
            href="https://datnex.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datnex.com.mx
          </a>{" "}
        </p>

        <p>
          {" "}<strong>Soporte:</strong>{" "}
          {" "}<a href="mailto:asistencia@datnex.com.mx">
            asistencia@datnex.com.mx
          </a>{" "}
        </p>

      </section>
    </div>
  );
}

function LegalEn() {
  return (
    <div className="legal-container">
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .legal-container {
  background-color: #06121f;
  color: #ffffff;
  line-height: 1.7;
  font-family: sans-serif;
  padding: 2rem;
}

.legal-container section {
  margin-bottom: 3rem;
}

.legal-container h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #1e90ff;
  color: #66b3ff;
  text-shadow: 0 0 8px rgba(30, 144, 255, 0.6);
}

.legal-container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #4da6ff;
  text-shadow: 0 0 6px rgba(77, 166, 255, 0.5);
}

.legal-container h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  color: #99ccff;
}

.legal-container p {
  margin-bottom: 1.2rem;
  text-align: justify;
  color: #eaeaea;
}

.legal-container ul {
  margin-bottom: 1.2rem;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.legal-container li {
  margin-bottom: 0.5rem;
  color: #d8d8d8;
}

.legal-container a {
  color: #4da6ff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-container a:hover {
  color: #99ccff;
  text-decoration: underline;
}
    `,
        }}
      />

      <section className="legal-container">

        <h1>Privacy Notice</h1>

        <section>
          <h2>I. Who are we?</h2>

          <ul>
            <li>
              {" "}<strong>Legal name:</strong>{" "}
              CODEWAVE TECHNOLOGIES, S.A. DE C.V.
            </li>

            <li>
              {" "}<strong>Trade name:</strong>{" "}
              DATNEX
            </li>

            <li>
              {" "}<strong>Main business activity:</strong>{" "}
              Sale of computer equipment, accessories, and technology products.
            </li>

            <li>
              {" "}<strong>Digital channel:</strong>{" "}
              {" "}<a
                href="https://datnex.com.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datnex.com.mx
              </a>{" "}
            </li>

            <li>
              {" "}<strong>Specialized contact:</strong>{" "}
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
            </li>
          </ul>

          <p>
            We specialize in desktop and laptop computers,
            computer components, gaming and technology accessories,
            software, and configuration services.
          </p>
        </section>

        <section>
          <h2>II. What information do we collect?</h2>

          <ul>
            <li>
              {" "}<strong>Purchase data:</strong>{" "}
              name, delivery address, phone number,
              email address, and tax information.
            </li>

            <li>
              {" "}<strong>Browsing data:</strong>{" "}
              visited pages, shopping cart,
              device and browser used, and approximate location.
            </li>

            <li>
              {" "}<strong>Support data:</strong>{" "}
              problem descriptions, product model and serial number,
              purchase date, and previous inquiry history.
            </li>
          </ul>
        </section>

        <section>
          <h2>III. What do we use your information for?</h2>

          <p>
            {" "}<strong>Purchase process:</strong>{" "}
            validate orders, process payments,
            coordinate shipments, and provide follow-up until delivery.
          </p>

          <p>
            {" "}<strong>Service improvement:</strong>{" "}
            analyze the most popular products,
            optimize navigation, personalize offers, and measure customer satisfaction.
          </p>

          <p>
            {" "}<strong>Mandatory communications:</strong>{" "}
            confirmations, invoices,
            warranties, and service notices.
          </p>

          <p>
            {" "}<strong>Secondary communications (with consent):</strong>{" "}
            promotions, surveys, and commercial prospecting.
          </p>
        </section>

        <section>
          <h2>IV. With whom do we share your data?</h2>

          <ul>
            <li>
              {" "}<strong>Shipping providers:</strong>{" "}
              delivery information necessary for shipping.
            </li>

            <li>
              {" "}<strong>Payment processors:</strong>{" "}
              transaction data for secure payments.
            </li>

            <li>
              {" "}<strong>Manufacturers/distributors:</strong>{" "}
              technical information for support or warranties.
            </li>

            <li>
              {" "}<strong>Authorities:</strong>{" "}
              only when required by law.
            </li>
          </ul>

          <p>
            We never share data with competitors,
            telemarketing companies, commercial brokers,
            or third parties without your express consent.
          </p>
        </section>

        <section>
          <h2>V. What are your rights as a customer?</h2>

          <p>You have the right to:</p>

          <ul>
            <li>
              {" "}<strong>Access:</strong>{" "}
              know what data we have and how we use it.
            </li>

            <li>
              {" "}<strong>Rectification:</strong>{" "}
              correct inaccurate or outdated information.
            </li>

            <li>
              {" "}<strong>Cancellation:</strong>{" "}
              delete unnecessary data, except those required by law.
            </li>

            <li>
              {" "}<strong>Opposition:</strong>{" "}
              limit the use of your data for commercial or analytical purposes.
            </li>
          </ul>

          <h3>How to exercise your rights:</h3>

          <p>
            Send an email to
            {" "}<a href="mailto:asistencia@datnex.com.mx">
              asistencia@datnex.com.mx
            </a>{" "}
            with official identification and a description of the right you wish to exercise.
            Response time: maximum of 20 business days.
          </p>
        </section>

        <section>
          <h2>VI. What happens with cookies and browsing?</h2>

          <ul>
            <li>
              {" "}<strong>Essential cookies:</strong>{" "}
              necessary for the shopping cart and session,
              deleted when the browser is closed.
            </li>

            <li>
              {" "}<strong>Performance cookies:</strong>{" "}
              measure speed and functionality,
              valid for up to 12 months.
            </li>

            <li>
              {" "}<strong>Personalization cookies:</strong>{" "}
              remember preferences and viewed products,
              valid for up to 24 months.
            </li>
          </ul>

          <p>
            Users may accept all cookies,
            reject non-essential cookies,
            or configure them through their browser at any time.
          </p>
        </section>

        <section>
          <h2>VII. How long do we retain your information?</h2>

          <ul>
            <li>
              {" "}<strong>Active customers:</strong>{" "}
              during the commercial relationship + 12 months.
            </li>

            <li>
              {" "}<strong>Tax transactions:</strong>{" "}
              5 years (according to law).
            </li>

            <li>
              {" "}<strong>Payment data:</strong>{" "}
              deleted once the transaction is processed.
            </li>

            <li>
              {" "}<strong>Technical support:</strong>{" "}
              2 years after resolution.
            </li>

            <li>
              {" "}<strong>Browsing data:</strong>{" "}
              up to 12 months.
            </li>

            <li>
              {" "}<strong>Warranties:</strong>{" "}
              during their validity period + 6 months.
            </li>
          </ul>

          <p>
            Data is automatically deleted once the retention period expires,
            when it is no longer necessary,
            or when you request its deletion (when applicable).
          </p>
        </section>

        <section>
          <h2>VIII. What happens with minors?</h2>

          <ul>
            <li>
              If data from minors is detected without authorization,
              it will be deleted immediately.
            </li>
          </ul>
        </section>

        <section>
          <h2>IX. When does this notice change?</h2>

          <p>
            We may update this notice at any time due to:
            changes in the law, new services,
            security improvements, or authority requirements.
          </p>

          <p>
            You may accept the changes,
            object to specific purposes,
            or cancel your account if you do not agree.
          </p>
        </section>

        <section>
          <h2>X. How can you contact us?</h2>

          <ul>
            <li>
              {" "}<strong>Email:</strong>{" "}
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
              (subject: “Privacy”).
            </li>

            <li>
              {" "}<strong>Business hours:</strong>{" "}
              Monday to Friday, 9:00 AM – 6:00 PM.
            </li>

            <li>
              {" "}<strong>Response time:</strong>{" "}
              maximum 48 hours.
            </li>
          </ul>

          <p>
            {" "}<strong>Supervisory authority:</strong>{" "}
            National Institute for Transparency,
            Access to Information and Protection of Personal Data (INAI).
            Website:
            {" "}<a
              href="https://www.inai.org.mx"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.inai.org.mx
            </a>{" "}
            | Phone: 55-5004-2400
          </p>

          <p>
            This notice complies with the Federal Law on Protection of Personal Data
            Held by Private Parties and its Regulations,
            applicable in Mexico.
          </p>
        </section>

        <p>
          {" "}<strong>Online store:</strong>{" "}
          {" "}<a
            href="https://datnex.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datnex.com.mx
          </a>{" "}
        </p>

        <p>
          {" "}<strong>Support:</strong>{" "}
          {" "}<a href="mailto:asistencia@datnex.com.mx">
            asistencia@datnex.com.mx
          </a>{" "}
        </p>

      </section>
    </div>
  );
}

export default function LegalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow mt-32 container mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
      <Footer />
    </div>
  );
}