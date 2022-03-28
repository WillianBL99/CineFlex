import styled from 'styled-components'
import { useNavigate } from 'react-router';

export default function Header({link=''}) {
    const navigate = useNavigate()

    return (
        <HeaderST>
            {link=== ''?<></>:<button onClick={()=> navigate(`${link}`)}>Voltar</button>}
            CINEFLEX
        </HeaderST>
    )
}

const HeaderST = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    width: 100%;
    padding-block: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: var(--font-title);
    font-weight: 700;

    color: var(--color-button);
    background-color: var(--color-header);

    button {
        position: absolute;
        top:auto;
        bottom: auto;
        left: 5px;

        padding: 0.6rem 1rem;

        border: none;
        border-radius: 3px;

        background-color: var(--color-button);
        color: #fff;
    }
`