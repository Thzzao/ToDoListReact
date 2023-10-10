// import React from 'react'
import "../Button/Button.css"


// const vira uma função e retorna o botão

// const Button = (props) => {
//     return (
//         <button>{props.text}</button>
//     )
// }

export function Button({ click, text }) {
    return (
        <button onClick={(event) => {
            event.preventDefault()
            click()
        }}>{text}</button>
    )
}


// import { PrimaryButton, SecondaryButton } from "./button.styles"

// const Button = ({ variant, texto, width, onClick }) => {
//     return (
//         <>
//             {variant == 'primary' && <PrimaryButton onClick={onClick} width={width}>{texto}</PrimaryButton>}
//             {variant == 'secundary' && <SecondaryButton onClick={onClick} width={width}>{texto}</SecondaryButton>}
//         </>
//     )
// }

export default Button

//rafce - Cria o compenten automaticamente 
