"use client";

import { useLocale } from "next-intl";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

            <section>
                <h1>Política de Reembolsos y Cancelaciones</h1>

                <p><strong>Fecha de última actualización:</strong> Junio 2026</p>

                <p>
                    La presente Política establece los términos bajo los cuales CATALOG CLIQ S.A. DE C.V., operando como CLOUDZA, procesa solicitudes de cancelación de servicios y reembolsos de pagos efectuados por servicios de hosting, VPS, servidores dedicados y soluciones relacionadas. Esta política aplica únicamente a servicios contratados a través del sitio web CLOUDZA.com y complementa los Términos y Condiciones de Servicio.
                </p>

                <h2>1. Alcance de la Política</h2>

                <p>
                    Esta política establece los términos bajo los cuales CATALOG CLIQ S.A. DE C.V. (CLOUDZA) procesa:
                </p>

                <ul>
                    <li>Solicitudes de cancelación de servicios</li>
                    <li>Reembolsos de pagos efectuados</li>
                    <li>Servicios de hosting, VPS, servidores dedicados y soluciones relacionadas</li>
                </ul>

                <p><strong>Contacto:</strong> inicio@klyhost.com</p>

                <h2>2. Cancelaciones Iniciadas por el Cliente</h2>

                <h3>Procedimiento de Cancelación</h3>

                <p>Para cancelar un servicio, el cliente debe:</p>

                <ol>
                    <li>
                        <strong>Enviar solicitud</strong>
                        Correo a: inicio@klyhost.com con asunto “SOLICITUD DE CANCELACIÓN”
                    </li>

                    <li>
                        <strong>Proporcionar datos</strong>
                        Nombre completo o razón social, correo registrado, servicio a cancelar
                    </li>

                    <li>
                        <strong>Motivo (opcional)</strong>
                        Indicar motivo de cancelación – ayuda a mejorar nuestro servicio
                    </li>

                    <li>
                        <strong>Datos bancarios</strong>
                        CLABE interbancaria y titular (solo si aplica reembolso)
                    </li>
                </ol>

                <h3>Efectos de la Cancelación</h3>

                <p>Una vez procesada la cancelación:</p>

                <ul>
                    <li>El servicio permanecerá activo hasta el final del período pagado</li>
                    <li>No se generarán cargos adicionales ni renovaciones automáticas</li>
                    <li>Al vencer el período, el servicio se desactivará y la información será eliminada</li>
                    <li>CLOUDZA recomienda realizar respaldos antes de la fecha de vencimiento</li>
                </ul>

                <h2>3. Cancelaciones por Falta de Pago</h2>

                <h3>Suspensión del Servicio</h3>

                <p>Si el cliente no realiza el pago de renovación:</p>

                <ul>
                    <li>El servicio entra en período de gracia de 5 días naturales</li>
                    <li>Durante este período, el servicio puede estar suspendido o con funcionalidad limitada</li>
                    <li>Se envían recordatorios automáticos al correo registrado</li>
                </ul>

                <h3>Cancelación Automática</h3>

                <p><strong>Importante</strong></p>

                <p>
                    Si después de 30 días naturales desde el vencimiento no se ha regularizado el pago:
                </p>

                <ul>
                    <li>El servicio se cancela definitivamente</li>
                    <li>Toda la información almacenada es eliminada permanentemente</li>
                    <li>No existe obligación de mantener respaldos</li>
                    <li>No procede ningún reclamo posterior</li>
                </ul>

                <p>
                    <strong>IMPORTANTE:</strong> CLOUDZA no es responsable por pérdida de información derivada de falta de pago.
                </p>

                <h2>4. Reembolsos por Cargos Duplicados o Erróneos</h2>

                <p>
                    Si se procesa un cargo duplicado o erróneo por error del sistema de pagos:
                </p>

                <p><strong>✓ Reembolso Garantizado</strong></p>

                <p>
                    CLOUDZA realizará el reembolso del 100% del cargo indebido dentro de los 10 días hábiles siguientes a la notificación. No se requiere mayor justificación si el error es evidente.
                </p>

                <p>
                    El cliente debe notificar cargos duplicados dentro de los 15 días naturales siguientes al cargo.
                </p>

                <h2>5. Cancelación por Violación de Términos</h2>

                <p><strong>Sin Derecho a Reembolso</strong></p>

                <p>
                    Si CLOUDZA suspende o cancela el servicio por violación a los Términos y Condiciones:
                </p>

                <ul>
                    <li>No procede ningún reembolso</li>
                    <li>El servicio se cancela de forma inmediata</li>
                    <li>Toda información puede ser eliminada sin previo aviso</li>
                    <li>No existe derecho a compensación alguna</li>
                </ul>

                <p>
                    Esto incluye pero no se limita a: uso ilegal del servicio, spam, distribución de malware, ataques informáticos, contenido prohibido.
                </p>

                <h2>6. Procesamiento de Reembolsos</h2>

                <h3>Tiempo de Procesamiento</h3>

                <p>Los reembolsos aprobados se procesan en los siguientes plazos:</p>

                <p><strong>Tiempo estándar</strong></p>

                <p>15 a 30 días hábiles desde la aprobación</p>

                <p><strong>Variación</strong></p>

                <p>El tiempo puede variar según el procesador de pagos</p>

                <h3>Método de Reembolso</h3>

                <p>
                    Los reembolsos se efectuarán únicamente hacia la misma cuenta o método de pago utilizado en la transacción original. CLOUDZA no realiza reembolsos en efectivo bajo ninguna circunstancia.
                </p>

                <h3>Comisiones Bancarias</h3>

                <p>
                    Las comisiones bancarias generadas por el reembolso serán absorbidas por:
                </p>

                <ul>
                    <li><strong>CLOUDZA:</strong> Cuando el reembolso sea por responsabilidad del proveedor</li>
                    <li><strong>El cliente:</strong> Cuando el reembolso sea por cancelación voluntaria durante período de garantía</li>
                </ul>

                <h2>7. Contracargos</h2>

                <h3>Definición</h3>

                <p>
                    Un contracargo es un proceso bancario donde el titular de la tarjeta disputa un cargo ante su banco emisor.
                </p>

                <h3>Procedimiento</h3>

                <p>Si el cliente inicia un contracargo:</p>

                <ul>
                    <li>CLOUDZA proporcionará evidencia de la prestación del servicio al banco</li>
                    <li>El banco emisor toma la decisión final (puede tomar hasta 180 días)</li>
                    <li>CLOUDZA no puede influir en la decisión bancaria</li>
                    <li>Durante el proceso, el servicio puede ser suspendido</li>
                </ul>

                <h3>Consecuencias</h3>

                <p>
                    Si el cliente inicia un contracargo sin haber intentado resolver la situación directamente con CLOUDZA:
                </p>

                <ul>
                    <li>Se considera violación a estos términos</li>
                    <li>Puede resultar en cancelación permanente del servicio</li>
                    <li>Inhabilitación para contratar servicios futuros</li>
                </ul>

                <p>
                    <strong>Recomendación:</strong> Siempre contacte primero a inicio@klyhost.com antes de iniciar un contracargo.
                </p>

                <h2>8. Migraciones y Cambios de Plan</h2>

                <h3>Upgrade de Servicios</h3>

                <p>El cliente puede mejorar su plan en cualquier momento:</p>

                <ul>
                    <li>Se cobra la diferencia proporcional al tiempo restante</li>
                    <li>El cambio es inmediato o según disponibilidad técnica</li>
                    <li>No se aplican penalizaciones</li>
                </ul>

                <h3>Downgrade de Servicios</h3>

                <p>La reducción de plan está sujeta a:</p>

                <ul>
                    <li>Disponibilidad técnica</li>
                    <li>No procede reembolso de la diferencia</li>
                    <li>Aplica al siguiente período de facturación</li>
                    <li>Puede requerir migración manual de datos</li>
                </ul>

                <h2>9. Casos Especiales</h2>

                <p>
                    En situaciones extraordinarias debidamente documentadas, CLOUDZA evaluará individualmente:
                </p>

                <ul>
                    <li>Cierres definitivos de negocio</li>
                    <li>Situaciones de fuerza mayor del cliente</li>
                    <li>Fallecimiento del titular</li>
                </ul>

                <p>
                    Se requerirá documentación oficial que sustente la situación (acta de defunción, documentos legales, etc.).
                </p>

                <h2>10. Responsabilidad sobre la Información</h2>

                <h3>Antes de Cancelar</h3>

                <p>Es responsabilidad exclusiva del cliente:</p>

                <ul>
                    <li>Realizar respaldos completos de su información</li>
                    <li>Exportar bases de datos</li>
                    <li>Descargar archivos importantes</li>
                    <li>Guardar configuraciones</li>
                </ul>

                <h3>Después de Cancelar</h3>

                <p><strong>Información Eliminada Permanentemente</strong></p>

                <p>
                    Una vez cancelado el servicio y eliminada la información:
                </p>

                <ul>
                    <li>CLOUDZA no tiene obligación de mantener respaldos</li>
                    <li>No es posible recuperar información eliminada</li>
                    <li>No procede ningún reclamo posterior</li>
                </ul>

                <h2>11. Excepciones a Reembolsos</h2>

                <p><strong>No Procede Reembolso</strong></p>

                <p>
                    No procederá reembolso bajo ninguna circunstancia en los siguientes casos:
                </p>

                <ul>
                    <li>Desacuerdo con las políticas después de la contratación</li>
                    <li>Expectativas no alineadas con las especificaciones publicadas</li>
                    <li>Cambios en las necesidades del cliente</li>
                    <li>Falta de conocimiento técnico para usar el servicio</li>
                    <li>Incompatibilidad con aplicaciones de terceros</li>
                    <li>Problemas causados por el cliente</li>
                    <li>Servicios consumidos durante más de 7 días (excepto casos específicos)</li>
                </ul>

                <h2>12. Modificaciones a la Política</h2>

                <p>
                    CLOUDZA se reserva el derecho de modificar esta Política en cualquier momento. Los cambios se publicarán en el sitio web con la fecha de actualización correspondiente.
                </p>

                <p>
                    Las cancelaciones y reembolsos en proceso se regirán por la política vigente al momento de la solicitud.
                </p>

                <h2>13. Aceptación de Términos</h2>

                <p>
                    Al contratar nuestros servicios, usted acepta los términos establecidos en esta Política de Reembolsos y Cancelaciones.
                </p>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style dangerouslySetInnerHTML={{
                __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

            <section>
                <h1>Refund and Cancellation Policy</h1>

                <p><strong>Last updated:</strong> June 2026</p>

                <p>
                    This Policy establishes the terms under which CATALOG CLIQ S.A. DE C.V., operating as CLOUDZA, processes service cancellation requests and refunds for payments made for hosting services, VPS, dedicated servers, and related solutions. This policy applies only to services contracted through the CLOUDZA.com website and complements the Terms and Conditions of Service.
                </p>

                <h2>1. Scope of the Policy</h2>

                <p>
                    This policy establishes the terms under which CATALOG CLIQ S.A. DE C.V. (CLOUDZA) processes:
                </p>

                <ul>
                    <li>Service cancellation requests</li>
                    <li>Refunds for payments made</li>
                    <li>Hosting services, VPS, dedicated servers, and related solutions</li>
                </ul>

                <p><strong>Contact:</strong> inicio@klyhost.com</p>

                <h2>2. Customer-Initiated Cancellations</h2>

                <h3>Cancellation Procedure</h3>

                <p>To cancel a service, the customer must:</p>

                <ol>
                    <li>
                        <strong>Send request</strong>
                        <p>Email to: inicio@klyhost.com with the subject “CANCELLATION REQUEST”</p>
                    </li>

                    <li>
                        <strong>Provide information</strong>
                        <p>Full name or corporate name, registered email, service to be canceled</p>
                    </li>

                    <li>
                        <strong>Reason (optional)</strong>
                        <p>Indicate the reason for cancellation – helps us improve our service</p>
                    </li>

                    <li>
                        <strong>Bank details</strong>
                        <p>Interbank CLABE and account holder name (only if a refund applies)</p>
                    </li>
                </ol>

                <h3>Effects of Cancellation</h3>

                <p>Once the cancellation is processed:</p>

                <ul>
                    <li>The service will remain active until the end of the paid period</li>
                    <li>No additional charges or automatic renewals will be generated</li>
                    <li>Upon expiration of the period, the service will be deactivated and the information will be deleted</li>
                    <li>CLOUDZA recommends creating backups before the expiration date</li>
                </ul>

                <h2>3. Cancellations Due to Non-Payment</h2>

                <h3>Service Suspension</h3>

                <p>If the customer does not make the renewal payment:</p>

                <ul>
                    <li>The service enters a grace period of 5 calendar days</li>
                    <li>During this period, the service may be suspended or have limited functionality</li>
                    <li>Automatic reminders are sent to the registered email address</li>
                </ul>

                <h3>Automatic Cancellation</h3>

                <p><strong>Important</strong></p>

                <p>
                    If payment has not been regularized after 30 calendar days from the due date:
                </p>

                <ul>
                    <li>The service is permanently canceled</li>
                    <li>All stored information is permanently deleted</li>
                    <li>There is no obligation to maintain backups</li>
                    <li>No further claims will be accepted</li>
                </ul>

                <p>
                    <strong>IMPORTANT:</strong> CLOUDZA is not responsible for information loss resulting from non-payment.
                </p>

                <h2>4. Refunds for Duplicate or Erroneous Charges</h2>

                <p>
                    If a duplicate or erroneous charge is processed due to a payment system error:
                </p>

                <p><strong>✓ Guaranteed Refund</strong></p>

                <p>
                    CLOUDZA will refund 100% of the improper charge within 10 business days following notification. No further justification is required if the error is evident.
                </p>

                <p>
                    The customer must report duplicate charges within 15 calendar days following the charge.
                </p>

                <h2>5. Cancellation Due to Violation of Terms</h2>

                <p><strong>No Right to Refund</strong></p>

                <p>
                    If CLOUDZA suspends or cancels the service due to a violation of the Terms and Conditions:
                </p>

                <ul>
                    <li>No refund will be issued</li>
                    <li>The service will be canceled immediately</li>
                    <li>All information may be deleted without prior notice</li>
                    <li>There will be no right to any compensation</li>
                </ul>

                <p>
                    This includes but is not limited to: illegal use of the service, spam, malware distribution, cyberattacks, prohibited content.
                </p>

                <h2>6. Refund Processing</h2>

                <h3>Processing Time</h3>

                <p>Approved refunds are processed within the following timeframes:</p>

                <p><strong>Standard time</strong></p>

                <p>15 to 30 business days from approval</p>

                <p><strong>Variation</strong></p>

                <p>The timeframe may vary depending on the payment processor</p>

                <h3>Refund Method</h3>

                <p>
                    Refunds will only be issued to the same account or payment method used in the original transaction. CLOUDZA does not issue cash refunds under any circumstances.
                </p>

                <h3>Bank Fees</h3>

                <p>
                    Bank fees generated by the refund will be absorbed by:
                </p>

                <ul>
                    <li><strong>CLOUDZA:</strong> When the refund is due to the provider’s responsibility</li>
                    <li><strong>The customer:</strong> When the refund is due to voluntary cancellation during the guarantee period</li>
                </ul>

                <h2>7. Chargebacks</h2>

                <h3>Definition</h3>

                <p>
                    A chargeback is a banking process in which the cardholder disputes a charge with their issuing bank.
                </p>

                <h3>Procedure</h3>

                <p>If the customer initiates a chargeback:</p>

                <ul>
                    <li>CLOUDZA will provide evidence of service delivery to the bank</li>
                    <li>The issuing bank makes the final decision (it may take up to 180 days)</li>
                    <li>CLOUDZA cannot influence the bank’s decision</li>
                    <li>During the process, the service may be suspended</li>
                </ul>

                <h3>Consequences</h3>

                <p>
                    If the customer initiates a chargeback without attempting to resolve the situation directly with CLOUDZA:
                </p>

                <ul>
                    <li>It is considered a violation of these terms</li>
                    <li>It may result in permanent cancellation of the service</li>
                    <li>Disqualification from contracting future services</li>
                </ul>

                <p>
                    <strong>Recommendation:</strong> Always contact inicio@klyhost.com before initiating a chargeback.
                </p>

                <h2>8. Migrations and Plan Changes</h2>

                <h3>Service Upgrade</h3>

                <p>The customer may upgrade their plan at any time:</p>

                <ul>
                    <li>The proportional difference for the remaining time will be charged</li>
                    <li>The change is immediate or subject to technical availability</li>
                    <li>No penalties apply</li>
                </ul>

                <h3>Service Downgrade</h3>

                <p>Plan reductions are subject to:</p>

                <ul>
                    <li>Technical availability</li>
                    <li>No refund of the difference applies</li>
                    <li>Applies to the next billing period</li>
                    <li>May require manual data migration</li>
                </ul>

                <h2>9. Special Cases</h2>

                <p>
                    In duly documented extraordinary situations, CLOUDZA will individually evaluate:
                </p>

                <ul>
                    <li>Permanent business closures</li>
                    <li>Force majeure situations affecting the customer</li>
                    <li>Death of the account holder</li>
                </ul>

                <p>
                    Official documentation supporting the situation will be required (death certificate, legal documents, etc.).
                </p>

                <h2>10. Responsibility for Information</h2>

                <h3>Before Cancellation</h3>

                <p>It is the sole responsibility of the customer to:</p>

                <ul>
                    <li>Create complete backups of their information</li>
                    <li>Export databases</li>
                    <li>Download important files</li>
                    <li>Save configurations</li>
                </ul>

                <h3>After Cancellation</h3>

                <p><strong>Permanently Deleted Information</strong></p>

                <p>
                    Once the service is canceled and the information is deleted:
                </p>

                <ul>
                    <li>CLOUDZA has no obligation to maintain backups</li>
                    <li>Deleted information cannot be recovered</li>
                    <li>No further claims will be accepted</li>
                </ul>

                <h2>11. Refund Exceptions</h2>

                <p><strong>No Refund Applies</strong></p>

                <p>
                    Refunds will not apply under any circumstances in the following cases:
                </p>

                <ul>
                    <li>Disagreement with the policies after contracting the service</li>
                    <li>Expectations not aligned with published specifications</li>
                    <li>Changes in the customer’s needs</li>
                    <li>Lack of technical knowledge to use the service</li>
                    <li>Incompatibility with third-party applications</li>
                    <li>Problems caused by the customer</li>
                    <li>Services consumed for more than 7 days (except for specific cases)</li>
                </ul>

                <h2>12. Modifications to the Policy</h2>

                <p>
                    CLOUDZA reserves the right to modify this Policy at any time. Changes will be published on the website with the corresponding update date.
                </p>

                <p>
                    Cancellations and refunds in process will be governed by the policy in effect at the time of the request.
                </p>

                <h2>13. Acceptance of Terms</h2>

                <p>
                    By contracting our services, you accept the terms established in this Refund and Cancellation Policy.
                </p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="lg:pl-20 pt-20">
                <div className="px-6">
                    {locale === "es" ? <LegalEs /> : <LegalEn />}
                </div>
                <Footer />
            </main>

        </div>
    );
}