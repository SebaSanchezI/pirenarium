import { type SvgIconTypeMap } from '@mui/material'
import { type OverridableComponent } from '@mui/material/OverridableComponent'

export interface NavItem {
  id: number
  name: string
  label: string
  path: string
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
}
