import style from "../Pesquisa/Pesquisa.module.css"

const Pesquisa = () => {

    // function PesquisaTarefa(){
    // }

    return (
        <div className={style.div}>
            <input className={style.pesquisa} type='text' placeholder='Pesquisar uma tarefa'></input>
        </div>
    )
}

export default Pesquisa