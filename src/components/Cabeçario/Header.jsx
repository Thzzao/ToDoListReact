import styled from "styled-components"

export const Header = () => {
    return (
        <StyleTitulo>
            <h1>LISTA DE TAREFAS</h1>
        </StyleTitulo>
    )
}

const StyleTitulo = styled.div`
    > h1{
        color: ${(props) => props.theme.branco};
        text-align: center;
        font-family: Spinnaker;
        font-size: 3rem;
        font-weight: 400;
        padding-bottom: 10px;
        padding-top: 20px;
        width: fit-content;
    }
`
