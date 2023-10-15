import { Header } from '../../components/Cabeçario/Header'
import style from '../App/app.module.css'
import Tarefa from '../../components/Tarefa/Tarefa'


function App() {
    return (
        <div className={style.container}>
            <Header />
            <Tarefa />
        </div>
    )
}

export default App
