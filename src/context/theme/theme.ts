import { THEME_PALLETE_DARK, THEME_PALLETE_LIGHT } from '@config/theme_pallete'
import { type PaletteMode } from '@mui/material'
import { ThemeModes } from './models/theme.type'

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h3: {
      color: `${mode === ThemeModes.LIGHT
        ? THEME_PALLETE_LIGHT.text.primary
        : THEME_PALLETE_DARK.text.primary
        }`,
      fontSize: '2rem',
      fontWeight: 600
    }
  },
  palette: {
    mode,
    ...(
      mode === ThemeModes.LIGHT
        ? THEME_PALLETE_LIGHT
        : THEME_PALLETE_DARK
    )
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        style: {
          backgroundColor: `${mode === ThemeModes.LIGHT
            ? THEME_PALLETE_LIGHT.background.navbar
            : THEME_PALLETE_DARK.background.navbar
            }`,
          backdropFilter: 'blur(16px)',
          boxShadow: 'none',
          backgroundImage: 'none'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: `${mode === ThemeModes.LIGHT
            ? THEME_PALLETE_LIGHT.background.paper
            : THEME_PALLETE_DARK.background.paper
            }`,
          backgroundImage: 'none'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          color: `${mode === ThemeModes.LIGHT ? THEME_PALLETE_LIGHT.text.primary : THEME_PALLETE_DARK.text.primary}`,
          '&:hover': {
            backgroundColor: THEME_PALLETE_LIGHT.primary.hover
          },
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            borderBottom: `4px solid ${THEME_PALLETE_LIGHT.primary.main}`
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '4px',
          borderRadius: '10px',
          border: '1px solid',
          borderColor: `${mode === ThemeModes.LIGHT ? 'transparent' : '#1f262e'}`,
          '&:hover': {
            borderColor: ` ${mode === ThemeModes.LIGHT ? 'transparent' : '#2f3a46'}`
          }
        }
      }
    }
  }
})

export default THEME_PALLETE_LIGHT
