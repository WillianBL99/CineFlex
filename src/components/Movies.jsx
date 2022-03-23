import React, { useState } from "react"
import api from "../services/api"

import '../assets/css/movies.css'


export default function Movies() {
    
    const [movies, setMovies] = useState([])
    api.get('').then(answer => setMovies(answer.data))

    return (
        <main className="movies">
            <h2>Selecione o filme</h2>
            <section>
                {movies.map(movie => <Movie img={movie.posterURL} alt={movie.title} />)}
            </section>
        </main>
    )
}

function Movie({ img, alt}) {
    return (
        <article>
            <img src={img} alt={alt} />
        </article>
    )
}