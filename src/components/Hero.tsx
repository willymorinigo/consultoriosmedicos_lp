import { ArrowDown, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import fachadaImg from '@/src/assets/images/backgrounds/fachada.png';
import heroVideo from '@/src/assets/videos/hero.mp4';
import { CLINIC_INFO, SPECIALISTS, SPECIALTY_CATEGORIES } from '../data/specialists';

function AnimatedNumber({ target, duration = 800 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setValue(target);
        }
      };

      requestAnimationFrame(step);
    };

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

export function Hero() {
  const [videoError, setVideoError] = useState(false);
  const specialtyCount = SPECIALTY_CATEGORIES.length - 1;

  return (
    <section id="inicio" className="relative bg-zinc-950 text-white">
      {/* Full-bleed video hero */}
      <div className="relative min-h-[440px] sm:min-h-[540px] lg:min-h-[600px] flex items-center overflow-hidden">
        {!videoError ? (
          <video
            src={heroVideo}
            poster={fachadaImg}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Video de presentación de Consultorios Médicos en Calle 60 N° 1746, La Plata"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={() => setVideoError(true)}
          />
        ) : (
          <img
            src={fachadaImg}
            alt="Fachada de Consultorios Médicos en Calle 60 N° 1746, La Plata"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Measured scrim for WCAG AA legibility over architectural photography */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-zinc-950/92 via-zinc-950/75 to-zinc-950/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/25"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-300 mb-3 sm:mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
              <span>
                {CLINIC_INFO.address} · {CLINIC_INFO.city}
              </span>
            </p>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.1] text-balance mb-4 sm:mb-5"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.6rem)' }}
            >
              Atención médica multidisciplinaria con turnos directos
            </h1>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-xl mb-7 sm:mb-8">
              Reunimos {specialtyCount} especialidades médicas y terapéuticas en un solo espacio.
              Atendemos por Obras Sociales, PAMI y pacientes particulares, coordinando cada turno
              directamente por WhatsApp con el profesional.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#equipo"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Ver equipo médico</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#ubicacion"
                className="inline-flex items-center justify-center min-h-[48px] px-5 py-3.5 text-sm sm:text-base font-medium text-white border border-white/30 hover:bg-white/10 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ubicación y reseñas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column summary strip below hero */}
      <div className="bg-red-700 border-b border-red-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <div className="py-5 sm:pr-6">
              <p className="font-display text-lg font-semibold text-white tabular-nums">
                <AnimatedNumber target={specialtyCount} /> Especialidades
              </p>
              <p className="text-sm text-red-50/90 mt-0.5">
                Clínica médica, pediatría y terapias
              </p>
            </div>
            <div className="py-5 sm:px-6">
              <p className="font-display text-lg font-semibold text-white tabular-nums">
                <AnimatedNumber target={SPECIALISTS.length} /> Profesionales
              </p>
              <p className="text-sm text-red-50/90 mt-0.5">
                Turnos directos por WhatsApp
              </p>
            </div>
            <div className="py-5 sm:px-6">
              <p className="font-display text-lg font-semibold text-white">
                Obras Sociales y Particulares
              </p>
              <p className="text-sm text-red-50/90 mt-0.5">
                Incluye cobertura PAMI en nutrición
              </p>
            </div>
            <div className="py-5 sm:pl-6">
              <p className="font-display text-lg font-semibold text-white tabular-nums">
                Calle <AnimatedNumber target={60} duration={700} /> N°{' '}
                <AnimatedNumber target={1746} duration={950} />
              </p>
              <p className="text-sm text-red-50/90 mt-0.5">
                Entre 29 y 30, La Plata
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
