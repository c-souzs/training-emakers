import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Card = styled.div`
    position: relative;

    ${({ position }) => {
        switch (position) {
            case 'top':
                return css`
                    grid-column: 1/2;
                    grid-row: 1/2;
                    height: 30vh;
                `
            case 'bottom':
                return css`
                    grid-column: 1/2;
                    grid-row: 2/3;
                    height: 30vh;
                `
            case 'column':
                return css`
                    grid-column: 2/3;
                    grid-row: span 2;
                    height: 60vh;
                `
        }
    }}

    @media (max-width: 720px) {
        grid-column: auto;
        grid-row: auto;
        height: 150px;
    }
`

export const LinkCustom = styled(Link)`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: end;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    @media (max-width: 720px) {
    }
`

export const ContainerPrice = styled.div`
    display: flex;
    gap: 16px;
    padding: 12px 24px;
`

export const Discount = styled.span`
    font-weight: 600;
    padding: 4px 12px;
    background-color: #4b626c;
    border-radius: 4px;
    color: #fcfafa;
`

export const Price = styled.span`
    font-weight: 600;
    padding: 4px 12px;
    background-color: #fcfafa;
    color: #4b626c;
    border-radius: 4px;
`
