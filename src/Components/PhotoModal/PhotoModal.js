import React from 'react'
import { PHOTO_GET } from '../../api'
import { ModalContainer } from './style'
import useFetch from '../../Hooks/useFetch'
import PhotoContent from '../../Fragments/PhotoContent/PhotoContent'

const PhotoModal = ({photo, setModalPhoto}) => {
    const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function handleOutsideClick (event){
    if (event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <ModalContainer onClick={handleOutsideClick}>
      {error && <p>{error}</p>}
      {loading && <p>loading... </p>}
      {data && <PhotoContent data={data} />}
    </ModalContainer>
  )
}

export default PhotoModal
