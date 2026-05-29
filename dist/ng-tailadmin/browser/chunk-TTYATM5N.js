// src/app/pages/alquileres/data/amenities.ts
var AMENITIES = [
  { value: "WIFI", label: "WiFi", icon: "\u{1F4F6}" },
  { value: "SOUND_SYSTEM", label: "Sistema de sonido", icon: "\u{1F50A}" },
  { value: "AIR_CONDITIONING", label: "Aire acondicionado", icon: "\u2744\uFE0F" },
  { value: "KITCHEN", label: "Cocina", icon: "\u{1F373}" },
  { value: "BATHROOM", label: "Ba\xF1o", icon: "\u{1F6BF}" },
  { value: "REFRIGERATOR", label: "Refrigerador", icon: "\u{1F9CA}" },
  { value: "DRINKING_WATER", label: "Agua potable", icon: "\u{1F4A7}" },
  { value: "SNORKELING", label: "Equipo de snorkel", icon: "\u{1F93F}" },
  { value: "FISHING_EQUIPMENT", label: "Equipo de pesca", icon: "\u{1F3A3}" },
  { value: "KAYAK", label: "Kayak", icon: "\u{1F6F6}" },
  { value: "LIFE_JACKETS", label: "Chalecos salvavidas", icon: "\u{1F9BA}" },
  { value: "FIRST_AID_KIT", label: "Botiqu\xEDn", icon: "\u{1FA79}" },
  { value: "SUN_DECK", label: "Cubierta de sol", icon: "\u2600\uFE0F" },
  { value: "DINING_AREA", label: "\xC1rea de comedor", icon: "\u{1F37D}\uFE0F" },
  { value: "CAPTAIN_INCLUDED", label: "Capit\xE1n incluido", icon: "\u2693" },
  { value: "FUEL_INCLUDED", label: "Combustible incluido", icon: "\u26FD" },
  { value: "PARKING", label: "Estacionamiento", icon: "\u{1F17F}\uFE0F" },
  { value: "GENERATOR", label: "Generador", icon: "\u{1F50B}" }
];
function amenityLabel(v) {
  return AMENITIES.find((a) => a.value === v)?.label ?? v;
}
function amenityIcon(v) {
  return AMENITIES.find((a) => a.value === v)?.icon ?? "\u2713";
}

export {
  AMENITIES,
  amenityLabel,
  amenityIcon
};
//# sourceMappingURL=chunk-TTYATM5N.js.map
