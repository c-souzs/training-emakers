import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`

export const Content = styled.div`
    display: flex;
    gap: 8px;
`

export const Button = styled.button`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#4b626c' : '#97a4a2')};
    cursor: pointer;
    border: none;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        background-color: #4b626c;
    }
`
