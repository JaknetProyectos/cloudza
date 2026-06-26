import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BRAND_NAME = "Cloudza";
const CONTACT_EMAIL = "inicio@cloudza.com.mx";
const LOGO_URL = "https://cloudza.com.mx/logo.png";

function customerTemplate({
  nombre,
  asunto,
}: {
  nombre: string;
  asunto: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>${BRAND_NAME}</title>
  </head>
  <body style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial, Helvetica, sans-serif;
    color:#1e293b;
  ">
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 20px;">
          
          <table width="620" cellpadding="0" cellspacing="0" style="
            background:#ffffff;
            border:1px solid #dbe4f0;
          ">
            
            <!-- HEADER -->
            <tr>
              <td style="
                padding:30px;
                background:linear-gradient(90deg,#2563eb 0%, #f97316 100%);
                color:#ffffff;
              ">
                <h1 style="
                  margin:0;
                  font-size:30px;
                  font-weight:bold;
                  letter-spacing:1px;
                ">
                  ${BRAND_NAME}
                </h1>

                <p style="
                  margin-top:10px;
                  font-size:14px;
                  opacity:.95;
                ">
                  Hosting web profesional y soluciones cloud
                </p>
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="padding:40px 30px;">
                
                <h2 style="
                  margin-top:0;
                  color:#0f172a;
                  font-size:24px;
                ">
                  Hola ${nombre},
                </h2>

                <p style="
                  font-size:16px;
                  line-height:1.7;
                  color:#334155;
                ">
                  Hemos recibido correctamente tu mensaje relacionado con:
                </p>

                <div style="
                  margin:25px 0;
                  padding:18px;
                  border-left:5px solid #f97316;
                  background:#f8fafc;
                ">
                  <strong style="
                    color:#0f172a;
                    font-size:18px;
                  ">
                    ${asunto}
                  </strong>
                </div>

                <p style="
                  font-size:16px;
                  line-height:1.7;
                  color:#334155;
                ">
                  Nuestro equipo revisará tu solicitud y te responderá lo antes posible.
                </p>

                <p style="
                  margin-top:30px;
                  font-size:16px;
                  line-height:1.7;
                  color:#334155;
                ">
                  Gracias por confiar en ${BRAND_NAME}.
                </p>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="
                padding:30px;
                background:#eff6ff;
                border-top:1px solid #dbe4f0;
                text-align:center;
              ">

                <p style="
                  margin:0 0 15px 0;
                  font-size:13px;
                  color:#64748b;
                ">
                  © ${new Date().getFullYear()} ${BRAND_NAME}. Todos los derechos reservados.
                </p>

                <img
                  src="${LOGO_URL}"
                  alt="${BRAND_NAME}"
                  width="170"
                  style="display:block;margin:0 auto;"
                />

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}

function businessTemplate({
  nombre,
  email,
  asunto,
  mensaje,
}: {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}) {
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Nuevo Lead</title>
  </head>

  <body style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial, Helvetica, sans-serif;
    color:#1e293b;
  ">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 20px;">

          <table width="640" cellpadding="0" cellspacing="0" style="
            background:#ffffff;
            border:1px solid #dbe4f0;
          ">

            <!-- HEADER -->
            <tr>
              <td style="
                padding:28px 30px;
                background:linear-gradient(90deg,#0f172a 0%, #2563eb 60%, #f97316 100%);
                color:#ffffff;
              ">
                <h1 style="
                  margin:0;
                  font-size:28px;
                ">
                  Nuevo Lead
                </h1>

                <p style="
                  margin-top:10px;
                  font-size:14px;
                  opacity:.9;
                ">
                  Formulario de contacto • ${BRAND_NAME}
                </p>
              </td>
            </tr>

            <!-- BODY -->
            <tr>
              <td style="padding:35px 30px;">

                <table width="100%" cellpadding="0" cellspacing="0">

                  <tr>
                    <td style="
                      padding:14px 0;
                      border-bottom:1px solid #e2e8f0;
                    ">
                      <strong style="color:#2563eb;">Nombre:</strong>
                      <p style="margin:8px 0 0 0;">
                        ${nombre}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding:14px 0;
                      border-bottom:1px solid #e2e8f0;
                    ">
                      <strong style="color:#2563eb;">Email:</strong>
                      <p style="margin:8px 0 0 0;">
                        ${email}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding:14px 0;
                      border-bottom:1px solid #e2e8f0;
                    ">
                      <strong style="color:#2563eb;">Asunto:</strong>
                      <p style="margin:8px 0 0 0;">
                        ${asunto}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      padding:14px 0;
                    ">
                      <strong style="color:#2563eb;">Mensaje:</strong>

                      <div style="
                        margin-top:12px;
                        padding:20px;
                        background:#f8fafc;
                        border-left:5px solid #f97316;
                        white-space:pre-wrap;
                        line-height:1.7;
                      ">
                        ${mensaje}
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="
                padding:30px;
                text-align:center;
                background:#eff6ff;
                border-top:1px solid #dbe4f0;
              ">

                <img
                  src="${LOGO_URL}"
                  alt="${BRAND_NAME}"
                  width="170"
                  style="display:block;margin:0 auto 15px auto;"
                />

                <p style="
                  margin:0;
                  font-size:12px;
                  color:#64748b;
                ">
                  Lead generado automáticamente desde el formulario web.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const nombre = String(body?.nombre || "").trim();
    const email = String(body?.email || "").trim();
    const asunto = String(body?.asunto || "").trim();
    const mensaje = String(body?.mensaje || "").trim();

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Faltan datos para enviar el mensaje." },
        { status: 400 }
      );
    }

    // EMAIL PARA EL NEGOCIO
    await resend.emails.send({
      from: `${BRAND_NAME} <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje: ${asunto}`,
      html: businessTemplate({
        nombre,
        email,
        asunto,
        mensaje,
      }),
    });

    // EMAIL DE CONFIRMACIÓN AL CLIENTE from: `Datnex <${SUPPORT_EMAIL}>`
    await resend.emails.send({
      from: `${BRAND_NAME} <${CONTACT_EMAIL}>`,
      to: email,
      subject: `Recibimos tu mensaje • ${BRAND_NAME}`,
      html: customerTemplate({
        nombre,
        asunto,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Ocurrió un error al enviar el mensaje.",
      },
      {
        status: 500,
      }
    );
  }
}
