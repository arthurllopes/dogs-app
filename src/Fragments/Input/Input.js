import React from 'react'
import { InputContainer } from './style'

const Input = ({...props}) => {
    return (
        <InputContainer>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} id={props.name} value={props.value} onChange={props.onChange}  onBlur={props.onBlur} />
            {props.error && <p className="error">{props.error}</p>}
        </InputContainer>
    )
}

export default Input
