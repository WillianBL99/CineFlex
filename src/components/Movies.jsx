import '../assets/css/movies.css'

import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import api from "../services/api"


export default function Movies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        api
            .get('/movies').then(answer => setMovies(answer.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <Main>
            <h2>Selecione o filme</h2>
            <section>
                {movies.map(({ id, posterURL, title }) =>
                    <Link to={`/filme/${id}`}>
                        <Movie key={id + posterURL} img={posterURL} alt={title} />
                    </Link>)
                }
            </section>
        </Main>
    )
}

function Movie({ img, alt }) {
    return (
        <Article>
            <img src={img} alt={alt} />
        </Article>
    )
}


const Main = styled.main`
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-inline: var(--padding-inline-main);

    overflow-y: auto;

    h2 {
        padding: 2rem 0;

        font-size: var(--font-subtitle);
        color: var(--color-fonte);
    }
    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }   
`
const  Article = styled.article`
    padding: 10px;
    margin: 5px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img {
        object-fit: cover;
        object-position: center;
        
        width: calc(calc(100vw * 0.28) * var(--prop-img));
        height: calc(calc(100vw * 0.45) * var(--prop-img));
    }
`