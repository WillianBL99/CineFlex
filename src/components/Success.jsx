import '../assets/css/success.css'

import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <main className="success">
            <h2>Pedido feito com sucesso!</h2>
            <section>
                <article>
                    <strong>Filme e sessão</strong>
                    <p>Enola Holmes</p>
                    <p>24/06/2022 15:00</p>
                </article>

                <article>
                    <strong>Ingressos</strong>
                    <p>Assento 15</p>
                </article>

                <article>
                    <strong>Comprador</strong>
                    <p><span>Nome:</span>Paulo Uilian</p>
                    <p><span>CPF:</span>987878878</p>
                </article>
            </section>

            <Link to={'/'} ><button>Voltar pra Home</button></Link>
        </main>
    )
}