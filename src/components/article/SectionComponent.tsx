import { Box, Typography } from '@mui/material'
import React, { ReactNode } from 'react'

type SectionComponentProps = {
  sectionId: string
  title: string
  children: ReactNode
}

const SectionComponent: React.FC<SectionComponentProps> = ({ sectionId, title, children }) => {
  return (
    <Box id={sectionId} component='section' display='flex' flexDirection='column'>
      <Typography variant='h3' textAlign='start' marginBottom='16px'>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default SectionComponent