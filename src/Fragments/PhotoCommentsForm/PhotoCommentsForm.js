import React from 'react'
import { COMMENT_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import { Button, Container, TextArea } from "./style"
import submitComment from '../../assets/enviar.svg'

const PhotoCommentsForm = ({id, setComments}) => {
    
    const {request, error} = useFetch()
    const [comment, setComment] = React.useState('')

    async function handleSubmit(event){
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json} = await request(url, options)
        if(response.ok){
        setComment('')
        setComments((comments) => [...comments, json])
        }
    }

  return (
    <Container onSubmit={handleSubmit}>
      <TextArea 
        id="comment"
        name="comment"
        placeholder="Comentar..."
        value={comment}
        onChange={({target}) => setComment(target.value)}
      />

      <Button>
        <img src={submitComment} alt='' />
      </Button>
      
      <p>{error} </p>
    </Container>
  )
}

export default PhotoCommentsForm
