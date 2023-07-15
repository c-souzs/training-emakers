import styled from 'styled-components'

export const ContainerInformation = styled.div`
    height: 100%;
    background-color: #4b626c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 32px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;

    @media (max-width: 1000px) {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 0;
    }
`
export const Title = styled.h3`
    font-size: 32px;
    font-weight: 600;
    color: #fbf6f0;
    margin-bottom: 16px;
    text-align: center;
`

export const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    color: #fbf6f0;
    text-align: center;
    margin-bottom: 12px;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #fbf6f0;
        border-radius: 4px;
        margin-top: 16px;
    }
`
export const ContainerButton = styled.div`
    padding: 12px 0;
`
