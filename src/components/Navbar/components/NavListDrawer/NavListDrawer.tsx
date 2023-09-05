import { type NavItem } from '@components/Navbar/models/navbar.type'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

interface NavListDrawerProps {
  listItems: NavItem[]
  location: string
  color: string
}

const NavListDrawer: React.FC<NavListDrawerProps> = ({ listItems, location, color }) => {
  return <Box sx={{ width: '250px' }}>
    <List>
        {listItems.map(({ id, label, path }: NavItem) => (
          <ListItem key={id}>
            <ListItemButton
              component='a'
              href={`${path}`}
              selected={location === path}
              sx={{
                '&.Mui-selected': {
                  borderLeft: `2px solid ${color}`
                }
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  </Box>
}

export default NavListDrawer
