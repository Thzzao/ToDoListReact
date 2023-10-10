import "./Button.module.css"

function Button({ click, text }) {
    return (
        <button onClick={(event) => {
            event.preventDefault()
            click()
        }}>{text}</button>
    )
}


export default Button


