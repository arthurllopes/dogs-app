import React from 'react'
import { ModalContainer } from './style'
import PhotoContent from '../../Fragments/PhotoContent/PhotoContent'
import Loading from '../../Fragments/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import {closeModal} from '../../store/Interface'

const PhotoModal = () => {
  const dispatch = useDispatch()
  const {error, loading, data} = useSelector(state => state.Photo)
  const {modal} = useSelector(state => state.Interface)

  React.useEffect(() => {
    dispatch(closeModal())
  }, [dispatch])

  function handleOutsideClick (event){
    if (event.target === event.currentTarget) dispatch(closeModal())
  }

  if(!modal) return null
  return (
    <ModalContainer onClick={handleOutsideClick}>
      {error && <p>{error}</p>}
      {loading && <Loading /> }
      {!loading && data && <PhotoContent />}
    </ModalContainer>
  )
}

export default PhotoModal
