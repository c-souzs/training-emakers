import styled from 'styled-components'

export const Main = styled.main`
    height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`
