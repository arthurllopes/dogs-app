import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/Interface'
import { fetchPhoto } from '../../store/Photo'
import { Container } from './style'

const PhotoItem = ({photo}) => {
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(openModal())
    dispatch(fetchPhoto(photo.id))
  }
  return (
    <Container onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </Container>
  )
}

export default PhotoItem
