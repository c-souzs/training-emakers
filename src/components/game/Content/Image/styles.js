import styled from 'styled-components'

export const ContainerImage = styled.div`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    overflow: hidden;
    height: 100%;

    @media (max-width: 1000px) {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 0;
    }
`
export const Image = styled.img`
    height: 100%;
    max-height: 500px;
    min-height: 350px;
    width: 100%;
`
