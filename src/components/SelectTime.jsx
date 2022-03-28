import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

import Header from './Header'
import Footer from './Footer'


export default function SelectTime() {
    const { idMovie } = useParams()
    const [movieData, setMovieData] = useState({ days: [] })

    useEffect(() => {
        api.get(`/movies/${idMovie}/showtimes`)
            .then(answer => setMovieData(answer.data))
            .catch(error => console.error(error))
    }, [])

    const { posterURL: img, title, overview } = movieData

    return (
        <>
            <Header link={'/'} />
            <Main>
                <h2>Selecione o horário</h2>
                <section>
                    <Scroll>
                        {movieData.days.map(day => <Time info={day} />)}
                    </Scroll>
                </section>
            </Main>
            <Footer img={img} title={title} subTitle={overview} />
        </>
    )
}


function Time({ info: { weekday, date, showtimes } }) {

    return (
        <Article>
            <p>{weekday} - {date}</p>
            <div>
                {showtimes.map(time => <Link to={`/sessao/${time.id}`} ><button>{time.name}</button></Link>)}
            </div>
        </Article>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 100%;
    
    overflow: hidden;

    h2 {
        text-align: center;

        width: 100%;
        padding-block: 15px;
        margin-bottom: 5px;

        font-size: var(--font-subtitle);
        color: var(--color-fonte);

        background-color: rgba(0,0,0,0.01);
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;

        overflow-y: hidden;
        
        width: 100%;
    }
`

const Scroll = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    padding-inline: var(--padding-inline-scroll);
    padding-bottom: 200px;

    overflow-y: auto;
`

const Article = styled.article`
    
    width: calc(calc(100vw * 0.4) * var(--prop-times));
    margin: 20px 4px;
    padding: 10px 8px;
    background-color: rgba(0,0,0,0.02);

    p {
        margin-bottom: 25px;

        font-size: var(--font-p);
        color: var(--color-fonte);
    }

    button {
        width: 5rem;
        height: 2rem;

        margin-right: 8px;

        border: none;
        border-radius: 3px;

        background-color: var(--color-button);
        color: #fff;
    }
`