import { Building2, Home, Mail, MapPin, Stethoscope, type LucideIcon } from 'lucide-react';
import { useActiveSection, type SectionId } from '../hooks/useActiveSection';

interface TabItem {
  id: SectionId;
  label: string;
  href: string;
  icon: LucideIcon;
}

const TABS: TabItem[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio', icon: Home },
  { id: 'instalaciones', label: 'Espacio', href: '#instalaciones', icon: Building2 },
  { id: 'equipo', label: 'Equipo', href: '#equipo', icon: Stethoscope },
  { id: 'ubicacion', label: 'Mapa', href: '#ubicacion', icon: MapPin },
  { id: 'contacto', label: 'Contacto', href: '#contacto', icon: Mail },
];

export function MobileBottomNav() {
  const { activeId, setActiveId } = useActiveSection();

  return (
    <nav
      aria-label="Navegación móvil inferior"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 items-stretch h-14">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeId === tab.id;
          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveId(tab.id)}
              aria-current={isActive ? 'location' : undefined}
              className={`relative flex flex-col items-center justify-center min-h-[44px] px-1 transition-all duration-150 active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-red-700 ${
                isActive
                  ? 'text-red-700 bg-red-50/70'
                  : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-700 rounded-b-full"
                />
              )}
              <Icon
                className="w-5 h-5 shrink-0 transition-transform duration-150"
                strokeWidth={isActive ? 2.25 : 1.75}
                aria-hidden="true"
              />
              <span
                className={`text-[10px] tracking-tight mt-0.5 leading-none whitespace-nowrap ${
                  isActive ? 'font-semibold' : 'font-medium'
                }`}
              >
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
