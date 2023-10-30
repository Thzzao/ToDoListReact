import { useState } from "react"
import Button from "../Botão/Button"
import styled from "styled-components"

export const Editar = ({ editarTarefa, task }) => {
    const [value, setValue] = useState(task.text)

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarefa(value, task.id);
        setValue("")
    }
    return (
        <>
            <StyleDivTarefa onSubmit={handleSubmit} >
                <input className="tarefa" type="text" placeholder='Nome da nova tarefa' value={value} onChange={(e) => setValue(e.target.value)}></input>

                <Button type="submit" text='Atualizar' width='200px' height='45px' borderRadius='7px' click={() => {
                    editarTarefa(value)
                }}></Button>
            </StyleDivTarefa>
        </>
    )
}

const StyleDivTarefa = styled.form`
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    >.tarefa {
        width: 580px;
        height: 45px;
        border: none;
        padding: 8px;
        border-radius: 7px;
        border: 1px solid rgba(0, 0, 0, 0.10);
        background: rgba(78, 97, 166, 0.40);
        font-family: Open Sans;
        font-size: 20px;
        color: #FFF;
        margin-right: 20px;
    }
`
