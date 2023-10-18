import { Header } from '../../components/Cabeçario/Header'
import style from '../App/app.module.css'
import Tarefa from '../../components/Tarefa/Tarefa'
// React-toastify
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
        <div className={style.container}>
            <Header />
            <ToastContainer
                position="top-center" theme="light" transition={Flip} style={{ width: "auto" }} />
            <Tarefa />
        </div>
    )
}

export default App
