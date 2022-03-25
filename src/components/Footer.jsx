import '../assets/css/footer.css'

export default function Footer({img, title, subTitle}) {
    console.log('subtitle', subTitle)
    return (
        <footer>
            <div className="border">
                <img src={img} alt={title} />
            </div>
            <p>{title}</p>
            {subTitle?<p>{subTitle}</p>:<></>}
        </footer>
    )
}