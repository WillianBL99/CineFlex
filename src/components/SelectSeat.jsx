import '../assets/css/selectSeat.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

export default function SelectSeat() {

    const { idSection } = useParams()
    const [dataSection, setDataSection] = useState({ seats: [] })

    useEffect(() => {
        api.get(`/showtimes/2/seats`)
            .then(answer => setDataSection(answer.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main className="select-seat">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                {console.log(dataSection)}
                {dataSection.seats.map(seat =>
                    <div key={seat.id} className={`seat ${seat.isAvailable?'':' unavailable'}`}>
                        {seat.name}
                    </div>
                )}             
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

            <button>Reservar assento(s)</button>
        </main>
    )
}