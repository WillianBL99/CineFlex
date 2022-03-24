import '../assets/css/footer.css'

import Filme from '../assets/img/filme.jpg'

export default function Footer() {
    return (
        <footer>
            <div className="border">
                <img src={Filme} alt="" />
            </div>
            <p>Enola Holmes</p>
        </footer>
    )
}