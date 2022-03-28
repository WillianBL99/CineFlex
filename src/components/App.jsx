import '../assets/css/reset.css'
import '../assets/css/main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Movies from "./Movies"
import SelectTime from "./SelectTime"
import SelectSeat from './SelectSeat'
import Success from './Success'


export default function App() {

    const [ticketData, setTicketData] = useState({ticket:{ids:[]}, day:{}, name:'', movie:{}})

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/filme/:idMovie' element={<SelectTime />} />
                <Route path='/sessao/:idSection' element={<SelectSeat setTicketData={setTicketData} />} />
                <Route path='/sucesso' element={<Success ticketData={ticketData} />} />
            </Routes>
        </BrowserRouter>
    )
}


