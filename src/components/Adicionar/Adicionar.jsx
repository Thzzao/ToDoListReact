import Button from "../Botão/Button"
import Pesquisa from "../Pesquisa/Pesquisa"
import line from "../../../public/Line 1.svg"
import styled from "styled-components";

const Adicionar = ({ handleSubmit, value, setValue, addTarefa, pesquisa, setPesquisa }) => {
    return (
        <form onSubmit={handleSubmit}>
            <StylesTarefa >
                <input className="tarefa" type="text" placeholder='Nome da tarefa' value={value} onChange={(e) => setValue(e.target.value)}></input>

                <Button type="submit" text='+ Adicionar' width='250px' height='45px' borderRadius='7px' click={() => {
                    addTarefa(value)
                }}></Button>
            </StylesTarefa>

            <StylesLinha >
                <img className="linha" src={line} alt='Linha azul separando o título do botão'></img>
            </StylesLinha>

            <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
        </form>
    )
}

export default Adicionar

const StylesTarefa = styled.div`
    padding-top: 35px;
    display: flex;
    align-items: center;

    > .tarefa {
        width: 530px;
        height: 45px;
        padding: 8px;
        border-radius: 7px;
        border: 1px solid ${(props) => props.theme.preto};
        background: ${(props) => props.theme.azulClaro};
        font-family: Open Sans;
        font-size: 20px;
        color: ${(props) => props.theme.branco};
        margin-right: 20px;
    }
`
const StylesLinha = styled.div`
    > .linha {
        width: 800px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

