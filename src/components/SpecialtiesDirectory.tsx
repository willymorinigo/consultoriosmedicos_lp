import { Check, Clock, Copy, MessageCircle, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  buildSpecialistWhatsAppUrl,
  SPECIALISTS,
  SPECIALTY_CATEGORIES,
  type Specialist,
} from '../data/specialists';

type CoverageFilter = 'Todas' | 'Obras Sociales' | 'PAMI' | 'Particulares';

const COVERAGE_FILTERS: CoverageFilter[] = [
  'Todas',
  'Obras Sociales',
  'PAMI',
  'Particulares',
];

function matchesCoverage(specialist: Specialist, filter: CoverageFilter): boolean {
  if (filter === 'Todas') return true;
  if (filter === 'Obras Sociales') return specialist.coverage.includes('Obras Sociales');
  if (filter === 'PAMI') return specialist.coverage.includes('PAMI');
  if (filter === 'Particulares') return specialist.coverage.includes('Particulares');
  return true;
}

export function SpecialtiesDirectory() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('Todas');
  const [coverageFilter, setCoverageFilter] = useState<CoverageFilter>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSpecialists = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SPECIALISTS.filter((specialist) => {
      const specialtyMatch =
        selectedSpecialty === 'Todas' || specialist.specialty === selectedSpecialty;
      const coverageMatch = matchesCoverage(specialist, coverageFilter);
      const searchMatch =
        !query ||
        specialist.name.toLowerCase().includes(query) ||
        specialist.specialty.toLowerCase().includes(query) ||
        specialist.specialtyLabel.toLowerCase().includes(query) ||
        (specialist.schedule && specialist.schedule.toLowerCase().includes(query)) ||
        specialist.coverage.toLowerCase().includes(query);
      return specialtyMatch && coverageMatch && searchMatch;
    });
  }, [selectedSpecialty, coverageFilter, searchQuery]);

  const handleCopyPhone = async (id: string, phone: string) => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  const resetFilters = () => {
    setSelectedSpecialty('Todas');
    setCoverageFilter('Todas');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedSpecialty !== 'Todas' || coverageFilter !== 'Todas' || searchQuery.trim() !== '';

  return (
    <section id="equipo" className="py-12 sm:py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Anchor for Especialidades navigation */}
        <div id="especialidades" className="scroll-mt-20 sm:scroll-mt-24 mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-red-700 mb-2">
                Cartilla médica y turnos
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                Equipo médico y especialidades
              </h2>
              <p className="text-base text-zinc-600 mt-2 leading-relaxed">
                Filtrá por especialidad, cobertura o nombre del profesional para comunicarte
                directamente con su WhatsApp de turnos.
              </p>
            </div>

            <div className="text-sm text-zinc-600 tabular-nums whitespace-nowrap shrink-0">
              Mostrando <strong className="text-zinc-900">{filteredSpecialists.length}</strong> de{' '}
              {SPECIALISTS.length} profesionales
            </div>
          </div>

          {/* Search & Coverage Controls */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
            <div className="relative flex-1 max-w-md">
              <Search
                className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por profesional, especialidad o día..."
                aria-label="Buscar por profesional, especialidad o día"
                className="w-full min-h-[44px] pl-10 pr-10 py-2.5 text-base sm:text-sm bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/15"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 min-w-[36px] min-h-[36px] flex items-center justify-center text-zinc-400 hover:text-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div
              role="group"
              aria-label="Filtrar por cobertura"
              className="grid grid-cols-2 sm:flex sm:items-center gap-1 p-1 bg-zinc-200/70 rounded-lg w-full sm:w-auto"
            >
              {COVERAGE_FILTERS.map((filter) => {
                const active = coverageFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setCoverageFilter(filter)}
                    className={`min-h-[40px] sm:min-h-0 px-3 py-2 sm:py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700 ${
                      active
                        ? 'bg-white text-zinc-900 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Specialty Quick Filter Bar: wrapped cleanly on all screens without horizontal scroll */}
          <div
            role="group"
            aria-label="Filtros rápidos por especialidad"
            className="mt-4 flex flex-wrap gap-1.5 sm:gap-2"
          >
            {SPECIALTY_CATEGORIES.map((specialty) => {
              const active = selectedSpecialty === specialty;
              return (
                <button
                  key={specialty}
                  type="button"
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`min-h-[40px] sm:min-h-0 px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700 ${
                    active
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950'
                  }`}
                >
                  {specialty}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        {filteredSpecialists.length === 0 ? (
          <div className="bg-white border border-zinc-200 rounded-xl p-10 text-center">
            <p className="font-display text-lg font-semibold text-zinc-900">
              No encontramos profesionales con ese criterio
            </p>
            <p className="text-sm text-zinc-600 mt-1.5">
              Probá quitando alguno de los filtros o buscando otra especialidad.
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Ver todas las especialidades
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecialists.map((specialist) => {
              const whatsappUrl = buildSpecialistWhatsAppUrl(specialist);
              const isCopied = copiedId === specialist.id;

              return (
                <article
                  key={specialist.id}
                  className="bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-zinc-300"
                >
                  <div className="flex items-stretch justify-between gap-2 pt-5 pl-5 sm:pt-6 sm:pl-6 pr-0 min-h-[168px]">
                    {/* Left text content */}
                    <div className="flex-1 min-w-0 pb-4 pr-1">
                      {/* Unboxed typographic metadata */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-zinc-500">
                        <span className="text-red-700 font-semibold">{specialist.specialty}</span>
                        <span aria-hidden="true">·</span>
                        <span>{specialist.coverage}</span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-semibold text-zinc-900 mt-2 tracking-tight leading-snug">
                        {specialist.name}
                      </h3>

                      <div className="mt-3.5 space-y-1.5 text-sm text-zinc-600">
                        {specialist.schedule && (
                          <p className="flex items-start gap-1.5 tabular-nums">
                            <Clock
                              className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="text-zinc-800 font-medium">{specialist.schedule}</span>
                          </p>
                        )}

                        {specialist.audienceNote && (
                          <p className="text-zinc-700 text-xs sm:text-sm">{specialist.audienceNote}</p>
                        )}

                        {specialist.appointmentNote && (
                          <p className="text-zinc-500 text-xs">{specialist.appointmentNote}</p>
                        )}
                      </div>
                    </div>

                    {/* Right-margined circular portrait */}
                    <div className="w-28 sm:w-32 shrink-0 flex items-center justify-end self-center pb-3">
                      <img
                        src={specialist.photo}
                        alt={
                          specialist.hasRealPhoto
                            ? `${specialist.name} — ${specialist.specialty}`
                            : `Silueta profesional de ${specialist.name} — ${specialist.specialty}`
                        }
                        className="w-full h-36 sm:h-40 object-contain object-right select-none"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Direct WhatsApp Booking Footer */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 border-t border-zinc-100 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-xs text-zinc-500">WhatsApp turnos</span>
                        <span className="font-mono text-sm font-medium text-zinc-900 tabular-nums">
                          {specialist.whatsappDisplay}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyPhone(specialist.id, specialist.whatsappDisplay)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-700"
                        aria-label={`Copiar número de WhatsApp de ${specialist.name}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                            <span className="text-emerald-700">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Pedir turno por WhatsApp</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
