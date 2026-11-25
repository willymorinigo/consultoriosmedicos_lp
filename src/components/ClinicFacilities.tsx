import {
  Accessibility,
  Briefcase,
  Building2,
  CalendarCheck,
  Car,
  Check,
  DoorOpen,
  HeartHandshake,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import fachadaImg from '@/src/assets/images/backgrounds/fachada.png';
import { CLINIC_INFO } from '../data/specialists';

interface ClinicAttributeGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

const CLINIC_ATTRIBUTES: ClinicAttributeGroup[] = [
  {
    title: 'Accesibilidad',
    icon: Accessibility,
    items: [
      'Entrada accesible para personas en silla de ruedas',
      'Espacio accesible para personas en silla de ruedas',
    ],
  },
  {
    title: 'Estacionamiento',
    icon: Car,
    items: [
      'Estacionamiento en el lugar',
      'Estacionamiento gratuito',
      'Estacionamiento gratuito en la calle',
    ],
  },
  {
    title: 'Planificación',
    icon: CalendarCheck,
    items: ['Se requiere una cita', 'Se recomienda concertar cita'],
  },
  {
    title: 'Pagos',
    icon: Smartphone,
    items: ['Pagos móviles mediante NFC'],
  },
  {
    title: 'Servicios',
    icon: DoorOpen,
    items: ['Sanitario', 'Sanitarios unisex'],
  },
  {
    title: 'Público usual',
    icon: HeartHandshake,
    items: ['Amigable con LGBTQ+', 'Espacio seguro para personas transgénero'],
  },
  {
    title: 'Opciones de servicio',
    icon: Building2,
    items: ['Servicios en el lugar'],
  },
  {
    title: 'Información proporcionada por la empresa',
    icon: Briefcase,
    items: ['Se identifica como mujer empresaria'],
  },
];

export function ClinicFacilities() {
  return (
    <section
      id="instalaciones"
      className="py-12 sm:py-16 bg-white border-b border-zinc-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-sm font-medium text-red-700 mb-2">
            Sobre los consultorios
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
            Instalaciones, accesibilidad y servicios
          </h2>
          <p className="text-base text-zinc-600 mt-2 leading-relaxed">
            Conocé las comodidades, accesos, medios de pago y condiciones de atención de nuestro
            espacio en {CLINIC_INFO.address}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left: Facade photography */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] lg:min-h-full rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
              <img
                src={fachadaImg}
                alt="Fachada de Consultorios Médicos en Calle 60 N° 1746, La Plata"
                className="w-full h-full lg:absolute lg:inset-0 object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/85 via-zinc-950/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="font-display text-base font-semibold">{CLINIC_INFO.name}</p>
                <p className="text-xs sm:text-sm text-zinc-200 mt-0.5">
                  {CLINIC_INFO.address} · {CLINIC_INFO.city}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Icon-enhanced facility & accessibility grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {CLINIC_ATTRIBUTES.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="bg-[#F8F7F4] border border-zinc-200 rounded-xl p-4 sm:p-5 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-200/70 text-red-700 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-zinc-900 leading-snug">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-1.5 text-sm text-zinc-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className="w-4 h-4 text-red-700 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
