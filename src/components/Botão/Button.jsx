import "./Button.module.css"

function Button({ text, click, color, border, height, width, backgroundColor, borderRadius }) {
    const styleDefault = {
        color: color || "#FFF",
        border: border || "1px solid rgba(0, 0, 0, 0.10)",
        height: height || "60px",
        width: width || "350px",
        backgroundColor: backgroundColor || " #4031EC",
        borderRadius: borderRadius || "15px",
        fontSize: "23px",
    }
    return (
        <button
            style={styleDefault}
            onClick={click}
        >{text}</button>
    )
}

export default Button
