# 🚤 LANCHAS COMPARTIDAS - Frontend Angular

## Resumen

Módulo completo para **Lanchas Compartidas** en Angular con:
- ✅ Servicio de API para shared-trips
- ✅ Componente de búsqueda con filtros
- ✅ Componente de detalle del viaje
- ✅ Modelos TypeScript completos
- ✅ Estilos responsivos SCSS

---

## 📁 Estructura de Carpetas

```
src/app/pages/lanchas-compartidas/
├── models/
│   └── shared-trip.model.ts          ← Interfaces y enums
├── services/
│   └── shared-trips.service.ts       ← Calls a API
├── pages/
│   ├── buscar-viaje/                 ← Componente búsqueda
│   │   ├── buscar-viaje.component.ts
│   │   ├── buscar-viaje.component.html
│   │   └── buscar-viaje.component.scss
│   └── detalle-viaje/                ← Componente detalle
│       ├── detalle-viaje.component.ts
│       ├── detalle-viaje.component.html
│       └── detalle-viaje.component.scss
└── data/                             ← (para estado global si se necesita)
```

---

## 🔌 Servicio: SharedTripsService

**Ubicación**: `services/shared-trips.service.ts`

### Métodos disponibles

```typescript
// Búsqueda de viajes
search(dto: SearchSharedTripsDto): Observable<SharedTrip[]>

// Obtener detalle
getById(id: number): Observable<SharedTrip>

// Crear viaje (proveedor)
create(dto: CreateSharedTripDto): Observable<SharedTrip>

// Agregar pasajero
addPassenger(tripId: number, dto: AddPassengerDto): Observable<SharedTrip>

// Confirmar pasajero (después de pago)
confirmPassenger(tripId: number, passengerId: number): Observable<SharedTrip>

// Verificar auto-salida
checkAndDepart(tripId: number): Observable<SharedTrip>

// Completar viaje
completeTrip(tripId: number): Observable<SharedTrip>

// Cancelar viaje
cancelTrip(tripId: number, reason: string): Observable<SharedTrip>

// Viajes activos del proveedor
getActiveByProvider(providerId: number): Observable<SharedTrip[]>
```

---

## 🎨 Componente 1: BuscarViajeComponent

**Ubicación**: `pages/buscar-viaje/buscar-viaje.component.ts`

### Funcionalidad

- **Filtros**: Origen, destino, fecha, hora, número de pasajeros
- **Búsqueda**: Llama a `sharedTripsService.search()`
- **Resultados**: Lista de viajes disponibles con:
  - Ruta y hora
  - Precio por persona
  - Asientos disponibles
  - Botón "Reservar"

### Props / Inputs

```typescript
originId: number | null
destinationId: number | null
selectedDate: string
selectedTime: string
passengers: number
```

### States

```typescript
ports: DeparturePoint[]
trips: SharedTrip[]
showResults: boolean
isLoading: boolean
isSearching: boolean
errorMessage: string
```

### Métodos Principales

```typescript
loadPorts()        // Carga puertos al iniciar
search()           // Realiza búsqueda
goToDetail(id)     // Navega a detalle
resetSearch()      // Limpia resultados
```

### UI Features

- Select dropdowns para puertos (con opciones dinámicas)
- Input date con validación de fecha mínima
- Input time opcional
- Contador de pasajeros (+/-)
- Grid responsivo (mobile-first)
- Tarjetas con hover effects
- Estados visuales (loading, error, no results)

---

## 🎨 Componente 2: DetalleViajeComponent

**Ubicación**: `pages/detalle-viaje/detalle-viaje.component.ts`

### Funcionalidad

- **Ruta**: Obtiene `id` del ActivatedRoute
- **Detalle**: Muestra información completa del viaje
- **Pasajeros**: Lista de pasajeros confirmados
- **Botón**: "Reservar Asiento" (activo si hay espacio)

### Secciones

1. **Ruta Principal**
   - Origen → Destino
   - Fecha y hora de salida
   - Duración estimada

2. **Información del Viaje**
   - Estado (Buscando pasajeros, Listo, etc.)
   - Precio por asiento
   - Asientos disponibles

3. **Embarcación**
   - Nombre
   - Capacidad total

4. **Operador**
   - Nombre y estado (verificado ✓)

5. **Pasajeros Confirmados**
   - Lista con número de asiento
   - Nombre del pasajero
   - Estado (Confirmado)

### Métodos

```typescript
loadTrip()          // Carga datos desde API
goToReservation()   // Navega a reserva
goBack()            // Vuelve a búsqueda
```

---

## 📱 Modelos TypeScript

**Ubicación**: `models/shared-trip.model.ts`

### SharedTrip
```typescript
interface SharedTrip {
  id: number
  origin: DeparturePoint
  destination: DeparturePoint
  vessel: Vessel
  provider: User
  passengers: SharedTripPassenger[]
  scheduledDepartureTime: string
  actualDepartureTime?: string
  arrivalTime?: string
  maxPassengers: number
  pricePerPassenger: number
  estimatedDurationMinutes?: number
  status: SharedTripStatus
  cancellationReason?: string
}
```

### SharedTripPassenger
```typescript
interface SharedTripPassenger {
  id: number
  seatNumber: number
  pricePaid: number
  status: PassengerStatus
  phoneNumber?: string
  refundedAt?: string
  passenger: User
}
```

### DTOs

```typescript
// Búsqueda
SearchSharedTripsDto {
  originId: number
  destinationId: number
  date: string        // YYYY-MM-DD
  time?: string       // HH:mm
  passengerCount?: number
}

// Agregar pasajero
AddPassengerDto {
  passengerId: number
  phoneNumber?: string
}

// Crear viaje
CreateSharedTripDto {
  originId: number
  destinationId: number
  vesselId: number
  scheduledDepartureTime: string
  maxPassengers: number
  pricePerPassenger: number
  estimatedDurationMinutes?: number
}
```

---

## 🔄 Routing

Para integrar en el routing de la aplicación:

```typescript
// app.routing.ts
{
  path: 'lanchas-compartidas',
  children: [
    {
      path: '',
      component: BuscarViajeComponent,
    },
    {
      path: ':id',
      component: DetalleViajeComponent,
    },
    {
      path: ':id/reservar',
      component: ReservaComponent, // (Por crear - usará PaymentComponent)
    },
  ],
}
```

---

## 🎨 Estilos

### Colores
```scss
$primary: #2563eb     // Azul
$secondary: #14b8a6   // Verde agua
$success: #22c55e     // Verde
$danger: #ef4444      // Rojo
$slate: #64748b       // Gris oscuro
$bg: #f8fafc          // Fondo claro
```

### Breakpoints
- Desktop: 768px+
- Mobile: < 768px

### Features
- Grid responsivo
- Hover effects en tarjetas
- Transiciones suaves (0.2s)
- Sombras en interacciones
- Focus states accesibles

---

## 🔗 Integración con Otros Módulos

### Dependencias
- `DeparturePointsService` (para cargar puertos)
- `SharedTripsService` (creado)

### Compatibilidad
- Angular 14+
- RxJS 7+
- Standalone components

---

## 📋 Cambios Necesarios en app.routing.ts

Agregar este bloque:

```typescript
import { BuscarViajeComponent } from './pages/lanchas-compartidas/pages/buscar-viaje/buscar-viaje.component';
import { DetalleViajeComponent } from './pages/lanchas-compartidas/pages/detalle-viaje/detalle-viaje.component';

// En las rutas:
{
  path: 'lanchas-compartidas',
  children: [
    {
      path: '',
      component: BuscarViajeComponent,
    },
    {
      path: ':id',
      component: DetalleViajeComponent,
    },
  ],
}
```

---

## 🚀 Próximos Pasos

1. **Componente de Reserva**: Crear `ReservaViajeComponent`
   - Mostrar resumen
   - Campo de teléfono
   - Integrar con PaymentComponent

2. **Confirmación de Pago**: Actualizar `PaymentComponent`
   - Soportar `tripType: 'SHARED_TRIP'`
   - Auto-confirmar pasajero después de pago

3. **Dashboard Proveedor**: Ver viajes activos
   - Usar `getActiveByProvider()`
   - Mostrar estado en tiempo real

---

## ✅ Checklist de Testing

- [ ] Búsqueda con filtros
- [ ] Vista de detalle carga correctamente
- [ ] Botón "Reservar" deshabilitado si no hay asientos
- [ ] Responsividad en mobile
- [ ] Errores manejados (sin puertos, sin resultados)
- [ ] Navegación entre componentes
