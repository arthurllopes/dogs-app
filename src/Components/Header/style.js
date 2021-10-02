import styled from "styled-components"
import login from '../../assets/usuario.svg'

export const HeaderContainer = styled.header`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: white;
    padding: 0 8rem;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem;
        height: 4rem;
    }
    .logo{
        padding: .5rem 0;
    }
    .login{
        display: flex;
        align-items: center;
    }
    .login::after{
        content: '';
        display: inline-block;
        width: 14px;
        height: 17px;
        margin-left: 0.5rem;
        background: url(${login}) no-repeat center center;
        margin-top: -1px;
    }
`