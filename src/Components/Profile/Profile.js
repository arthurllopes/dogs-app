import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed/Feed'

const Profile = () => {
    const {user} = useParams()
    return (
        <div style={{paddingTop: '4rem'}}>
            <h1 style={{padding: '1rem 4rem'}}>@{user}</h1>
            <Feed user={user} />
        </div>
    )
}

export default Profile
