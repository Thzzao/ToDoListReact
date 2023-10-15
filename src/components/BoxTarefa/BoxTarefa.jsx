import { useState } from "react"
import style from '../BoxTarefa/boxTarefa.module.css'

const BoxTarefa = ({ excluirTarefa, editarTarefa, editarText, setEditarText, tarefa, text, value, id }) => {

    const [concluido, setConcluido] = useState(false)

    return (
        <div key={id} className={style.boxtarefa} >


            <div className={`${style.box} ${!concluido ? style.ativo : style.desativado} `}>
                <label><input type="checkbox" onChange={() => (setConcluido(!concluido))} value={concluido} className={style.checkbox} /><span>{text}</span></label>

                {/* {editarTarefa === id ? (
                    <input className={style.tarefa} type="text" value={value} onChange={(e) => setEditarText(e.target.value)}></input>) : (
                    <span>{text}</span>
                )} */}

                <button className={style.excluir} onClick={() => {
                    excluirTarefa(id)
                }}><img src="/bin.svg"></img>
                </button>

            </div>

            <button className={style.editar}><img src="/cil_pen.svg"></img></button>
        </div>
    )
}

export default BoxTarefa