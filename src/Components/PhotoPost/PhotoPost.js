import React from 'react'
import { useNavigate } from 'react-router';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm'
import Button from '../../Fragments/Button/Button'
import Input from '../../Fragments/Input/Input'
import { Container } from './style';
import { PHOTO_POST } from '../../api';

const PhotoPost = () => {
    const nome = useForm();
    const peso = useForm();
    const idade = useForm();
    const [ img, setImg ] = React.useState({})
    const {data, error, loading, request} = useFetch()
    const navigate = useNavigate()
  
    React.useEffect(() => {
      if(data) navigate('/account')
    }, [data, navigate])
  
    function handleSubmit(event){
      event.preventDefault()
      const formData = new FormData();
      formData.append('img', img.raw)
      formData.append('nome', nome.value)
      formData.append('peso', peso.value)
      formData.append('idade', idade.value)
  
      const token = window.localStorage.getItem('token')
      const {url, options} = PHOTO_POST(formData, token)
      request(url, options);
    }
  
    function handleImgChange({target}){
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      })
    }
  
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome} />
          <Input label="Peso" type="number" name="peso" {...peso} />
          <Input label="Idade" type="number" name="idade" {...idade} />
          <input type="file" name="img" id="img" onChange={handleImgChange} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
          <p>{error}</p>
        </form>
        <div>
          {img.preview && <div className="preview" style={{backgroundImage: `url(${img.preview})`}}></div>}
        </div>
      </Container>
    )
}

export default PhotoPost
