import Button from '../components/Button/Button'
import line from "../../public/Line 1.svg"
import '../style/app.module.css'

function CriaTarefa() {
    console.log("TAREFA CRIADA")
}

function App() {
    return (
        <div className='container'>
            <div className='titulo'><h1>LISTA DE TAREFAS</h1></div>
            <div className='task'>
                <input type="text" placeholder='Nome da tarefa'></input>
                {/* <Button text='+ Adicionar' /> */}
                <Button text='+ Adicionar' click={() => {
                    CriaTarefa()
                }}></Button>
            </div>
            <div className="linha">
                <img src={line} alt='Linha azul separando o título do botão'></img>
            </div>
            <div className='pesquisa'>
                <input type='text' placeholder='Pesquisar uma tarefa'></input>
            </div>
            <div className='tarefas'>
                {/* <label>{tarefa}</label> */}
            </div>
            <footer>by Thzzao</footer>
        </div>
    )
}

export default App
