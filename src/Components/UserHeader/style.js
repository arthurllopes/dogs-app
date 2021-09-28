import styled from "styled-components";

export const Container = styled.div`

  header{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 2rem 0;
    position: relative;
    padding: 0 2rem;
  }

  .menuDesktop{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    a,
    button {
      background: #eee;
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
    }
  }

  .menuMobile{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px;
    right: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    border-radius: .2rem;
    transform: translateX(-20px);
    opacity: 0;
    pointer-events: none;
    a,
    button {
      display: flex;
      background: none;
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      color: black;
      &:hover{
        color: #fb1;
      }
    }
    button {
      border-bottom: none;
    }
    img {
      margin-right: .5rem;
      height: 100%;
    }
  }
  .active{
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 200;
    pointer-events: initial;
  }
`

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.2s;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: .2s;
  }
  &:hover,
  &:focus{
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
`