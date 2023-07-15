import styled from 'styled-components'

export const Container = styled.div`
    height: 250px;
    width: 100%;
    border-radius: 4px;
    position: relative;
    display: flex;
    align-items: end;
    overflow: hidden;

    @media (max-width: 800px) {
        flex-shrink: 0;
        max-width: 45%;
    }
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        transform: scale(1.1);
    }
`

export const ContainerPrice = styled.div`
    padding: 16px;
`

export const Price = styled.span`
    font-weight: 600;
    padding: 4px 12px;
    background-color: ${({ light }) => (light ? '#4b626c' : '#fbf8f3')};
    color: ${({ light }) => (light ? '#fbf8f3' : '#4b626c')};
    border-radius: 4px;
    position: relative;
    z-index: 999;
`
