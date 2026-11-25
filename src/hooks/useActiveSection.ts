import { useEffect, useState } from 'react';

const SECTION_IDS = ['inicio', 'instalaciones', 'equipo', 'ubicacion', 'contacto'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>('inicio');

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.scrollY < 100) {
        setActiveId('inicio');
        return;
      }

      const reachedBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;
      if (reachedBottom) {
        setActiveId('contacto');
        return;
      }

      const viewportOffset = 160;
      let current: SectionId = 'inicio';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportOffset) {
          current = id;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return { activeId, setActiveId };
}
