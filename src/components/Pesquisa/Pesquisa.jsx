import style from "../Pesquisa/Pesquisa.module.css"

const Pesquisa = ({ pesquisa, setPesquisa }) => {

    return (
        <div className={style.div}>
            <input className={style.pesquisa} type='text' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder='Pesquisar uma tarefa'></input>
        </div>
    )
}

export default Pesquisa