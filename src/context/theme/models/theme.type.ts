import { type Theme } from '@mui/material'

export enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  mode: string
  toggleColorMode: () => void
  theme: Theme
}
