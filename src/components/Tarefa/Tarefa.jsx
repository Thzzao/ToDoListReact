/* eslint-disable react/prop-types */
// import { useState } from "react"
import { useState } from "react"
import style from "../Tarefa/Tarefa.module.css"
// import Adicionar from "../Adicionar/Adicionar"


const Tarefa = () => {
    const [tarefas, setTarefas] = useState([
        {
            id: 1,
            text: "Arrumar o quarto",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Estudar",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Terminar o projeto da faculdade",
            isCompleted: false,
        },
        {
            id: 4,
            text: "Ir treinar",
            isCompleted: false,
        },
    ])


    return (
        <>
            <div className={style.listagem}>
                {tarefas.map((tarefa) => (
                    <div key={tarefa.id} className="tarefa">
                        <div className="content">
                            <p>{tarefa.text}</p>
                        </div>
                    </div>
                    // 
                ))}
                <div>
                    <img className={style.excluir} onClick="" src="\src\assets\bin.svg"></img>
                    <img className={style.editar} onClick="" src="\src\assets\cil_pen.svg"></img>
                    <p><label><input type="checkbox" className={style.checkbox} /><span>XXXXXXX</span></label></p>
                </div>
            </div>
        </>

    )
}



//<div className={style.tarefa}>
{/* <label>{tarefa}</label> */ }
//    <label>TAREFAAA</label>
//</div>


// Criar cada tarefa com o mesmo layout

export default Tarefa