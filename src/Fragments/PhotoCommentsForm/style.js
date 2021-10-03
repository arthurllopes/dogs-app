import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 1rem;
  resize: none;
  font-family: var(--type-first);
  border: 1px solid #eee;
  padding: .5rem;
  background: #eee;
  transition: .2s;
  border-radius: 3px;
  &:hover,
  &:focus {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;
  img {
    &:hover,
    &:focus {
      filter: opacity(0.5);
    }
  }
`