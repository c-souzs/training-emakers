import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
`

export const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    border-radius: 4px;
    outline: none;
    border: 2px solid #4b626c;
    box-shadow: none;
    font-size: 16px;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:focus,
    &:hover {
        border-color: #000;
    }
`
