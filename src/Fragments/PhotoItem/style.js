import styled from "styled-components";
import view from '../../assets/visualizacao.svg'

export const Container = styled.li`
    display: grid;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }
    &:hover{
        span{
            opacity: 1;
            display: flex;
        }
    }
    img {
        grid-area: 1/1;
    }
    span {
        background: rgba(0,0,0, .3);
        color: white;
        font-size: 1rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        grid-area: 1/1;
        opacity: 0;

        &::before {
        width: 16px;
        height: 10px;
        content: '';
        display: inline-block;
        margin-right: .25rem;
        background: url(${view}) no-repeat;
        }
    }
    @media(max-width: 40rem){
        &:nth-child(2){
        grid-column: initial;
        grid-row: initial;
        }
    }
`