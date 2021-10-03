import styled from "styled-components";
import image from '../../assets/login.jpg'

export const Container = styled.div`
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;


    &::before{
        display: block;
        content: '';
        background: url(${image}) no-repeat center center;
        background-size: cover;
    }
    .routes{
        max-width: 30rem;
        padding: 2rem;
    }

    @media(max-width: 40rem){
        grid-template-columns: 1fr;
        &::before{
            display: none;
        }
        .routes{
          max-width: 100%;
        }
    }
`