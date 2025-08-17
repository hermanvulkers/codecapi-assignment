const FEATURE_CODE_MAP: Record<string, string> = {
  PPL: 'City',
  PPLA: 'Capital',
  PPLA2: 'Regional Capital',
  PPLA3: 'District Capital',
  PPLA4: 'Local Capital',
  PPLC: 'National Capital',
  PPLCH: 'Historical Capital',
  PPLF: 'Farm Village',
  PPLG: 'Government Seat',
  PPLH: 'Historical Place',
  PPLL: 'Populated Locality',
  PPLQ: 'Abandoned Place',
  PPLR: 'Religious Community',
  PPLS: 'Populated Places',
  PPLW: 'Destroyed Place',
  PPLX: 'Section',
  STLMT: 'Settlement',
  ADM1: 'Province/State',
  ADM2: 'County/District',
  ADM3: 'Municipality',
  ADM4: 'Local Area',
  ADM5: 'Neighborhood',
  PCLI: 'Independent Country',
  TERR: 'Territory',
  ZN: 'Zone',
  ISL: 'Island',
  MT: 'Mountain',
  LK: 'Lake',
  STM: 'Stream',
  AIRP: 'Airport',
  RSTN: 'Railway Station',
};

export function getFeatureDescription(featureCode?: string): string | null {
  if (!featureCode) return null;

  return FEATURE_CODE_MAP[featureCode] || null;
}
