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
                <h1>Términos y Condiciones de Servicio</h1>

                <p><strong>Fecha de última actualización:</strong> Junio 2026</p>

                <p>
                    Al contratar nuestros servicios, usted acepta haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones. El contrato se perfecciona en el momento en que completa el proceso de pago, conforme a lo establecido en los artículos 1803 y 1834 Bis del Código Civil Federal.
                </p>

                <h2>Artículo 1. Partes y Objeto del Contrato</h2>

                <p>
                    CATALOG CLIQ S.A. DE C.V., operando comercialmente como CLOUDZA, con domicilio en Avenida Homero N°205 Piso 10, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México, en adelante “EL PROVEEDOR”, presta servicios de hosting, servidores virtuales privados (VPS), servidores dedicados, correo electrónico corporativo y soluciones en la nube, en adelante “LOS SERVICIOS”.
                </p>

                <p>
                    La persona que contrata estos servicios, en adelante “EL CLIENTE”, acepta quedar obligado por los presentes Términos y Condiciones al momento de realizar el pago por cualquiera de LOS SERVICIOS ofrecidos.
                </p>

                <p><strong>Sitio web:</strong> cloudza.com.mx</p>

                <p><strong>Contacto:</strong> inicio@klyhost.com</p>

                <h2>Artículo 2. Aceptación y Perfeccionamiento</h2>

                <p>
                    Al utilizar el sitio web Klyhost.com.mx y contratar LOS SERVICIOS, EL CLIENTE declara:
                </p>

                <ul>
                    <li>Ser mayor de edad y contar con capacidad legal para contratar</li>
                    <li>Haber leído y comprendido estos Términos y Condiciones</li>
                    <li>Aceptar el Aviso de Privacidad de CLOUDZA</li>
                    <li>Que la información proporcionada es veraz y actualizada</li>
                </ul>

                <p>
                    El contrato se perfecciona en el momento en que EL CLIENTE completa el proceso de pago, conforme a lo establecido en los artículos 1803 y 1834 Bis del Código Civil Federal y demás legislación mercantil aplicable.
                </p>

                <h2>Artículo 3. Contratación</h2>

                <h3>Proceso de Contratación</h3>

                <ol>
                    <li>EL CLIENTE selecciona el plan deseado en el sitio web</li>
                    <li>Completa el formulario con los datos requeridos</li>
                    <li>Realiza el pago mediante tarjeta de crédito o débito (Visa/Mastercard)</li>
                    <li>Recibe confirmación de pago y datos de acceso al correo electrónico proporcionado</li>
                </ol>

                <h2>Artículo 4. Precios y Facturación</h2>

                <h3>Estructura de Precios</h3>

                <p>
                    Todos los precios publicados son COSTO MÁS IVA (16%), el cual se calcula y agrega automáticamente al momento de procesar el pago.
                </p>

                <h3>Periodicidad de Pago</h3>

                <p>
                    Los servicios se facturan según el período contratado:
                </p>

                <ul>
                    <li>Mensual</li>
                    <li>Anual (cuando aplique)</li>
                </ul>

                <p>
                    El pago debe realizarse por adelantado para activar o renovar LOS SERVICIOS.
                </p>

                <h3>Comprobantes Fiscales</h3>

                <p>
                    CLOUDZA emite facturas electrónicas (CFDI) cuando EL CLIENTE lo solicite, proporcionando sus datos fiscales completos. Las facturas deben solicitarse dentro de los primeros 5 días del mes siguiente al pago.
                </p>

                <h3>Renovaciones</h3>

                <p>
                    Los servicios se renuevan automáticamente según el período contratado. EL CLIENTE es responsable de realizar el pago de renovación antes del vencimiento para evitar suspensión del servicio.
                </p>

                <h2>Artículo 5. Métodos de Pago</h2>

                <p>CLOUDZA acepta únicamente:</p>

                <ul>
                    <li>Tarjetas de crédito Visa y Mastercard</li>
                    <li>Tarjetas de débito Visa y Mastercard</li>
                </ul>

                <p>
                    Los pagos son procesados mediante proveedores certificados PCI-DSS. CLOUDZA no almacena ni tiene acceso a datos completos de tarjetas bancarias.
                </p>

                <p>
                    <strong>No se aceptan:</strong> Pagos en efectivo, cheques, transferencias bancarias.
                </p>

                <h2>Artículo 6. Obligaciones del Proveedor</h2>

                <p>CLOUDZA se obliga a:</p>

                <ul>
                    <li>Proporcionar LOS SERVICIOS contratados con los recursos especificados</li>
                    <li>Mantener la infraestructura operativa con monitoreo continuo</li>
                    <li>Realizar mantenimientos programados (notificando previamente cuando sea posible)</li>
                    <li>Ofrecer soporte técnico especializado</li>
                    <li>Implementar medidas de seguridad para proteger la infraestructura</li>
                    <li>Realizar respaldos periódicos de la información (según el plan contratado)</li>
                    <li>Cumplir con los niveles de servicio ofrecidos</li>
                </ul>

                <h2>Artículo 7. Obligaciones del Cliente</h2>

                <p>EL CLIENTE se obliga a:</p>

                <ul>
                    <li>Proporcionar información veraz y actualizada</li>
                    <li>Realizar pagos de manera puntual</li>
                    <li>Utilizar LOS SERVICIOS conforme a la legislación aplicable</li>
                    <li>No utilizar LOS SERVICIOS para actividades ilícitas, difusión de malware, spam, phishing o contenido ilegal</li>
                    <li>No realizar actividades que comprometan la seguridad de la infraestructura</li>
                    <li>Mantener actualizados sus sistemas y aplicaciones</li>
                    <li>Realizar respaldos adicionales de información crítica</li>
                    <li>Cumplir con las políticas de uso aceptable</li>
                    <li>Notificar cualquier incidente de seguridad detectado</li>
                </ul>

                <h2>Artículo 8. Uso Aceptable y Prohibiciones</h2>

                <p>Queda estrictamente prohibido utilizar LOS SERVICIOS para:</p>

                <ul>
                    <li>Alojar, distribuir o promover contenido ilegal o que viole derechos de terceros</li>
                    <li>Enviar correos masivos no solicitados (spam)</li>
                    <li>Realizar ataques informáticos, hackeo o actividades maliciosas</li>
                    <li>Distribuir malware, virus o código dañino</li>
                    <li>Violar derechos de propiedad intelectual</li>
                    <li>Actividades de phishing o fraude</li>
                    <li>Consumo excesivo de recursos que afecte a otros usuarios (en servicios compartidos)</li>
                    <li>Reventa de servicios sin autorización</li>
                </ul>

                <p>
                    <strong>Importante:</strong> El incumplimiento de estas prohibiciones faculta a CLOUDZA para suspender o cancelar LOS SERVICIOS sin responsabilidad ni derecho a reembolso.
                </p>

                <h2>Artículo 9. Disponibilidad y Niveles de Servicio</h2>

                <p>
                    CLOUDZA realiza esfuerzos razonables para mantener la disponibilidad de LOS SERVICIOS, sin embargo, no garantiza disponibilidad del 100% debido a:
                </p>

                <ul>
                    <li>Mantenimientos programados</li>
                    <li>Actualizaciones de seguridad urgentes</li>
                    <li>Fallas de proveedores externos</li>
                    <li>Casos de fuerza mayor o caso fortuito</li>
                </ul>

                <p>
                    En caso de interrupciones prolongadas atribuibles a CLOUDZA, se evaluará compensación según la duración y el plan contratado.
                </p>

                <h2>Artículo 10. Soporte Técnico</h2>

                <p>CLOUDZA proporciona soporte técnico especializado para:</p>

                <ul>
                    <li>Problemas de acceso a los servicios</li>
                    <li>Configuraciones básicas relacionadas con el servicio contratado</li>
                    <li>Incidencias técnicas de la infraestructura</li>
                    <li>Asesoría sobre el uso de los servicios</li>
                </ul>

                <h3>Canales de Soporte</h3>

                <p><strong>Correo electrónico:</strong> inicio@klyhost.com.mx</p>

                <p>El soporte técnico NO incluye:</p>

                <ul>
                    <li>Desarrollo o programación personalizada</li>
                    <li>Soporte para aplicaciones de terceros</li>
                    <li>Administración completa del servidor (salvo en planes administrados)</li>
                    <li>Capacitación extensiva</li>
                </ul>

                <h2>Artículo 11. Respaldos y Protección de Datos</h2>

                <h3>Responsabilidad de Respaldos</h3>

                <p>
                    Aunque CLOUDZA realiza respaldos periódicos de la infraestructura, EL CLIENTE es el único responsable de mantener copias de seguridad actualizadas de su información crítica.
                </p>

                <p>
                    Los respaldos realizados por CLOUDZA son para recuperación de desastres de infraestructura y no sustituyen la obligación del CLIENTE de proteger su información.
                </p>

                <h3>Recuperación de Información</h3>

                <p>
                    La recuperación de información desde respaldos estará sujeta a:
                </p>

                <ul>
                    <li>Disponibilidad del respaldo</li>
                    <li>Complejidad de la recuperación</li>
                    <li>Posibles costos adicionales según el caso</li>
                </ul>

                <h2>Artículo 12. Suspensión y Terminación</h2>

                <h3>Suspensión por Falta de Pago</h3>

                <p>
                    Si EL CLIENTE no realiza el pago de renovación dentro del período de gracia (generalmente 5 días después del vencimiento), LOS SERVICIOS serán suspendidos automáticamente hasta que se regularice el pago.
                </p>

                <h3>Suspensión por Violación de Términos</h3>

                <p>
                    CLOUDZA puede suspender LOS SERVICIOS inmediatamente si detecta violaciones a estos Términos y Condiciones, especialmente relacionadas con uso indebido o actividades ilícitas.
                </p>

                <h3>Cancelación Definitiva</h3>

                <p>
                    Si el servicio permanece suspendido por más de 30 días, CLOUDZA puede proceder a la cancelación definitiva y eliminación de información sin responsabilidad alguna.
                </p>

                <h2>Artículo 13. Propiedad Intelectual</h2>

                <h3>Derechos de CLOUDZA</h3>

                <p>
                    Todos los elementos del sitio web Klyhost.com.mx, incluyendo diseño, código, logotipos, marcas, contenidos y estructura, son propiedad de CATALOG CLIQ S.A. DE C.V. y están protegidos por las leyes de propiedad intelectual e industrial aplicables.
                </p>

                <h3>Derechos del Cliente</h3>

                <p>EL CLIENTE conserva todos los derechos sobre:</p>

                <ul>
                    <li>Contenidos que aloje en LOS SERVICIOS</li>
                    <li>Bases de datos propias</li>
                    <li>Desarrollos y aplicaciones propias</li>
                </ul>

                <p>
                    CLOUDZA no reclama ningún derecho sobre el contenido del CLIENTE, únicamente proporciona la infraestructura para su alojamiento.
                </p>

                <h2>Artículo 14. Limitación de Responsabilidad</h2>

                <p>CLOUDZA no será responsable por:</p>

                <ul>
                    <li>Pérdida de datos del CLIENTE cuando no se mantengan respaldos adecuados</li>
                    <li>Daños causados por ataques informáticos a los sistemas del CLIENTE</li>
                    <li>Interrupciones causadas por proveedores externos</li>
                    <li>Incompatibilidad de aplicaciones del CLIENTE con la infraestructura</li>
                    <li>Pérdidas económicas, lucro cesante o daños indirectos</li>
                    <li>Contenido publicado por EL CLIENTE</li>
                    <li>Uso que EL CLIENTE haga de LOS SERVICIOS</li>
                </ul>

                <p>
                    La responsabilidad máxima de CLOUDZA se limitará al monto pagado por EL CLIENTE en el mes en que ocurra el incidente.
                </p>

                <h2>Artículo 15. Fuerza Mayor</h2>

                <p>
                    Ninguna de las partes será responsable por incumplimientos derivados de casos de fuerza mayor o caso fortuito, incluyendo pero no limitado a:
                </p>

                <ul>
                    <li>Desastres naturales</li>
                    <li>Actos de autoridad</li>
                    <li>Guerras, disturbios, pandemias</li>
                    <li>Fallas masivas de internet</li>
                    <li>Ciberataques de gran escala</li>
                    <li>Cualquier otra circunstancia imprevisible e inevitable</li>
                </ul>

                <h2>Artículo 16. Modificaciones</h2>

                <p>
                    CLOUDZA se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones se publicarán en el sitio web con su fecha de actualización.
                </p>

                <p>
                    Los servicios ya contratados continuarán rigiéndose por los términos vigentes al momento de su contratación durante el período pagado.
                </p>

                <h2>Artículo 17. Independencia de Cláusulas</h2>

                <p>
                    Si cualquier disposición de estos Términos y Condiciones fuera declarada inválida o inaplicable, las demás disposiciones permanecerán vigentes y producirán plenos efectos.
                </p>

                <h2>Artículo 18. Legislación y Jurisdicción</h2>

                <p>
                    Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles.
                </p>

                <h2>Artículo 19. Aceptación Final</h2>

                <p>
                    Al contratar nuestros servicios, usted acepta haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones.
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
                <h1>Terms and Conditions of Service</h1>

                <p><strong>Last updated:</strong> June 2026</p>

                <p>
                    By contracting our services, you acknowledge that you have read, understood, and fully accepted these Terms and Conditions. The agreement is perfected at the moment you complete the payment process, in accordance with Articles 1803 and 1834 Bis of the Federal Civil Code.
                </p>

                <h2>Article 1. Parties and Purpose of the Agreement</h2>

                <p>
                    CATALOG CLIQ S.A. DE C.V., commercially operating as CLOUDZA, with address at Avenida Homero N°205 Floor 10, Colonia Polanco V Sección, Miguel Hidalgo Borough, ZIP Code 11560, Mexico City, hereinafter referred to as “THE PROVIDER”, provides hosting services, virtual private servers (VPS), dedicated servers, corporate email, and cloud solutions, hereinafter referred to as “THE SERVICES”.
                </p>

                <p>
                    The person contracting these services, hereinafter referred to as “THE CLIENT”, agrees to be bound by these Terms and Conditions upon making payment for any of THE SERVICES offered.
                </p>

                <p><strong>Website:</strong> cloudza.com.mx</p>

                <p><strong>Contact:</strong> inicio@klyhost.com</p>

                <h2>Article 2. Acceptance and Perfection</h2>

                <p>
                    By using the Klyhost.com.mx website and contracting THE SERVICES, THE CLIENT declares:
                </p>

                <ul>
                    <li>To be of legal age and have legal capacity to contract</li>
                    <li>To have read and understood these Terms and Conditions</li>
                    <li>To accept the CLOUDZA Privacy Notice</li>
                    <li>That the information provided is truthful and up to date</li>
                </ul>

                <p>
                    The agreement is perfected at the moment THE CLIENT completes the payment process, in accordance with Articles 1803 and 1834 Bis of the Federal Civil Code and other applicable commercial legislation.
                </p>

                <h2>Article 3. Contracting</h2>

                <h3>Contracting Process</h3>

                <ol>
                    <li>THE CLIENT selects the desired plan on the website</li>
                    <li>Completes the form with the required information</li>
                    <li>Makes payment using a credit or debit card (Visa/Mastercard)</li>
                    <li>Receives payment confirmation and access details at the provided email address</li>
                </ol>

                <h2>Article 4. Pricing and Billing</h2>

                <h3>Pricing Structure</h3>

                <p>
                    All published prices are COST PLUS VAT (16%), which is automatically calculated and added at the time of payment processing.
                </p>

                <h3>Billing Frequency</h3>

                <p>
                    Services are billed according to the contracted period:
                </p>

                <ul>
                    <li>Monthly</li>
                    <li>Annually (when applicable)</li>
                </ul>

                <p>
                    Payment must be made in advance to activate or renew THE SERVICES.
                </p>

                <h3>Tax Receipts</h3>

                <p>
                    CLOUDZA issues electronic invoices (CFDI) when requested by THE CLIENT, provided that complete tax information is supplied. Invoices must be requested within the first 5 days of the month following payment.
                </p>

                <h3>Renewals</h3>

                <p>
                    Services renew automatically according to the contracted period. THE CLIENT is responsible for making the renewal payment before expiration to avoid service suspension.
                </p>

                <h2>Article 5. Payment Methods</h2>

                <p>CLOUDZA accepts only:</p>

                <ul>
                    <li>Visa and Mastercard credit cards</li>
                    <li>Visa and Mastercard debit cards</li>
                </ul>

                <p>
                    Payments are processed through PCI-DSS certified providers. CLOUDZA does not store or have access to complete bank card information.
                </p>

                <p>
                    <strong>Not accepted:</strong> Cash payments, checks, bank transfers.
                </p>

                <h2>Article 6. Provider Obligations</h2>

                <p>CLOUDZA agrees to:</p>

                <ul>
                    <li>Provide THE SERVICES contracted with the specified resources</li>
                    <li>Maintain operational infrastructure with continuous monitoring</li>
                    <li>Perform scheduled maintenance (providing prior notice whenever possible)</li>
                    <li>Offer specialized technical support</li>
                    <li>Implement security measures to protect the infrastructure</li>
                    <li>Perform periodic information backups (according to the contracted plan)</li>
                    <li>Comply with the service levels offered</li>
                </ul>

                <h2>Article 7. Client Obligations</h2>

                <p>THE CLIENT agrees to:</p>

                <ul>
                    <li>Provide truthful and updated information</li>
                    <li>Make payments on time</li>
                    <li>Use THE SERVICES in accordance with applicable legislation</li>
                    <li>Not use THE SERVICES for illegal activities, malware distribution, spam, phishing, or illegal content</li>
                    <li>Not perform activities that compromise infrastructure security</li>
                    <li>Keep systems and applications updated</li>
                    <li>Create additional backups of critical information</li>
                    <li>Comply with acceptable use policies</li>
                    <li>Report any detected security incidents</li>
                </ul>

                <h2>Article 8. Acceptable Use and Prohibitions</h2>

                <p>It is strictly prohibited to use THE SERVICES to:</p>

                <ul>
                    <li>Host, distribute, or promote illegal content or content that violates third-party rights</li>
                    <li>Send unsolicited mass emails (spam)</li>
                    <li>Carry out cyberattacks, hacking, or malicious activities</li>
                    <li>Distribute malware, viruses, or harmful code</li>
                    <li>Violate intellectual property rights</li>
                    <li>Conduct phishing or fraud activities</li>
                    <li>Excessively consume resources affecting other users (in shared services)</li>
                    <li>Resell services without authorization</li>
                </ul>

                <p>
                    <strong>Important:</strong> Failure to comply with these prohibitions authorizes CLOUDZA to suspend or cancel THE SERVICES without liability or right to refund.
                </p>

                <h2>Article 9. Availability and Service Levels</h2>

                <p>
                    CLOUDZA makes reasonable efforts to maintain service availability; however, it does not guarantee 100% availability due to:
                </p>

                <ul>
                    <li>Scheduled maintenance</li>
                    <li>Urgent security updates</li>
                    <li>Failures of external providers</li>
                    <li>Force majeure or unforeseen events</li>
                </ul>

                <p>
                    In the event of prolonged interruptions attributable to CLOUDZA, compensation will be evaluated according to the duration and contracted plan.
                </p>

                <h2>Article 10. Technical Support</h2>

                <p>CLOUDZA provides specialized technical support for:</p>

                <ul>
                    <li>Service access problems</li>
                    <li>Basic configurations related to the contracted service</li>
                    <li>Technical infrastructure incidents</li>
                    <li>Guidance regarding the use of services</li>
                </ul>

                <h3>Support Channels</h3>

                <p><strong>Email:</strong> inicio@klyhost.com.mx</p>

                <p>Technical support does NOT include:</p>

                <ul>
                    <li>Custom development or programming</li>
                    <li>Support for third-party applications</li>
                    <li>Full server administration (except for managed plans)</li>
                    <li>Extensive training</li>
                </ul>

                <h2>Article 11. Backups and Data Protection</h2>

                <h3>Backup Responsibility</h3>

                <p>
                    Although CLOUDZA performs periodic infrastructure backups, THE CLIENT is solely responsible for maintaining updated backup copies of critical information.
                </p>

                <p>
                    Backups performed by CLOUDZA are intended for infrastructure disaster recovery and do not replace THE CLIENT’s obligation to protect their information.
                </p>

                <h3>Information Recovery</h3>

                <p>
                    Information recovery from backups will be subject to:
                </p>

                <ul>
                    <li>Backup availability</li>
                    <li>Recovery complexity</li>
                    <li>Possible additional costs depending on the case</li>
                </ul>

                <h2>Article 12. Suspension and Termination</h2>

                <h3>Suspension Due to Non-Payment</h3>

                <p>
                    If THE CLIENT does not make the renewal payment within the grace period (generally 5 days after expiration), THE SERVICES will be automatically suspended until payment is regularized.
                </p>

                <h3>Suspension Due to Violation of Terms</h3>

                <p>
                    CLOUDZA may immediately suspend THE SERVICES if violations of these Terms and Conditions are detected, especially those related to misuse or illegal activities.
                </p>

                <h3>Permanent Cancellation</h3>

                <p>
                    If the service remains suspended for more than 30 days, CLOUDZA may proceed with permanent cancellation and deletion of information without any liability.
                </p>

                <h2>Article 13. Intellectual Property</h2>

                <h3>CLOUDZA Rights</h3>

                <p>
                    All elements of the Klyhost.com.mx website, including design, code, logos, trademarks, content, and structure, are the property of CATALOG CLIQ S.A. DE C.V. and are protected by applicable intellectual and industrial property laws.
                </p>

                <h3>Client Rights</h3>

                <p>THE CLIENT retains all rights over:</p>

                <ul>
                    <li>Content hosted on THE SERVICES</li>
                    <li>Own databases</li>
                    <li>Own developments and applications</li>
                </ul>

                <p>
                    CLOUDZA does not claim any rights over the CLIENT’s content and only provides the infrastructure for hosting.
                </p>

                <h2>Article 14. Limitation of Liability</h2>

                <p>CLOUDZA shall not be liable for:</p>

                <ul>
                    <li>Loss of CLIENT data when adequate backups are not maintained</li>
                    <li>Damage caused by cyberattacks on CLIENT systems</li>
                    <li>Interruptions caused by external providers</li>
                    <li>Incompatibility of CLIENT applications with the infrastructure</li>
                    <li>Economic losses, lost profits, or indirect damages</li>
                    <li>Content published by THE CLIENT</li>
                    <li>The use THE CLIENT makes of THE SERVICES</li>
                </ul>

                <p>
                    CLOUDZA’s maximum liability shall be limited to the amount paid by THE CLIENT during the month in which the incident occurred.
                </p>

                <h2>Article 15. Force Majeure</h2>

                <p>
                    Neither party shall be liable for failures resulting from force majeure or unforeseen events, including but not limited to:
                </p>

                <ul>
                    <li>Natural disasters</li>
                    <li>Acts of authority</li>
                    <li>Wars, riots, pandemics</li>
                    <li>Massive internet failures</li>
                    <li>Large-scale cyberattacks</li>
                    <li>Any other unforeseeable and unavoidable circumstance</li>
                </ul>

                <h2>Article 16. Modifications</h2>

                <p>
                    CLOUDZA reserves the right to modify these Terms and Conditions at any time. Modifications will be published on the website with the corresponding update date.
                </p>

                <p>
                    Services already contracted will continue to be governed by the terms in effect at the time of contracting during the paid period.
                </p>

                <h2>Article 17. Severability</h2>

                <p>
                    If any provision of these Terms and Conditions is declared invalid or unenforceable, the remaining provisions shall remain valid and fully effective.
                </p>

                <h2>Article 18. Governing Law and Jurisdiction</h2>

                <p>
                    These Terms and Conditions are governed by the laws of the United Mexican States. For any dispute arising from their interpretation or enforcement, the parties expressly submit to the jurisdiction of the competent courts of Mexico City, waiving any other jurisdiction that may correspond to them.
                </p>

                <h2>Article 19. Final Acceptance</h2>

                <p>
                    By contracting our services, you acknowledge that you have read, understood, and fully accepted these Terms and Conditions.
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