import React from 'react'
import PhotoItem from '../../Fragments/PhotoItem/PhotoItem'
import { Container } from './style';
import { useSelector } from 'react-redux';

const FeedPhotos = () => {
  const {list} = useSelector(state => state.Feed)
  return (
    <Container>
      {list.map(photo => {
        return (
          <PhotoItem key={photo.id} photo={photo} />
        )
      })}
    </Container>
  )
}

export default FeedPhotos
