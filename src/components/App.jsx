import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./Header"
import Movies from "./Movies"
import SelectTime from "./SelectTime"

import '../assets/css/reset.css'
import '../assets/css/main.css'

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/selecttime' element={<SelectTime />} />
            </Routes>
        </BrowserRouter>
    )
}


