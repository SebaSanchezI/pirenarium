import { SocialMediaName, type NavItem } from '@components/Navbar/models/navbar.type'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  IconButton
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

import HomeIcon from '@mui/icons-material/Home'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import BedIcon from '@mui/icons-material/Bed'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'

import ThemeModeToggle from '@shared/ThemeModeToggle/ThemeModeToggle'

interface NavListDrawerProps {
  listItems: NavItem[]
  location: string
  color: string
  onClick: (path: string) => void
  sendSocialMediaFunction: (name: SocialMediaName) => void
}

interface ItemIcon {
  name: string
  Icon?: React.ReactNode
}

const ICON_LIST: ItemIcon[] = [
  { name: 'home', Icon: <HomeIcon color='primary' /> },
  { name: 'beachAccess', Icon: <BeachAccessIcon color='primary' /> },
  { name: 'bed', Icon: <BedIcon color='primary' /> },
  { name: 'helpCenter', Icon: <HelpCenterIcon color='primary' /> },
  { name: 'contactPhone', Icon: <ContactPhoneIcon color='primary'/> }
]

const NavListDrawer: React.FC<NavListDrawerProps> = props => {
  const { listItems, location, color, onClick, sendSocialMediaFunction } = props

  return <Box sx={{ width: '250px' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 16px' }}>
      <Typography variant='h5'>Pirenarium</Typography>
      {/* <IconButton size='medium' onClick={toggleColorMode}>
          <CloseIcon color='primary' sx={{ fontSize: '30px' }}/>
      </IconButton> */}
    </Box>
    <Divider />
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '8px 16px'
    }}>
      <Typography>Tema</Typography>
      <Stack flexDirection='row' alignItems='center' width='100%' justifyContent='center'>
        <Typography>Light</Typography>
        <ThemeModeToggle />
        <Typography>Dark</Typography>
      </Stack>
    </Box>
    <Divider />
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px'
    }}>
      <Typography>Seguinos</Typography>
      <Stack flexDirection='row' alignItems='center' width='100%' justifyContent='flex-end'>
        <IconButton
          size='large'
          onClick={() => { sendSocialMediaFunction(SocialMediaName.INSTAGRAM) }}
        >
          <InstagramIcon color='primary' />
        </IconButton>
        <IconButton
              size='large'
              onClick={() => { sendSocialMediaFunction(SocialMediaName.FACEBOOK) }}
            >
              <FacebookIcon color='primary' />
            </IconButton>
      </Stack>
    </Box>
    <Divider />
    <List>
        {listItems.map(({ id, label, path, iconName }: NavItem) => (
          <ListItem
            key={id}
            selected={location === path}
            sx={{ '&.Mui-selected': { padding: '8px 16px 8px 10px', backgroundColor: 'transparent' } }}
          >
            <ListItemButton
              selected={location === path}
              onClick={() => { onClick(path) }}
              sx={{
                '&.Mui-selected': {
                  borderLeft: `6px solid ${color}`,
                  borderBottom: 'none'
                }
              }}
            >
              <ListItemIcon>
                {ICON_LIST.find(i => (i.name === iconName))?.Icon}
              </ListItemIcon>
              <ListItemText primary={label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  </Box>
}

export default NavListDrawer
