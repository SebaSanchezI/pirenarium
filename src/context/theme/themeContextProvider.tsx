import { type PropsWithChildren, createContext, useContext } from 'react'
import { createTheme } from '@mui/material'
import { ThemeModes, type ThemeContextProps } from './models/theme.type'
import { useColorTheme } from './useColorTheme'

export const ThemeContext = createContext<ThemeContextProps>({
  mode: ThemeModes.DARK,
  toggleColorMode: () => {},
  theme: createTheme()
})

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme()
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
