import styled from 'styled-components'

export const Account = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`
export const ContainerOutlet = styled.section`
    padding: 60px 80px;

    @media (max-width: 800px) {
        padding: 60px 40px;
    }
`

export const ContainerBanner = styled.section`
    @media (max-width: 600px) {
        display: none;
    }
`

export const Banner = styled.img`
    height: 100vh;
    width: 100%;
`
