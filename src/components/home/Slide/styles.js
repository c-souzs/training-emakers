import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 64px 16px 32px 16px;
    margin: 0 auto;
`

export const ContainerSlide = styled.div`
    width: 100%;
    overflow-x: hidden;
    border-radius: 4px;
`

export const Content = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    transform: ${({ move }) => `translate3d(-${move}px, 0, 0)`};
    transition: transform 0.4s ease 0s;

    @media (max-width: 720px) {
        min-height: 50vh;
        height: auto;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    flex-shrink: 0;

    @media (max-width: 720px) {
        display: block;
    }
`
