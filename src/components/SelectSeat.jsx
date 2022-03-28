import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../services/api'

import Header from './Header'
import Footer from './Footer'
import Seats from './Seats'
import Ticket from './Ticket'

export default function SelectSeat({ setTicketData }) {

    const navigate = useNavigate();
    const { idSection } = useParams()
    const [dataSection, setDataSection] = useState({ seats: [], footer: false })
    const [seatsSelected, setSeatsSelected] = useState([])
    const [userData, setUserData] = useState({ cpf: '', name: '' })

    useEffect(() => {
        api.get(`/showtimes/${idSection}/seats`)
            .then(answer => setDataSection({ ...answer.data, footer: true }))
            .catch(error => console.error(error))
    }, [])

    function postReserver(event) {
        event.preventDefault()
        const { name, day, movie } = dataSection
        const obj = { ids: seatsSelected, name: userData.name, cpf: userData.cpf }

        if (seatsSelected.length === 0) {
            alert('Nenhuma poltrona selecinada')

        } else {
            const promise = api.post(`/seats/book-many`, obj)

            promise.then(answer => {
                const ticket = JSON.parse(answer.config.data)
                setTicketData({ ticket: ticket, name: name, day: day, movie: movie })
                setTimeout(() => { navigate('/sucesso') }, 50);
            })

            promise.catch(error => console.error('deu ruim', error))
        }
    }

    return (
        <>
            <Header link={`/filme/${idSection}`} />
            <Main>
                <h2>Assentos</h2>
                <section>
                    <Scroll>
                        <Seats seats={dataSection.seats} selecteds={seatsSelected} setSelecteds={setSeatsSelected} />

                        {/* <Tickets>
                            {seatsSelected.map(num => <Ticket num={num} />)}
                        </Tickets>
 */}
                        <form onSubmit={postReserver}>
                            <sectio className="user-data">
                                <label htmlFor="name">Nome do comprador:</label>
                                <input id='name' onBlur={({ target: { value } }) => setUserData({ ...userData, name: value })} type="text" placeholder="Digite seu nome..." required />
                                <label htmlFor="cpf">CPF do comprador:</label>
                                <input id='cpf' onBlur={({ target: { value } }) => setUserData({ ...userData, cpf: value })} type="number" placeholder="Digite seu CPF..." required />
                            </sectio>
                            <button type='submit'>Reservar</button>
                        </form>
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


const Tickets = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 80px;

    margin-block: 5px;

    overflow-x: scroll;

    div {
        min-width: 3rem;
        height: 4rem;
        margin: 5px;
        padding: 2px;
        border: 1px solid #808F9D;
        
        text-align: center;
        
        background-color: var(--color-unavailable);
        box-shadow: 0 0 10px -2px rgba(0,0,0,0.3);
    }
`

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

    .user-data {
        width: 100%;
    }

    label {
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

    div.selected {
        background-color: var(--color-selected);
    }

    div.available {
        background-color: var(--color-available);
    }

    div.unavailable {
        background-color: var(--color-unavailable);
    }
`
