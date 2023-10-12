import { useState } from "react"
import style from "../Tarefa/Tarefa.module.css"
import Adicionar from "../Adicionar/Adicionar"
import BoxTarefa from "../BoxTarefa/BoxTarefa"

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
        if (text.length < 3) {
            return
        } else {
            const newTarefa = [...tarefas,
            {
                id: Math.floor(Math.random() * 10000),
                text: text,
            },
            ]
            setTarefas(newTarefa)
        }
    }

    const [pesquisa, setPesquisa] = useState("")

    const excluirTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    const editarTarefa = () => {
        //fazer a edição usando o estado (se true return um input)


    }

    return (
        <>
            <Adicionar handleSubmit={handleSubmit} value={value} setValue={setValue} addTarefa={addTarefa} pesquisa={pesquisa} setPesquisa={setPesquisa} />

            <div className={style.listagem}>
                {
                    tarefas.filter((tarefa) => tarefa.text.toLowerCase().includes(pesquisa.toLowerCase())).map((tarefa) => (
                        <BoxTarefa key={tarefa.id} excluirTarefa={excluirTarefa} editarTarefa={editarTarefa} text={tarefa.text} id={tarefa.id} />
                    ))}
            </div>
        </>
    )
}

export default Tarefa