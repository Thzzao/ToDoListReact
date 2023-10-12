import { Header } from '../../components/Cabeçario/Header'
import style from '../App/app.module.css'
import Tarefa from '../../components/Tarefa/Tarefa'
import Footer from '../../components/Rodapé/Footer'


function App() {
    return (
        <div className={style.container}>
            <Header />
            <Tarefa />
            <Footer />
        </div>
    )
}

export default App
