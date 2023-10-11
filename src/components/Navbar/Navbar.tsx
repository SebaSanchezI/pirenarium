import React, { useState } from 'react'

import { useThemeContext } from '@context/theme/themeContextProvider'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import {
  AppBar,
  Drawer,
  Grid,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Box
} from '@mui/material'
import { SocialMediaName, type NavItem, SocialMediarUrl } from './models/navbar.type'
import { NavListDrawer } from './components/NavListDrawer'
import { LIST_ITEMS_NAV } from './data'
import ThemeModeToggle from '@shared/ThemeModeToggle/ThemeModeToggle'
import logoPath from '@assets/logo-chrome.png'
import SelectLanguage from '@components/selectLanguage/SelectLanguage'
import { LANGUAGE_LIST } from '@components/selectLanguage/data/languageList'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const location = document.location
  const { theme } = useThemeContext()
  const { t } = useTranslation()

  const [open, setOpen] = useState<boolean>(false)
  const [hash, setHash] = useState<string>(LIST_ITEMS_NAV[0].path)

  const handleSendTo = (name: SocialMediaName) => {
    const url = name === SocialMediaName.INSTAGRAM ? SocialMediarUrl.INSTAGRAM : SocialMediarUrl.FACEBOOK
    const win = window.open(url, '_blank')
    win?.focus()
  }

  const handleClicButton = (path: string): void => {
    location.assign(path)
    setHash(path)
  }

  const handleClicListDrawer = (path: string): void => {
    handleClicButton(path)
    setOpen(false)
  }

  // const translation = (word: string) => {
  //   // const f = `titles.${word}`
  //   // console.log(f, t('titles.rooms'))
  //   return t(`titles.${word}`)
  // }

  return (
    <>
      <AppBar sx={{ padding: { xs: '8px 16px', sm: '8px 16px', md: '0 16px' } }}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item padding='0 16px'>
            <IconButton
              size='large'
              onClick={() => { setOpen(true) }}
              sx={{ display: { xs: 'bloke', sm: 'bloke', md: 'none' } }}
            >
              <MenuIcon color='primary' sx={{ fontSize: '30px' }} />
            </IconButton>
            <Box
              component='img'
              sx={{
                height: 80,
                width: 100,
                maxHeight: { md: 80 },
                maxWidth: { md: 100 },
                display: { xs: 'none', sm: 'none', md: 'block' },
                padding: '8px'
              }}
              alt='Pirenarium Logo'
              src={logoPath}
            />
          </Grid>
          <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <ListItem>
              {LIST_ITEMS_NAV.map(({ id, label, path }: NavItem) => (
                <ListItemButton
                  key={id}
                  selected={hash === path}
                  onClick={() => { handleClicButton(path) }}
                  >
                  <ListItemText primary={t(`titles.${label}`)} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              ))}
            </ListItem>
          </Grid>
          <Grid
            item
            padding='0 16px'
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex' },
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <SelectLanguage languages={LANGUAGE_LIST} />
            <IconButton
              size='large'
              onClick={() => { handleSendTo(SocialMediaName.INSTAGRAM) }}
              sx={{ marginLeft: '8px' }}
            >
              <InstagramIcon color='primary' />
            </IconButton>
            <IconButton
              size='large'
              onClick={() => { handleSendTo(SocialMediaName.FACEBOOK) }}
             sx={{ marginLeft: '8px' }}
            >
              <FacebookIcon color='primary' />
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
        <NavListDrawer
          listItems={LIST_ITEMS_NAV}
          location={hash}
          color={theme.palette.primary.main}
          onClick={handleClicListDrawer}
          sendSocialMediaFunction={handleSendTo}
        />
      </Drawer>
    </>
  )
}

export default Navbar
