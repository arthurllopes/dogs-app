import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route } from 'react-router'

const ProtectedRoute = ({path, element}) => {
    const {data} = useSelector(state => state.Login)
    if(data){
       return <Route path={path} element={element} /> 
    } else if (!data) {
        return <Navigate to="/login" />
    } else {
        return null
    }
 
}

export default ProtectedRoute
