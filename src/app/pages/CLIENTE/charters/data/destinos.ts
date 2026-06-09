export interface Destino {
  id: string;
  nombre: string;
  estado: string;
  icon: string;
  descripcion: string;
}

export const DESTINOS_VE: Destino[] = [
  { id: 'los-roques',     nombre: 'Archipiélago Los Roques', estado: 'Dtto. Capital',  icon: '🏝️', descripcion: 'Arrecifes de coral y aguas turquesas' },
  { id: 'morrocoy',       nombre: 'Morrocoy',                estado: 'Falcón',          icon: '🦩', descripcion: 'Cayos y manglares del Caribe' },
  { id: 'mochima',        nombre: 'Mochima',                 estado: 'Anzoátegui',      icon: '⛰️', descripcion: 'Parque Nacional con bahías vírgenes' },
  { id: 'la-tortuga',     nombre: 'Isla La Tortuga',         estado: 'Miranda',         icon: '🐢', descripcion: 'Isla deshabitada de arena blanca' },
  { id: 'chichiriviche',  nombre: 'Chichiriviche',           estado: 'Falcón',          icon: '🌊', descripcion: 'Cayos con flamencos rosados' },
  { id: 'margarita',      nombre: 'Isla de Margarita',       estado: 'Nueva Esparta',   icon: '💎', descripcion: 'La Perla del Caribe' },
  { id: 'cumana',         nombre: 'Cumaná',                  estado: 'Sucre',           icon: '🏖️', descripcion: 'La ciudad más antigua de América' },
  { id: 'puerto-la-cruz', nombre: 'Puerto La Cruz',          estado: 'Anzoátegui',      icon: '⚓', descripcion: 'Puerto deportivo y playas' },
  { id: 'cayo-sombrero',  nombre: 'Cayo Sombrero',           estado: 'Falcón',          icon: '🌴', descripcion: 'El cayo más hermoso de Morrocoy' },
  { id: 'golfo-triste',   nombre: 'Golfo Triste',            estado: 'Carabobo',        icon: '🌅', descripcion: 'Aguas tranquilas para navegar' },
];
