import '../assets/css/selectTime.css'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

import Footer from './Footer'


export default function SelectTime() {
    const { idMovie } = useParams()
    const [movieData, setMovieData] = useState({ days: [] })

    useEffect(() => {
        api.get(`/movies/${idMovie}/showtimes`)
            .then(answer => setMovieData(answer.data))
            .catch(error => console.error(error))
    }, [])

    const { posterURL: img, title } = movieData

    return (
        <>
            <main className='select-time'>
                <h2>Selecione o horário</h2>
                <section>
                    <div className="scroll">
                        {movieData.days.map(day => <Time info={day} />)}
                    </div>
                </section>
            </main>
            <Footer img={img} title={title} />
        </>
    )
}


function Time({ info: { weekday, date, showtimes } }) {

    return (
        <article>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map(time => <Link to={`/sessao/${time.id}`} ><button>{time.name}</button></Link>)}
            </div>
        </article>
    )
}