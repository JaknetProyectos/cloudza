import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BRAND_NAME = "Klyhost";
const CONTACT_EMAIL = "inicio@klyhost.com";
const LOGO_URL = "https://cloudza.com.mx/logo.png";

type Customer = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  direccion2?: string;
  ciudad: string;
  estado: string;
  pais: string;
  cp: string;
  empresa?: string;
};

type Product = {
  name: string;
  price: number;
  slug: string;
  icon: string;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type Metadata = Record<string, unknown> & {
  currency?: string;
};

function escapeHtml(input: unknown): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatCurrency(amount: number, locale = "es", currency = "MXN") {
  const safeAmount = Number.isFinite(amount) ? amount : 0;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(safeAmount);
}

function formatText(value: unknown) {
  const text = String(value ?? "").trim();
  return text || "—";
}

function customerFullName(customer: Customer) {
  return `${customer.nombre ?? ""} ${customer.apellido ?? ""}`.trim();
}

function buildItemsRows(items: CartItem[], locale: string, currency: string) {
  const rows = items
    .map((item) => {
      const name = escapeHtml(item?.product?.name ?? "Producto");
      const quantity = Number(item?.quantity ?? 0);
      const price = Number(item?.product?.price ?? 0);
      const subtotal = price * quantity;

      return `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;">
            <div style="font-size:16px;color:#0f172a;font-weight:bold;">${name}</div>
            <div style="margin-top:6px;font-size:13px;color:#64748b;">
              Cantidad: <strong>${quantity}</strong> · Precio unitario: <strong>${escapeHtml(
                formatCurrency(price, locale, currency)
              )}</strong>
            </div>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #e2e8f0;text-align:right;white-space:nowrap;">
            <span style="font-size:15px;color:#2563eb;font-weight:bold;">
              ${escapeHtml(formatCurrency(subtotal, locale, currency))}
            </span>
          </td>
        </tr>
      `;
    })
    .join("");

  return rows || `
    <tr>
      <td colspan="2" style="padding:14px 0;color:#64748b;">
        No se encontraron artículos.
      </td>
    </tr>
  `;
}

function buildMetadataRows(metadata: Metadata | undefined) {
  if (!metadata || typeof metadata !== "object") return "";

  const entries = Object.entries(metadata).filter(([key, value]) => {
    if (value === undefined || value === null || value === "") return false;
    return key !== "currency";
  });

  if (!entries.length) return "";

  return entries
    .map(([key, value]) => {
      const label = escapeHtml(key);
      const renderedValue =
        typeof value === "object"
          ? escapeHtml(JSON.stringify(value))
          : escapeHtml(String(value));

      return `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
            <strong style="color:#2563eb;">${label}:</strong>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;text-align:right;color:#334155;">
            ${renderedValue}
          </td>
        </tr>
      `;
    })
    .join("");
}

function customerTemplate({
  orderId,
  amount,
  customer,
  items,
  locale,
  currency,
}: {
  orderId: string;
  amount: number;
  customer: Customer;
  items: CartItem[];
  locale: string;
  currency: string;
}) {
  const fullName = escapeHtml(customerFullName(customer));
  const customerEmail = escapeHtml(customer.email);

  return `
  <!DOCTYPE html>
  <html lang="${escapeHtml(locale || "es")}">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmación de compra - ${escapeHtml(BRAND_NAME)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #dbe4f0;">

            <tr>
              <td style="padding:30px;background:linear-gradient(90deg,#2563eb 0%, #f97316 100%);color:#ffffff;">
                <h1 style="margin:0;font-size:30px;font-weight:bold;letter-spacing:1px;">${escapeHtml(BRAND_NAME)}</h1>
                <p style="margin:10px 0 0 0;font-size:14px;opacity:.95;">Confirmación de compra</p>
              </td>
            </tr>

            <tr>
              <td style="padding:34px 30px 10px 30px;">
                <h2 style="margin:0 0 12px 0;font-size:24px;color:#0f172a;">¡Gracias por tu compra, ${fullName}!</h2>
                <p style="margin:0;font-size:16px;line-height:1.7;color:#334155;">
                  Hemos recibido correctamente tu pedido y estamos preparando todo para continuar con el proceso.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 30px 0 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:18px 20px;border-bottom:1px solid #dbe4f0;">
                      <span style="font-size:13px;color:#64748b;">Número de pedido</span><br />
                      <strong style="font-size:18px;color:#0f172a;">${escapeHtml(orderId)}</strong>
                    </td>
                    <td style="padding:18px 20px;border-bottom:1px solid #dbe4f0;text-align:right;">
                      <span style="font-size:13px;color:#64748b;">Total pagado</span><br />
                      <strong style="font-size:18px;color:#2563eb;">${escapeHtml(
                        formatCurrency(amount, locale, currency)
                      )}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding:18px 20px;">
                      <div style="font-size:14px;color:#334155;line-height:1.7;">
                        <strong style="color:#f97316;">Estado:</strong> pago confirmado.<br />
                        <strong style="color:#f97316;">Correo:</strong> ${customerEmail}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <h3 style="margin:0 0 14px 0;font-size:18px;color:#0f172a;">Artículos adquiridos</h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  ${buildItemsRows(items, locale, currency)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <h3 style="margin:0 0 14px 0;font-size:18px;color:#0f172a;">Datos de facturación / envío</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;width:50%;"><strong style="color:#2563eb;">Nombre</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.nombre))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Apellido</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.apellido))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Email</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.email))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Teléfono</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.telefono))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Dirección</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.direccion))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Dirección 2</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.direccion2))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Ciudad</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.ciudad))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Estado</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.estado))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">País</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.pais))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Código postal</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.cp))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;"><strong style="color:#2563eb;">Empresa</strong></td>
                    <td style="padding:14px 16px;">${escapeHtml(formatText(customer.empresa))}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">
                        Si detectas algún error en tu pedido, responde a este correo y lo revisamos de inmediato.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:30px;text-align:center;background:#f8fafc;border-top:1px solid #dbe4f0;">
                <p style="margin:0 0 15px 0;font-size:13px;color:#64748b;">
                  © ${new Date().getFullYear()} ${escapeHtml(BRAND_NAME)}. Todos los derechos reservados.
                </p>
                <img src="${LOGO_URL}" alt="${escapeHtml(BRAND_NAME)}" width="170" style="display:block;margin:0 auto;" />
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
  orderId,
  amount,
  customer,
  items,
  metadata,
  locale,
  currency,
}: {
  orderId: string;
  amount: number;
  customer: Customer;
  items: CartItem[];
  metadata?: Metadata;
  locale: string;
  currency: string;
}) {
  const fullName = escapeHtml(customerFullName(customer));

  return `
  <!DOCTYPE html>
  <html lang="${escapeHtml(locale || "es")}">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nuevo pedido - ${escapeHtml(BRAND_NAME)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;">
      <tr>
        <td align="center" style="padding:40px 20px;">
          <table width="700" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #dbe4f0;">

            <tr>
              <td style="padding:30px;background:linear-gradient(90deg,#0f172a 0%, #2563eb 60%, #f97316 100%);color:#ffffff;">
                <h1 style="margin:0;font-size:28px;">Nuevo pedido recibido</h1>
                <p style="margin:10px 0 0 0;font-size:14px;opacity:.9;">${escapeHtml(BRAND_NAME)} · Ticket interno de venta</p>
              </td>
            </tr>

            <tr>
              <td style="padding:30px 30px 0 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:18px 20px;border-bottom:1px solid #dbe4f0;">
                      <span style="font-size:13px;color:#64748b;">Order ID</span><br />
                      <strong style="font-size:18px;color:#0f172a;">${escapeHtml(orderId)}</strong>
                    </td>
                    <td style="padding:18px 20px;border-bottom:1px solid #dbe4f0;text-align:right;">
                      <span style="font-size:13px;color:#64748b;">Importe total</span><br />
                      <strong style="font-size:18px;color:#2563eb;">${escapeHtml(
                        formatCurrency(amount, locale, currency)
                      )}</strong>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <h3 style="margin:0 0 14px 0;font-size:18px;color:#0f172a;">Cliente</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;width:34%;"><strong style="color:#2563eb;">Nombre completo</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Email</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.email))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Teléfono</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.telefono))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Dirección</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(formatText(customer.direccion))}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;"><strong style="color:#2563eb;">Ciudad / Estado</strong></td>
                    <td style="padding:14px 16px;border-bottom:1px solid #e2e8f0;">${escapeHtml(
                      `${formatText(customer.ciudad)} / ${formatText(customer.estado)}`
                    )}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;"><strong style="color:#2563eb;">País / CP</strong></td>
                    <td style="padding:14px 16px;">${escapeHtml(
                      `${formatText(customer.pais)} / ${formatText(customer.cp)}`
                    )}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <h3 style="margin:0 0 14px 0;font-size:18px;color:#0f172a;">Artículos</h3>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;border-bottom:2px solid #dbe4f0;">
                      <strong style="color:#0f172a;">Producto</strong>
                    </td>
                    <td style="padding:10px 0;border-bottom:2px solid #dbe4f0;text-align:right;">
                      <strong style="color:#0f172a;">Importe</strong>
                    </td>
                  </tr>
                  ${buildItemsRows(items, locale, currency)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <h3 style="margin:0 0 14px 0;font-size:18px;color:#0f172a;">Datos adicionales</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #dbe4f0;">
                  ${buildMetadataRows(metadata)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 30px 0 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border:1px solid #dbe4f0;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">
                        Pedido confirmado y notificado al cliente. Revisa disponibilidad, activación del servicio o entrega según corresponda.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:30px;text-align:center;background:#f8fafc;border-top:1px solid #dbe4f0;">
                <img src="${LOGO_URL}" alt="${escapeHtml(BRAND_NAME)}" width="170" style="display:block;margin:0 auto 14px auto;" />
                <p style="margin:0;font-size:12px;color:#64748b;">Correo interno automático generado desde el checkout.</p>
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

    const orderId = String(body?.orderId || "").trim();
    const amount = Number(body?.amount);
    const customer = body?.customer as Customer | undefined;
    const items = Array.isArray(body?.items) ? (body.items as CartItem[]) : [];
    const metadata = (body?.metadata || {}) as Metadata;
    const locale = String(body?.locale || "es").trim() || "es";
    const currency = String(metadata?.currency || "MXN").trim() || "MXN";

    if (!orderId || !Number.isFinite(amount) || !customer || !items.length) {
      return NextResponse.json(
        { error: "Faltan datos para generar la confirmación de compra." },
        { status: 400 }
      );
    }

    const customerEmail = String(customer.email || "").trim();
    if (!customerEmail) {
      return NextResponse.json(
        { error: "Falta el email del cliente." },
        { status: 400 }
      );
    }

    const commonFrom = `${BRAND_NAME} <${CONTACT_EMAIL}>`;

    const [businessMail, customerMail] = await Promise.all([
      resend.emails.send({
        from: commonFrom,
        to: CONTACT_EMAIL,
        replyTo: customerEmail,
        subject: `Nuevo pedido ${orderId} · ${BRAND_NAME}`,
        html: businessTemplate({
          orderId,
          amount,
          customer,
          items,
          metadata,
          locale,
          currency,
        }),
      }),
      resend.emails.send({
        from: commonFrom,
        to: customerEmail,
        subject: `Confirmación de compra · ${BRAND_NAME} · ${orderId}`,
        html: customerTemplate({
          orderId,
          amount,
          customer,
          items,
          locale,
          currency,
        }),
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Confirmación de compra enviada correctamente.",
      ids: {
        business: businessMail?.data?.id ?? null,
        customer: customerMail?.data?.id ?? null,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Ocurrió un error al enviar la confirmación de compra." },
      { status: 500 }
    );
  }
}