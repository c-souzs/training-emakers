import styled from 'styled-components'

export const ShoopingCartPayment = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px;

    @media (max-width: 1200px) {
        padding: 64px 32px;
    }
`
export const ContainerPix = styled.div`
    margin-bottom: 72px;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #000;
        border-radius: 4px;
        margin-top: 48px;
    }
`

export const InformationPix = styled.p`
    color: #4b626c;
    text-align: center;
    margin-top: 18px;
`

export const ContainerButton = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;
`
