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
                <h1>Aviso de Privacidad</h1>

                <p><strong>Fecha de última actualización:</strong> Junio 2026</p>

                <p>
                    CATALOG CLIQ S.A. DE C.V., denominada como “CLOUDZA” o “EL RESPONSABLE”, es responsable del tratamiento de sus datos personales en cumplimiento a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.
                </p>

                <h2>I. Identificación del Responsable</h2>

                <p><strong>Razón Social:</strong> CATALOG CLIQ S.A. DE C.V.</p>
                <p><strong>Nombre Comercial:</strong> CLOUDZA</p>
                <p>
                    <strong>Domicilio Fiscal:</strong> Avenida Homero N°205 Piso 10, Colonia Polanco V Sección, Alcaldía Miguel Hidalgo, C.P. 11560, Ciudad de México
                </p>
                <p><strong>Sitio Web:</strong> Klyhost.com.mx</p>
                <p><strong>Correo de Contacto:</strong> inicio@klyhost.com</p>

                <h2>II. Consentimiento y Aceptación</h2>

                <p>
                    El suministro de sus datos personales a través de nuestro sitio web implica el conocimiento y aceptación del presente Aviso de Privacidad. Si usted no está de acuerdo con los términos aquí establecidos, le solicitamos no proporcione sus datos personales.
                </p>

                <h2>III. Categorías de Datos Personales Recabados</h2>

                <p>
                    Para la prestación de nuestros servicios de hosting, servidores y soluciones en la nube, CLOUDZA recaba las siguientes categorías de datos:
                </p>

                <h3>A) Datos de Identificación</h3>

                <ul>
                    <li>Nombre completo (persona física) o razón social (persona moral)</li>
                    <li>Correo electrónico</li>
                </ul>

                <h3>B) Datos Fiscales (cuando se requiera facturación)</h3>

                <ul>
                    <li>Registro Federal de Contribuyentes (RFC)</li>
                    <li>Domicilio fiscal</li>
                    <li>Régimen fiscal</li>
                    <li>Uso de CFDI</li>
                </ul>

                <h3>C) Datos de Transacción</h3>

                <p>
                    Información relacionada con el procesamiento de pagos mediante tarjeta de crédito o débito, la cual es administrada directamente por nuestros proveedores de servicios de pago certificados. CLOUDZA no almacena ni tiene acceso a números completos de tarjetas bancarias.
                </p>

                <h3>D) Datos Técnicos</h3>

                <ul>
                    <li>Dirección IP</li>
                    <li>Información del navegador</li>
                    <li>Sistema operativo</li>
                    <li>Datos de navegación en el sitio web</li>
                    <li>Cookies y tecnologías similares</li>
                </ul>

                <p>
                    <strong>IMPORTANTE:</strong> CLOUDZA no recaba ni solicita datos personales sensibles según lo define la legislación aplicable.
                </p>

                <h2>IV. Finalidades del Tratamiento</h2>

                <h3>Finalidades Primarias (Necesarias para la relación contractual)</h3>

                <p>
                    Sus datos personales serán tratados para las siguientes finalidades esenciales:
                </p>

                <ul>
                    <li>Procesar la contratación de servicios de hosting, VPS, servidores dedicados y soluciones relacionadas</li>
                    <li>Activar y configurar los servicios contratados</li>
                    <li>Procesar pagos y transacciones</li>
                    <li>Emitir comprobantes fiscales digitales cuando sean solicitados</li>
                    <li>Proporcionar soporte técnico especializado</li>
                    <li>Administrar y mantener los servicios contratados</li>
                    <li>Enviar comunicaciones relativas a los servicios (notificaciones técnicas, actualizaciones, mantenimientos programados)</li>
                    <li>Cumplir con obligaciones legales y requerimientos de autoridades competentes</li>
                    <li>Ejercer los derechos derivados de la relación contractual</li>
                </ul>

                <p>
                    El tratamiento de datos para estas finalidades es necesario y no puede ser negado, ya que resulta indispensable para la prestación de los servicios.
                </p>

                <h3>Finalidades Secundarias (Opcionales)</h3>

                <p>
                    Adicionalmente, sus datos personales podrán utilizarse para:
                </p>

                <ul>
                    <li>Realizar estudios de satisfacción y calidad del servicio</li>
                    <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
                </ul>

                <p>
                    Usted puede manifestar su oposición al tratamiento de sus datos para estas finalidades secundarias en cualquier momento, enviando un correo electrónico a inicio@klyhost.com con el asunto “OPOSICIÓN FINALIDADES SECUNDARIAS”. Su negativa no afectará la prestación de los servicios contratados.
                </p>

                <h2>V. Compartición y Transferencia de Datos</h2>

                <p>
                    CLOUDZA podrá compartir sus datos personales con las siguientes categorías de terceros:
                </p>

                <h3>A) Proveedores de Servicios de Pago</h3>

                <p>
                    Para procesar transacciones de manera segura conforme a los estándares internacionales PCI-DSS. Estos proveedores manejan directamente la información financiera sin que CLOUDZA tenga acceso a datos completos de tarjetas.
                </p>

                <h3>B) Proveedores de Infraestructura Tecnológica</h3>

                <p>
                    Empresas que proporcionan servicios de datacenter, conectividad, almacenamiento en la nube y tecnologías necesarias para operar nuestros servicios.
                </p>

                <h3>C) Autoridades Competentes</h3>

                <p>
                    Cuando exista requerimiento legal, orden judicial o mandato de autoridad competente conforme a la legislación aplicable.
                </p>

                <p>
                    <strong>Nota importante:</strong> Estas transferencias se realizan bajo estrictos acuerdos de confidencialidad y protección de datos. CLOUDZA no comercializa, vende ni transfiere sus datos personales a terceros con fines mercadotécnicos ajenos a nuestra operación.
                </p>

                <h2>VI. Medios y Procedimiento para Ejercer Derechos ARCO</h2>

                <p>
                    Conforme a la legislación aplicable, usted tiene derecho a:
                </p>

                <h3>Acceso</h3>

                <p>
                    Conocer qué datos personales tenemos de usted y para qué los utilizamos
                </p>

                <h3>Rectificación</h3>

                <p>
                    Corregir sus datos personales cuando sean inexactos o incompletos
                </p>

                <h3>Cancelación</h3>

                <p>
                    Solicitar la eliminación de sus datos cuando considere que no se requieren
                </p>

                <h3>Oposición</h3>

                <p>
                    Oponerse al tratamiento de sus datos para fines específicos
                </p>

                <h3>Procedimiento</h3>

                <p>
                    Para ejercer cualquiera de estos derechos, deberá enviar su solicitud a:
                </p>

                <p><strong>Correo electrónico:</strong> inicio@klyhost.com</p>
                <p><strong>Asunto:</strong> SOLICITUD ARCO – [especificar derecho]</p>

                <p>
                    Su solicitud deberá incluir obligatoriamente:
                </p>

                <ul>
                    <li>Nombre completo del titular de los datos</li>
                    <li>Domicilio o medio electrónico para recibir notificaciones</li>
                    <li>Copia de identificación oficial vigente (INE, pasaporte)</li>
                    <li>Descripción precisa de los datos sobre los que busca ejercer algún derecho</li>
                    <li>Cualquier documento que facilite la localización de la información</li>
                    <li>En caso de rectificación, incluir los documentos que sustenten la modificación solicitada</li>
                </ul>

                <h3>Plazos de Respuesta</h3>

                <ul>
                    <li>CLOUDZA dará respuesta a su solicitud en un plazo máximo de 20 días hábiles contados desde la recepción de la solicitud completa</li>
                    <li>La respuesta se comunicará al medio proporcionado en la solicitud</li>
                    <li>En caso de ser procedente, la información solicitada se pondrá a disposición dentro de los 15 días hábiles siguientes a la comunicación de la respuesta</li>
                    <li>Si la solicitud no cumple con los requisitos establecidos, CLOUDZA le requerirá que subsane las deficiencias dentro de los 5 días hábiles siguientes; de no hacerlo, se tendrá por no presentada</li>
                </ul>

                <h2>VII. Revocación del Consentimiento</h2>

                <p>
                    Usted puede revocar el consentimiento otorgado para el tratamiento de sus datos personales en cualquier momento. Para ello, deberá seguir el mismo procedimiento establecido para el ejercicio de derechos ARCO.
                </p>

                <p>
                    Es importante señalar que la revocación del consentimiento puede impedir que CLOUDZA continúe prestando los servicios contratados, en cuyo caso aplicarán las políticas de cancelación correspondientes.
                </p>

                <h2>VIII. Limitación de Uso y Divulgación</h2>

                <p>
                    Si desea limitar el uso o divulgación de sus datos personales, puede solicitarlo enviando un correo electrónico a inicio@klyhost.com con el asunto “LIMITACIÓN DE USO Y DIVULGACIÓN”, especificando las limitaciones que desea establecer.
                </p>

                <h2>IX. Cookies y Tecnologías de Rastreo</h2>

                <p>
                    El sitio web Klyhost.com.mx utiliza cookies y tecnologías similares para:
                </p>

                <ul>
                    <li>Facilitar la navegación y mejorar la experiencia del usuario</li>
                    <li>Recordar preferencias y configuraciones</li>
                    <li>Analizar el tráfico y comportamiento en el sitio</li>
                    <li>Mejorar el rendimiento y funcionalidad del sitio web</li>
                </ul>

                <h3>Tipos de Cookies Utilizadas</h3>

                <ul>
                    <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
                    <li><strong>Cookies analíticas:</strong> Permiten analizar el uso del sitio web</li>
                    <li><strong>Cookies funcionales:</strong> Mejoran la funcionalidad y personalización</li>
                </ul>

                <p>
                    Usted puede deshabilitar o eliminar las cookies mediante la configuración de su navegador web. Sin embargo, esto puede afectar la funcionalidad y experiencia de navegación en nuestro sitio.
                </p>

                <h2>X. Seguridad de la Información</h2>

                <p>
                    CLOUDZA implementa medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o acceso no autorizado, incluyendo:
                </p>

                <ul>
                    <li>Protocolos de cifrado SSL/TLS para transmisión de datos</li>
                    <li>Controles de acceso restringido</li>
                    <li>Monitoreo continuo de seguridad</li>
                    <li>Respaldos periódicos de información</li>
                    <li>Capacitación constante del personal en materia de protección de datos</li>
                </ul>

                <h2>XI. Cambios al Aviso de Privacidad</h2>

                <p>
                    CLOUDZA se reserva el derecho de actualizar o modificar el presente Aviso de Privacidad en cualquier momento para cumplir con actualizaciones legislativas o cambios en nuestras prácticas de tratamiento de datos.
                </p>

                <p>
                    Las modificaciones se darán a conocer mediante:
                </p>

                <ul>
                    <li>Publicación en el sitio web Klyhost.com.mx</li>
                    <li>Notificación al correo electrónico registrado</li>
                </ul>

                <p>
                    Recomendamos revisar periódicamente este aviso para mantenerse informado.
                </p>

                <h2>XII. Legislación Aplicable</h2>

                <p>
                    Este Aviso de Privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, aplicables en los Estados Unidos Mexicanos.
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
                <h1>Privacy Notice</h1>

                <p><strong>Last updated:</strong> June 2026</p>

                <p>
                    CATALOG CLIQ S.A. DE C.V., referred to as “CLOUDZA” or “THE CONTROLLER”, is responsible for the processing of your personal data in compliance with the provisions of the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations.
                </p>

                <h2>I. Identification of the Controller</h2>

                <p><strong>Corporate Name:</strong> CATALOG CLIQ S.A. DE C.V.</p>
                <p><strong>Trade Name:</strong> CLOUDZA</p>
                <p>
                    <strong>Tax Address:</strong> Avenida Homero N°205 Floor 10, Colonia Polanco V Sección, Miguel Hidalgo Borough, ZIP Code 11560, Mexico City
                </p>
                <p><strong>Website:</strong> Klyhost.com.mx</p>
                <p><strong>Contact Email:</strong> inicio@klyhost.com</p>

                <h2>II. Consent and Acceptance</h2>

                <p>
                    Providing your personal data through our website implies knowledge and acceptance of this Privacy Notice. If you do not agree with the terms established herein, we request that you do not provide your personal data.
                </p>

                <h2>III. Categories of Personal Data Collected</h2>

                <p>
                    For the provision of our hosting, server, and cloud solutions services, CLOUDZA collects the following categories of data:
                </p>

                <h3>A) Identification Data</h3>

                <ul>
                    <li>Full name (individual) or corporate name (legal entity)</li>
                    <li>Email address</li>
                </ul>

                <h3>B) Tax Data (when invoicing is required)</h3>

                <ul>
                    <li>Federal Taxpayer Registry (RFC)</li>
                    <li>Tax address</li>
                    <li>Tax regime</li>
                    <li>CFDI usage</li>
                </ul>

                <h3>C) Transaction Data</h3>

                <p>
                    Information related to the processing of payments made by credit or debit card, which is managed directly by our certified payment service providers. CLOUDZA does not store or have access to complete bank card numbers.
                </p>

                <h3>D) Technical Data</h3>

                <ul>
                    <li>IP address</li>
                    <li>Browser information</li>
                    <li>Operating system</li>
                    <li>Website browsing data</li>
                    <li>Cookies and similar technologies</li>
                </ul>

                <p>
                    <strong>IMPORTANT:</strong> CLOUDZA does not collect or request sensitive personal data as defined by applicable legislation.
                </p>

                <h2>IV. Purposes of Data Processing</h2>

                <h3>Primary Purposes (Necessary for the contractual relationship)</h3>

                <p>
                    Your personal data will be processed for the following essential purposes:
                </p>

                <ul>
                    <li>Process the contracting of hosting services, VPS, dedicated servers, and related solutions</li>
                    <li>Activate and configure contracted services</li>
                    <li>Process payments and transactions</li>
                    <li>Issue digital tax receipts when requested</li>
                    <li>Provide specialized technical support</li>
                    <li>Manage and maintain contracted services</li>
                    <li>Send communications related to services (technical notifications, updates, scheduled maintenance)</li>
                    <li>Comply with legal obligations and requests from competent authorities</li>
                    <li>Exercise rights derived from the contractual relationship</li>
                </ul>

                <p>
                    Data processing for these purposes is necessary and cannot be denied, as it is essential for the provision of services.
                </p>

                <h3>Secondary Purposes (Optional)</h3>

                <p>
                    Additionally, your personal data may be used to:
                </p>

                <ul>
                    <li>Conduct satisfaction and service quality surveys</li>
                    <li>Improve the user experience on our website</li>
                </ul>

                <p>
                    You may object to the processing of your data for these secondary purposes at any time by sending an email to inicio@klyhost.com with the subject “OBJECTION TO SECONDARY PURPOSES”. Your refusal will not affect the provision of contracted services.
                </p>

                <h2>V. Sharing and Transfer of Data</h2>

                <p>
                    CLOUDZA may share your personal data with the following categories of third parties:
                </p>

                <h3>A) Payment Service Providers</h3>

                <p>
                    To securely process transactions in accordance with international PCI-DSS standards. These providers directly handle financial information without CLOUDZA having access to complete card data.
                </p>

                <h3>B) Technology Infrastructure Providers</h3>

                <p>
                    Companies that provide datacenter services, connectivity, cloud storage, and technologies necessary to operate our services.
                </p>

                <h3>C) Competent Authorities</h3>

                <p>
                    When there is a legal requirement, court order, or mandate from a competent authority in accordance with applicable legislation.
                </p>

                <p>
                    <strong>Important note:</strong> These transfers are carried out under strict confidentiality and data protection agreements. CLOUDZA does not market, sell, or transfer your personal data to third parties for marketing purposes unrelated to our operations.
                </p>

                <h2>VI. Means and Procedure to Exercise ARCO Rights</h2>

                <p>
                    In accordance with applicable legislation, you have the right to:
                </p>

                <h3>Access</h3>

                <p>
                    Know what personal data we have about you and how we use it
                </p>

                <h3>Rectification</h3>

                <p>
                    Correct your personal data when it is inaccurate or incomplete
                </p>

                <h3>Cancellation</h3>

                <p>
                    Request the deletion of your data when you believe it is no longer required
                </p>

                <h3>Opposition</h3>

                <p>
                    Oppose the processing of your data for specific purposes
                </p>

                <h3>Procedure</h3>

                <p>
                    To exercise any of these rights, you must send your request to:
                </p>

                <p><strong>Email:</strong> inicio@klyhost.com</p>
                <p><strong>Subject:</strong> ARCO REQUEST – [specify right]</p>

                <p>
                    Your request must obligatorily include:
                </p>

                <ul>
                    <li>Full name of the data subject</li>
                    <li>Address or electronic means to receive notifications</li>
                    <li>Copy of valid official identification (INE, passport)</li>
                    <li>Precise description of the data regarding which you seek to exercise any right</li>
                    <li>Any document facilitating the location of the information</li>
                    <li>In the case of rectification, include documents supporting the requested modification</li>
                </ul>

                <h3>Response Deadlines</h3>

                <ul>
                    <li>CLOUDZA will respond to your request within a maximum period of 20 business days counted from receipt of the complete request</li>
                    <li>The response will be communicated through the means provided in the request</li>
                    <li>If applicable, the requested information will be made available within 15 business days following communication of the response</li>
                    <li>If the request does not meet the established requirements, CLOUDZA will require you to correct the deficiencies within 5 business days; otherwise, the request will be considered not submitted</li>
                </ul>

                <h2>VII. Revocation of Consent</h2>

                <p>
                    You may revoke the consent granted for the processing of your personal data at any time. To do so, you must follow the same procedure established for exercising ARCO rights.
                </p>

                <p>
                    It is important to note that revoking consent may prevent CLOUDZA from continuing to provide the contracted services, in which case the corresponding cancellation policies will apply.
                </p>

                <h2>VIII. Limitation of Use and Disclosure</h2>

                <p>
                    If you wish to limit the use or disclosure of your personal data, you may request it by sending an email to inicio@klyhost.com with the subject “LIMITATION OF USE AND DISCLOSURE”, specifying the limitations you wish to establish.
                </p>

                <h2>IX. Cookies and Tracking Technologies</h2>

                <p>
                    The website Klyhost.com.mx uses cookies and similar technologies to:
                </p>

                <ul>
                    <li>Facilitate navigation and improve user experience</li>
                    <li>Remember preferences and settings</li>
                    <li>Analyze traffic and behavior on the site</li>
                    <li>Improve website performance and functionality</li>
                </ul>

                <h3>Types of Cookies Used</h3>

                <ul>
                    <li><strong>Essential cookies:</strong> Necessary for the basic functioning of the site</li>
                    <li><strong>Analytical cookies:</strong> Allow analysis of website usage</li>
                    <li><strong>Functional cookies:</strong> Improve functionality and personalization</li>
                </ul>

                <p>
                    You may disable or delete cookies through your web browser settings. However, this may affect the functionality and browsing experience on our site.
                </p>

                <h2>X. Information Security</h2>

                <p>
                    CLOUDZA implements administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized access, including:
                </p>

                <ul>
                    <li>SSL/TLS encryption protocols for data transmission</li>
                    <li>Restricted access controls</li>
                    <li>Continuous security monitoring</li>
                    <li>Periodic information backups</li>
                    <li>Ongoing staff training regarding data protection</li>
                </ul>

                <h2>XI. Changes to the Privacy Notice</h2>

                <p>
                    CLOUDZA reserves the right to update or modify this Privacy Notice at any time to comply with legislative updates or changes in our data processing practices.
                </p>

                <p>
                    Modifications will be communicated through:
                </p>

                <ul>
                    <li>Publication on the website Klyhost.com.mx</li>
                    <li>Notification to the registered email address</li>
                </ul>

                <p>
                    We recommend periodically reviewing this notice to stay informed.
                </p>

                <h2>XII. Applicable Legislation</h2>

                <p>
                    This Privacy Notice is governed by the Federal Law on Protection of Personal Data Held by Private Parties and its Regulations, applicable in the United Mexican States.
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