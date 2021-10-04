import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import PhotoDelete from '../PhotoDelete/PhotoDelete';
import {Attributes, Author, Container, Details, ImageContainer, Views} from "./style";

const PhotoContent = () => {
    const user = useSelector(state => state.Login)
    const { photo, comments } = useSelector(state => state.Photo.data);

    return (
        <Container>
        <ImageContainer>
          <img src={photo.src} alt={photo.title} />
        </ImageContainer>
        <Details>
        <Author>
          {user.data && user.data.username === photo.author ? (
            <PhotoDelete id={photo.id} />
          ) : (
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
          )}
          <Views>{photo.acessos}</Views>
        </Author>
        <h1>
          <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
        </h1>
        <Attributes>
          <li>{photo.peso} Kg</li>
          <li>
            {photo.idade} {photo.idade === 1 ? "Ano" : "Anos"}
          </li>
        </Attributes>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
      </Container>
    )
}

export default PhotoContent
