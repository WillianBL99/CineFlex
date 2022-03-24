import '../assets/css/selectSeat.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

export default function SelectSeat() {

    const { idSection } = useParams()
    const [dataSection, setDataSection] = useState({ seats: [] })
    const [seatsSelected, setSeatsSelected] = useState([])

    useEffect(() => {
        api.get(`/showtimes/${idSection}/seats`)
            .then(answer => setDataSection(answer.data))
            .catch(error => console.error(error))
    }, [])

    return (
        <main className="select-seat">
            <h2>Selecione o(s) assento(s)</h2>
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
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="number" placeholder="Digite seu CPF..." />
            </sectio>

            <Link to={'/sucesso'} ><button>Reservar assento(s)</button></Link>
        </main>
    )
}

function Seat({ seat: { id, name, isAvailable }, selecteds, setSelecteds }) {
    const [selected, setSelected] = useState(false)

    function verifySelected() {

        if (isAvailable) {
            if (!selected) setSelecteds([...selecteds, id])

            else {
                const index = selecteds.indexOf(id)

                setSelecteds([...selecteds.slice(0, index),...selecteds.splice(index + 1)])
            }

            setSelected(!selected)
        }

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