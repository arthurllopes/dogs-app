import React from 'react'
import { useParams } from 'react-router'
import PhotoContent from '../../Fragments/PhotoContent/PhotoContent'
import Loading from '../../Fragments/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhoto } from '../../store/Photo'

const Photo = () => {
    const dispatch = useDispatch()
    const {error, loading, data} = useSelector(state => state.Photo)
    const {id} = useParams()

    React.useEffect(() => {
        dispatch(fetchPhoto(id))
    }, [id, dispatch])

    if(error) return <p>{error}</p>
    if(loading) return <Loading />
    if (data) return <section style={{paddingTop: '4rem'}}>
        <PhotoContent />
    </section>
    else return null
}

export default Photo
