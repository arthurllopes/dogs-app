import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../.././Fragments/Input/Input'
import Button from '../.././Fragments/Button/Button'
import useForm from '../../Hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../store/Login'
import {FormContainer} from './style'


const LoginForm = () => {
    const {error, loading} = useSelector(state => state.Login)
    const username = useForm()
    const password = useForm()
    const dispatch = useDispatch()

    async function handleSubmitLogin(event) {
        event.preventDefault();
        if(username.validate() && password.validate()){
            dispatch(userLogin({
                username: username.value,
                password: password.value
            }))
        }
    }
    return (
        <FormContainer className="animeLeft">
            <h1>Login</h1>
            <form onSubmit={handleSubmitLogin}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Carregando...</Button>   
                :
                <Button type="submit" >Entrar</Button>
                }
                {error && <p>Dados incorretos</p> }
            </form>
      
            <Link className="link" to='/login/lost'>Perdeu a senha?</Link>

            <div className="sign-up">
                <h2>Cadastre-se</h2>
                <p>Ainda não possui conta ? Cadastre-se no site.</p>
                <Link className="btn" to="/login/create">Cadastre-se</Link>
            </div>
        </FormContainer>
    )
}

export default LoginForm
