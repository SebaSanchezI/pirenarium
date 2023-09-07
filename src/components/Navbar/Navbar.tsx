import React, { useState } from 'react'

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

const Navbar: React.FC<NavbarProps> = () => {
  const location = document.location
  const { mode, theme } = useThemeContext()
  // console.log(mode, theme)
  const [open, setOpen] = useState<boolean>(false)
  const [hash, setHash] = useState<string>(LIST_ITEMS_NAV[0].path)

  const handleSendToInstagram = () => {
    const win = window.open('https://www.instagram.com/', '_blank')
    win?.focus()
  }

  const handleClicButton = (path: string): void => {
    console.log(path)
    location.assign(path)
    setHash(path)
  }

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
                  key={id}
                  selected={hash === path}
                  onClick={() => { handleClicButton(path) }}
                  >
                  <ListItemText
                    primary={label} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              ))}
            </ListItem>
          </Grid>
          <Grid item padding='0 16px'>
            <IconButton
              size='large'
              onClick={handleSendToInstagram}
            >
              <InstagramIcon color='primary' sx={{ fontSize: '28px' }} />
            </IconButton>
            <ThemeModeToggle />
          </Grid>
        </Grid>
      </AppBar>

      <Drawer
        open={open}
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
