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
    background: #111;
}

/* BARRA DE ROLAGEM */
body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-track {
    background: rgba(0, 53, 243, 0.30);
}

body::-webkit-scrollbar-thumb {
    background-color: rgb(21, 21, 21);
    border-radius: 20px;
    border: 1px solid rgb(73, 73, 73);
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
    color: #FFF;
    width: 700px;
    overflow-wrap: break-word;
}

footer {
    text-align: center;
    color: rgba(255, 255, 255, 0.25);
    font-family: Open Sans;
    font-size: 18px;
}
`