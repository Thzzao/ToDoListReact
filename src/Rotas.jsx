import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import App from './pages/App/App'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { TemaDark, TemaLight } from './styles/Temas'

const Rotas = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={TemaDark}>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/app' element={<App />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default Rotas