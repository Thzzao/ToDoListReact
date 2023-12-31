import { Header } from '../../components/Cabeçario/Header'
import { useNavigate } from 'react-router-dom'
import style from '../Home/home.module.css'
import Button from "../../components/Botão/Button"
import line from "../../../public/Line 1.svg"
import Footer from '../../components/Rodapé/Footer'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/app')
    }
    return (
        <div className={style.container}>
            <div className={style.content}>
                <Header />
                <div className={style.linha}>
                    <img src={line} alt='Linha azul separando o título do botão'></img>
                </div>
                <div className={style.botao}>
                    <Button text="START" click={() => {
                        handleClick()
                    }}></Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home