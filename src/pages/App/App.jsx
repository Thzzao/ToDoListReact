import style from '../App/app.module.css'
import { Header } from '../../components/Cabeçario/Header'
import Pesquisa from '../../components/Pesquisa/Pesquisa'
import Tarefa from '../../components/Tarefa/Tarefa'
// import Footer from '../../components/Rodapé/Footer'
import Adicionar from '../../components/Adicionar/Adicionar'


function App() {
    return (
        <div className={style.container}>
            <Header />
            <Adicionar />
            <Pesquisa />
            <Tarefa />
            {/* <Footer /> */}
        </div>
    )
}

export default App
