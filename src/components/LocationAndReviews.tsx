import { ExternalLink, MapPin, MessageSquareQuote, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/specialists';

export function LocationAndReviews() {
  return (
    <section id="ubicacion" className="py-16 sm:py-20 bg-white border-y border-zinc-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-medium text-red-700 mb-2">
            Cómo llegar y opiniones
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
            Ubicación y reseñas en Google Maps
          </h2>
          <p className="text-base text-zinc-600 mt-2 leading-relaxed">
            Nos encontramos en {CLINIC_INFO.address}, en una zona de fácil acceso en la ciudad de
            La Plata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] lg:min-h-[440px] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
              <iframe
                title="Mapa de ubicación de Consultorios Médicos en Calle 60 N° 1746, La Plata"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full min-h-[380px] lg:min-h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Address & Google Maps Reviews Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#F8F7F4] border border-zinc-200 rounded-xl p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-zinc-900">
                    Dirección de los consultorios
                  </h3>
                  <p className="text-base font-medium text-zinc-800 mt-1">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-sm text-zinc-600">{CLINIC_INFO.city}</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-zinc-200/80 space-y-2 text-sm text-zinc-600">
                <p>
                  Modalidad de atención: <strong className="text-zinc-900">Obras Sociales, PAMI y Particulares</strong>.
                </p>
                <p>
                  La atención en todas las especialidades es programada con turno previo por WhatsApp.
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  <Navigation className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Abrir ubicación en Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-[#F8F7F4] border border-zinc-200 rounded-xl p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-3">
                  <MessageSquareQuote
                    className="w-5 h-5 text-red-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-zinc-900">
                      Reseñas verificadas en Google Maps
                    </h3>
                    <p className="text-sm text-zinc-600 mt-1.5 leading-relaxed">
                      Para mostrar comentarios y calificaciones reales en tiempo real dentro de esta
                      página se requiere habilitar la integración de Google Maps Platform. Podés
                      consultar todas las reseñas actualizadas directamente en nuestra ficha de
                      Google Maps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-900 bg-white border border-zinc-300 hover:border-zinc-400 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-red-700"
                >
                  <span>Ver reseñas en Google Maps</span>
                  <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
