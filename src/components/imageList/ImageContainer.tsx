import * as React from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import useBreakpoint from '@hooks/useBreakpoints'
import { useThemeContext } from '@context/theme/themeContextProvider'
import { ThemeModes } from '@context/theme/models/theme.type'

import { type ImageItemInterface } from './model/imageList.type'
import { CustomImage } from './styles'

interface ImageContainerProps {
  list: ImageItemInterface[]
}

const ImageContainer: React.FC<ImageContainerProps> = ({ list }) => {
  const { theme } = useThemeContext()
  const breakpoint = useBreakpoint()

  const cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 5
  }[breakpoint]

  return (
    <Box sx={{
      height: 'calc(90vh - 104px)',
      overflowY: 'scroll',
      '::-webkit-scrollbar': {
        width: '8px'
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent'
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: `${theme.palette.mode === ThemeModes.DARK ? '#233448' : '#c1c1c1'}`,
        borderRadius: '8px'
      }
    }}>
      <ImageList
        variant='masonry'
        cols={cols}
        gap={8}
      >
        {list.map((item: ImageItemInterface) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover': {
                '& > img': {
                  transform: 'scale(1.2)'
                }
              }
            }}
          >
            <CustomImage
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default ImageContainer
