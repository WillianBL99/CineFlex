import '../assets/css/selectTime.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

import Footer from './Footer'


export default function SelectTime() {
    const { idMovie } = useParams()
    const [daysMovie, setDaysMovie] = useState([])

    useEffect(() => {
        api.get(`/${idMovie}/showtimes`)
            .then(answer => setDaysMovie(answer.data.days))
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <main className='select-time'>
                <h2>Selecione o horário</h2>
                <section>                
                   {daysMovie.map(day => {console.log(day); return <Time info={day} />} )}
                </section>
            </main>
            <Footer />
        </>
    )
}


function Time({info:{weekday,date,showtimes}}) {

    return (
        <article>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map(time => <button>{time.name}</button>)}
            </div>
        </article>
    )
}