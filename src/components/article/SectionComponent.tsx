import React, { type ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

interface SectionComponentProps {
  sectionId: string
  title: string
  fullscreen?: boolean
  children: ReactNode
}

const SectionComponent: React.FC<SectionComponentProps> = ({ sectionId, title, fullscreen, children }) => {
  return (
    <Box
      id={sectionId}
      component='section'
      display='flex'
      flexDirection='column'
      marginBottom='32px'
      minHeight={(fullscreen !== null && fullscreen !== undefined) ? '100vh' : 0}
    >
      <Typography variant='h3' textAlign='start' marginBottom='16px'>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default SectionComponent
