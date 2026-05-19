import { VesselAmenity } from '../../embarcaciones/models/embarcacion.model';

export interface AmenityDef {
  value: VesselAmenity;
  label: string;
  icon: string;
}

export const AMENITIES: AmenityDef[] = [
  { value: 'WIFI',              label: 'WiFi',               icon: '📶' },
  { value: 'SOUND_SYSTEM',      label: 'Sistema de sonido',  icon: '🔊' },
  { value: 'AIR_CONDITIONING',  label: 'Aire acondicionado', icon: '❄️' },
  { value: 'KITCHEN',           label: 'Cocina',             icon: '🍳' },
  { value: 'BATHROOM',          label: 'Baño',               icon: '🚿' },
  { value: 'REFRIGERATOR',      label: 'Refrigerador',       icon: '🧊' },
  { value: 'DRINKING_WATER',    label: 'Agua potable',       icon: '💧' },
  { value: 'SNORKELING',        label: 'Equipo de snorkel',  icon: '🤿' },
  { value: 'FISHING_EQUIPMENT', label: 'Equipo de pesca',    icon: '🎣' },
  { value: 'KAYAK',             label: 'Kayak',              icon: '🛶' },
  { value: 'LIFE_JACKETS',      label: 'Chalecos salvavidas',icon: '🦺' },
  { value: 'FIRST_AID_KIT',     label: 'Botiquín',           icon: '🩹' },
  { value: 'SUN_DECK',          label: 'Cubierta de sol',    icon: '☀️' },
  { value: 'DINING_AREA',       label: 'Área de comedor',    icon: '🍽️' },
  { value: 'CAPTAIN_INCLUDED',  label: 'Capitán incluido',   icon: '⚓' },
  { value: 'FUEL_INCLUDED',     label: 'Combustible incluido',icon: '⛽' },
  { value: 'PARKING',           label: 'Estacionamiento',    icon: '🅿️' },
  { value: 'GENERATOR',         label: 'Generador',          icon: '🔋' },
];

export function amenityLabel(v: VesselAmenity): string {
  return AMENITIES.find(a => a.value === v)?.label ?? v;
}
export function amenityIcon(v: VesselAmenity): string {
  return AMENITIES.find(a => a.value === v)?.icon ?? '✓';
}
