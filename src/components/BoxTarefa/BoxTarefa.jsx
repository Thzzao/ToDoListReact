import { useState } from "react"
import styled from "styled-components"

const BoxTarefa = ({ excluirTarefa, editarTarefa, text, id }) => {

    const [concluido, setConcluido] = useState(false)

    return (
        <StyleBoxTarefa key={id} >
            <StyleBox className={`${!concluido ? "ativo" : "desativado"} `}>
                <label><input type="checkbox" onChange={() => (setConcluido(!concluido))} value={concluido} /><span>{text}</span></label>

                <button className="excluir" onClick={() => {
                    excluirTarefa(id)
                }}><img src="/bin.svg"></img>
                </button>
            </StyleBox>

            <button className="editar" onClick={() => {
                editarTarefa(id)
            }}><img src="/cil_pen.svg"></img></button>
        </StyleBoxTarefa>
    )
}

export default BoxTarefa

const StyleBoxTarefa = styled.div`
    display: flex;
    padding-bottom: 20px;
    align-items: center;
    
    > .ativo {
        transition: .3s;
    }

    > .desativado {
        transition: .3s;
        background-color: ${(props) => props.theme.azulEscuro};
    }
    
    > .editar {
        margin-left: 10px;
        margin-bottom: 10px;
        background-color: transparent;
        border: none;
        width: 28px;
        height: 28px;
        cursor: pointer;
    }

    > .editar img {
        width: 32px;
        height: 31px;
    }
`

const StyleBox = styled.div`
    width: 800px;
    align-items: center;
    border: 1px solid ${(props) => props.theme.preto};
    background-color: ${(props) => props.theme.azulClaroForte};
    padding-left: 12px;
    display: flex;
    border-radius: 7px;
    padding-right: 20px;

    > .excluir {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        padding-top: 5px;
        width: 23px;
        height: 28px;
        cursor: pointer;
        border-radius: 15px;
    }

    >.excluir img {
        width: 23px;
        height: 28px;
    }
`