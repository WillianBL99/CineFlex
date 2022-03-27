import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

import Footer from './Footer'
import Seat from './Seat'

export default function SelectSeat({ setTicketData }) {

    const { idSection } = useParams()
    const [dataSection, setDataSection] = useState({ seats: [], footer: false })
    const [seatsSelected, setSeatsSelected] = useState([])
    const [userData, setUserData] = useState({ cpf: '', name: '' })

    useEffect(() => {
        api.get(`/showtimes/${idSection}/seats`)
            .then(answer => setDataSection({ ...answer.data, footer: true }))
            .catch(error => console.error(error))
    }, [])

    function postReserver(obj) {
        const { name, day, movie } = dataSection

        if (obj.ids.length > 0 && obj.name && obj.cpf) {
            api.post(`/seats/book-many`, obj)
                .then(answer => {
                    const ticket = JSON.parse(answer.config.data)
                    setTicketData({ ticket: ticket, name: name, day: day, movie: movie })
                })
                .catch(error => console.error('deu ruim', error))

        } else alert('Preencha tudo corretamente')
    }

    return (
        <>
            <Main>
                <h2>Assentos</h2>
                <section>
                    <Scroll>
                        <div className="seats">
                            {dataSection.seats.map(seat => <Seat seat={seat} selecteds={seatsSelected} setSelecteds={setSeatsSelected} />)}
                        </div>

                        <div className="identifiers">
                            <div><div className="selected"></div><p>Selecionado</p></div>
                            <div><div className="available"></div><p>Disponível</p></div>
                            <div><div className="unavailable"></div><p>Indisponível</p></div>
                        </div>

                        <sectio className="user-data">
                            <p>Nome do comprador:</p>
                            <input onBlur={({ target: { value } }) => setUserData({ ...userData, name: value })} type="text" placeholder="Digite seu nome..." />
                            <p>CPF do comprador:</p>
                            <input onBlur={({ target: { value } }) => setUserData({ ...userData, cpf: value })} type="number" placeholder="Digite seu CPF..." />
                        </sectio>
                        <div className="button">
                            <Link
                                to={`${(seatsSelected.length > 0 && userData.name && userData.cpf) ? '/sucesso' : ''}`}
                            >
                                <button onClick={() => postReserver(
                                    { ids: seatsSelected, name: userData.name, cpf: userData.cpf }
                                )}>Reservar assento(s)</button>
                            </Link>
                        </div>
                    </Scroll>
                </section>

            </Main>

            {dataSection.footer ? <Footer
                img={dataSection.movie.posterURL}
                title={dataSection.movie.title}
                subTitle={`${dataSection.day.weekday} - ${dataSection.day.date}`}
            /> : <></>}
        </>
    )
}


const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    overflow-y: hidden;
    
    h2 {
        
        text-align: center;

        width: 100%;
        padding-block: 15px;

        font-size: var(--font-subtitle);
        color: var(--color-fonte);

        background-color: rgba(0,0,0,0.01);
    }

    & > section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        width: 100%;

        overflow-y: hidden;
        
    }
`

const Scroll = styled.div`
    
    width: 100%;
    padding-inline: var(--padding-inline-scroll);
    
    padding-top: 5px;
    padding-bottom: 200px;

    overflow-y: auto;

    .seats {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(5, 1fr);

        width: calc(100vw * 0.9 * var(--size-seats));
        height: calc(100vw * 0.45 * var(--size-seats));

        margin-inline: auto;

        justify-content: center;
    }

    .seats div {
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        width: 80%;
        height: 80%;

        border-radius: 50%;
        border: 1px solid #808F9D;

        font-size: 100%;

        background: var(--color-available);
    }

    .identifiers {
        display: flex;
        justify-content: center;

        width: 100%;
        margin-bottom: 45px;
    }

    .identifiers div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .identifiers div div {
        width: calc(100vw * 0.06 * var(--size-seats));
        height: calc(100vw * 0.06 * var(--size-seats));

        margin: 8px 4px;

        border-radius: 50%;
        border: 1px solid #808F9D;  
    }

    .identifiers p {
        margin-inline: 10px;
        font-size: 0.8rem;
    }

    div.selected {
        background-color: var(--color-selected);
    }

    div.available {
        background-color: var(--color-available);
    }

    div.unavailable {
        background-color: var(--color-unavailable);
    }

    .user-data {
        width: 100%;
    }

    p {
        font-size: var(--font-p);
    }

    input {
        width: 100%;
        height: 2.8rem;

        padding-left: 8px;
        margin-top: 3px;
        margin-bottom: 15px;

        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    .button {
        display: flex;
        justify-content: center;
    }

    button {

        bottom: 25px;

        padding: 0.8rem 2rem;
        margin-bottom: 10px;

        border: none;
        border-radius: 3px;

        background-color: var(--color-button);
        color: #fff;
    }
`

