import React, { useState } from "react"

import '../assets/css/reset.css'
import '../assets/css/main.css'

import axios from "axios"
import api from "../services/api"

import Filme from '../assets/img/filme.jpg'

export default function App() {
    const [items, setItems] = useState([])

    api.get('').then(answer => setItems(answer.data))

    return (
        <>
            <header>
                CINEFEX
            </header>
            <main>
                <h2>Selecione o filme</h2>
                <section>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                    <article>
                        <img src={Filme} alt="filme" />
                    </article>
                </section>
            </main>
        </>
    )
}
