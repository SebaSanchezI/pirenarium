import { THEME_PALLETE_DARK, THEME_PALLETE_LIGHT } from '@config/theme_pallete'
import { type PaletteMode } from '@mui/material'

const theme = {
  palette: {
    primary: {
      main: '#14599c'
    }
  }
}

export const getDesignTokens = (mode: PaletteMode) => ({
  // typography: {
  //   // esto setea la font global
  //   fontFamily: themePalette.font.jetBrains
  // },
  palette: {
    mode,
    ...(
      mode === 'light'
        ? THEME_PALLETE_LIGHT
        : THEME_PALLETE_DARK
    )
  }
})

export default theme
