import styled from "styled-components";

export const Button = styled.button`
  background: #ddd;
  padding: .4rem .8rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: .875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: .4rem;
  transition: .2s;
  &:hover,
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`