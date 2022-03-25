import '../assets/css/selectSeat.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'
import Footer from './Footer'

export default function SelectSeat({ setTicketData }) {

    const { idSection } = useParams()
    const [dataSection, setDataSection] = useState({ seats: [], footer: false })
    console.log(dataSection)
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
            <main className="select-seat">
                <h2>Selecione o(s) assento(s)</h2>
                <section>
                    <div className="scroll">
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
                        <Link
                            to={`${(seatsSelected.length > 0 && userData.name && userData.cpf) ? '/sucesso' : ''}`}
                        >
                            <button onClick={() => postReserver(
                                { ids: seatsSelected, name: userData.name, cpf: userData.cpf }
                            )}>Reservar assento(s)</button>
                        </Link>
                    </div>
                </section>

            </main>

            {dataSection.footer ? <Footer
                img={dataSection.movie.posterURL}
                title={dataSection.movie.title}
                subTitle={`${dataSection.day.weekday} - ${dataSection.day.date}`}
            /> : <></>}
        </>
    )
}

function Seat({ seat: { id, name, isAvailable }, selecteds, setSelecteds }) {
    const [selected, setSelected] = useState(false)

    function verifySelected() {

        if (isAvailable) {
            if (!selected) setSelecteds([...selecteds, id])

            else {
                const index = selecteds.indexOf(id)

                setSelecteds([...selecteds.slice(0, index), ...selecteds.splice(index + 1)])
            }

            setSelected(!selected)
        }
        else alert('Assento indisponível')

    }

    return (
        <div
            key={id}
            onClick={verifySelected}
            className={`seat ${!isAvailable ? 'unavailable' : selected ? 'selected' : ''}`}
        >
            {name}
        </div>
    )
}