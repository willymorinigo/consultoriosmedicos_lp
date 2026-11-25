import { CheckCircle2, Instagram, Mail, MessageCircle, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import {
  buildGeneralWhatsAppUrl,
  CLINIC_INFO,
  SPECIALTY_CATEGORIES,
} from '../data/specialists';

interface FormState {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  topic: 'Consulta general',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Ingresá tu nombre y apellido.';
    }
    const cleanPhone = form.phone.replace(/\D/g, '');
    if (cleanPhone.length < 7) {
      nextErrors.phone = 'Ingresá un teléfono o WhatsApp válido.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'El formato del correo electrónico no es válido.';
    }
    if (form.message.trim().length < 8) {
      nextErrors.message = 'Contanos brevemente tu consulta (mínimo 8 caracteres).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmittedData(form);
    setForm(INITIAL_FORM);
  };

  const whatsappSubmittedUrl = submittedData
    ? buildGeneralWhatsAppUrl(
        `Hola, soy ${submittedData.name} (${submittedData.phone}). Motivo: ${submittedData.topic}. Consulta: ${submittedData.message}`
      )
    : buildGeneralWhatsAppUrl();

  return (
    <section id="contacto" className="py-16 sm:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct General Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-medium text-red-700 mb-2">
                Contacto general
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                Consultas adicionales e información administrativa
              </h2>
              <p className="text-base text-zinc-600 mt-3 leading-relaxed">
                Si necesitás consultar por obras sociales aceptadas, requisitos de atención o
                información sobre especialidades, escribinos por este formulario o mediante nuestros
                canales directos.
              </p>
            </div>

            <div className="bg-white border border-zinc-200 rounded-xl divide-y divide-zinc-200">
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-zinc-500">WhatsApp administrativo</p>
                  <p className="font-mono text-base font-medium text-zinc-900 tabular-nums mt-0.5">
                    {CLINIC_INFO.receptionWhatsappDisplay}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Para turnos específicos, seleccioná al profesional arriba.
                  </p>
                </div>
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Escribir</span>
                </a>
              </div>

              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-zinc-500">Instagram oficial</p>
                  <p className="text-sm font-medium text-zinc-900 mt-0.5">
                    @{CLINIC_INFO.instagramHandle}
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Seguir</span>
                </a>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium text-zinc-500">Dirección</p>
                <p className="text-sm font-medium text-zinc-900 mt-0.5">
                  {CLINIC_INFO.address} · {CLINIC_INFO.city}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Validated General Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-8">
              {submittedData ? (
                <div className="py-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-zinc-900">
                        Consulta registrada correctamente
                      </h3>
                      <p className="text-sm text-zinc-600 mt-1 leading-relaxed">
                        Gracias, <strong>{submittedData.name}</strong>. Preparamos tu consulta sobre{' '}
                        <strong>{submittedData.topic}</strong>. Si querés recibir respuesta
                        inmediata, podés enviarla directamente al WhatsApp de recepción con un clic.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8F7F4] border border-zinc-200 rounded-lg p-4 text-sm text-zinc-700 space-y-1">
                    <p>
                      <span className="text-zinc-500">Teléfono:</span>{' '}
                      <span className="font-mono tabular-nums">{submittedData.phone}</span>
                    </p>
                    {submittedData.email && (
                      <p>
                        <span className="text-zinc-500">Email:</span> {submittedData.email}
                      </p>
                    )}
                    <p>
                      <span className="text-zinc-500">Mensaje:</span> {submittedData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={whatsappSubmittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Enviar ahora por WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-zinc-700 border border-zinc-300 hover:bg-zinc-50 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-2 pb-4 border-b border-zinc-100">
                    <Mail className="w-4 h-4 text-red-700 shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-zinc-900">
                      Formulario de consulta general
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-zinc-800 mb-1.5"
                      >
                        Nombre y apellido
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ej. María Laura Gómez"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-700 mt-1" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-zinc-800 mb-1.5"
                      >
                        Teléfono o WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Ej. 221 555 1234"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-700 mt-1" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-zinc-800 mb-1.5"
                      >
                        Correo electrónico (opcional)
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="nombre@correo.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-700 mt-1" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block text-sm font-medium text-zinc-800 mb-1.5"
                      >
                        Área o motivo
                      </label>
                      <select
                        id="contact-topic"
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
                      >
                        <option value="Consulta general">Consulta general</option>
                        <option value="Obras Sociales y coberturas">Obras Sociales y coberturas</option>
                        {SPECIALTY_CATEGORIES.filter((s) => s !== 'Todas').map((specialty) => (
                          <option key={specialty} value={specialty}>
                            {specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-zinc-800 mb-1.5"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Escribí tu consulta sobre coberturas, horarios o atención..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15 resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-700 mt-1" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-zinc-500">
                      Recordá que los turnos se solicitan directamente al WhatsApp de cada
                      especialista.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                    >
                      <Send className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Enviar consulta</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
