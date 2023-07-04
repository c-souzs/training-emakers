import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const LinkStyled = styled(Link)`
    color: #97a4a2;
    font-weight: 600;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover,
    &:focus {
        color: #4b626c;
    }
`
