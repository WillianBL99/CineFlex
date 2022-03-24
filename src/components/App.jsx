import '../assets/css/reset.css'
import '../assets/css/main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./Header"
import Movies from "./Movies"
import SelectTime from "./SelectTime"
import SelectSeat from './SelectSeat'


export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/filme/:idMovie' element={<SelectTime />} />
                <Route path='/sessao/:idSection' element={<SelectSeat />} />
            </Routes>
        </BrowserRouter>
    )
}


