import styled, { css } from 'styled-components'

export const ButtonSecondary = styled.button`
    width: fit-content;
    min-width: 200px;
    background-color: #fbf6f0;
    color: #4b626c;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        background-color: #fff;
    }

    ${(props) => {
        const { animate } = props

        if (animate) {
            return css`
                svg {
                    transition-property: transform;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    transition-duration: 150ms;
                }

                &:hover {
                    svg {
                        transform: translateX(2px);
                    }
                }
            `
        }
    }}
`
