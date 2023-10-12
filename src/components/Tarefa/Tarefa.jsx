/* eslint-disable react/prop-types */

import { useState } from "react"
import style from "../Tarefa/Tarefa.module.css"
import Button from "../Botão/Button"
import line from "../../assets/Line 1.svg"
import Pesquisa from "../Pesquisa/Pesquisa"

const Tarefa = () => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        setValue("")
    }

    const [tarefas, setTarefas] = useState([
        {
            id: 1,
            text: "Arrumar o quarto",
        },
        {
            id: 2,
            text: "Estudar",
        },
        {
            id: 3,
            text: "Terminar o projeto da faculdade",
        },
        {
            id: 4,
            text: "Ir treinar",
        },
    ])

    const addTarefa = (text) => {
        const newTarefa = [...tarefas,
        {
            id: Math.floor(Math.random() * 10000),
            text: text,
        },
        ]
        setTarefas(newTarefa)
    }

    function excluirTarefa(id) {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    function editarTarefa() {
        // setValue(e.target.value)
    }

    const [pesquisa, setPesquisa] = useState("")

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={style.divtarefa} >
                    <input className={style.tarefa} type="text" placeholder='Nome da tarefa' value={value} onChange={(e) => setValue(e.target.value)}></input>

                    <Button type="submit" text='+ Adicionar' width='250px' height='45px' borderRadius='7px' click={() => {
                        addTarefa(value)
                    }}></Button>
                </div>

                <div >
                    <img className={style.linha} src={line} alt='Linha azul separando o título do botão'></img>
                </div>

                <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />

            </form>
            <div className={style.listagem}>
                {
                    tarefas.filter((tarefa) => tarefa.text.toLowerCase().includes(pesquisa.toLowerCase())).map((tarefa) => (
                        <div key={tarefa.id} className={style.boxtarefa} >
                            <div className={style.box}>
                                <label><input type="checkbox" className={style.checkbox} /><span>{tarefa.text}</span></label>

                                <button className={style.excluir} onClick={() => {
                                    excluirTarefa(tarefa.id)
                                }}><img src="\src\assets\bin.svg"></img>
                                </button>
                            </div>

                            <button className={style.editar} onClick={() => {

                                editarTarefa()

                            }} ><img src="\src\assets\cil_pen.svg"></img></button>
                        </div>
                    ))}
            </div>
        </>

    )
}
export default Tarefa