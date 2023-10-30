import { Header } from '../../components/Cabeçario/Header'
import Tarefa from '../../components/Tarefa/Tarefa'
import styled from 'styled-components'
// React-toastify
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
    return (
        <StyleContainer>
            <Header />
            <ToastContainer
                position="top-center" theme="light" transition={Flip} style={{ width: "auto" }} />
            <Tarefa />
        </StyleContainer>
    )
}

export default App

const StyleContainer = styled.div`
    width: 98vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`