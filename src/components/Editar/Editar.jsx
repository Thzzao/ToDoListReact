import { useState } from "react"
import Button from "../Botão/Button"
import style from "../Editar/editar.module.css"

export const Editar = ({ editarTarefa, task }) => {
    const [value, setValue] = useState(task.text)

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarefa(value, task.id);
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit} className={style.divtarefa} >
            <input className={style.tarefa} type="text" placeholder='Nome da nova tarefa' value={value} onChange={(e) => setValue(e.target.value)}></input>

            <Button type="submit" text='Atualizar' width='200px' height='45px' borderRadius='7px' click={() => {
                editarTarefa(value)
            }}></Button>
        </form>
    )
}

