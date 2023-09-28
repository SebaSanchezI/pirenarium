import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Icon } from '@mui/material'

import { type ServiceCardInterface } from '../../models/serviceCard.type'
import { useThemeContext } from '@context/theme/themeContextProvider'
import { ThemeModes } from '@context/theme/models/theme.type'

const ServiceCard: React.FC<ServiceCardInterface> = ({ icon, title, description }) => {
  const { mode, theme } = useThemeContext()
  console.log(theme.palette.background)

  return (
    <Card sx={{
      maxWidth: 200,
      minHeight: 250,
      margin: 2,
      transition: 'all 0.25s',
      boxShadow: '0 1px 2px 0 rgba(48, 48, 48, .30), 0 1px 3px 1px rgba(48, 48, 48, .15)',
      backgroundColor: `${mode === ThemeModes.LIGHT && theme.palette.background.white}`,
      '&:hover': {
        transform: 'scale(1.1, 1.1)',
        boxShadow: '0 16px 16px rgba(0,0,0,0.25)'
      }
    }}
    >
      <CardMedia sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '16px'
      }}>
        <Icon sx={{ fontSize: 72 }}>{icon}</Icon>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign='center' fontWeight='500' >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign='justify' >
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ServiceCard
