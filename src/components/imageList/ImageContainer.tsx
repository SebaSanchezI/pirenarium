import * as React from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import useBreakpoint from '@hooks/useBreakpoints'
import { CustomImage } from './styles'
import { useThemeContext } from '@context/theme/themeContextProvider'
import { ThemeModes } from '@context/theme/models/theme.type'

interface Props {}

const ImageContainer: React.FC<Props> = () => {
  const { theme } = useThemeContext()
  const breakpoint = useBreakpoint()

  const cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
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
        {itemData.map((item) => (
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed'
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books'
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen'
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink'
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds'
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs'
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop'
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors'
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage'
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle'
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table'
  }
]
