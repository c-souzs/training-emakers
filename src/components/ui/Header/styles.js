import styled, { css, keyframes } from 'styled-components'

export const Header = styled.header`
    height: 100px;
    box-shadow: 0 1px 1px #0000001a;
`
export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 8px 16px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
`

export const Logo = styled.img`
    width: 80px;
    height: 80px;
`
export const ButtonMenuMobile = styled.button`
    width: 40px;
    height: 40px;
    background-color: #4b626c;

    display: none;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 0.2s;
    border: none;
    border-radius: 0.25rem;

    &::after {
        width: 20px;
        height: 2px;

        display: block;
        content: '';
        border-radius: 0.125rem;
        color: #fbf6f0;
        background: currentColor;
        box-shadow: 0 7px currentColor, 0 -7px currentColor;
        transition: 0.2s;
    }

    @media (max-width: 1000px) {
        display: flex;
    }

    ${(props) => {
        if (props.active) {
            return css`
                &::after {
                    width: 5px;
                    height: 5px;

                    transform: rotate(-90deg);
                    border-radius: 50%;
                }
            `
        }

        return null
    }}
`
const animationMenu = keyframes`
    0%{
        opacity: 0;
        transform: translateX(50px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`

export const Nav = styled.nav`
    @media (max-width: 1000px) {
        display: ${(props) => (props.active ? 'flex' : 'none')};
        position: absolute;
        z-index: 999;
        top: 90px;
        right: 16px;
        background-color: #4b626c;
        border-radius: 4px;
        padding: 12px 16px;
        border: 2px solid #2f444e;
        animation: ${animationMenu} 0.2s forwards;
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        display: block;
    }
`

export const MenuItemContainer = styled.li`
    position: relative;
    padding: 8px 0;
    margin-right: 12px;
    border-right: 2px solid #c6c9ca;

    &:last-child {
        border-right: none;
    }

    &:last-child a {
        margin-right: 0;
    }

    @media (max-width: 1000px) {
        border-right: none;
    }
`

export const MenuItemLink = styled.a`
    font-size: 20px;
    color: #4b626c;
    padding: 6px 4px;
    margin-right: 12px;

    transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        color: #000;
    }

    @media (max-width: 1000px) {
        color: #fbf6f0;

        &:hover {
            color: #fbf6f0;
        }
    }
`
export const ContainerInput = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
`
