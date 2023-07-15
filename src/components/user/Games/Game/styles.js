import styled from 'styled-components'

export const GameImage = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 4px;
`
export const ContainerAssess = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    color: #000;
    margin-top: 6px;

    & svg {
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        cursor: pointer;
    }

    & svg.active {
        fill: yellow;
    }
`
