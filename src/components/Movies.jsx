import '../assets/css/movies.css'

import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import api from "../services/api"


export default function Movies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        api
            .get('/movies').then(answer => setMovies(answer.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <main className="movies">
            <h2>Selecione o filme</h2>
            <section>
                {movies.map(({id,posterURL,title}) =>
                    <Link to={`/filme/${id}`}>
                        <Movie key={id+posterURL} img={posterURL} alt={title} />
                    </Link>)
                }
            </section>
        </main>
    )
}

function Movie({ img, alt }) {
    return (
        <article>
            <img src={img} alt={alt} />
        </article>
    )
}