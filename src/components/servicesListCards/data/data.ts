import { type ServiceCardInterface } from '../models/serviceCard.type'

export const LIST_CARDS: ServiceCardInterface[] = [
  {
    title: 'Hotel',
    description: 'El hotel tiene capacidad para 200 personas.',
    icon: 'hotel'
  },
  {
    title: 'Restaurante',
    description: 'Capacidad máxima de 200 personas. Sala de eventos y reuniones.',
    icon: 'restaurant'
  },
  {
    title: 'Reuniones',
    description: 'El complejo consta de diferentes salas de reuniones totalmente equipadas.',
    icon: 'groups'
  },
  {
    title: 'WiFi',
    description: 'WiFi en todas las zonas comunes del complejo.',
    icon: 'wifi'
  },
  {
    title: 'Parking Gratis',
    description: 'El complejo consta de parking para un máximo 20 plazas.',
    icon: 'directions_car'
  },
  {
    title: 'Espectáculos',
    description: 'Espectáculos al aire libre y eventos privados a medida.',
    icon: 'theater_comedy'
  }
]
