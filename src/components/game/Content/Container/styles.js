import styled from 'styled-components'

export const Game = styled.section`
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    padding: 0 64px;

    @media (max-width: 1000px) {
        height: auto;
        padding: 64px 32px;
    }
`

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 50vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    position: relative;

    @media (max-width: 1000px) {
        display: block;
    }
`
