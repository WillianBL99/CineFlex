import '../assets/css/success.css'

import { Link } from 'react-router-dom'

export default function Success({ ticketData }) {
    const { ticket, day, name, movie } = ticketData
    return ticket.ids.length?
        (
            <main className='success'>
                <h2>Pedido feito com sucesso!</h2>
                <section>
                    <article>
                        <strong>Filme e sessão</strong>
                        <p>{movie.title}</p>
                        <p>{day.date} {name}</p>
                    </article>

                    <article>
                        <strong>Ingressos</strong>
                        {ticket.ids.map(id => <p>Assento {id % 100 > 51 ? id % 100 - 50 : id % 100}</p>)}
                    </article>

                    <article>
                        <strong>Comprador</strong>
                        <p><span>Nome:</span>{ticket.name}</p>
                        <p><span>CPF:</span>{ticket.cpf}</p>
                    </article>
                </section>

                <Link to={'/'} ><button>Voltar pra Home</button></Link>
            </main>
        ) : (<h1>Nada ainda</h1>)
}

/* 
const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 100%;
    
    overflow: auto;

    h2 {
        margin: 20px;
        font-size: var(--font-subtitle);
        font-weight: 700;
        color: var(--color-success);
    }
`

const Informations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 20px;

    width: 100%;

    article {
        margin-bottom: 40px;
    }

    strong {
        display: block;
        font-size: var(--font-subtitle);
        font-weight: 700;

        padding-bottom: 20px;
    }

    p {
        font-size: var(--font-p);
        color: var(--color-fonte);
    }

    span {
        font-weight: 700;
    }
`

const Button = styled.button`
    bottom: 25px;

    padding: 0.8rem 2rem;
    margin-bottom: 10px;

    border: none;
    border-radius: 3px;

    background-color: var(--color-button);
    color: #fff;
`
*/