import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from '@context/theme/themeContextProvider'
import { Navbar } from '@components/Navbar'
import Landing from './pages/landing/Landing'

export function App () {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container
        sx={{ height: '100vh', paddingTop: '98px', paddingBottom: '24px' }}
      >
        <Landing />
      </Container>
    </ThemeProvider>
  )
}
