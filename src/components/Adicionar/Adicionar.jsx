import style from "../Adicionar/Adicionar.module.css"
import Button from "../Botão/Button"
import line from "../../assets/Line 1.svg"

const Adicionar = () => {
    function CriaTarefa() {
        console.log("TAREFA CRIADA")
    }
    return (
        <div>Adicionar
            <div className={style.tarefa}>
                <input type="text" placeholder='Nome da tarefa'></input>

                <Button text='+ Adicionar' click={() => {
                    CriaTarefa()
                    // Criar dois botões de tamanhos diferentes
                }}></Button>
            </div>

            <div className={style.linha}>
                <img src={line} alt='Linha azul separando o título do botão'></img>
            </div>
        </div>
    )
}

export default Adicionar