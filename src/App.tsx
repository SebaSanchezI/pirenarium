import { CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from '@context/theme/themeContextProvider'

export function App () {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  )
}
