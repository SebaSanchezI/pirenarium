import { useMediaQuery, useTheme } from '@mui/material'

const useBreakpoint = () => {
  const theme = useTheme()
  const breakpoints = theme.breakpoints.keys
  const matchingBreakpoint = breakpoints.filter((key) => useMediaQuery(theme.breakpoints.only(key)))[0]
  return matchingBreakpoint
}

export default useBreakpoint
