import '../assets/css/selectTime.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'

import Footer from './Footer'


export default function SelectTime() {
    const { idMovie } = useParams()
    const [movieData, setMovieData] = useState({days:[]})

    useEffect(() => {
        api.get(`/${idMovie}/showtimes`)
            .then(answer => setMovieData(answer.data))
            .catch(error => console.log(error))
    }, [])

    const {posterURL:img,title} = movieData

    console.log(movieData)

    return (
        <>
            <main className='select-time'>
                <h2>Selecione o horário</h2>
                <section>                
                   {movieData.days.map(day => <Time info={day} />)}
                </section>
            </main>
            <Footer img={img} title={title} />
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