import styled from 'styled-components'

export const Main = styled.main`
    height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`
