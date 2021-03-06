import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    #img {
        margin-bottom: 1rem;
    }

    .preview {
        border-radius: 1rem;
        background-size: cover;
        background-position: center center;

        &::after {
            content: '';
            display: block;
            height: 0px;
            padding-bottom: 100%;
        }
    }
`