import styled from "styled-components";

export const InputContainer = styled.div`
    margin-bottom: 1rem;

    input{
        border: 1px solid #eee;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: .8rem;
        border-radius: 4px;
        background-color: #eee;
        transition: .1s;

        &:focus,
        &:hover {
        border-color: #fb1;
        background: white;
        border-color: 0 0 0 3px #fea;
      }
    }

    label{
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: 0.5rem;
    }
    .error{
        color: #f31;
        font-size: .85rem;
        margin-top: .25rem;
    }
`