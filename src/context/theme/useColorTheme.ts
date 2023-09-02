import { createTheme, type PaletteMode } from '@mui/material'
import React from 'react'
import { getDesignTokens } from './theme'
import { ThemeModes } from './models/theme.type'

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>('light')

  const toggleColorMode = () => { setMode((prevMode) => (prevMode === ThemeModes.LIGHT ? ThemeModes.DARK : ThemeModes.LIGHT)) }

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  )

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode
  }
}
