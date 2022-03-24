import '../assets/css/footer.css'

export default function Footer({img, title}) {
    return (
        <footer>
            <div className="border">
                <img src={img} alt={title} />
            </div>
            <p>{title}</p>
        </footer>
    )
}