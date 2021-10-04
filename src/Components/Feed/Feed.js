import React from 'react'
import FeedPhotos from '../FeedPhotos/FeedPhotos'
import PhotoModal from '../PhotoModal/PhotoModal'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { loadNewPhotos, resetFeed } from '../../store/Feed'
import Loading from '../../Fragments/Loading/Loading'

const Feed = ({user}) => {

  const {infinite, list, loading, error} = useSelector(state => state.Feed)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(resetFeed())
    dispatch(loadNewPhotos({total: 6, user}))
  }, [user, dispatch])
 
  React.useEffect(() => {
    let wait = false
    function infiniteScroll(){
      if(infinite){
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight
        if(scroll > height * .9 && !wait){
          dispatch(loadNewPhotos({total: 6, user}))
          wait = true
          setTimeout(() => {
            wait = false
          }, 800)
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll)
    window.addEventListener('scroll', infiniteScroll)
    
    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite, user, dispatch])

    return (
        <div>
          <PhotoModal />
          {error && <p>{error}</p>}
          {loading && <Loading />}
          {list.length > 0 && <FeedPhotos />}
        </div>
    )
}

Feed.defaultProps = {
  user: 0
}

Feed.prototype = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired])
}

export default Feed