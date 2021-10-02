import React from 'react'
import { PHOTOS_GET } from '../../api';
import PhotoItem from '../../Fragments/PhotoItem/PhotoItem'
import useFetch from '../../Hooks/useFetch';
import { Container } from './style';

const FeedPhotos = ({user, setModalPhoto}) => {
    const {data, loading, error, request} = useFetch();

    React.useEffect(() => {
        async function fetchPhotos(){
        const {url, options} = PHOTOS_GET({user})
        const {response, json} = await request (url, options)
        console.log(json)
        }
        fetchPhotos()
    }, [user, request])

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
