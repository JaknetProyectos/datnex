import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "contacto@novacode.mx";
const BRAND_NAME = "datnex.com.mx";
const BRAND_URL = "https://datnex.com.mx";
const BRAND_LOGO = "https://nexorithm.com.mx/title-dark.png";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessage(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function shell(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>${BRAND_NAME}</title>
      </head>
      <body
        style="
          margin:0;
          padding:0;
          background:
            radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 22%),
            radial-gradient(circle at top right, rgba(14,165,233,0.12), transparent 26%),
            #05070c;
          font-family: Arial, Helvetica, sans-serif;
          color:#ffffff;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="background:#05070c; padding:30px 14px;"
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  max-width:680px;
                  width:100%;
                  border-collapse:separate;
                  border-spacing:0;
                "
              >
                ${content}
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function topBanner(pretitle: string, title: string, subtitle: string) {
  return `
    <tr>
      <td
        style="
          padding:0;
          background:
            linear-gradient(135deg, rgba(2,6,23,1) 0%, rgba(3,7,18,1) 50%, rgba(12,74,110,0.98) 100%);
          border:1px solid rgba(56,189,248,0.28);
          border-bottom:none;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="padding:34px 34px 28px 34px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td valign="top">
                    <div
                      style="
                        display:inline-block;
                        margin-bottom:14px;
                        padding:8px 14px;
                        background:rgba(56,189,248,0.12);
                        border:1px solid rgba(56,189,248,0.35);
                        color:#7dd3fc;
                        font-size:11px;
                        font-weight:700;
                        letter-spacing:0.16em;
                        text-transform:uppercase;
                      "
                    >
                      ${escapeHtml(pretitle)}
                    </div>

                    <h1
                      style="
                        margin:0;
                        font-size:34px;
                        line-height:1.03;
                        letter-spacing:-0.04em;
                        color:#ffffff;
                        font-weight:900;
                      "
                    >
                      ${escapeHtml(title)}
                    </h1>

                    <p
                      style="
                        margin:14px 0 0 0;
                        max-width:520px;
                        font-size:15px;
                        line-height:1.8;
                        color:rgba(255,255,255,0.76);
                      "
                    >
                      ${escapeHtml(subtitle)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 34px 34px 34px;">
              <div
                style="
                  height:1px;
                  background:linear-gradient(90deg, transparent, rgba(125,211,252,0.9), rgba(59,130,246,0.8), transparent);
                "
              ></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function cardStart() {
  return `
    <tr>
      <td
        style="
          padding:0;
          background:#070b14;
          border-left:1px solid rgba(56,189,248,0.18);
          border-right:1px solid rgba(56,189,248,0.18);
        "
      >
  `;
}

function cardEnd() {
  return `
      </td>
    </tr>
  `;
}

function footerBlock() {
  return `
    <tr>
      <td
        style="
          padding:0;
          background:linear-gradient(180deg, rgba(7,11,20,1) 0%, rgba(3,6,12,1) 100%);
          border:1px solid rgba(56,189,248,0.18);
          border-top:none;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="padding:26px 34px 28px 34px;">
              <div
                style="
                  height:1px;
                  background:linear-gradient(90deg, transparent, rgba(56,189,248,0.7), rgba(37,99,235,0.7), transparent);
                  margin-bottom:18px;
                "
              ></div>

              <p
                style="
                  margin:0;
                  font-size:12px;
                  line-height:1.8;
                  color:rgba(255,255,255,0.62);
                  text-align:center;
                "
              >
                ${BRAND_NAME} · venta de equipo de cómputo y soluciones tecnológicas.
              </p>

              <p
                style="
                  margin:8px 0 0 0;
                  font-size:11px;
                  line-height:1.7;
                  color:rgba(255,255,255,0.42);
                  text-align:center;
                "
              >
                © 2026 · ${BRAND_NAME}
              </p>

              <div style="margin-top:20px; text-align:center;">
                <a href="${BRAND_URL}" style="text-decoration:none;">
                  <img
                    src="${BRAND_LOGO}"
                    alt="${BRAND_NAME}"
                    style="display:block; margin:0 auto; max-width:180px; width:180px; height:auto; border:0;"
                  />
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function metaGrid(items: { label: string; value: string; href?: string }[]) {
  const cells = items
    .map(
      (item) => `
      <td valign="top" style="padding:0 8px 0 0;">
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
            border:1px solid rgba(56,189,248,0.18);
            overflow:hidden;
          "
        >
          <tr>
            <td style="padding:18px 18px 16px 18px;">
              <p
                style="
                  margin:0 0 8px 0;
                  font-size:11px;
                  line-height:1;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                  font-weight:700;
                  color:rgba(125,211,252,0.95);
                "
              >
                ${escapeHtml(item.label)}
              </p>
              ${
                item.href
                  ? `<a href="${escapeHtml(item.href)}" style="font-size:15px; line-height:1.6; color:#ffffff; text-decoration:none; font-weight:700;">${escapeHtml(item.value)}</a>`
                  : `<p style="margin:0; font-size:15px; line-height:1.6; color:#ffffff; font-weight:700;">${escapeHtml(item.value)}</p>`
              }
            </td>
          </tr>
        </table>
      </td>
    `
    )
    .join("");

  return `
    <table
      role="presentation"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="margin-top:22px; table-layout:fixed;"
    >
      <tr>
        ${cells}
      </tr>
    </table>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos (nombre, email, mensaje)" },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(String(nombre).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeMessage = formatMessage(String(mensaje).trim());

    const htmlNegocio = shell(`
      ${topBanner(
        "Nuevo contacto",
        "Nuevo mensaje desde datnex.com.mx",
        "Se recibió una solicitud desde el formulario de contacto del sitio. Revisa los datos abajo para dar seguimiento rápido."
      )}

      ${cardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:30px 34px 8px 34px;"
        >
          <tr>
            <td>
              <div
                style="
                  display:inline-block;
                  margin-bottom:18px;
                  padding:7px 13px;
                  background:rgba(56,189,248,0.12);
                  border:1px solid rgba(56,189,248,0.25);
                  color:#7dd3fc;
                  font-size:11px;
                  font-weight:700;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                "
              >
                Lead entrante
              </div>

              <h2
                style="
                  margin:0 0 12px 0;
                  font-size:26px;
                  line-height:1.15;
                  letter-spacing:-0.03em;
                  color:#ffffff;
                "
              >
                ${safeNombre}
              </h2>

              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.8;
                  color:rgba(255,255,255,0.72);
                "
              >
                El usuario envió un mensaje desde el formulario de contacto de la tienda. Revisa los datos y responde lo antes posible.
              </p>

              ${metaGrid([
                { label: "Nombre", value: String(nombre).trim() },
                {
                  label: "Correo",
                  value: String(email).trim(),
                  href: `mailto:${String(email).trim()}`,
                },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:22px;">
              <div
                style="
                  padding:22px;
                  background:
                    linear-gradient(180deg, rgba(14,165,233,0.10), rgba(37,99,235,0.05));
                  border:1px solid rgba(56,189,248,0.20);
                "
              >
                <p
                  style="
                    margin:0 0 12px 0;
                    font-size:11px;
                    line-height:1;
                    letter-spacing:0.16em;
                    text-transform:uppercase;
                    font-weight:700;
                    color:#7dd3fc;
                  "
                >
                  Mensaje
                </p>

                <p
                  style="
                    margin:0;
                    font-size:15px;
                    line-height:1.9;
                    color:rgba(255,255,255,0.86);
                    white-space:normal;
                  "
                >
                  ${safeMessage}
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 0 30px 0;">
              <div
                style="
                  padding:16px 18px;
                  background:rgba(255,255,255,0.03);
                  border:1px solid rgba(56,189,248,0.14);
                  color:rgba(255,255,255,0.58);
                  font-size:12px;
                  line-height:1.75;
                "
              >
                Responder desde <strong style="color:#ffffff;">${escapeHtml(SUPPORT_EMAIL)}</strong> y cerrar el seguimiento con el cliente.
              </div>
            </td>
          </tr>
        </table>
      ${cardEnd()}

      ${footerBlock()}
    `);

    const htmlUsuario = shell(`
      ${topBanner(
        "Mensaje recibido",
        "Gracias, recibimos tu mensaje",
        "Tu solicitud ya entró al sistema. El equipo de datnex.com.mx la revisará y te responderá por correo."
      )}

      ${cardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:34px;"
        >
          <tr>
            <td align="center">
              <h2
                style="
                  margin:0;
                  font-size:30px;
                  line-height:1.08;
                  letter-spacing:-0.04em;
                  color:#ffffff;
                "
              >
                Hola, ${safeNombre}
              </h2>

              <p
                style="
                  margin:14px auto 0 auto;
                  max-width:520px;
                  font-size:15px;
                  line-height:1.85;
                  color:rgba(255,255,255,0.76);
                "
              >
                Recibimos tu mensaje correctamente. En breve revisaremos tu solicitud y te responderemos al correo que compartiste.
              </p>

              ${metaGrid([
                {
                  label: "Correo registrado",
                  value: String(email).trim(),
                  href: `mailto:${String(email).trim()}`,
                },
                { label: "Sitio", value: BRAND_NAME, href: BRAND_URL },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:22px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td>
                    <table
                      role="presentation"
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="
                        background:
                          linear-gradient(180deg, rgba(14,165,233,0.12), rgba(37,99,235,0.06));
                        border:1px solid rgba(56,189,248,0.18);
                      "
                    >
                      <tr>
                        <td style="padding:22px;">
                          <p
                            style="
                              margin:0 0 10px 0;
                              font-size:11px;
                              line-height:1;
                              letter-spacing:0.16em;
                              text-transform:uppercase;
                              font-weight:700;
                              color:#7dd3fc;
                            "
                          >
                            Tu mensaje
                          </p>
                          <p
                            style="
                              margin:0;
                              font-size:14px;
                              line-height:1.9;
                              color:rgba(255,255,255,0.88);
                              white-space:normal;
                            "
                          >
                            ${safeMessage}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:28px 0 8px 0;">
              <a
                href="${BRAND_URL}"
                style="
                  display:inline-block;
                  padding:14px 22px;
                  background:linear-gradient(135deg, #38bdf8 0%, #2563eb 100%);
                  color:#ffffff;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:800;
                  letter-spacing:0.01em;
                  border:1px solid rgba(125,211,252,0.26);
                "
              >
                Volver a ${BRAND_NAME}
              </a>
            </td>
          </tr>
        </table>
      ${cardEnd()}

      ${footerBlock()}
    `);

    await Promise.all([
      resend.emails.send({
        from: `Datnex <${SUPPORT_EMAIL}>`,
        to: [SUPPORT_EMAIL],
        replyTo: String(email).trim(),
        subject: `Nuevo mensaje web: ${String(nombre).trim()}`,
        html: htmlNegocio,
      }),

      resend.emails.send({
        from: `Datnex <${SUPPORT_EMAIL}>`,
        to: [String(email).trim()],
        subject: "Hemos recibido tu mensaje - Datnex",
        html: htmlUsuario,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      {
        error: error?.message || "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}