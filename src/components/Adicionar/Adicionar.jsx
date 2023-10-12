import style from "../Adicionar/Adicionar.module.css"
import Button from "../Botão/Button"
import line from "../../assets/Line 1.svg"
import { useState } from "react"
import { Tarefa } from "../Tarefa/Tarefa"


const Adicionar = () => {
    console.log(Tarefa.tarefas)
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        // addTarefa(value)
        setValue("")
    }


    // const addTarefa = (text) => {
    //     const newTarefa = [...tarefas,
    //     {
    //         id: Math.floor(Math.random() * 10000),
    //         text: text,
    //         isCompleted: false,
    //     },
    //     ]
    //     setTarefas(newTarefa)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.divtarefa} >
                <input className={style.tarefa} type="text" placeholder='Nome da tarefa' value={value} onChange={(e) => setValue(e.target.value)}></input>

                <Button type="submit" text='+ Adicionar' width='250px' height='45px' borderRadius='7px' click={() => {
                    // addTarefa(value)
                }}></Button>
            </div>

            <div >
                <img className={style.linha} src={line} alt='Linha azul separando o título do botão'></img>
            </div>
        </form>
    )
}

export default Adicionar