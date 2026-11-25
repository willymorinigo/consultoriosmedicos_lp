import { useEffect, useState } from 'react';
import marcaLogo from '@/src/assets/logos/marca.png';
import { useActiveSection, type SectionId } from '../hooks/useActiveSection';

interface NavLinkItem {
  id: SectionId;
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: 'instalaciones', label: 'Instalaciones', href: '#instalaciones' },
  { id: 'equipo', label: 'Equipo médico', href: '#equipo' },
  { id: 'ubicacion', label: 'Ubicación', href: '#ubicacion' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeId, setActiveId } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isInTeamSection = activeId === 'equipo';

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-all duration-200 motion-reduce:transition-none ${
        isScrolled ? 'border-zinc-200 shadow-xs' : 'border-zinc-200/80'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-8 transition-all duration-200 motion-reduce:transition-none ${
          isScrolled ? 'h-12 sm:h-16' : 'h-16 sm:h-24'
        }`}
      >
        {/* Zone 1: Single brand element (marca.png) */}
        <a
          href="#inicio"
          onClick={() => setActiveId('inicio')}
          aria-label="Ir al inicio de Consultorios Médicos"
          aria-current={activeId === 'inicio' ? 'location' : undefined}
          className="flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 rounded-sm"
        >
          <img
            src={marcaLogo}
            alt="Consultorios Médicos — Obras Sociales y Particulares"
            className={`w-auto object-contain object-left transition-all duration-200 motion-reduce:transition-none ${
              isScrolled
                ? 'h-8 sm:h-10 max-w-[175px] sm:max-w-none'
                : 'h-11 sm:h-16 max-w-[215px] sm:max-w-none'
            }`}
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: 4 single-line nav links with active section indicator */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`whitespace-nowrap shrink-0 transition-colors duration-150 py-1.5 border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 ${
                  isActive
                    ? 'text-red-700 font-semibold border-red-700'
                    : 'text-zinc-600 border-transparent hover:text-zinc-950 hover:border-zinc-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action with active state when inside Equipo section */}
        <div className="flex items-center shrink-0">
          <a
            href="#equipo"
            onClick={() => setActiveId('equipo')}
            aria-current={isInTeamSection ? 'location' : undefined}
            className={`inline-flex items-center justify-center px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold sm:font-medium rounded-lg transition-all duration-150 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 ${
              isInTeamSection
                ? 'bg-zinc-900 text-white ring-2 ring-red-700/30 hover:bg-zinc-800'
                : 'bg-red-700 text-white hover:bg-red-800'
            }`}
          >
            <span className="sm:hidden">Turnos</span>
            <span className="hidden sm:inline">Solicitar turno</span>
          </a>
        </div>
      </div>
    </header>
  );
}
