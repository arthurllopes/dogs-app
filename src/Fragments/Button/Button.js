import React from 'react'
import { ButtonContainer } from './style'

const Button = ({type, children, ...props}) => {
    return (
        <ButtonContainer type={type} {...props}>
            {children}
        </ButtonContainer>
    )
}

export default Button
