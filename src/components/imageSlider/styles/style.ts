import { IconButton, styled } from "@mui/material"

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

export const ImageSliderContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px,
  min-height: 100px;
  border-radius: 8px;
  background-color: #000000c7;
`

export const Img = styled('img')`
  border-radius: 8px;
  box-shadow: 0 0 8px #666;
  width: 100%;
  height: 100%;
  transition: 0.5s easy-out;
  z-index: 0;
`

export const ArrrowButtonLeft = styled(IconButton)`
  z-index: 1;
  position: absolute;
  left: 4px;
  border-color: none;
  border: none;
  border-radius: 50%;
  padding: 6px;
  background-color: #242222ad;
  color: white; 
  &:hover {
    background-color: #242222ad;
  }
`

export const ArrrowButtonRight = styled(IconButton)`
  z-index: 1;
  position: absolute;
  right: 4px;
  border-color: none;
  border: none;
  border-radius: 50%;
  padding: 6px;
  background-color: #242222ad;
  color: white;
  &:hover {
    background-color: #242222ad;
  }
`