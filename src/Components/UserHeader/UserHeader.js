import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { userLogout } from '../../store/Login'
import feedImg from '../../assets/feed.svg'
import statsImg from '../../assets/estatisticas.svg'
import addImg from '../../assets/adicionar.svg'
import logImg from '../../assets/sair.svg'
import { Container, MobileButton} from './style'
import useMedia from '../../Hooks/useMedia'

const UserHeader = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    const [title, setTitle] = React.useState('')

    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false);

    React.useEffect(() => {
        setMobileMenu(false)
        if(pathname === '/profile'){
            setTitle('Minha Conta')
          }
          if(pathname === '/profile/statistics'){
            setTitle('Estatísticas')
          }
          if(pathname === '/profile/post'){
            setTitle('Adicionar Foto')
          }
    }, [pathname])
    return (
        <Container>
            <header>
                <h1>{title}</h1>
                {mobile && (
                    <MobileButton
                        aria-label="Menu"
                        onClick={() => setMobileMenu(!mobileMenu)}>
                    </MobileButton>
                )}
                <nav className={`${mobile? "menuMobile" : "menuDesktop"} ${mobileMenu && "active"}`}>
                    <NavLink to="/profile" end>
                        <img src={feedImg} alt="Feed" />
                        {mobile && "Minhas fotos"}
                    </NavLink>

                    <NavLink to="/profile/statistics">
                        <img src={statsImg} alt="Estatisticas" />
                        {mobile && "Estatísticas"}
                    </NavLink>

                    <NavLink to="/profile/post">
                        <img src={addImg} alt="Adicionar" />
                        {mobile && "Adicionar"}
                    </NavLink>
                    <button onClick={() => dispatch(userLogout())}>
                        <img src={logImg} alt="Sair" />
                        {mobile && "Sair"}
                    </button>
                </nav>
            </header>
        </Container>
    )
}

export default UserHeader
