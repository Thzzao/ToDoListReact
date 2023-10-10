// import React from 'react'
import '../style/home.module.css'
import Button from "../components/Button/Button"
import line from "../../public/Line 1.svg"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/app')
    }
    return (
        <div className="container">
            <div className='titulo'><h1>LISTA DE TAREFAS</h1></div>
            <div className="linha">
                <img src={line} alt='Linha azul separando o título do botão'></img>
            </div>
            <div className='botao'><Button text="START" click={() => {
                handleClick()
            }}></Button></div>

            <footer>by Thzzao</footer>
        </div>
    )
}
export default Home