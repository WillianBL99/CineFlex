import styled from 'styled-components'

export default function Footer({ img, title, subTitle }) {
    console.log('subtitle', subTitle)
    return (
        <Footer_ST img={img}>
            <Background />
            <div className="border">
                <img src={img} alt={title} />
            </div>
            <div className='text'>
                <p>{title}</p>
                {subTitle ? <p className='subtitle'>{subTitle}</p> : <></>}
            </div>

        </Footer_ST>
    )
}

const Footer_ST = styled.footer`
    display: flex;
    align-items: center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 8px;

    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);

    .border {
        background-color: white;
        z-index: 1;

        box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
    }

    img {
        object-fit: cover;
        object-position: center;

        height: 7.5rem;

        margin: 3px;
    }

    .text {
        height: 7.5rem;
        z-index: 1;
    }

    p {
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: var(--font-subtitle);
        font-family: var(--font);
    }

    .subtitle {
        font-size: var(--font-p);
        overflow-y: auto;

        height: 75%;

        padding-bottom: 20px;
    }
`

const Background = styled.div`
    position: absolute;    
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: rgba(255,255,255,0.8);
`