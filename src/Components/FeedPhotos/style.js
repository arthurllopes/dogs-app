import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem 8rem;
  @media(max-width: 40rem){
    grid-template-columns: repeat(2, 1fr);
  }
`