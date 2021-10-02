import styled from "styled-components";
import blackView from "../../assets/visualizacao-black.svg";

export const Container = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: .2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(.8);
  animation: enter .3s forwards;
  @keyframes enter {
    to {
      opacity: initial;
      transform: initial;
    }
  }
  @media(max-width: 64rem){
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`

export const ImageContainer = styled.div`
  grid-row: 1/4;
  @media(max-width: 64rem){
    grid-row: 1;
  }
`

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
  
  h1 {
    a {
      color: black;
    }
  }
`

export const Author = styled.p`
  opacity: .5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    color: black;
    &:hover{
      text-decoration: underline;
    }
  }
`

export const Views = styled.span`
  &::before{
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: .5rem;
    background: url(${blackView});
  }
`

export const Attributes = styled.ul`
  display: flex;
  font-size: 1.125rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  li {
    margin-right: 2rem;
    &::before {
      content: '';
      display: inline-block;
      height: 20px;
      margin-right: .5rem;
      position: relative;
      top: 3px;
      width: 2px;
      background: black;
      margin-top: 5px;
    }
  }
`