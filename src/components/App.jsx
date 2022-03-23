import React, { useState } from "react"

import '../assets/css/reset.css'
import '../assets/css/main.css'

import axios from "axios"
import api from "../services/api"

import Filme from '../assets/img/filme.jpg'

export default function App() {
    const [movies, setMovies] = useState([])

    api.get('').then(answer => setMovies(answer.data))

    return (
        <>
            <header>
                CINEFEX
            </header>
            <main>
                <h2>Selecione o filme</h2>
                <section>
                    {movies.map(movie => <Movie img={movie.posterURL} alt={movie.title} />)}
                </section>
            </main>
        </>
    )
}


function Movie({ img, alt}) {
    return (
        <article>
            <img src={img} alt={alt} />
        </article>
    )
}