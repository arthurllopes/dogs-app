import React from 'react'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const UserAccount = () => {
    const {data} = useSelector(state => state.Login)
    if(!data){
        return <Navigate to="/login" />
    }
    return (
        <div style={{paddingTop: '4rem'}}>
            conta
        </div>
    )
}

export default UserAccount
