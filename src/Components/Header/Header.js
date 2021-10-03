import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './style'
import {ReactComponent as Dog} from '../../assets/dogs.svg'
import { useSelector} from 'react-redux'

const Header = () => {
    const {data} = useSelector(state => state.Login)
    return (
        <HeaderContainer>
            <nav className="container">
                <Link to="/" aria-label="Dogs - Home" className="logo" >
                    <Dog />
                </Link>
                {data ? 
                <Link to="/account" className="login" >{data.nome}</Link>
                :
                <Link to="/login" className="login" >Log in | Sign Up</Link> 
            }
            </nav>
        </HeaderContainer>
    )
}

export default Header
