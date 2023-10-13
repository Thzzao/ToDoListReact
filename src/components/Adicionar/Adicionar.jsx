import Button from "../Botão/Button"
import Pesquisa from "../Pesquisa/Pesquisa"
import line from "../../../public/Line 1.svg"
import style from '../Adicionar/adicionar.module.css'

const Adicionar = ({ handleSubmit, value, setValue, addTarefa, pesquisa, setPesquisa }) => {
    return (
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
    )
}

export default Adicionar