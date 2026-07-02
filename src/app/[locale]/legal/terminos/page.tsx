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

        <h1>Términos de Venta y Condiciones Comerciales</h1>

        <h2>DATNEX</h2>

        <h2>INFORMACIÓN CORPORATIVA</h2>

        <table className="table-modern">
          <thead>
            <tr>
              <th>Campo</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Razón Social</td>
              <td>CODEWAVE TECHNOLOGIES S.A. DE C.V.</td>
            </tr>
            <tr>
              <td>Nombre Comercial</td>
              <td>DATNEX</td>
            </tr>
            <tr>
              <td>Portal Web</td>
              <td>Datnex.com.mx</td>
            </tr>
            <tr>
              <td>Contacto Principal</td>
              <td>
                {" "}<a href="mailto:asistencia@datnex.com.mx">
                  asistencia@datnex.com.mx
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>Actividad Principal</td>
              <td>Venta de Equipo de Cómputo y Tecnología</td>
            </tr>
          </tbody>
        </table>

        <section>
          <h2>ALCANCE DE LOS TÉRMINOS</h2>

          <p>
            Al realizar cualquier compra en nuestros canales de venta, el cliente acepta íntegramente estos Términos y Condiciones. En caso de no estar de acuerdo, le solicitamos abstenerse de concretar la transacción.
          </p>

          <h3>Aplican a:</h3>

          <ul>
            <li>Todas las compras realizadas a través del sitio web oficial.</li>
            <li>Servicios adicionales contratados directamente con DATNEX.</li>
            <li>Cotizaciones y presupuestos emitidos por la empresa.</li>
          </ul>

          <h3>No aplican a:</h3>

          <ul>
            <li>Servicios prestados por terceros independientes.</li>
            <li>Garantías ofrecidas directamente por fabricantes.</li>
            <li>Licencias de software adquiridas con terceros.</li>
          </ul>
        </section>

        <section>
          <h2>PRODUCTOS Y SERVICIOS</h2>

          <p>
            DATNEX comercializa productos de tecnología bajo las siguientes categorías principales:
          </p>

          <ol>
            <li>
              {" "}<strong>Equipos de cómputo:</strong>{" "}
              computadoras de escritorio, laptops, notebooks, tablets, servidores y workstations.
            </li>

            <li>
              {" "}<strong>Periféricos:</strong>{" "}
              impresoras, multifuncionales, monitores, dispositivos de entrada y sistemas de audio.
            </li>

            <li>
              {" "}<strong>Componentes:</strong>{" "}
              procesadores, tarjetas madre, memoria RAM, almacenamiento, tarjetas gráficas, fuentes de poder y gabinetes.
            </li>

            <li>
              {" "}<strong>Conectividad y redes:</strong>{" "}
              equipos de red, cables, adaptadores y dispositivos de comunicación.
            </li>
          </ol>

          <p>
            Cada producto se describe con sus características técnicas y, en su caso, incluye la garantía ofrecida por el fabricante.
          </p>
        </section>

        <section>
          <h2>PROCESO DE COMPRA Y PAGOS</h2>

          <h3>Etapas del proceso de compra:</h3>

          <ol>
            <li>
              {" "}<strong>Consulta:</strong>{" "}
              el cliente revisa el catálogo en línea.
            </li>

            <li>
              {" "}<strong>Cotización:</strong>{" "}
              se solicita precios y disponibilidad.
            </li>

            <li>
              {" "}<strong>Confirmación:</strong>{" "}
              el cliente acepta los Términos y Condiciones.
            </li>

            <li>
              {" "}<strong>Pago:</strong>{" "}
              se realiza el pago en la tienda.
            </li>

            <li>
              {" "}<strong>Procesamiento:</strong>{" "}
              DATNEX valida la orden y prepara el pedido.
            </li>

            <li>
              {" "}<strong>Entrega:</strong>{" "}
              se coordina el envío o entrega al cliente, el cual debe realizar el pago en tienda del envío predeterminado e informado vía correo.
            </li>
          </ol>

          <h3>Métodos de pago aceptados:</h3>

          <ul>
            <li>Tarjetas de crédito y débito.</li>
          </ul>

          <h3>Condiciones económicas:</h3>

          <ul>
            <li>Todos los precios están expresados en pesos mexicanos (MXN).</li>

            <li>
              Los precios no incluyen IVA conforme a la legislación vigente, este será sumado en el carrito de compra para finalizar el pago.
            </li>

            <li>
              DATNEX se reserva el derecho de modificar precios sin previo aviso, salvo en pedidos ya confirmados.
            </li>
          </ul>
        </section>

        <section>
          <h2>PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>

          <p>
            DATNEX recopila y utiliza los datos personales del cliente para procesar pedidos, emitir facturas, coordinar envíos y brindar soporte postventa.
          </p>

          <h3>Información que tratamos:</h3>

          <ul>
            <li>Datos de contacto y facturación.</li>

            <li>
              Información de pago procesada por terceros seguros.
            </li>

            <li>Historial de compras y navegación.</li>
          </ul>

          <h3>Medidas de seguridad:</h3>

          <ul>
            <li>Acceso restringido a información sensible.</li>

            <li>
              Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </li>

            <li>
              Eliminación o bloqueo de datos una vez cumplida su finalidad.
            </li>
          </ul>

          <p>
            El cliente podrá ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) enviando un correo a
            {" "}<a href="mailto:asistencia@datnex.com.mx">
              asistencia@datnex.com.mx
            </a>{" "}.
          </p>
        </section>

        <section>
          <h2>RESPONSABILIDADES Y LIMITACIONES</h2>

          <h3>Obligaciones de DATNEX:</h3>

          <ul>
            <li>Entregar productos conforme a la descripción publicada.</li>

            <li>
              Cumplir con los términos de garantía y políticas de devolución.
            </li>

            <li>
              Proporcionar información clara y veraz sobre cada producto.
            </li>

            <li>
              Proteger la confidencialidad de los datos del cliente.
            </li>
          </ul>

          <h3>Obligaciones del cliente:</h3>

          <ul>
            <li>
              Proporcionar información veraz y completa para el procesamiento de pedidos.
            </li>

            <li>Efectuar el pago en tiempo y forma.</li>

            <li>
              Recibir los productos en la fecha y lugar convenidos.
            </li>

            <li>
              Utilizar los productos conforme a las especificaciones del fabricante.
            </li>
          </ul>

          <h3>Limitaciones de responsabilidad:</h3>

          <ul>
            <li>
              La responsabilidad de DATNEX se limita al valor del producto adquirido.
            </li>

            <li>
              No se cubrirán daños indirectos, consecuenciales ni lucro cesante.
            </li>

            <li>
              No se asumirá responsabilidad en casos de fuerza mayor (fallas de terceros, desastres naturales, interrupciones de servicios externos).
            </li>
          </ul>
        </section>

        <section>
          <h2>ATENCIÓN AL CLIENTE</h2>

          <h3>Canales oficiales:</h3>

          <ul>
            <li>
              Correo:
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
            </li>

            <li>Sitio web: Datnex.com.mx</li>
          </ul>

          <h3>Servicios de soporte:</h3>

          <ul>
            <li>Información y asesoría sobre productos.</li>
            <li>Seguimiento de pedidos.</li>
            <li>Gestión de garantías y devoluciones.</li>
            <li>Facturación y aclaraciones de pago.</li>
          </ul>
        </section>

        <section>
          <h2>DISPOSICIONES GENERALES</h2>

          <ul>
            <li>
              DATNEX podrá actualizar estos Términos y Condiciones en cualquier momento. Las versiones vigentes estarán disponibles en el sitio web.
            </li>

            <li>
              Los cambios serán aplicables a partir de su publicación; el uso continuo del sitio implica aceptación tácita.
            </li>

            <li>
              Estos Términos se rigen por las leyes mexicanas y cualquier controversia será resuelta por los tribunales competentes de la Ciudad de México.
            </li>

            <li>
              Si alguna disposición se considera inválida, el resto de las cláusulas mantendrá plena vigencia.
            </li>
          </ul>
        </section>

        <p>
          {" "}<strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong>{" "}
          Todos los derechos reservados.
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

        <h1>Terms of Sale and Commercial Conditions</h1>

        <h2>DATNEX</h2>

        <h2>CORPORATE INFORMATION</h2>

        <table className="table-modern">
          <thead>
            <tr>
              <th>Field</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corporate Name</td>
              <td>CODEWAVE TECHNOLOGIES S.A. DE C.V.</td>
            </tr>
            <tr>
              <td>Trade Name</td>
              <td>DATNEX</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>Datnex.com.mx</td>
            </tr>
            <tr>
              <td>Main Contact</td>
              <td>
                {" "}<a href="mailto:asistencia@datnex.com.mx">
                  asistencia@datnex.com.mx
                </a>{" "}
              </td>
            </tr>
            <tr>
              <td>Main Business Activity</td>
              <td>Sale of Computer Equipment and Technology Products</td>
            </tr>
          </tbody>
        </table>

        <section>
          <h2>SCOPE OF THE TERMS</h2>

          <p>
            By making any purchase through our sales channels, the customer fully accepts these Terms and Conditions. If you do not agree with them, please refrain from completing the transaction.
          </p>

          <h3>These terms apply to:</h3>

          <ul>
            <li>All purchases made through the official website.</li>
            <li>Additional services contracted directly with DATNEX.</li>
            <li>Quotes and estimates issued by the company.</li>
          </ul>

          <h3>These terms do not apply to:</h3>

          <ul>
            <li>Services provided by independent third parties.</li>
            <li>Warranties offered directly by manufacturers.</li>
            <li>Software licenses purchased from third parties.</li>
          </ul>
        </section>

        <section>
          <h2>PRODUCTS AND SERVICES</h2>

          <p>
            DATNEX markets technology products under the following main categories:
          </p>

          <ol>
            <li>
              {" "}<strong>Computer Equipment:</strong>{" "}
              desktop computers, laptops, notebooks, tablets, servers, and workstations.
            </li>

            <li>
              {" "}<strong>Peripherals:</strong>{" "}
              printers, multifunction devices, monitors, input devices, and audio systems.
            </li>

            <li>
              {" "}<strong>Components:</strong>{" "}
              processors, motherboards, RAM memory, storage devices, graphics cards, power supplies, and computer cases.
            </li>

            <li>
              {" "}<strong>Connectivity and Networking:</strong>{" "}
              networking equipment, cables, adapters, and communication devices.
            </li>
          </ol>

          <p>
            Each product is described with its technical specifications and, when applicable, includes the warranty provided by the manufacturer.
          </p>
        </section>

        <section>
          <h2>PURCHASE PROCESS AND PAYMENTS</h2>

          <h3>Stages of the purchase process:</h3>

          <ol>
            <li>
              {" "}<strong>Inquiry:</strong>{" "}
              the customer reviews the online catalog.
            </li>

            <li>
              {" "}<strong>Quotation:</strong>{" "}
              prices and availability are requested.
            </li>

            <li>
              {" "}<strong>Confirmation:</strong>{" "}
              the customer accepts the Terms and Conditions.
            </li>

            <li>
              {" "}<strong>Payment:</strong>{" "}
              payment is made in-store.
            </li>

            <li>
              {" "}<strong>Processing:</strong>{" "}
              DATNEX validates the order and prepares the shipment.
            </li>

            <li>
              {" "}<strong>Delivery:</strong>{" "}
              shipment or delivery to the customer is coordinated, and the customer must pay in-store for the default shipping method communicated via email.
            </li>
          </ol>

          <h3>Accepted payment methods:</h3>

          <ul>
            <li>Credit and debit cards.</li>
          </ul>

          <h3>Economic conditions:</h3>

          <ul>
            <li>All prices are expressed in Mexican Pesos (MXN).</li>

            <li>
              Prices do not include VAT according to current legislation; VAT will be added in the shopping cart before completing payment.
            </li>

            <li>
              DATNEX reserves the right to modify prices without prior notice, except for orders already confirmed.
            </li>
          </ul>
        </section>

        <section>
          <h2>PRIVACY AND DATA PROTECTION</h2>

          <p>
            DATNEX collects and uses customers' personal data to process orders, issue invoices, coordinate shipments, and provide after-sales support.
          </p>

          <h3>Information we process:</h3>

          <ul>
            <li>Contact and billing information.</li>

            <li>
              Payment information processed by secure third parties.
            </li>

            <li>Purchase and browsing history.</li>
          </ul>

          <h3>Security measures:</h3>

          <ul>
            <li>Restricted access to sensitive information.</li>

            <li>
              Compliance with the Federal Law on Protection of Personal Data Held by Private Parties.
            </li>

            <li>
              Deletion or blocking of data once its purpose has been fulfilled.
            </li>
          </ul>

          <p>
            Customers may exercise their ARCO rights (Access, Rectification, Cancellation, and Opposition) by sending an email to
            {" "}<a href="mailto:asistencia@datnex.com.mx">
              asistencia@datnex.com.mx
            </a>{" "}.
          </p>
        </section>

        <section>
          <h2>RESPONSIBILITIES AND LIMITATIONS</h2>

          <h3>DATNEX obligations:</h3>

          <ul>
            <li>Deliver products according to the published description.</li>

            <li>
              Comply with warranty terms and return policies.
            </li>

            <li>
              Provide clear and truthful information about each product.
            </li>

            <li>
              Protect the confidentiality of customer data.
            </li>
          </ul>

          <h3>Customer obligations:</h3>

          <ul>
            <li>
              Provide truthful and complete information for order processing.
            </li>

            <li>Make payment in a timely and proper manner.</li>

            <li>
              Receive products at the agreed date and location.
            </li>

            <li>
              Use products according to the manufacturer's specifications.
            </li>
          </ul>

          <h3>Limitations of liability:</h3>

          <ul>
            <li>
              DATNEX liability is limited to the value of the purchased product.
            </li>

            <li>
              Indirect, consequential damages and loss of profits will not be covered.
            </li>

            <li>
              No liability will be assumed in cases of force majeure (third-party failures, natural disasters, interruptions of external services).
            </li>
          </ul>
        </section>

        <section>
          <h2>CUSTOMER SERVICE</h2>

          <h3>Official channels:</h3>

          <ul>
            <li>
              Email:
              {" "}<a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>{" "}
            </li>

            <li>Website: Datnex.com.mx</li>
          </ul>

          <h3>Support services:</h3>

          <ul>
            <li>Product information and guidance.</li>
            <li>Order tracking.</li>
            <li>Warranty and return management.</li>
            <li>Billing and payment clarification.</li>
          </ul>
        </section>

        <section>
          <h2>GENERAL PROVISIONS</h2>

          <ul>
            <li>
              DATNEX may update these Terms and Conditions at any time. Current versions will be available on the website.
            </li>

            <li>
              Changes will apply from the moment of publication; continued use of the website implies tacit acceptance.
            </li>

            <li>
              These Terms are governed by Mexican law, and any dispute will be resolved by the competent courts of Mexico City.
            </li>

            <li>
              If any provision is deemed invalid, the remaining clauses shall remain fully in force and effect.
            </li>
          </ul>
        </section>

        <p>
          {" "}<strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong>{" "}
          All rights reserved.
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
      <main className="flex-grow container mx-auto mt-32 px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
      <Footer />
    </div>
  );
}