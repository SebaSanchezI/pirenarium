import { type NavItem } from './models/navbar.type'
import HomeIcon from '@mui/icons-material/Home'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import BedIcon from '@mui/icons-material/Bed'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'

export const LIST_ITEMS_NAV: NavItem[] = [
  {
    id: 1,
    name: 'home',
    label: 'Home',
    path: '#home',
    icon: HomeIcon
  },
  {
    id: 2,
    name: 'services',
    label: 'Servicios',
    path: '#services',
    icon: BeachAccessIcon
  },
  {
    id: 3,
    name: 'rooms',
    label: 'Habitaciones',
    path: '#rooms',
    icon: BedIcon
  },
  {
    id: 4,
    name: 'faqs',
    label: 'FAQ',
    path: '#faqs',
    icon: HelpCenterIcon
  },
  {
    id: 5,
    name: 'contact',
    label: 'Contacto',
    path: '#contact',
    icon: ContactPhoneIcon
  }
]
