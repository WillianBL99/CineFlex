import Footer from './Footer'

import '../assets/css/selectTime.css'

export default function SelectTime() {
    return (
        <>
            <main className='select-time'>
                <h2>Selecione o horário</h2>
                <section>
                    <article>
                        <p>Quinta-feira - 24/06/2021</p>
                        <div>
                            <button>15:00</button>
                            <button>15:00</button>
                        </div>
                    </article>
                    <article>
                        <p>Quinta-feira - 24/06/2021</p>
                        <div>
                            <button>15:00</button>
                            <button>15:00</button>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}