import React from 'react'
import {
    Attributes,
    Author,
    Container,
    Details,
    ImageContainer, Views} from "./style";

const PhotoContent = ({data}) => {
    const { photo, comments } = data;
    return (
        <Container>
        <ImageContainer>
          <img src={photo.src} alt={photo.title} />
        </ImageContainer>
      </Container>
    )
}

export default PhotoContent
