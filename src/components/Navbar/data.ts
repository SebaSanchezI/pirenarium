import { type NavItem } from './models/navbar.type'

export const LIST_ITEMS_NAV: NavItem[] = [
  {
    id: 1,
    name: 'home',
    label: 'Home',
    path: '#home',
    iconName: 'home'
  },
  {
    id: 2,
    name: 'services',
    label: 'Servicios',
    path: '#services',
    iconName: 'beachAccess'
  },
  {
    id: 3,
    name: 'rooms',
    label: 'Habitaciones',
    path: '#rooms',
    iconName: 'bed'
  },
  {
    id: 4,
    name: 'faqs',
    label: 'FAQ',
    path: '#faqs',
    iconName: 'helpCenter'
  },
  {
    id: 5,
    name: 'contact',
    label: 'Contacto',
    path: '#contact',
    iconName: 'contactPhone'
  }
]
