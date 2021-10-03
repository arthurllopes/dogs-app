import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router'
import Head from '../../Components/Head/Head'
import LoginForm from '../../Components/LoginForm/LoginForm'
import PasswordLost from '../../Components/PasswordLost/PasswordLost'
import PasswordReset from '../../Components/PasswordReset/PasswordReset'
import SignUp from '../../Components/SignUp/SignUp'
import PageNotFound from '../PageNotFound/PageNotFound'
import { Container } from './style'
import Loading from '../../Fragments/Loading/Loading'

const Login = () => {
    const {data, loading} = useSelector(state => state.Login)
    if(loading) return <Loading />
    if(data) return <Navigate to="/account" />

    return (
        <>
        <Head title="Login"/>
        <Container>
            <div className="routes">
                <Routes>
                    <Route path="/" element={ <LoginForm /> } />
                    <Route path="/create" element={ <SignUp /> } />
                    <Route path="/lost" element={ <PasswordLost /> } />
                    <Route path="/reset" element={ <PasswordReset /> } />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Container>
        </>
    )
}

export default Login