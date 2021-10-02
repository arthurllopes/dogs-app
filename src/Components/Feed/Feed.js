import React from 'react'
import FeedPhotos from '../FeedPhotos/FeedPhotos'
import PhotoModal from '../PhotoModal/PhotoModal'

const Feed = ({user}) => {

  const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <div>
          <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
          {modalPhoto && <PhotoModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
        </div>
    )
}

export default Feed