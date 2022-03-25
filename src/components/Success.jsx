import '../assets/css/success.css'

import { Link } from 'react-router-dom'
//"{\"ids\":[52,53],\"name\":\"Paulo Uilian\",\"cpf\":\"12354\"}

export default function Success({ticketData}) {
    console.log(ticketData)
        const {ticket, day, name, movie} = ticketData
    return ticket.ids.length?
    (
        <main className="success">
            <h2>Pedido feito com sucesso!</h2>
            <section>
                <article>
                    <strong>Filme e sessão</strong>
                    <p>{movie.title}</p>
                    <p>{day.date} {name}</p>
                </article>

                <article>
                    <strong>Ingressos</strong>
                    {ticket.ids.map(id => <p>Assento {id%100>51?id%100-50:id%100}</p>)}
                </article>

                <article>
                    <strong>Comprador</strong>
                    <p><span>Nome:</span>{ticket.name}</p>
                    <p><span>CPF:</span>{ticket.cpf}</p>
                </article>
            </section>

            <Link to={'/'} ><button>Voltar pra Home</button></Link>
        </main>
    ):(<h1>Nada ainda</h1>)
}