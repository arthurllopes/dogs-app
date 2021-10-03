import React from 'react'
import { FORGOT_PASSWORD } from '../../api'
import Button from '../../Fragments/Button/Button'
import Input from '../../Fragments/Input/Input'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'

const PasswordLost = () => {
    const login = useForm();
    const { data, loading, error, request } = useFetch();

    async function handleSubmitForgottPassword(event) {
        event.preventDefault();
        if (login.validate()) {
        const { url, options } = FORGOT_PASSWORD({
            login: login.value,
            url: window.location.href.replace('lost', 'reset'),
        });
        await request(url, options);
        }
    }
    return (
        <div>
            <h1>Perdeu a senha ?</h1>

            {data ? (
            <p>{data}</p>
            ) : (
            <form onSubmit={handleSubmitForgottPassword}>
                <Input label="Email / Usuário" type="text" name="login" {...login} />
                {loading ? (
                <Button disabled>Enviando...</Button>
                ) : (
                <Button>Enviar Email</Button>
                )}
            </form>
            )}
            <p>{error} </p>
        </div>
    )
}

export default PasswordLost
