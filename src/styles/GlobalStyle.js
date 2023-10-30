import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,
:root {
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.backgroundPage};
}

/* BARRA DE ROLAGEM */
body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.azulBarraRolagem};
}

body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.pretoBarraRolagem};
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.sombraBarraRolagem};
}

button {
    font-family: Spinnaker;
    transition: .3s;
}

button:hover {
    cursor: pointer;
    opacity: 0.6;
}

label {
    display: flex;
    align-items: center;
    width: 800px;
    min-height: 45px;
}

label input:checked+span {
    text-decoration: line-through;
    color: #ffffff80;
}

input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

input[type="text"]:focus,
input[type="text"]:active{
    outline: none;
    border: 1px solid blue;
}

span {
    padding-left: 20px;
    font-family: Open Sans;
    font-size: 18px;
    color: ${(props) => props.theme.branco};
    width: 700px;
    overflow-wrap: break-word;
}

footer {
    text-align: center;
    color: ${(props) => props.theme.sombraFooter};
    font-family: Open Sans;
    font-size: 18px;
}
`