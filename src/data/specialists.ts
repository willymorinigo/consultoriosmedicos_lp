import photoBlanco from '@/src/assets/images/general/Oftalmologia_Blanco_Evelin.png';
import photoNapoli from '@/src/assets/images/general/Oftalmologia_Napoli_Luciana.png';
import photoLovari from '@/src/assets/images/general/Dermatologia_Lovari_Fernando.png';
import photoGulayin from '@/src/assets/images/general/Cardiologia_Gulayin_Miguel.png';
import photoFernandez from '@/src/assets/images/general/Pediatria_Fernandez_Celeste.png';
import photoRodriguezRivas from '@/src/assets/images/general/Neurologia_Rodriguez_Rivas_Moises.png';
import photoCappellacci from '@/src/assets/images/general/Nutricion_Cappellacci_Julia.png';
import photoConde from '@/src/assets/images/general/Nutricion_Conde_Sofia.png';
import photoBotelli from '@/src/assets/images/general/Fonoaudiologia_Botelli_Lorena.png';
import photoSziewe from '@/src/assets/images/general/Psicopedagogia_Sziewe_Teresa.png';
import photoAguirre from '@/src/assets/images/general/Psiquiatria_Othon_Aguirre.png';
import photoSoulas from '@/src/assets/images/general/Masoterepia_Soulas_Martin.png';
import photoGeneric from '@/src/assets/images/general/silueta-profesional.svg';

export type CoverageType = 'Obras Sociales y Particulares' | 'Particulares' | 'PAMI y Particulares';

export interface Specialist {
  id: string;
  name: string;
  specialty: string;
  specialtyLabel: string;
  coverage: CoverageType;
  schedule?: string;
  appointmentNote?: string;
  audienceNote?: string;
  whatsappDisplay: string;
  whatsappNumber: string;
  photo: string;
  hasRealPhoto: boolean;
}

export const CLINIC_INFO = {
  name: 'Consultorios Médicos',
  subtitle: 'Obras Sociales - Particulares',
  address: 'Calle 60 N° 1746 e/ 29 y 30',
  city: 'La Plata, Buenos Aires',
  fullAddress: 'Calle 60 N° 1746 e/ 29 y 30, La Plata, Buenos Aires, Argentina',
  instagramHandle: 'consultoriosmedicos.lp',
  instagramUrl: 'https://www.instagram.com/consultoriosmedicos.lp/',
  receptionWhatsappDisplay: '221 3640408',
  receptionWhatsappNumber: '5492213640408',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Calle+60+1746,+La+Plata,+Buenos+Aires,+Argentina',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Calle%2060%201746%2C%20La%20Plata%2C%20Buenos%20Aires%2C%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed',
};

export const SPECIALISTS: Specialist[] = [
  {
    id: 'blanco-evelin',
    name: 'Dra. Blanco Evelin',
    specialty: 'Oftalmología',
    specialtyLabel: 'Oftalmólogos',
    coverage: 'Obras Sociales y Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoBlanco,
    hasRealPhoto: true,
  },
  {
    id: 'napoli-luciana',
    name: 'Dra. Napoli Luciana',
    specialty: 'Oftalmología',
    specialtyLabel: 'Oftalmólogos',
    coverage: 'Obras Sociales y Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoNapoli,
    hasRealPhoto: true,
  },
  {
    id: 'lovari-fernando',
    name: 'Dr. Lovari Fernando',
    specialty: 'Dermatología',
    specialtyLabel: 'Dermatólogo',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Miércoles de 14 a 16 hs.',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3635770',
    whatsappNumber: '5492213635770',
    photo: photoLovari,
    hasRealPhoto: true,
  },
  {
    id: 'gulayin-miguel',
    name: 'Dr. Gulayin Miguel',
    specialty: 'Cardiología',
    specialtyLabel: 'Cardiólogo',
    coverage: 'Obras Sociales y Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoGulayin,
    hasRealPhoto: true,
  },
  {
    id: 'fernandez-celeste',
    name: 'Dra. Fernández Celeste',
    specialty: 'Pediatría',
    specialtyLabel: 'Pediatra',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Jueves de 17 a 19 hs.',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3998561',
    whatsappNumber: '5492213998561',
    photo: photoFernandez,
    hasRealPhoto: true,
  },
  {
    id: 'elliff-elizabeth',
    name: 'Dra. Elliff Elizabeth',
    specialty: 'Endocrinología',
    specialtyLabel: 'Endocrinóloga',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Martes de 16 a 18 hs.',
    appointmentNote: 'Atención, solo con turno previo',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoGeneric,
    hasRealPhoto: false,
  },
  {
    id: 'palma-agustina',
    name: 'Dra. Agustina Palma',
    specialty: 'Gastroenterología',
    specialtyLabel: 'Gastroenteróloga',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Martes de 18 a 20 hs.',
    appointmentNote: 'Atención, solo con turno previo',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoGeneric,
    hasRealPhoto: false,
  },
  {
    id: 'rodriguez-rivas-moises',
    name: 'Dr. Rodriguez Rivas Moises',
    specialty: 'Neurología',
    specialtyLabel: 'Neurólogo',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Viernes de 10 a 12 hs.',
    appointmentNote: 'Atención, solo con turno previo',
    whatsappDisplay: '221 3640408',
    whatsappNumber: '5492213640408',
    photo: photoRodriguezRivas,
    hasRealPhoto: true,
  },
  {
    id: 'cappellacci-julia',
    name: 'Lic. Cappellacci Julia',
    specialty: 'Nutrición',
    specialtyLabel: 'Nutricionista',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Martes de 9 a 11 hs.',
    appointmentNote: 'Atención, solo con turno previo',
    whatsappDisplay: '221 5342014',
    whatsappNumber: '5492215342014',
    photo: photoCappellacci,
    hasRealPhoto: true,
  },
  {
    id: 'conde-sofia',
    name: 'Lic. Conde Sofia',
    specialty: 'Nutrición',
    specialtyLabel: 'Nutricionista',
    coverage: 'PAMI y Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 6012478',
    whatsappNumber: '5492216012478',
    photo: photoConde,
    hasRealPhoto: true,
  },
  {
    id: 'botelli-lorena',
    name: 'Lic. Lorena Botelli',
    specialty: 'Fonoaudiología',
    specialtyLabel: 'Fonoaudióloga',
    coverage: 'Obras Sociales y Particulares',
    schedule: 'Viernes de 17 a 19 hs.',
    appointmentNote: 'Atención, solo con turno previo',
    audienceNote: 'A partir de 1 año hasta 12 años',
    whatsappDisplay: '221 5413811',
    whatsappNumber: '5492215413811',
    photo: photoBotelli,
    hasRealPhoto: true,
  },
  {
    id: 'sziewe-teresa',
    name: 'Prof. Teresa Sziewe',
    specialty: 'Psicopedagogía',
    specialtyLabel: 'Psicopedagoga',
    coverage: 'Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 5999535',
    whatsappNumber: '5492215999535',
    photo: photoSziewe,
    hasRealPhoto: true,
  },
  {
    id: 'aguirre-othon',
    name: 'Dr. Aguirre Othon',
    specialty: 'Psiquiatría',
    specialtyLabel: 'Psiquiatra',
    coverage: 'Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 4088232',
    whatsappNumber: '5492214088232',
    photo: photoAguirre,
    hasRealPhoto: true,
  },
  {
    id: 'soulas-martin',
    name: 'Soulas Martin',
    specialty: 'Masoterapia',
    specialtyLabel: 'Masajista',
    coverage: 'Particulares',
    appointmentNote: 'Comuníquese solo por WhatsApp',
    whatsappDisplay: '221 3149116',
    whatsappNumber: '5492213149116',
    photo: photoSoulas,
    hasRealPhoto: true,
  },
];

export const SPECIALTY_CATEGORIES: string[] = [
  'Todas',
  ...Array.from(new Set(SPECIALISTS.map((s) => s.specialty))),
];

export function buildSpecialistWhatsAppUrl(specialist: Specialist): string {
  const text = `Hola, quisiera solicitar un turno con ${specialist.name} (${specialist.specialty}) en Consultorios Médicos (Calle 60 N° 1746).`;
  return `https://wa.me/${specialist.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildGeneralWhatsAppUrl(customMessage?: string): string {
  const text =
    customMessage ||
    'Hola, me comunico desde la web de Consultorios Médicos (Calle 60 N° 1746) para realizar una consulta.';
  return `https://wa.me/${CLINIC_INFO.receptionWhatsappNumber}?text=${encodeURIComponent(text)}`;
}
