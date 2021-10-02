import React from 'react'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router'
import PageNotFound from '../PageNotFound/PageNotFound'
import Feed from '../../Components/Feed/Feed'
import UserStatus from '../../Components/UserStatus/UserStatus'
import PhotoPost from '../../Components/PhotoPost/PhotoPost'
import UserHeader from '../../Components/UserHeader/UserHeader'


const UserAccount = () => {
    const {data} = useSelector(state => state.Login)
    if(!data){
        return <Navigate to="/login" />
    }
    return (
        <div style={{paddingTop: '4rem'}}>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id}/>} />
                <Route path="/post" element={<PhotoPost />} />
                <Route path="/statistics" element={<UserStatus />} />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </div>
    )
}

export default UserAccount
