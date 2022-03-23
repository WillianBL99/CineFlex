import '../assets/css/selectSeat.css'

export default function SelectSeat() {
    return (
        <main className="select-seat">
            <h2>Selecione o(s) assento(s)</h2>
            <div className="seats">
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
                <div className="seat">10</div>
            </div>
            <div className="identifiers">
                <div><div className="selected"></div><p>Selecionado</p></div>
                <div><div className="available"></div><p>Disponível</p></div>
                <div><div className="unavailable"></div><p>Indisponível</p></div>
            </div>
            <sectio className="user-data">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
                <p>CPF do comprador:</p>
                <input type="number" placeholder="Digite seu CPF..." />
            </sectio>
            <button>Reservar assento(s)</button>
        </main>
    )
}