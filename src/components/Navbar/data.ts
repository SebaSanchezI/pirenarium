import { SECTION_IDS, TITLE } from '@global/constants'
import { type NavItem } from './models/navbar.type'

export const LIST_ITEMS_NAV: NavItem[] = [
  {
    id: 1,
    label: 'home',
    path: `#${SECTION_IDS.HOME}`,
    iconName: 'home'
  },
  {
    id: 2,
    label: TITLE.SERVICES,
    path: `#${SECTION_IDS.SERVICES}`,
    iconName: 'beachAccess'
  },
  {
    id: 3,
    label: TITLE.ROOMS,
    path: `#${SECTION_IDS.ROOMS}`,
    iconName: 'bed'
  },
  {
    id: 4,
    label: TITLE.FAQ,
    path: `#${SECTION_IDS.FAQ}`,
    iconName: 'helpCenter'
  },
  {
    id: 5,
    label: TITLE.BOOKING,
    path: `#${SECTION_IDS.BOOKING}`,
    iconName: 'contactPhone'
  }
]
