import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import PhotoContent from '../../Fragments/PhotoContent/PhotoContent'

const Photo = () => {
    const {id} = useParams()
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(id)
        request(url, options)
    }, [id, request])

    if(error) return <p>{error}</p>
    if(loading) return <p>Loading..</p>
    if (data) return <section>
        <PhotoContent data={data} />
    </section>
    else return null
}

export default Photo
