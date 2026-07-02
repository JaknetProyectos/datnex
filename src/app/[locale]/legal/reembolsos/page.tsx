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

        <h1>Política de Devoluciones y Garantías</h1>

        <p>
          <strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong><br />
          Tienda Online:
          <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
            datnex.com.mx
          </a>
          <br />
          Asistencia al Cliente:
          <a href="mailto:asistencia@datnex.com.mx">
            asistencia@datnex.com.mx
          </a>
        </p>

        <section>
          <h2>INTRODUCCIÓN</h2>

          <p>
            En CODEWAVE TECHNOLOGIES nos especializamos en la comercialización de equipos de cómputo y tecnología. Esta política establece los términos y condiciones para devoluciones, cambios y garantías de productos adquiridos a través de nuestros canales de venta. Nuestro objetivo es garantizar una experiencia de compra satisfactoria y transparente para todos nuestros clientes.
          </p>
        </section>

        <section>
          <h2>ALCANCE</h2>

          <p>
            Esta política aplica a productos adquiridos en
            <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
              datnex.com.mx
            </a>,
            incluyendo:
          </p>

          <ol>
            <li>
              <strong>Productos nuevos:</strong>
              equipos de cómputo, componentes y accesorios en su empaque original sellado.
            </li>

            <li>
              <strong>Productos reacondicionados:</strong>
              restaurados y certificados por nuestro equipo técnico.
            </li>

            <li>
              <strong>Accesorios y periféricos:</strong>
              dispositivos complementarios como teclados, monitores, impresoras o equipos de red.
            </li>

            <li>
              <strong>Software en formato físico:</strong>
              con sellos de seguridad intactos.
            </li>
          </ol>
        </section>

        <section>
          <h2>CONDICIONES GENERALES</h2>

          <ul>
            <li>
              El cliente podrá solicitar devoluciones siempre que el producto se encuentre en las mismas condiciones en que fue entregado, incluyendo empaques, manuales y accesorios originales.
            </li>

            <li>
              Para tramitar cualquier solicitud, será indispensable presentar comprobante de compra y, en su caso, número de serie del producto.
            </li>

            <li>
              No se aceptarán devoluciones de productos dañados por mal uso, modificaciones no autorizadas o desgaste natural.
            </li>
          </ul>
        </section>

        <section>
          <h2>TIPOS DE DEVOLUCIÓN</h2>

          <ol>
            <li>
              <strong>Por insatisfacción:</strong>
              el cliente puede devolver el producto si no cumple sus expectativas, siempre que no presente uso y conserve su empaque original.
            </li>

            <li>
              <strong>Por defecto de fábrica:</strong>
              en caso de fallas atribuibles al fabricante detectadas dentro del periodo de garantía.
            </li>

            <li>
              <strong>Por error en el pedido:</strong>
              cuando el producto entregado no corresponda al solicitado.
            </li>

            <li>
              <strong>Por daños en transporte:</strong>
              aplicable a productos dañados durante el envío, reportados al momento de la recepción.
            </li>
          </ol>
        </section>

        <section>
          <h2>RESTRICCIONES ESPECIALES</h2>

          <ul>
            <li>
              <strong>Equipos personalizados:</strong>
              configurados a medida del cliente, sujetos a condiciones específicas informadas en la cotización.
            </li>

            <li>
              <strong>Licencias de software y productos digitales:</strong>
              no aplican devoluciones una vez activadas o descargadas, salvo defectos comprobables.
            </li>

            <li>
              <strong>Componentes especializados o de alto valor:</strong>
              pueden requerir autorización previa del fabricante.
            </li>

            <li>
              <strong>Productos descontinuados:</strong>
              sujetos a políticas especiales según disponibilidad de reemplazo.
            </li>
          </ul>
        </section>

        <section>
          <h2>OPCIONES DE COMPENSACIÓN</h2>

          <p>
            Dependiendo del caso, el cliente podrá acceder a:
          </p>

          <ul>
            <li>
              Reembolso monetario, a través del mismo método de pago utilizado en la compra. Los tiempos de acreditación dependerán de la institución bancaria y pueden variar entre uno y varios ciclos de facturación.
            </li>

            <li>
              Crédito en tienda, con vigencia de hasta 12 meses, aplicable a futuras compras.
            </li>

            <li>
              Cambio por producto equivalente, con ajustes de precio cuando sea necesario.
            </li>

            <li>
              Reparación o servicio técnico, aplicable a productos dentro de garantía vigente.
            </li>
          </ul>
        </section>

        <section>
          <h2>COSTOS ASOCIADOS</h2>

          <ul>
            <li>
              En devoluciones por satisfacción del cliente, los gastos de envío correrán por cuenta del mismo.
            </li>

            <li>
              En casos de defecto de fábrica, error en el pedido o daños en transporte, CODEWAVE asumirá los gastos de envío.
            </li>

            <li>
              Los productos con signos de uso o deterioro podrán estar sujetos a deducciones por depreciación.
            </li>
          </ul>
        </section>

        <section>
          <h2>GARANTÍAS</h2>

          <ul>
            <li>
              Todos los productos nuevos incluyen la garantía del fabricante conforme a sus términos originales.
            </li>

            <li>
              CODEWAVE actúa como intermediario en la gestión de garantías, brindando asistencia y seguimiento al cliente.
            </li>

            <li>
              Para ciertos productos, podrá ofrecerse garantía extendida con condiciones específicas informadas en la compra.
            </li>
          </ul>
        </section>

        <section>
          <h2>EXCEPCIONES Y LIMITACIONES</h2>

          <p>
            No aplican devoluciones en los siguientes casos:
          </p>

          <ul>
            <li>Daños ocasionados por mal uso o accidentes.</li>

            <li>
              Modificaciones no autorizadas en hardware o software.
            </li>

            <li>
              Condiciones ambientales inadecuadas.
            </li>

            <li>
              Desgaste normal derivado del uso.
            </li>
          </ul>

          <p>
            Asimismo, algunos productos importados, de edición limitada o con características especiales pueden tener condiciones particulares comunicadas previamente al cliente.
          </p>
        </section>

        <section>
          <h2>DERECHOS DEL CONSUMIDOR</h2>

          <p>
            Esta política se emite en apego a la Ley Federal de Protección al Consumidor y demás normativas aplicables. En caso de controversias no resueltas directamente con la empresa, el cliente podrá acudir a instancias de conciliación o a la PROFECO.
          </p>
        </section>

        <section>
          <h2>CONTACTO</h2>

          <p>
            Para consultas o solicitudes relacionadas con esta política:
          </p>

          <ul>
            <li>
              Correo electrónico:
              <a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>
            </li>

            <li>
              Sitio web:
              <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
                datnex.com.mx
              </a>
            </li>
          </ul>
        </section>

        <p>
          <strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong>
        </p>

        <p>
          <strong>Fecha de última actualización:</strong>
          Septiembre 2025
        </p>

        <p>
          Esta política ha sido elaborada con el compromiso de brindar claridad y transparencia en nuestras relaciones comerciales, siempre priorizando la satisfacción y confianza de nuestros clientes.
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

        <h1>Returns and Warranty Policy</h1>

        <p>
          <strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong><br />
          Online Store:
          <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
            datnex.com.mx
          </a>
          <br />
          Customer Support:
          <a href="mailto:asistencia@datnex.com.mx">
            asistencia@datnex.com.mx
          </a>
        </p>

        <section>
          <h2>INTRODUCTION</h2>

          <p>
            At CODEWAVE TECHNOLOGIES, we specialize in the commercialization of computer equipment and technology products. This policy establishes the terms and conditions for returns, exchanges, and warranties of products purchased through our sales channels. Our objective is to guarantee a satisfactory and transparent shopping experience for all our customers.
          </p>
        </section>

        <section>
          <h2>SCOPE</h2>

          <p>
            This policy applies to products purchased at
            <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
              datnex.com.mx
            </a>,
            including:
          </p>

          <ol>
            <li>
              <strong>New products:</strong>
              computer equipment, components, and accessories in their original sealed packaging.
            </li>

            <li>
              <strong>Refurbished products:</strong>
              restored and certified by our technical team.
            </li>

            <li>
              <strong>Accessories and peripherals:</strong>
              complementary devices such as keyboards, monitors, printers, or networking equipment.
            </li>

            <li>
              <strong>Software in physical format:</strong>
              with intact security seals.
            </li>
          </ol>
        </section>

        <section>
          <h2>GENERAL CONDITIONS</h2>

          <ul>
            <li>
              Customers may request returns as long as the product is in the same condition in which it was delivered, including packaging, manuals, and original accessories.
            </li>

            <li>
              To process any request, proof of purchase and, where applicable, the product serial number must be provided.
            </li>

            <li>
              Returns will not be accepted for products damaged by misuse, unauthorized modifications, or normal wear and tear.
            </li>
          </ul>
        </section>

        <section>
          <h2>TYPES OF RETURNS</h2>

          <ol>
            <li>
              <strong>Due to dissatisfaction:</strong>
              the customer may return the product if it does not meet expectations, provided it has not been used and retains its original packaging.
            </li>

            <li>
              <strong>Factory defect:</strong>
              in the event of manufacturer-attributable failures detected within the warranty period.
            </li>

            <li>
              <strong>Order error:</strong>
              when the delivered product does not match the one requested.
            </li>

            <li>
              <strong>Shipping damage:</strong>
              applicable to products damaged during shipping and reported upon receipt.
            </li>
          </ol>
        </section>

        <section>
          <h2>SPECIAL RESTRICTIONS</h2>

          <ul>
            <li>
              <strong>Customized equipment:</strong>
              configured according to the customer’s specifications, subject to specific conditions informed in the quotation.
            </li>

            <li>
              <strong>Software licenses and digital products:</strong>
              returns do not apply once activated or downloaded, except for verifiable defects.
            </li>

            <li>
              <strong>Specialized or high-value components:</strong>
              may require prior manufacturer authorization.
            </li>

            <li>
              <strong>Discontinued products:</strong>
              subject to special policies depending on replacement availability.
            </li>
          </ul>
        </section>

        <section>
          <h2>COMPENSATION OPTIONS</h2>

          <p>
            Depending on the case, the customer may access:
          </p>

          <ul>
            <li>
              Monetary refund through the same payment method used for the purchase. Processing times will depend on the banking institution and may vary between one and several billing cycles.
            </li>

            <li>
              Store credit valid for up to 12 months, applicable to future purchases.
            </li>

            <li>
              Exchange for an equivalent product, with price adjustments when necessary.
            </li>

            <li>
              Repair or technical service applicable to products within the valid warranty period.
            </li>
          </ul>
        </section>

        <section>
          <h2>ASSOCIATED COSTS</h2>

          <ul>
            <li>
              In returns due to customer satisfaction, shipping costs will be the responsibility of the customer.
            </li>

            <li>
              In cases of factory defects, order errors, or shipping damage, CODEWAVE will assume shipping costs.
            </li>

            <li>
              Products showing signs of use or deterioration may be subject to depreciation deductions.
            </li>
          </ul>
        </section>

        <section>
          <h2>WARRANTIES</h2>

          <ul>
            <li>
              All new products include the manufacturer’s warranty according to its original terms.
            </li>

            <li>
              CODEWAVE acts as an intermediary in warranty management, providing assistance and follow-up to the customer.
            </li>

            <li>
              For certain products, an extended warranty may be offered with specific conditions informed at the time of purchase.
            </li>
          </ul>
        </section>

        <section>
          <h2>EXCEPTIONS AND LIMITATIONS</h2>

          <p>
            Returns do not apply in the following cases:
          </p>

          <ul>
            <li>Damage caused by misuse or accidents.</li>

            <li>
              Unauthorized hardware or software modifications.
            </li>

            <li>
              Inadequate environmental conditions.
            </li>

            <li>
              Normal wear and tear resulting from use.
            </li>
          </ul>

          <p>
            Likewise, some imported products, limited-edition items, or products with special characteristics may have specific conditions previously communicated to the customer.
          </p>
        </section>

        <section>
          <h2>CONSUMER RIGHTS</h2>

          <p>
            This policy is issued in compliance with the Federal Consumer Protection Law and other applicable regulations. In the event of disputes not resolved directly with the company, the customer may seek conciliation mechanisms or contact PROFECO.
          </p>
        </section>

        <section>
          <h2>CONTACT</h2>

          <p>
            For inquiries or requests related to this policy:
          </p>

          <ul>
            <li>
              Email:
              <a href="mailto:asistencia@datnex.com.mx">
                asistencia@datnex.com.mx
              </a>
            </li>

            <li>
              Website:
              <a href="https://datnex.com.mx" target="_blank" rel="noopener noreferrer">
                datnex.com.mx
              </a>
            </li>
          </ul>
        </section>

        <p>
          <strong>CODEWAVE TECHNOLOGIES S.A. DE C.V.</strong>
        </p>

        <p>
          <strong>Last updated:</strong>
          September 2025
        </p>

        <p>
          This policy has been prepared with the commitment to provide clarity and transparency in our commercial relationships, always prioritizing the satisfaction and trust of our customers.
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
      <main className="flex-grow container mt-32 mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
      <Footer />
    </div>
  );
}