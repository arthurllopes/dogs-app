import React from 'react'
import useForm from '../../Hooks/useForm' 
import { useSelector } from 'react-redux'
import Button from '../../Fragments/Button/Button'
import Input from '../../Fragments/Input/Input'
import { Container } from './style'
import { USER_POST } from '../../api'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../store/Login'
import useFetch from '../../Hooks/useFetch'



const SignUp = () => {

    const dispatch = useDispatch()
    const username = useForm('')
    const email = useForm('email')
    const password = useForm('')
    const {loading, error, request} = useFetch()

    async function handleSubmit(event){
        event.preventDefault()
        if(username.validate() && email.validate() && password.validate()){
            
            const {url, options} = USER_POST({
                username: username.value,
                email: email.value,
                password: password.value
            })
            const response = await request(url, options)
            if(response.response.ok){
                dispatch(userLogin({
                    username: username.value,
                    email: email.value,
                    password: password.value
                }))
            }
        }
    }


    return (
        <Container>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Cadastrar</Button>}
                {error && <p>{error}</p> }
            </form>
        </Container>
    )
}

export default SignUp
