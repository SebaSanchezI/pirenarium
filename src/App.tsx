import { CircularProgress, CssBaseline, ThemeProvider } from '@mui/material'
import { useThemeContext } from '@context/theme/themeContextProvider'
import { Navbar } from '@components/Navbar'
import Landing from './pages/landing/Landing'
import { Suspense } from 'react'

export function App () {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Landing />
    </ThemeProvider>
  )
}

export default function WrapperApp () {
  <Suspense fallback={<CircularProgress />}>
    <App />
  </Suspense>
}
