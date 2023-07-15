import styled from 'styled-components'

export const UserGames = styled.section`
    background-color: #4b626c;
`

export const Container = styled.div`
    padding: 48px 64px;
    height: 100%;

    @media (max-width: 500px) {
        padding: 48px;
    }
`

export const Title = styled.h3`
    font-size: 28px;
    font-weight: 300;
    color: #fbf6f0;
    margin-bottom: 32px;
`
export const ContainerGames = styled.div`
    max-height: 60vh;
    height: 100%;
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr 1fr 1fr;
    overflow-y: auto;
    padding-right: 8px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`
export const PurchaseEmpty = styled.p`
    color: #fbf6f0;
    text-align: center;
    grid-column: 1/-1;
`
