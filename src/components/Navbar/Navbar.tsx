import { useState } from 'react'

import { useThemeContext } from '@context/theme/themeContextProvider'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import {
  AppBar,
  Drawer,
  Grid,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { type NavItem } from './models/navbar.type'
import { NavListDrawer } from './components/NavListDrawer'
import { LIST_ITEMS_NAV } from './data'
import ThemeModeToggle from '@shared/ThemeModeToggle/ThemeModeToggle'

interface NavbarProps { }

const Navbar: React.FC<object> = () => {
  const location = document.location
  const { mode, theme } = useThemeContext()
  console.log(mode, theme)
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <AppBar>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item padding='0 16px'>
            <IconButton
              size='large'
              onClick={() => { setOpen(true) }}
              sx={{ display: { xs: 'bloke', sm: 'bloke', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography color='primary' sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>Logo</Typography>
          </Grid>
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <ListItem>
              {LIST_ITEMS_NAV.map(({ id, label, path }: NavItem) => (
                <ListItemButton
                  component='a'
                  href={`${path}`}
                  selected={location.hash === path}
                  key={id}
                  sx={{
                    '&.Mui-selected': {
                      borderBottom: `2px solid ${theme.palette.primary.main}`
                    }
                  }}
                  >
                  <ListItemText primary={label} />
                </ListItemButton>
              ))}
            </ListItem>
          </Grid>
          <Grid item padding='0 16px'>
            <IconButton
              size='large'
            >
              <InstagramIcon color='primary' sx={{ fontSize: '28px' }} />
            </IconButton>
            <ThemeModeToggle />
          </Grid>
        </Grid>
      </AppBar>

      <Drawer
        open={open}
        color='primary'
        anchor='left'
        onClose={() => { setOpen(false) }}
        sx={{ display: { xs: 'bloke', sm: 'bloke', md: 'none' } }}
      >
        <NavListDrawer listItems={LIST_ITEMS_NAV} location={location.hash} color={theme.palette.primary.main}/>
      </Drawer>
    </>
  )
}

export default Navbar
