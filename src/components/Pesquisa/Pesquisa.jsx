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
        border: 1px solid rgba(0, 0, 0, 0.10);
        background: rgba(78, 97, 166, 0.40);
        padding: 8px;
        font-family: Open Sans;
        font-size: 20px;
        color: #FFF;
    }
`