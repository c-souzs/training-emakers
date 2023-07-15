import styled from 'styled-components'

export const ShoppingCartMain = styled.main`
    height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
