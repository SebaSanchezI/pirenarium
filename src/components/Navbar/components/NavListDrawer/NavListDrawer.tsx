import { type NavItem } from '@components/Navbar/models/navbar.type'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

interface NavListDrawerProps {
  listItems: NavItem[]
  location: string
  color: string
  onClick: (path: string) => void
}

const NavListDrawer: React.FC<NavListDrawerProps> = ({ listItems, location, color, onClick }) => {
  return <Box sx={{ width: '250px' }}>
    <List>
        {listItems.map(({ id, label, path }: NavItem) => (
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
