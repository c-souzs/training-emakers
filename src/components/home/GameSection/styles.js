import styled from 'styled-components'

export const GameSection = styled.section`
    background-color: ${({ light }) => (light ? '#fbf8f3' : '#4b626c')};
    margin: 24px 0;
`
export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 32px 16px;
    margin: 0 auto;
`

export const Title = styled.h1`
    color: ${({ light }) => (light ? '#4b626c' : '#fbf8f3')};
    font-size: 32px;
    font-weight: 300;
`

export const ContentGames = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    @media (max-width: 800px) {
        overflow-x: auto;
        padding-bottom: 16px;
    }
`
