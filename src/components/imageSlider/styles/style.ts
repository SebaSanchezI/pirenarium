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
  background: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%) rgba(0, 0, 0, 0.1);
`

export const Img = styled('img')`
  border-radius: 8px;
  box-shadow: 0 0 8px #666;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s easy-out;
  z-index: -1;
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