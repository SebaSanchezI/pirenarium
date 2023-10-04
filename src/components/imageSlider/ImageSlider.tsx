import { useEffect, useState } from 'react'

import { Box, IconButton } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import { type Slice } from './models/imageSlider.type'
import { Container, ImageSliderContainer, Img, ArrrowButtonLeft, ArrrowButtonRight } from './styles/style'

interface ImageSliderProps {
  slices: Slice[]
  showArrows?: boolean
  autoPlay?: boolean
  width?: string
  height?: string
}

const ImageSlider = ({ slices, showArrows, autoPlay, width, height }: ImageSliderProps) => {
  const [sliceSelected, setSliceSelected] = useState<number>(0)

  const handlePreviousSlice = () => {
    setSliceSelected((prevValue: number) => {
      if (prevValue === 0) return slices.length - 1
      return prevValue - 1
    })
  }

  const handleNextSlice = () => {
    setSliceSelected((prevValue: number) => {
      if (prevValue === slices.length - 1) return 0
      return prevValue + 1
    })
  }

  if (slices.length < 1) return

  useEffect(() => {
    if (autoPlay === true) {
      const interval = setInterval(() => {
        handleNextSlice()
      }, 2000)
      return () => { clearInterval(interval) }
    }
  }, [])

  return (
    <Container>
      <ImageSliderContainer
      sx={{
        width: `${width}`,
        height: `${height}`
      }}
      >
        {(showArrows === true) &&
          <ArrrowButtonLeft size='large' onClick={handlePreviousSlice}>
            <ArrowBackIosIcon sx={{ width: '2rem', height: '2rem' }} viewBox='0 0 14 24' />
          </ArrrowButtonLeft>
        }

        {
          slices.map((s: Slice, i) => (
            sliceSelected === i &&
            <Img
              key={i}
              src={s.src}
              alt={s.alt}
              loading='lazy'
            />
          ))
        }
        {(showArrows === true) &&
          <ArrrowButtonRight size='large' onClick={handleNextSlice}>
            <ArrowForwardIosIcon sx={{ width: '2rem', height: '2rem' }}/>
          </ArrrowButtonRight>
        }

        <Box position='absolute' display='flex' bottom='12px'sx={{ borderRadius: '12px' }}>
          {slices.map((_, idx) => (
            <IconButton key={idx} size='small' onClick={() => { setSliceSelected(idx) }} sx={{ padding: 0, border: 'none' }}>
              <FiberManualRecordIcon
              sx={{
                width: '1rem',
                height: '1rem',
                color: `${idx === sliceSelected ? 'white' : '#363535'}`,
                transition: '0.5s ease-in'
              }}
              />
            </IconButton>
          ))}
        </Box>
      </ImageSliderContainer>
    </Container>
  )
}

export default ImageSlider
