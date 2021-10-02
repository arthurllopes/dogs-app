import React from 'react'
import { Container } from './style'

const PhotoItem = ({photo, setModalPhoto}) => {

  function handleClick(){
    setModalPhoto(photo)
  }
  return (
    <Container onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Container>
  )
}

export default PhotoItem
