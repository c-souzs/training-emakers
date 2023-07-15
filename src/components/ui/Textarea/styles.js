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

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 150px;
    max-height: 200px;
    padding: 10px 12px;
    border-radius: 4px;
    outline: none;
    border: 2px solid #000;
    box-shadow: none;
    font-size: 16px;
    resize: vertical;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:focus,
    &:hover {
        border-color: #4b626c;
        box-shadow: 0 0 0 3px #e4e8ea;
    }
`

export const ErrorMessage = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: #e54;
`
