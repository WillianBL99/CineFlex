import styled from 'styled-components'

export default function Header() {
    return (
        <Header_STY>
            CINEFLEX
        </Header_STY>
    )
}

const Header_STY = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-block: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: var(--font-title);
    font-weight: 700;

    color: var(--color-button);
    background-color: var(--color-header);
`