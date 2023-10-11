import style from "../Adicionar/Adicionar.module.css"
import Button from "../Botão/Button"
import line from "../../assets/Line 1.svg"

const Adicionar = () => {
    function CriaTarefa() {
        console.log("TAREFA CRIADA")
    }
    return (
        <div>
            <div className={style.divtarefa} >
                <input className={style.tarefa} type="text" placeholder='Nome da tarefa'></input>

                <Button text='+ Adicionar' width='250px' height='45px' borderRadius='7px' click={() => {
                    CriaTarefa()
                }}></Button>
            </div>

            <div >
                <img className={style.linha} src={line} alt='Linha azul separando o título do botão'></img>
            </div>
        </div>
    )
}

export default Adicionar