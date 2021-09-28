import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router'

const ProtectedRoute = ({path, element, page}) => {
    const {data} = useSelector(state => state.Login)
    if(data){
        return <Route path={path} element={element} /> 
    } else {
        return <Navigate to={page} />
    }
}

export default ProtectedRoute
