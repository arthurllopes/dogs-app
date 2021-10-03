import React from 'react'
import { PHOTOS_GET } from '../../api';
import PhotoItem from '../../Fragments/PhotoItem/PhotoItem'
import useFetch from '../../Hooks/useFetch';
import { Container } from './style';

const FeedPhotos = ({user, page, setModalPhoto, setInfinite}) => {
    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
      async function fetchPhotos(){
        const total = 3
        const {url, options} = PHOTOS_GET({page, total, user})
        const {response, json} = await request (url, options)
        if(response && response.ok && json.length < total){
          setInfinite(false)
        }
      }
      fetchPhotos()
    }, [user, page, request, setInfinite])

    if(error) return <p>{error}</p>
    if(loading) return <p>loading...</p>
    if(data)
    return (
        <Container>
          {data.map(photo => {
            return (
              <PhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
            )
          })}
        </Container>
      )
      else return null
}

export default FeedPhotos
