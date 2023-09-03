import { useThemeContext } from '@context/theme/themeContextProvider'
import { ThemeModes } from '@context/theme/models/theme.type'
import { MaterialUISwitch } from './styled'

const ThemeModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext()
  return (
      <MaterialUISwitch sx={{ m: 1 }} onChange={toggleColorMode} checked={mode === ThemeModes.DARK} name='toggleTheme' />
  )
}

export default ThemeModeToggle
