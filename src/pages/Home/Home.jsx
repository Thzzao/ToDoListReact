import { Header } from '../../components/Cabeçario/Header'
import { useNavigate } from 'react-router-dom'
import Button from "../../components/Botão/Button"
import line from "../../../public/Line 1.svg"
import Footer from '../../components/Rodapé/Footer'
import styled from 'styled-components'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/app')
    }
    return (
        <StyleContainer>
            <StyleContent>
                <Header />
                <StyleLinha>
                    <img src={line} alt='Linha azul separando o título do botão'></img>
                </StyleLinha>
                <StyleBotao>
                    <Button text="START" click={() => {
                        handleClick()
                    }}></Button>
                </StyleBotao>
            </StyleContent>
            <Footer />
        </StyleContainer>
    )
}

export default Home

const StyleContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const StyleContent = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
const StyleLinha = styled.div`
    padding-bottom: 60px;
`
const StyleBotao = styled.div`
    display: flex;
    justify-content: space-around;
`
