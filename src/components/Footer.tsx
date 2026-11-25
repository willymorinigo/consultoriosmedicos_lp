import marcaBlancaLogo from '@/src/assets/logos/marca-blanca.png';
import { CLINIC_INFO } from '../data/specialists';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-zinc-800">
          <div>
            <img
              src={marcaBlancaLogo}
              alt="Consultorios Médicos — Obras Sociales y Particulares"
              className="h-11 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-zinc-400 mt-3">
              {CLINIC_INFO.address} · {CLINIC_INFO.city}
            </p>
          </div>

          <nav
            aria-label="Enlaces del pie de página"
            className="flex flex-wrap items-center gap-6 text-sm text-zinc-300"
          >
            <a href="#inicio" className="hover:text-white transition-colors whitespace-nowrap">
              Inicio
            </a>
            <a
              href="#especialidades"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Especialidades
            </a>
            <a href="#equipo" className="hover:text-white transition-colors whitespace-nowrap">
              Equipo médico
            </a>
            <a href="#ubicacion" className="hover:text-white transition-colors whitespace-nowrap">
              Ubicación
            </a>
            <a href="#contacto" className="hover:text-white transition-colors whitespace-nowrap">
              Contacto
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {year} {CLINIC_INFO.name}. Todos los derechos reservados.
          </p>
          <p>
            Instagram:{' '}
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white underline underline-offset-2"
            >
              @{CLINIC_INFO.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
