import styled from "styled-components";

export const FormContainer = styled.div`
    form{
    margin-top: 2rem;  
    }

   .link{
        display: inline-block;
        color: #666;
        padding: 0.5rem 0;
        line-height: 1;
        &::after {
            content: '';
            width: 100%;
            height: 2px;
            background: currentColor;
            display: block;
        }
   }
    .sign-up{
        margin: 2rem 0;
        p {
        margin: 2rem 0;
        }
    }
    .btn{
        font-size: 1rem;
        font-family: var(--type-first);
        border: none;
        border-radius: 4px;
        background-color: #fb1;
        color: #764701;
        padding: .8rem 1.2rem;
        transition: .1s;
        min-width: 8rem;

        &:hover,
        &:focus{
            box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1; 
        }
        &:disabled {
            opacity: .5;
            cursor: default;
        }  
    }
`