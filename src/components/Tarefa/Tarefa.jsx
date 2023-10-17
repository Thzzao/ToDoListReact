import { useState } from "react"
import { toast } from "react-toastify"
import style from "../Tarefa/Tarefa.module.css"
import Adicionar from "../Adicionar/Adicionar"
import BoxTarefa from "../BoxTarefa/BoxTarefa"
import { Editar } from "../Editar/Editar"



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
            toast.warning("Não é possível cadastrar uma tarefa com menos de 2 caracteres!")
            return
        } else {
            const novaTarefa = [...tarefas,
            {
                id: Math.floor(Math.random() * 10000),
                text: text,
            },
            ]
            setTarefas(novaTarefa)
        }
    }

    const [pesquisa, setPesquisa] = useState("")

    const excluirTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
    }

    const editarTarefa = (id) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, emEdicao: !tarefa.emEdicao } : tarefa))
    }

    const editarTask = (task, id) => {
        setTarefas(tarefas.map(tarefa => tarefa.id === id ? { ...tarefa, task, emEdicao: !tarefa.emEdicao } : tarefa))
    }

    return (
        <>
            <Adicionar handleSubmit={handleSubmit} value={value} setValue={setValue} addTarefa={addTarefa} pesquisa={pesquisa} setPesquisa={setPesquisa} />

            <div className={style.listagem}>
                {
                    tarefas.filter((tarefa) => tarefa.text.toLowerCase().includes(pesquisa.toLowerCase())).map((tarefa) => (

                        tarefa.emEdicao ? (
                            <Editar key={tarefa.id} editarTarefa={editarTask} task={tarefa} />
                        ) : (
                            <BoxTarefa key={tarefa.id} excluirTarefa={excluirTarefa} editarTarefa={editarTarefa} text={tarefa.text} id={tarefa.id} />
                        )
                    ))
                }
            </div>
        </>
    )
}

export default Tarefa