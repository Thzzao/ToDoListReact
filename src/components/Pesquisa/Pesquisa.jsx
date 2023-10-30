import styled from "styled-components"

const Pesquisa = ({ pesquisa, setPesquisa }) => {

    return (
        <StyleDiv>
            <input className="pesquisa" type='text' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder='Pesquisar uma tarefa'></input>
        </StyleDiv>
    )
}

export default Pesquisa

const StyleDiv = styled.div`
    padding-bottom: 25px;
    
    >.pesquisa {
        width: 800px;
        height: 45px;
        border-radius: 7px;
        border: 1px solid ${(props) => props.theme.preto};
        background: ${(props) => props.theme.azulClaro};
        padding: 8px;
        font-family: Open Sans;
        font-size: 20px;
        color: ${(props) => props.theme.branco};
    }
`