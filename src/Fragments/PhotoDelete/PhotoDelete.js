import React from 'react'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_DELETE} from '../../api'
import {Button } from'./style'

const PhotoDelete = ({id}) => {

    const { loading, request } = useFetch();

    async function handlePhotoDelete() {
        const confirm = window.confirm(
          "Tem certeza que deseja Deletar esta foto ?"
        );
    
        if (confirm) {
          const { url, options } = PHOTO_DELETE(id);
          const { response } = await request(url, options);
          if (response.ok) window.location.reload();
        }
      }
    
      return (
        <>
          {loading ? (
            <Button disabled>Deletando...</Button>
          ) : (
            <Button onClick={handlePhotoDelete}>Deletar</Button>
          )}
        </>
      );
}

export default PhotoDelete
